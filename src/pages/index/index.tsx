import dayjs from "dayjs";
import React, { FC, useCallback, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { getChatList } from "../../api/chat";
import { getMessages } from "../../api/message";
import { ChatItemList } from "../../components/ChatItemList";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Message } from "../../components/Message";
import { NewMessage } from "../../components/NewMessage";
import { Sidebar } from "../../components/Sidebar";
import { SystemMessage } from "../../components/SystemMessage";
import { IPage } from "../../interface/page";
import styles from './index.module.scss';
import {IMessage} from "../../interface/messageApi";

export const PageIndex: FC<IPage> = () => {
    const [currentChatId, setCurrentChatId] = useState<string | null>(null);
    const chat = useQuery('chat', getChatList, {
        onSettled(data) {
            if (data?.[0]) {
                setCurrentChatId(data[0].id)
            }
        },
    });
    const messages = useQuery(['messages', currentChatId], async ({ queryKey }) => {
        const [, id] = queryKey;

        if (!id) {
            return;
        }

        return getMessages(id);
    }, {
        enabled: Boolean(currentChatId)
    });

    const handleChatSelect = useCallback((id: string) => {
        setCurrentChatId(id);
    }, []);

    const normalizedMessages: [string, IMessage[]][] = useMemo(() => {
        return Object.entries(messages.data?.reduce((acc, message) => {
            const date = dayjs(message.created_at * 1000).format('YYYY-MM-DD');
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(message);

            return acc;
        }, {} as Record<string, IMessage[]>) || {})
            .sort(([a], [b]) => a > b ? 1 : -1)
            .map(([date, messages]) => {

                return [
                    date,
                    messages.sort((a, b) => a > b ? 1 : -1)
                ]
            });

    }, [messages.data])

    const currentChat = useMemo(() => {
        return chat.data?.find(({ id }) => id === currentChatId)
    }, [chat.data, currentChatId])

    if (!currentChat) {
        return null;
    }
    console.log(normalizedMessages, messages)

    return (
        <div className={styles.page}>
            <Sidebar title="All Chats">
                {chat.data?.map((chat) => (
                    <ChatItemList
                        key={chat.id}
                        id={chat.id}
                        active={chat.id === currentChatId}
                        avatar={chat.avatar}
                        title={chat.title}
                        message={chat.last_message.message}
                        time={new Date(chat.last_message.created_at * 1000)}
                        onClick={handleChatSelect}
                    />
                ))}
            </Sidebar>
            <div className={styles.main}>
                <Header title={currentChat.title} />
                {normalizedMessages.map(([date, messages]) => {
                    let hasNewMessages = false

                    return (
                        <div key={date}>
                            <SystemMessage>
                                {new Date(date).toLocaleDateString()}
                            </SystemMessage>
                            {messages.map((message) => {
                                const showNewMsgNotif = message.is_new && !hasNewMessages;

                                if (showNewMsgNotif) {
                                    hasNewMessages = true;
                                }

                                return (
                                    <React.Fragment key={message.id}>
                                        {showNewMsgNotif && (
                                            <NewMessage />
                                        )}
                                        <Message
                                            my={message.user.you}
                                            main={!message.user.you}
                                            userName={message.user.name}
                                            avatar={message.user.avatar}
                                            message={message.message}
                                            time={new Date(message.created_at * 1000)}
                                        />
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    )
                })}
                <div className={styles.input}>
                    <Input />
                </div>
            </div>

        </div>
    )
}

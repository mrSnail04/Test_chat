import React from 'react';
import { Avatar } from '../Avatar';
import { Time } from '../Time';
import { IMessageProps } from './interface';
import styles from './message.module.scss';

export const Message = ({
    my,
    main,
    userName,
    avatar,
    message,
    time,
}: IMessageProps) => {

    return (
        <div className={styles.container} data-is-my={my}>
            {main && <Avatar src={avatar} />}
            <div className={styles.content}>
                <div className={styles.user}>{userName}</div>
                <div className={styles.message}>
                    <span>{message}</span>
                    <span className={styles.info}>
                        <Time my={my} time={time} />
                    </span>
                </div>
            </div>
        </div>
    )
}
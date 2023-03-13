import { useCallback } from "react";
import { getLocalTime } from "../../utils/time";
import { Avatar } from "../Avatar";
import styles from './chat-item-list.module.scss';
import { IChatItemListProps } from './interface';

export const ChatItemList = ({ id, active, avatar, title, message, time, onClick }: IChatItemListProps) => {
  const handleClick = useCallback(() => {
    onClick(id);
  }, [id, onClick]);

  return (
    <div
      data-is-active={active}
      className={styles.wrapper}
      onClick={handleClick}
    >
      <Avatar src={avatar} size="md" className={styles.avatar} />
      <div className={styles.column}>
        <div className={styles.header}>
          <span className={styles.title}>
            {title}
          </span>
          <span className={styles.time}>{getLocalTime(time)}</span>
        </div>
        <span className={styles.message}>
          {message}
        </span>
      </div>
    </div>
  );
};

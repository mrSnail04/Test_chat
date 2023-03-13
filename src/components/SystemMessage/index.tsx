import React from 'react';
import styles from './system-message.module.scss';

type SystemMessageProps = {
  children: React.ReactNode;
};

export const SystemMessage = ({ children }: SystemMessageProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {children}
      </div>
    </div>
  );
};
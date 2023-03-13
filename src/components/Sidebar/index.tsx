import React from 'react';
import styles from './sidebar.module.scss';

type SidebarProps = {
  title: string;
  children: React.ReactNode;
};

export const Sidebar = ({ title, children }: SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <h3 className={styles.title}>{title}</h3>
      <div>
        {children}
      </div>
    </div>
  );
};
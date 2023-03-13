import React from 'react';
import ChatIcon from './chat.svg';
import styles from './header.module.scss';
import { IHeaderProps } from './interface';

export const Header = ({ title }: IHeaderProps) => {
    return (
        <div className={styles.header}>
            <img src={ChatIcon} alt='icon' />
            <div>{title}</div>
        </div>
    )
}
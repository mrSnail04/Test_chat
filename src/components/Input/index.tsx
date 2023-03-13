import React from 'react';
import AttachIcon from './attach.svg';
import SendIcon from './send.svg';
import styles from './input.module.scss';

export const Input = () => {

    return (
        <div className={styles.container}>
            <div
                contentEditable
                className={styles.input}
                data-placeholder='Type message'
            />
            <div className={styles.btn_group}>
                <button className={styles.btn}><img src={AttachIcon} alt='attach' /></button>
                <button className={styles.btn}><img src={SendIcon} alt='send' /></button>
            </div>
        </div>
    )
}
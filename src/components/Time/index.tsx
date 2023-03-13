import React from 'react';
import { ITime } from './interface';
import CheckIcon from './check.svg';
import styles from './time.module.scss';

export const Time = (props: ITime) => {

    return (
        <div className={styles.time}>
            <div>
                {props.time.toLocaleTimeString('ru-RU', {
                    hour: 'numeric',
                    minute: 'numeric',
                })}
            </div>
            {props.my && <img src={CheckIcon} alt="icon" className={styles.icon} />}
        </div>
    )
}
import {FC} from "react";
import {IAvatar} from "./interface";
import "./avatar.scss";

export const Avatar: FC<IAvatar> = (props: IAvatar) => {
    const { src, size = 'sm', className } = props;

    const classes = `component-avatar component-avatar--${size} ${className}`;

    return (
        <div className={classes}>
            <img src={src} alt="user-avatar"/>
        </div>
    )
}
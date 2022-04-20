import React from "react";

export interface LinkProps {
    link: string,
    button: string
}
export const Link: React.FC<LinkProps> = (props) => {
        return (
            <a className={'product__button'} href={props.link}>
                {props.button}
            </a>
        );
}
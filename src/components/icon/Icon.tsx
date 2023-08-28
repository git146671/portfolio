import React from 'react';
import spriteContent from "../../assets/svg/sprite.svg";

type IconPropsType = {
    iconId: string;
    svgSize: string;
    svgViewBox: string;
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.svgSize} height={props.svgSize} viewBox={props.svgViewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${spriteContent}#${props.iconId}`}></use>
        </svg>
    );
};
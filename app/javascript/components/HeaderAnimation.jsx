import React from 'react';

export default function HeaderAnimation(props){
    return(
        <span className={"animate-container"}>
            <span className={'ele1-container'}>
                <span className={"animate-ele ele1"}></span>
            </span>
            <span className={'ele2-container'}>
                <span className={"animate-ele ele2"}></span>
            </span>
            <span className={'ele3-container'}>
                <span className={"animate-ele ele3"}></span>
            </span>
        </span>
    )
}
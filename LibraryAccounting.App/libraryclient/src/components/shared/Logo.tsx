import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export interface ILogoProps {
    title: string
}

export const Logo: FunctionComponent<ILogoProps> = (props) => {
    return (
        <div className='logo-wrapper'>
            <Link className='logo' to='/'>
                <span className='logo-accent'>{props.title}</span>
            </Link>
        </div>
    );
}
import React from 'react';
import { Logo } from './shared/Logo';

export class NavBar extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='container'>
                    <Logo title='МОЯ БИБЛИОТЕКА' />
                </div>
            </header>
        );
    }
}
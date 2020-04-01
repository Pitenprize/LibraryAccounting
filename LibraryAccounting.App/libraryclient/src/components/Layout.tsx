import React, { ReactNode, FunctionComponent } from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

export interface ILayoutProps {
    children: ReactNode;
}

export const Layout: FunctionComponent<ILayoutProps> = props => (
    <div className='column-layout' id='main-container'>
        <NavBar />
        <div className='container'>
            {props.children}
            <Footer />
        </div>
    </div>
)
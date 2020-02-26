import React, { ReactNode, FunctionComponent } from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

export interface LayoutProps {
    children: ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = props => (
    <div className='wrapper'>
        <NavBar />
        <div className='container'>
            {props.children}
            <Footer />
        </div>
    </div>
)
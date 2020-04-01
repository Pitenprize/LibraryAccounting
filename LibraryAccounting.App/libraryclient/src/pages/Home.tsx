import React from 'react';
import { SearchControl } from '../components/shared/SearchControl';
import { BookList } from '../components/BookList';
import { Book } from '../types/Book';
import Constants from '../utils/Constants';
import api from '../utils/Loader';

export interface IHomeState {
    books: Book[];
}

export class Home extends React.Component<{}, IHomeState> {
    constructor(props: Readonly<{}>) {
        super(props);

        this.state = {
            books: new Array<Book>()
        };
    }

    componentDidMount() {
        this.getBooks();
    }

    async getBooks() {
        const data = await api<Book[]>(Constants.bookListApiUrl);
        this.setState({
            books: data
        });
    }

    render() {
        return (
            <main role='main'>
                <h1 className='page-title'>Главная</h1>
                <div className='layout-card form-group'>
                    <SearchControl placeholder='Поиск...' />
                    <button className='accent-btn'>НАЙТИ</button>
                </div>
                <BookList books={this.state.books} />
            </main>
        );
    }
}
import React from 'react';
import { SearchControl } from '../components/shared/SearchControl';
import { BookList } from '../components/BookList';
import { MockLibrary } from '../utils/MockLibrary';
import { Book } from '../types/Book';

export interface HomeState {
    books: Book[];
}

export class Home extends React.Component<{}, HomeState> {
    constructor(props: Readonly<{}>) {
        super(props);

        this.state = {
            books: MockLibrary.getBooks()
        };
    }

    filterBooks(text: string) {
        const filteredBookList = MockLibrary.getBooks().filter(book => {
            return book.Name.toUpperCase().includes(text.toUpperCase());
        });

        this.setState({
            books: filteredBookList
        });
    }

    render() {
        return (
            <main role='main'>
                <h1 className='page-title'>Главная</h1>
                <div className='layout-card'>
                    <SearchControl placeholder='Поиск...' filter={this.filterBooks.bind(this)} />
                </div>
                <BookList books={this.state.books} />
            </main>
        );
    }
}
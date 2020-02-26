import React, { FunctionComponent } from 'react';
import { BookCard } from './BookCard';
import { Book } from '../types/Book';

export interface IBookListProps {
    books: Book[]
}

export const BookList: FunctionComponent<IBookListProps> = (props) => {
    const bookElements = props.books.map((item, index) => (
        <BookCard book={item} key={index} />)
    );

    return (
        <div className='book-list-container'>
            {bookElements}
        </div>
    );
}
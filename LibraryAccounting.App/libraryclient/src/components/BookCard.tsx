import React, { FunctionComponent } from 'react';
import { Book } from '../types/Book';

export interface IBookCardProps {
    book: Book
}

export const BookCard: FunctionComponent<IBookCardProps> = ({ book }) => (
    <div className='book-card'>
        <div className='book-card-header'>
            <h3 className='book-name'>{book.Name}</h3>
        </div>
        <div className='book-card-description'>
            <div className='description-group'>
                <p className='group-title'>Автор:</p>
                <p className='group-text'>{book.Author}</p>
            </div>
            <div className='description-group'>
                <p className='group-title'>Издатель:</p>
                <p className='group-text'>{book.Publisher}</p>
            </div>
            <div className='description-group'>
                <p className='group-title'>Год публикации:</p>
                <p className='group-text'>{book.PublicationYear}</p>
            </div>
        </div>
        <div className='book-card-bottom'>
            <button className='accent-btn'>ПОСМОТРЕТЬ</button>
        </div>
    </div>
)
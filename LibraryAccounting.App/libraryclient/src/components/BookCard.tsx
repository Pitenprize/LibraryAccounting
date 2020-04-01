import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../types/Book';

export interface IBookCardProps {
    book: Book
}

export const BookCard: FunctionComponent<IBookCardProps> = ({ book }) => (
    <div className='book-card'>
        <div className='book-card-header'>
            <h3 className='book-name'>{book.name}</h3>
        </div>
        <div className='book-card-description'>
            <div className='description-group'>
                <p className='group-title'>Автор:</p>
                <p className='group-text'>{book.author}</p>
            </div>
            <div className='description-group'>
                <p className='group-title'>Издатель:</p>
                <p className='group-text'>{book.publisher}</p>
            </div>
            <div className='description-group'>
                <p className='group-title'>Год публикации:</p>
                <p className='group-text'>{book.publicationYear}</p>
            </div>
        </div>
        <div className='book-card-bottom'>
            <Link to={`/details/${book.id}`} className='accent-btn'>ПОСМОТРЕТЬ</Link>
        </div>
    </div>
)
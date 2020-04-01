import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Book } from '../types/Book';
import Constants from '../utils/Constants';
import api from '../utils/Loader';

export interface IBookDetailsState {
    book: Book | null;
}

export default class BookDetails extends React.Component<RouteComponentProps<any>, IBookDetailsState> {
    constructor(props: RouteComponentProps) {
        super(props);

        this.state = {
            book: null
        }
    }

    componentDidMount() {
        this.getBook(this.props.match.params.bookId);
    }

    async getBook(bookId: number) {
        const data = await api<Book>(`${Constants.bookListApiUrl}\\${bookId}`);
        this.setState({
            book: data
        });
    }

    render() {
        return (
            <main role='main'>
                <h1 className='book-details-title'>{this.state.book?.name}</h1>
                <div className='description-card'>
                    <span className='title'>Автор</span>
                    <p className='description-text'>{this.state.book?.author}</p>
                </div>
                <div className='description-card'>
                    <span className='title'>Издатель</span>
                    <p className='description-text'>{this.state.book?.publisher}</p>
                </div>
                <div className='description-card'>
                    <span className='title'>Год издания</span>
                    <p className='description-text'>{this.state.book?.publicationYear}</p>
                </div>
                <div className='description-card'>
                    <span className='title'>Страниц</span>
                    <p className='description-text'>{this.state.book?.pageCount}</p>
                </div>
                <div className='description-card'>
                    <span className='title'>Количество</span>
                    <p className='description-text'>{this.state.book?.quantity}</p>
                </div>
            </main>
        );
    }
}
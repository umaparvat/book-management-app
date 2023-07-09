import React, { useContext } from 'react';
import BookForm from './BookForm';
import { useNavigate } from 'react-router-dom';
import BooksContext from '../context/BookContext';

const AddBook = () => {
    const {books, setBooks } = useContext(BooksContext);
    const history = useNavigate();

    const handleOnSubmit = (book) => {
        console.log(book);
        setBooks([book, ...books]);
        history('/');
    };

    return (
        <React.Fragment>
            <BookForm handleOnSubmit={handleOnSubmit}/>
        </React.Fragment>
    );
};

export default AddBook;
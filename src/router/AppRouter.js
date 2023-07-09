import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/userLocalStorage';
import EditBook from '../components/EditBook';
import BooksContext from '../context/BookContext';


const AppRouter = () => {
  const [ books, setBooks] = useLocalStorage('books', []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
            <BooksContext.Provider value={{books, setBooks}}>
              <Routes>
                  <Route exact path="/" element={<BooksList/>} />
                  <Route element={<AddBook/>} path="/add/*" />
                  <Route path='/edit/:id' element={<EditBook/>} />
                  <Route path="*" element={() => <Link to="/" />} />
              </Routes>
            </BooksContext.Provider>

            
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
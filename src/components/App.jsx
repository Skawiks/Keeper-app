import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './Header';
import Note from './Note';
import Footer from './Footer';

function App() {
    return(
        <div>
            <Header/>
            <Note/>
            <Footer/>
        </div>
    );
}

export default App;
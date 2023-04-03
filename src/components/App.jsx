import React, {useState} from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import Input from './Input';


function App() {

    const [noteList, setNoteList] = useState([]);

    function addNote(note) {
        setNoteList((prevValue) => {
            return [...prevValue, note]
        })
    }

 
    function deleteItem(id){
        setNoteList((prevNotes)=>{
            return prevNotes.filter((item,index)=>{
                return index !== id;
            })
        })
    }

    return(
        <div>
            <Header/>
            <Input onAdd={addNote} />
            {noteList.map((newNote, index)=>
                    <Note
                        key={index}
                        id={index}
                        title={newNote.title}
                        content={newNote.content}
                        toDelete={deleteItem}
                    />
                )}         
            <Footer/>
        </div>
    );
}

export default App;
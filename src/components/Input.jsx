import React,{useState} from "react";

function Input(props){

    const [note, setNote] = useState({
        title:"",
        content:""
    });

    function changeHandle(event){
        const {name, value} = event.target;
       setNote(name==="title"?{title:value, content:note.content}:{title:note.title, content:value})
       }

 return(
  <div>
    <form>
        <input onChange={changeHandle} name="title" placeholder="Title" value={note.title}></input>
        <textarea onChange={changeHandle} name="content" placeholder="Take a note..." value={note.content}></textarea>
        <button type="button" 
           onClick={()=>{
           props.onAdd(note);
        }}>Add</button>
    </form>
</div>);
}

export default Input;
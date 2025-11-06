import {useState} from 'react';
export default function Hello(){

    const [text, setText] = useState('');

    function showName(){
        console.log('Bob');
    }
    function showAge(){
        console.log(30);
    }
    function handleText(e){
        setText(e.target.value);
    }
    function showText(){
        console.log(text);
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show Name</button>
            <button onClick={showAge}>Show Age</button>
            <input type="text" value={text} onChange={handleText}/>
            <button onClick={showText}>Show Text</button>
        </div>
    );
}
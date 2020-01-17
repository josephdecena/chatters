import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  return <main>
  
  <header> 
  <script src='https://kit.fontawesome.com/a076d05399.js'></script>
  <img alt = "icon" className="logo"
    src="https://www.stickpng.com/assets/images/5852cd8058215f0354495f6b.png"
    />
    Chatter
  </header>

  <TextInput onSend = {t=> console.log(t)}/>
 </main>

}

function TextInput(props) {
  var [text, setText] = useState('')

  return <div className = "text-input">
  <input value ={text}
    placeholder="Message..."
    onChange = {e=> setText(e.target.value)}
  />

  <button onClick = {() => {
    props.onSend(text)
    setText('send')
  }} > 
  <i class = 'fas fa-angle-right'></i>
  </button>
  </div>
}
export default App;

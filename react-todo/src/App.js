import { useState } from 'react';
import './App.css';
import Anagrafica from './components/anagrafica';
import TodoApp from './todo-app';



// const TodoList = 
// console.log(TodoList);
function App() {
  const [nome,setNome] = useState('')
  const [cognome,setCognome] = useState('')

  function onAnagraficaCompletata(info){
    console.log("sono dentro App.js ",info)
    setNome(info.nome)
    setCognome(info.cognome)
    // nome = info.nome
    // cognome = info.cognome  
    // 
  }

 return (
   <main className='container'>
    <TodoApp></TodoApp>
   </main>
 )

  // return <TodoApp />
}

export default App;

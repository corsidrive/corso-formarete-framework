import {  useRef, useState } from "react";
import style from "./Todo.module.css";
export function Todos() {
    // const input = useRef('input')
    const TodoList = [

        {
            id:"a",
            label:"Comprare il latte",
            done:true,
            tags: ['urgente','casa']
        },
        {   
            id:"b",
            label:"Comprare Farina",
            done:false,
            tags: ['casa']
        },
        {
            id:"c",
            label:"Meeting su zoom",
            done:false,
            tags: ['lavoro','urgente']
        },
        // TEST PER FIX tag case insensitive
        {
            id:"d",
            label:"Test per maiuscole 1",
            done:false,
            tags: ['Urgente']
        },
        {
            id:"e",
            label:"Test per maiuscole 2",
            done:false,
            tags: ['URGENTE']
        },
        {
            id:"f",
            label:"Test per maiuscole 3",
            done:false,
            tags: ['urgEnTe']
        },
    ]
    const [todos,setTodos] = useState(TodoList);
    const [text,setText] =  useState("")
    // const [isChecked, setIsChecked] = useState(false);

    const input = useRef('input')
    const handleAggiungiClick = () =>{

        const newTodo = {
            id:(new Date()).valueOf().toString(),
            label:text,
            done:false,
            tags: ['urgente','casa']
        }
        setTodos([...todos,newTodo])
        setText("")
        input.current.focus()
    }

    const handleChangeText = (event) => {
        console.log(event.target.value)
        setText(event.target.value)
    }

    const handleChecked = (event) => {
        const todo = todos[event.target.value]
        todo.done  = !todo.done
        setTodos([...todos])   
    }

    const handleDelete = (todo) => {
        return (event) => {
            console.log(event,todo)
            setTodos(todos.filter(_todo => _todo.id !== todo.id))
        }
    }

    return (
        <div className="App">
            <main className="container">
                <div className="input-group my-3">
                    <input type="text" 
                        ref={input}
                        className="form-control"
                        value={text}
                        autoFocus
                        onChange={handleChangeText}
                        placeholder="Aggiungi una cosa da fare"
                        aria-label="Aggiungi una cosa da fare"
                        aria-describedby="bottone-aggiungi" />

                    <button onClick={handleAggiungiClick} 
                            className="btn btn-primary" type="button" 
                            id="bott-aggiungi">aggiungi</button>
                </div>
                <ul className="list-group" >
                    {
                        todos.map((todo,index) => (

                            <li key={todo.id}
                                className={(todo.done ? style.done : '')+' list-group-item todo d-flex justify-content-between align-items-start'} >
                                <input  className="form-check-input me-2" 
                                        onChange={handleChecked}
                                        type="checkbox" 
                                        checked = {todo.done}
                                        id={'item-'+todo.id} 
                                        value={index}
                                       />
                                <label className="form-check-label w-100" 
                                       htmlFor={'item-'+todo.id}>
                                    {todo.label}
                                </label>
                                {
                                    todo.tags.map(t=>(<span key={t} className="badge bg-primary rounded-pill me-2">{t.toLocaleLowerCase()}</span>))
                                }
                                <button onClick={handleDelete(todo)}>delete</button>
                            </li>
                        
                        ))
                    }

                </ul>
            </main>
        </div>
    )
}
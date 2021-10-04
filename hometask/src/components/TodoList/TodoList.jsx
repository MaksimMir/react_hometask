import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "../Dialog/Dialog";
import Spinner from '../Spinner/Spinner';
import { getTask, deleteOneTask, createNewTask, closeErrorWindow } from "./todolist.action";
import './TodoList.scss';

const TodoList = () => {
    const [ text, setText ] = useState('');
    const todo = useSelector(state => state.todo.list);
    const isFetch = useSelector(state => state.todo.isFetch);
    const error = useSelector(state => state.todo)
    const dispatch = useDispatch();

    const createTask = evt => {
        evt.preventDefault();
        const newTask = {
            text,
            createdAt: new Date()
        }

        setText('');
        dispatch(createNewTask(newTask)); 
    }

    const deleteElement = id => {
        dispatch(deleteOneTask(id))
    }

    localStorage.clear();

    useEffect(() => {  
        dispatch(getTask()); 
        dispatch(closeErrorWindow());
    }, [])

    if (error.isShowErr) {
        return <Dialog text={error.errorMessage} />
    }

    if (isFetch) {
        return <Spinner />
    }

    return (
        <div className="todo">
            <form className="todo__form">
                <input value={text} onChange={evt => setText(evt.target.value)} type="text" className="todo__form-input" />
                <button onClick={evt => createTask(evt)} className="todo__form-btn">Add Task</button>
            </form>
            <ul className="todo__list">
                {todo?.map(item => {
                    return (
                        <li key={item?.id} className="todo__list-item">
                            {item?.text}
                            <button onClick={() => deleteElement(item?.id)} className="todo__list-btn">&#128473;</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList;
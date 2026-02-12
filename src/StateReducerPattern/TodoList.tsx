import React, { useReducer } from 'react';
import reducer from './todoReducer';

const TodoList: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, { todos: [] });

    const addTodo = (text: string) => {
        dispatch({ type: 'ADD_TODO', paylead: text });
    };

    const toggleTodo = (id: number) => {
        dispatch({ type: 'TOGGLE_TODO', paylead: id });
    };

    const removeTodo = (id: number) => {
        dispatch({ type: 'REMOVE_TODO', payload: id })
    };

    return (
        <div style={{
            marginTop: '2rem',
            maxWidth: '500px',
            width: '100%',
            padding: '1rem',
            boxShadow: '0 7px 20px rgba(0, 0, 0, .3)'
        }}>
            <h2 style={{
                textDecoration: 'underline',
                fontWeight: 300
            }}>Todo List</h2>

            <input
                type="text"
                placeholder="Add todo by pressing 'Enter' after typing"
                style={{
                    width: '50%',
                    padding: '.4rem .7rem',
                    outline: 'none'
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
                        addTodo(e.currentTarget.value.trim());
                        e.currentTarget.value = '';
                    }
                }}
            />

            <ul>
                {state.todos.length === 0 && (<p>You have no todos at this time...</p>)}

                {state.todos.map(todo => (
                    <li key={todo.id} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '1rem',
                    }}>
                        <span
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                            onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => removeTodo(todo.id)}
                            style={{
                                backgroundColor: '#E34234',
                                border: 'none',
                                outline: 'none',
                                color: '#f3f3f3',
                                padding: '.6rem .8rem',
                                cursor: 'pointer'
                            }}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
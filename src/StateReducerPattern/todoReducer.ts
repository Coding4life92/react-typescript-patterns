// Definition of the action type of the reducer
type Action =
    | { type: 'ADD_TODO'; paylead: string }
    | { type: 'TOGGLE_TODO'; paylead: number }
    | { type: 'REMOVE_TODO'; payload: number };

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface State {
    todos: Todo[];
}

// Reucing function to handle actions and update state
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length + 1,
                        text: action.paylead,
                        completed: false
                    }
                ]
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.paylead ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        default:
            return state;
    }
};

export default reducer;
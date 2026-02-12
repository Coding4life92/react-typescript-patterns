import Table, { type Column } from "./PropsGettersPattern/Table";
import Joke from "./CustomHookPattern/Example";
import TodoList from "./StateReducerPattern/TodoList";

const App: React.FC = () => {
    const columns: Column[] = [
        { id: 'name', label: 'Name', sortable: true },
        { id: 'age', label: 'Age', sortable: true },
        { id: 'country', label: 'Country', sortable: false },
    ];

    const data = [
        { name: 'John', age: 30, country: 'USA' },
        { name: 'Alice', age: 25, country: 'Canada' },
        { name: 'Bob', age: 35, country: 'UK' },
    ];

    return (
        <>
            <Joke />
            <Table columns={columns} data={data} />
            <TodoList />
        </>
    );
};

export default App;
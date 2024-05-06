import { useState } from 'react';

function Todolist() {
    const [tasks, setTasks] = useState(["pray", "take a shower", "clean", "breakfast", "class"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="max-w-md mx-auto p-4">
            <div className="text-2xl font-bold mb-4">MY SCHEDULE</div>
            <div className="flex mb-4">
                <input
                    type="text"
                    className="border border-gray-300 rounded px-4 py-2 w-full mr-2"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={addTask}
                >
                    Add
                </button>
            </div>
            <ol className="list-decimal">
                {tasks.map((task, index) => (
                    <li key={index} className="mb-2">
                        <span className="mr-2">{task}</span>
                        {/* <button
                            className="text-red-500 hover:text-red-700 mr-2"
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button> */}
                         <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4"
                    // onClick={addTask}
                    onClick={() => deleteTask(index)}
                >
                    Add
                </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                            onClick={() => moveTaskUp(index)}
                        >
                            Up
                        </button>
                        <button
                            className="bg-green-500 hover:bg-green-700  text-white font-bold py-2 px-4 rounded mr-4"
                            onClick={() => moveTaskDown(index)}
                        >
                            Down
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Todolist;

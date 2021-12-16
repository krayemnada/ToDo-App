import React from "react";
import "./App.css";
class App extends React.Component {
    state = {
        value: "",
        data: [
            { Task: "React", id: 1, complete: false },
            { Task: "React props", id: 2, complete: false },
            { Task: "React state", id: 3, complete: false },
        ],
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = (event) => {
        if (this.state.value !== "") {
            this.setState({
                data: [
                    ...this.state.data,
                    {
                        Task: this.state.value,
                        id: Math.random() * Math.pow(10, 17),
                        complete: false,
                    },
                ],
            });
            this.setState({ value: "" });
        }
        event.preventDefault();
    };
    handleDelete = (id) => {
        this.setState({
            data: this.state.data.filter((el) => el.id !== id),
        });
    };
    handleDone = (id) => {
        this.setState({
            data: this.state.data.map((task) =>
                task.id === id ? { ...task, complete: !task.complete } : task
            ),
        });
    };

    render() {
        return (
            <div className="List">
                <h1 style={{color : "pink"}}>ToDo List</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Add Task :</label>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />

                    <input type="submit" value="Add" />
                </form>
                {this.state.data.map((task) => (
                    <div key={task.id} className="task">
                        <h4 className={task.complete ? "done" : "notDone"}>
                            {task.Task}
                        </h4>

                        <button
                            className={
                                task.complete ? "btn-done" : "btn-notDone"
                            }
                            onClick={this.handleDone.bind(this, task.id)}
                        >
                            {!task.complete ? "Done" : "Not Done"}
                        </button>
                        <button
                            class="btn-delete"
                            onClick={this.handleDelete.bind(this, task.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;
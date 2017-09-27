import React, { Component } from 'react';
import './App.css';

import NewTaskForm from './components/NewTaskForm';
import AllTasks from './components/AllTasks';

class App extends Component {
	constructor() {
		super();

		this.state = {
			newTask: '',
			tasks: []
		};
	}

	handleNewTaskChange(e) {
		let newTask = e.target.value;

		this.setState({ newTask });
	}

	addTask(e) {
		let tasks = this.state.tasks;

		tasks.push({ id: Date.now(), text: this.state.newTask, completed: false });

		this.setState({ tasks, newTask: '' });
	}

	onComplete(taskId) {
		let tasks = this.state.tasks;

		for (let i = 0; i < tasks.length; i++) {
			if (taskId === tasks[i].id)
				tasks[i].completed = !tasks[i].completed;
		}

		this.setState({ tasks });
	}

	deleteAll() {
		this.setState({ tasks: [] });
	}

	deleteCompleted() {
		let tasks = this.state.tasks,
			toRemove = [];
		
		for (let i = 0; i < tasks.length; i++) {
			if (tasks[i].completed)
				toRemove.push(i);
		}

		while(toRemove.length)
			tasks.splice(toRemove.pop(), 1);

		this.setState({ tasks });
	}

	render() {
		let { tasks, newTask } = this.state;
		
		return (
			<div className="container">
				<h1>React Tasks App</h1>

				<NewTaskForm
					onCreateNew={this.addTask.bind(this)}
					newTask={newTask}
					onChange={this.handleNewTaskChange.bind(this)}
				/>

				<AllTasks onComplete={this.onComplete.bind(this)} tasks={tasks} />

				<button className="deleteCompleted" onClick={this.deleteCompleted.bind(this)}>Delete Completed</button>
				<button className="deleteAll" onClick={this.deleteAll.bind(this)}>Delete All</button>
			</div>
		);
	}
}

export default App;

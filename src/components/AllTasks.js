import React, { Component } from 'react';

import SingleTask from './SingleTask';

export default class AllTasks extends Component {
    render() {
		let tasksList = this.props.tasks.map((task) => {
			return (
                <SingleTask onComplete={this.props.onComplete} key={task.id} task={task} />
			)
        });
        
        return (
            <ul>
                {tasksList}
            </ul>
        )
    }
}

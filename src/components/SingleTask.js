import React, { Component } from 'react';

export default class SingleTask extends Component {
    onComplete(taskId) {
        this.props.onComplete(taskId);
    }

    render() {
        let { task } = this.props,
            liStyles = { textDecoration: 'none' };

        if (task.completed) {
            liStyles.textDecoration = 'line-through';
        }

        return (
            <li onClick={this.onComplete.bind(this, task.id)} key={task.id} style={liStyles}>{task.text}</li>
        )
    }
}

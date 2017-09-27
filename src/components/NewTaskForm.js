import React, { Component } from 'react';

export default class NewTaskForm extends Component {
    constructor() {
        super();

        this.state = {
            valid: true
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (this.props.newTask === '') {
            this.setState({ valid: false });

            return;
        }

        this.setState({ valid: true });

        this.props.onCreateNew();

        this.refs.input.focus();
    }

    render() {
        let errorNotification = null;
        let inputStyles = { outline: 'none', border: '1px solid black' };

        if ( !this.state.valid ) {
            errorNotification = (<div style={{ color: 'red' }}>Fill in the field first, fool!</div>);

            inputStyles.border = '1px solid red';
        }

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
               { errorNotification }

                <input ref="input" style={inputStyles} value={this.props.newTask} onChange={this.props.onChange} /> <button>Add</button>
            </form>
        )
    }
}

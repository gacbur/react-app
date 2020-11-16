import React, { Component } from 'react'
import './AddTask.css'

class AddTask extends Component {
    state = {
        text: '',
        error: false
    }

    handleTaskInput = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleAddTask = () => {
        const text = this.state.text
        if (text !== '') {
            const AddNew = this.props.AddNew(text)
            if (AddNew) {
                this.setState({
                    text: '',
                    error: false
                })
            }
        } else {
            this.setState({
                error: true
            })
        }
    }

    render() {
        return (
            <div className="addtask-cnt">
                <div className="addtask-el">
                    <input placeholder={this.state.error ? 'You need to write something first!' : ''} value={this.state.text} onChange={this.handleTaskInput} type="text"></input>
                    <button onClick={this.handleAddTask}>Add</button>
                </div>
            </div>
        );
    }
}

export default AddTask;
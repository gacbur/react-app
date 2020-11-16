import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask'
import TaskList from './TaskList'


class App extends Component {

  counter = 0;

  state = {
    tasks: [

    ]
  }

  handleDeleteItem = (id) => {
    let tasks = [...this.state.tasks]
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks: tasks
    })
  }

  AddNew = (text) => {
    const task = {
      id: this.counter,
      text: text
    }
    this.counter++

    this.setState({
      tasks: [task, ...this.state.tasks]
    })

    return true;

  }

  render() {

    const { tasks } = this.state

    return (
      <div className="todoapp-cnt">
        <h4>Todo List</h4>
        <AddTask AddNew={this.AddNew} />
        <br />
        <TaskList tasks={tasks} delete={this.handleDeleteItem} />
        <br />
      </div>
    );
  }
}

export default App;

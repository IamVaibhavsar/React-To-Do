import React from "react";
import logo from "./LCO-logo-white.png";
import "./App.css";

class App extends React.Component {
  //constructor is created first as class is envoked to hold the default things like states.
  constructor(props) {
    //props are used to export elements from other components
    super(props);
    this.state = {
      newItem: "", //any new todo appears here first then fetched into list item that holds al todos
      list: [] //loop over to display all todos
    };
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(), //to have a unique value
        value: todoValue,
        isDone: false
      }; //need to copy this object into list
      const list = [...this.state.list];
      //list holds all the values(...) and append it
      list.push(newItem);

      //to update the state as we cant touch the state directly
      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    //updatedlist will have all the items except the one which has to be deleted.
    this.setState({ list: updatedlist });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }

  //call render method in class based component
  render() {
    return (
      <div>
        <img src={logo} width="100" height="100" className="logo" />
        <h1 className="app-title">TODO APP</h1>
        <div className="container">
          Add your Todo here...
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Write a TODO"
            required
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length} //to make the disabled false
          >
            Add Todo
          </button>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="idDone"
                      chekcked={item.isDone}
                      onChange={() => {}}
                    />
                    {item.value}
                    <button
                      className="btn"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </li> //looping through unique value
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

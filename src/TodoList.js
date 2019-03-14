import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import "./style.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["english", "react"]
    };
  }
  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }
  handleButtonClick() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }));
  }
  handlerDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    });
  }
  render() {
    return (
      <Fragment>
        <label htmlFor="insertArea">输入内容</label>
        <input
          id="insertArea"
          className="input"
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleButtonClick.bind(this)}>add</button>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <div key={index}>
                <TodoItem
                  content={item}
                  index={index}
                  deleteItem={this.handlerDelete.bind(this)}
                />
              </div>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}
export default TodoList;

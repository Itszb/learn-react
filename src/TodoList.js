import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import "./style.css";




// 什么是生命周期函数
// 在某一个时刻组件会自动调用执行的函数


// 对于一个组件来说    他的父组件的render函数执行了  他的render函数就会执行


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["english", "react"]
    };
  }
  //组件更新之前 会执行
  shouldComponentUpdate(){
    return true;
  }
  componentWillUpdate(){

  }
  handleInputChange(e) {
   //使用ref
    const value = this.input.value;
    this.setState(() => ({
      inputValue: value
    }));
  }
  handleButtonClick() {
    //setState是一个异步函数
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }),()=>{

    });
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
          ref={(input)=>{this.input=input}}
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

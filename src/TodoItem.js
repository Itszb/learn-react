import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handlerDelete = this.handlerDelete.bind(this);
  }
  render() { 
    return <div onClick={this.handlerDelete}>{this.props.content}</div>;
  }
  handlerDelete() {
    this.props.deleteItem(this.props.index);
  }
}
export default TodoItem;

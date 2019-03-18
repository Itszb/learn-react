import React, { Component } from "react";

import PropTypes from 'prop-types';
//当一个组件的props和state发生改变的时候 他自己的render函数就会重新执行
//就会用新的数据去渲染页面 所以你的数据就会被渲染出来了

// /虚拟dom

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handlerDelete = this.handlerDelete.bind(this);
  }
  //是否要更新呢?
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content!==this.props.content){
      return true
    }else{
      return false;
    }
   
  }
  render() { 
    return <div onClick={this.handlerDelete}>{this.props.content}</div>;
  }
  handlerDelete() {
    this.props.deleteItem(this.props.index);
  }
}
// 类型做一个校验
TodoItem.propTypes={
  content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
  handlerDelete:PropTypes.func,
  index:PropTypes.number
}
TodoItem.defaultProps={
  content:'hello world'
}
export default TodoItem;

import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import {
    connect
} from 'react-redux';
import { addItemAction, changeInputValueAction } from '../store/acttion-creators';
import "./add-todo.css";

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '1'
        }
       this.props.store.subscribe(this.handleStareChange)
    }

    componentDidMount(){
        let { inputValue } = this.props.store.getState();
        this.setState({
            inputValue
        })
    }

    handleStareChange = () => {
        let { inputValue } = this.props.store.getState();
        this.setState({
            inputValue
        })
    }

    onSubmit = () => {
        let value = this.state.inputValue.trim();
        if (!value) {
            return
        } 
        let id = Math.floor(Math.random() * 1000);
        this.props.store.dispatch(addItemAction(id, value));
    }

    handleChangeInput = (e) => {
        let inputValue = e.target.value.trim();
        this.props.store.dispatch(changeInputValueAction(inputValue));
    }

    render(){
        return (
            <Form className="todo-form">
                <Input className="todo-input" value={this.state.inputValue} onChange={this.handleChangeInput}/>
                <Button className="add-btn" onClick={this.onSubmit}>添加</Button>
            </Form>
        )
    }
};

export default connect()(AddTodo)

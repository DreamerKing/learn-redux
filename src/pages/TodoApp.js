import React, { Component } from 'react';
import Footer from '../components/Footer';
import AddTodo from '../containers/AddTodo';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { deleteItemAction, editItemAction, changeItemEditeAction, blurItemAction } from  "../store/acttion-creators";
import { DELETE_ITEM, EDIT_ITEM, CHANGE_ITEM_EDIT } from '../store/action-types';
// import VisibleTodoList from '../containers/VisibleTodoList';


class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        this.handleTodosChange() 
       this.props.store.subscribe(this.handleTodosChange);
    }

    handleTodoItemClick = (id, type) => {
        if(type === DELETE_ITEM ){
            this.props.store.dispatch(deleteItemAction(id))
        } else if (type === CHANGE_ITEM_EDIT) {
            this.props.store.dispatch(changeItemEditeAction(id))
        }
        console.log(id, type);   
    }

    handleTodosChange = () => {
        let { todoList: todos = [] } = this.props.store.getState();
        this.setState({
            todos
        });
    }

    handleTodoItemEdit = (id, value) => {
        this.props.store.dispatch(editItemAction(id, value))
        console.log(id, value);
    }

    handleBlurItem = (id) => {
        this.props.store.dispatch(blurItemAction(id)) 
    }

    render(){
        return (
            <div>
                <AddTodo {...this.props} />
                <TodoList todos={this.state.todos} onTodoClick={this.handleTodoItemClick} onTodoEdit={this.handleTodoItemEdit} onBlurItem={this.handleBlurItem} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        ...state,
        ...ownProps
    }
}

export default connect(mapStateToProps)(TodoApp)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testAction } from '../store/acttion-creators';

import TestHook from '../components/TestHook';

class TestApp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log("test: ", this.props);
        
        return (
            <div onClick= {() => this.props.testClick("Hello Test")}>
                Test
                <TestHook />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        list: state.todoList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps);

    return {
        testClick: (test) => {
            dispatch(testAction(test))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestApp)
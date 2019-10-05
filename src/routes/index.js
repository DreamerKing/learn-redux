import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from "react-router";
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Test from './test'

import AddOrMinu from '../AddOrMinu';
import TodoApp from '../pages/TodoApp';
import TestApp from '../pages/TestApp';
import store from '../store';


class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                {/* <TestApp /> */}
                <Router>
                    <Switch>
                        <Route  path="/test" component={Test}/> 
                        {/* <Route path="/" extract render={(props) => <TestApp {...props} store={store} />}  ></Route>    */}
                        {/* <Route path="/counter" exact component={AddOrMinu} /> */}
                        <Route path="/todo" render={(props) => <TodoApp {...props} store={store} />} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default Root

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React, { Component }   from 'react';
import { Provider } from 'react-redux';

import AddOrMinu from '../AddOrMinu';
import App from '../components/App';

export default  class  Root extends Component {
        render() {
            return (
                  <Provider store={this.props.store}>
                      <Router>
                          <Switch>
                              < Route path = "/counter"
                              exact component = { AddOrMinu } />
                              <Route path="/todo" component = { App} />
                          </Switch>
                      </Router>
                  </Provider>  
            )
        }
}

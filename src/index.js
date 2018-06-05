import React from 'react';
import ReactDOM from 'react-dom';
import Root from './routes';
import {
    AppContainer
} from "react-hot-loader";

import {
    createStore
} from 'redux';

import todoApp from './reducers';

const store = createStore(todoApp);

ReactDOM.render(
    <AppContainer>
        < Root store = {
            store
        }
        />
    </AppContainer>, document.getElementById("root"));


if (module.hot) {
    module.hot.accept("./routes", () => {
        let NewRoot = require("./routes").default;
        ReactDOM.render( <AppContainer >
                < Root store = {
                    store
                }
                />
            </AppContainer>,
           document.getElementById("root")
        );
    });
}

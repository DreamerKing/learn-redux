import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import counter from './counter';

const  todoApp = combineReducers({
    todos,
    counter,
    visibilityFilter
});

export default todoApp;
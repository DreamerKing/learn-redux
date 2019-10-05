import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, CHANGE_INPUT_VALUE, CHANGE_ITEM_EDIT, BLUR_ITEM, TEST } from './action-types';


const defaultState= {
    inputValue: '2',
    todoList: [{
        id: 1, completed: false, text: "KKKK"
    }]
} 

export default (state = defaultState, action) => {
    console.log("action:", action);
    
    if (ADD_ITEM === action.type){
        const newState = JSON.parse(JSON.stringify(state));
        newState.todoList.push({id: action.id, completed: false, text: action.inputValue});
        newState.inputValue = '';
        return newState;
    } else if (CHANGE_INPUT_VALUE === action.type){
        return Object.assign(state, { inputValue: action.inputValue })
    } else if (DELETE_ITEM === action.type) {
        const newState = JSON.parse(JSON.stringify(state));
        let item = newState.todoList.find((item) => item.id === action.id);
        let index = newState.todoList.indexOf(item);
        if(index > -1){
            newState.todoList.splice(index, 1);
        }
       return newState;
         
    } else if (CHANGE_ITEM_EDIT === action.type){
        const newState = JSON.parse(JSON.stringify(state));
        let item = newState.todoList.find((item) => item.id === action.id);
        let index = newState.todoList.indexOf(item);
        if (index > -1) {
            newState.todoList[index].editable = true;
        }
        return newState; 
    } else if (EDIT_ITEM === action.type) {
        const newState = JSON.parse(JSON.stringify(state));
        let item = newState.todoList.find((item) => item.id === action.id);
        let index = newState.todoList.indexOf(item);
        if (index > -1) {
            newState.todoList[index].text = action.value;
        }
        return newState;
    } else if (BLUR_ITEM === action.type){
        const newState = JSON.parse(JSON.stringify(state));
        let item = newState.todoList.find((item) => item.id === action.id);
        let index = newState.todoList.indexOf(item);
        if (index > -1) {
            newState.todoList[index].editable = false;
        }
        return newState; 
    } else if(TEST === action.type){
        return Object.assign({}, state, { test: action.test})
    }
    return state;
}
import { ADD_ITEM, DELETE_ITEM, CHANGE_INPUT_VALUE, EDIT_ITEM, CHANGE_ITEM_EDIT, BLUR_ITEM, TEST } from './action-types';

export function addItemAction(id, inputValue) {
    return {
        type: ADD_ITEM,
        inputValue,
        id
    }
}


export function deleteItemAction(id) {
    return {
        type: DELETE_ITEM,
        id
    }
}

export function changeInputValueAction(inputValue){
    return {
        type: CHANGE_INPUT_VALUE,
        inputValue
    }
}

export function changeItemEditeAction(id){
    return {
        type: CHANGE_ITEM_EDIT,
        id
    }
}

export function editItemAction(id, value){
    return {
        type: EDIT_ITEM,
        value,
        id
    }
}

export function blurItemAction(id){
    return {
        type: BLUR_ITEM,
        id
    }
}

export function testAction(test){
    return {
        type: TEST,
        test
    }
}
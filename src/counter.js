import { createStore } from 'redux';

function counter(state = 0, action) {
	switch(action.type) {
		case 'INCREAMENT':
			return state + 1;
		case 'DECREAMENT':
			return state -1;
		default:
			return state;		
	}
}

let store  = createStore(counter);

store.subscribe(() => 
	console.log(store.getState())
);

store.dispatch({ type: 'INCREAMENT' });

store.dispatch({ type: 'INCREAMENT' });

store.dispatch({ type: 'DECREAMENT' });

/*expect(
	counter(0, { type: 'INCREAMENT'})
).toEqual(1);

expect(
	counter(1, { type: 'INCREAMENT'})
).toEqual(2);

console.log("Pass!");*/
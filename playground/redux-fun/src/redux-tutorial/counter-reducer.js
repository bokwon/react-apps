// Counter Reducer
// To describe state mutations, you have to write a function that takes the previous state of the app, the action being dispatched,
// and returns the next state of the app. This function has to be pure.
// This function is called the “Reducer”
import expect from 'expect';
import { createStore } from 'redux';

//ES5
// function counter(state, action) {
//   // if state is undefined, should return the initial state.
//   if (typeof state === 'undefined') {
//     return 0;
//   }
//
//   if (action.type === 'INCREMENT') {
//     return state + 1;
//   } else if (action.type === 'DECREMENT') {
//     return state - 1;
//   } else {
//     return state;
//   }
// }

//ES6 and refactor
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT' :
      return state + 1;
    case 'DECREMENT' :
      return state - 1;
    default:
      return state;
  }
}

// This store binds together the three principles of Redux
// 1) It holds the current application's state object : store.getState();
// 2) It lets you dispatch actions to change the state of your application. : store.dispatch({type: "INCREMENT"});
// 3) When you create it, you need to specify the reducer that tells how state is updated with actions. : const store = createStore(counter);
// 4) store.subscribe(): It lets you register a callback that the Redux store will call any time an action has been dispatched, so that you can re-render the UI of your application. It will reflect the current application state.
// 5) store methods: getState(), dispatch(), and subscribe()
const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', function(){
  store.dispatch({ type: 'INCREMENT' });
});

// counter reducer test cases.
expect(counter(0, { type: 'INCREMENT' })).toEqual(1);
expect(counter(1, { type: 'INCREMENT' })).toEqual(2);
expect(counter(2, { type: 'DECREMENT' })).toEqual(1);
expect(counter(1, { type: 'DECREMENT' })).toEqual(0);
// edge case
expect(counter(1, { type: 'SOMETHING_ELSE' })).toEqual(1);
// initial state
expect(counter(undefined, {})).toEqual(0);

console.log('Counter tests are passed!');

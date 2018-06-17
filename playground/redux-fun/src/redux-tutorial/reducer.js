// reducer is a pure function that takes the previous state and an action, and return the next state.
// (previousState, action) => newState
// You should never do inside a reducer
// Mutate its arguments
// Perform side effects like API calls and routing transitions
// Call non-pure functinos, e.g. Date.now() or Math.random()
// Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutatinos. Just a calculation.

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'

import { combineReducers } from 'redux'

// ES6 Object Destructuring
const { SHOW_ALL } = VisibilityFilters

// return the initial state of our app:
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

// ES5
// function todoApp(state, action) {
//   if (typeof state === 'undefined') {
//     return initialState
//   }
//
//   return state
// }

// reducer composition, and the fundamental pattern of building Redux apps.
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
// ES6 default arguments syntax
// Object.assign() is a part of ES6. To support them, either use a polyfill, a Babel plugin, or a helper from another library like _.assign()
const todoApp = (state = initialState, action) => {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

import { createStore } from 'redux';
import { act } from 'react-dom/test-utils';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((todos) => todos.id !== parseInt(action.id));
    default:
      return state;
  }
};

const store = createStore(reducer);

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const dispatchAddTodo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteTodo = (event) => {
  const id = parseInt(event.target.parentNode.id);
  store.dispatch(deleteTodo(id));
};

const paintToDos = () => {
  const toDOs = store.getState();

  ul.innerHTML = '';
  toDOs.forEach((todo) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    btn.innerText = 'DEL';
    btn.addEventListener('click', dispatchDeleteTodo);
    li.id = todo.id;
    li.innerText = todo.text;
    ul.appendChild(li);
    li.appendChild(btn);
  });
};

store.subscribe(() => console.log(store.getState()));
store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  dispatchAddTodo(toDo);
};

form.addEventListener('submit', onSubmit);

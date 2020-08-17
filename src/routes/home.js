import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add } from '../store';
import ToDo from '../components/toDo';

function Home({ toDos, addToDo }) {
  const [text, setText] = useState('');

  function onChange(event) {
    setText(event.target.value);
  }

  function onSubmmit(event) {
    event.preventDefault();
    addToDo(text);
    setText('');
  }

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmmit}>
        <input type="text" value={text} onChange={onChange} />
        <button type="submit">sumbit</button>
      </form>
      <ul>
        {toDos.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return { addToDo: (text) => dispatch(add(text)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { useState } from 'react';

function Home() {
  const [text, setText] = useState('');

  function onChange(event) {
    setText(event.target.value);
  }

  function onSubmmit(event) {
    event.preventDefault();
    setText('');
  }

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmmit}>
        <input type="text" value={text} onChange={onChange} />
        <button type="submit">sumbit</button>
      </form>
      <ul></ul>
    </div>
  );
}

export default Home;

import { useState, useEffect } from 'react';
import getTodos from './methods/getTodos';
import './App.css';
import Input from './components/Input';
import List from './components/List';
import saveTask from './methods/saveTask';

function App() {
  const [list, setList] = useState([]);

  const updateList = (task) => {
    saveTask(task);
    setList((list)=> [...list, task])
  }

  useEffect(() => {
    setList(getTodos());
  }, [])

  return (
    <div className="App">
      <Input add={updateList}/>
      <List list={list}/>
    </div>
  );
}

export default App;

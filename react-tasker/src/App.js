import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
// Anything here is the global state.

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'I love food',
    },
    {
        id: 2,
        text: 'I love to eat',
    },
    {
        id: 3,
        text: 'I live to fight and die another day'
    },
]);
  return (
    <div className="container">
      <Header title='title'/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;

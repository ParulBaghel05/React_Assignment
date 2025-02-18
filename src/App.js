import React from 'react';
// import './App.css';
// import Counter from './components/functionalComp/counterComp';
// import Controller from './components/functionalComp/counterComp2';
import Parent from './components/classComp/parent';
// import TodoList from './components/functionalComp/TodoList';

// import ToggleView from './components/functionalComp/LoginLogout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Controller />
        <Parent />
        <TodoList />
        <ToggleView />
      </header>
    </div>
  );
}

export default App;

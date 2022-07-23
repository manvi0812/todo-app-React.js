import React from 'react';
import TodoApp from './components/todoApp';
import Main from './Grocery-bud/Main';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<TodoApp />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

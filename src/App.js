import { createContext } from 'react';
import './App.css';
import CompA from './components/CompA';
import TodoList from './components/TodoList';

export const AppName = createContext();
function App() {
 
  return (
    <div className="App">
      <AppName.Provider value={{ name: 'TodoList', type:'App'}}>
        <CompA/>
      </AppName.Provider>
      <TodoList />
  
    </div>
  );
}

export default App;


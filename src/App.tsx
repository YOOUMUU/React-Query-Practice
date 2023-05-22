import { useReducer } from 'react';
import './App.css';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import TasksContext from './state-management/contexts/tasksContext';
import tasksReducer from './state-management/reducers/tasksReducer';
import authReducer from './state-management/reducers/authReducer';
import AuthContext from './state-management/contexts/authContext';

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, authDispath] = useReducer(authReducer, '');

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispath }}>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

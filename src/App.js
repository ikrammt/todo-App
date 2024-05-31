import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddTask from './components/AddTask';
import SingleTask from './components/SingleTask';

const listOfTasks = [
  { id: 0, text: 'Apply for US Visa', done: false, date: new Date() },
  { id: 1, text: 'Eat Healthy', done: false, date: new Date() },
  { id: 2, text: 'Go to the gym', done: false, date: new Date() },
];

function App() {

  return (
    <div className="App">
       <h1>Todo List</h1>
      <List listOfTasks={listOfTasks} /> 
    </div>
  );
}

export default App;

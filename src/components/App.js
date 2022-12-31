import logo from './logo.svg';
import '../styles/App.css';
import Goals from '../pages/goals';
import Login from '../pages/login';


function App() {
  return (
    <div className="App">
      <Login />
      <Goals />
    </div>
  );
}

export default App;

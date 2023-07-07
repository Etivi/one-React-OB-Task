import logo from './logo.svg';
import './App.css';
import ContactListComponet from './Components/container/contact_list';
// import Greeting from './Components/Pure/greeting';
// import GreetingF from './Components/Pure/greetingF';
// import TaskListComponent from './Components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Componente propop Greeting.jsx */}
        {/* <Greeting name="Martin" /> */}
        {/* <GreetingF name={"Martin"} /> */}
        {/* <TaskListComponent/> */}
        <ContactListComponet/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

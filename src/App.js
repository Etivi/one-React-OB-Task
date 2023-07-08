import logo from './logo.svg';
import './App.css';
// import ContactListComponet from './Components/container/contact_list';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
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
        {/* <ContactListComponet/> */}
        {/* Ejemplos de uso de Hooks */}
        {/* <Ejemplo1/> */}
        {/* <Ejemplo2/> */}
        {/* <MiComponenteConContexto/> */}
        <Ejemplo4 nombre ='Martin'>
        {/* Todo lo que hay aquí. es tratado como props.children  */}
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4>

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

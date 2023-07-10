import './App.css';
import RegisterFormik from './Components/Pure/forms/registerFormik';
// import LoginFormik from './Components/Pure/forms/loginFormik';
// import OptionalRender from './Components/Pure/optionalRender';
// import Father from './Components/container/father';
// import GreetingStyled from './Components/Pure/greetingStyled';
// import ContactListComponet from './Components/container/contact_list';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo4 from './hooks/Ejemplo4';
// import Greeting from './Components/Pure/greeting';
// import GreetingF from './Components/Pure/greetingF';
import TaskListComponent from './Components/container/task_list';
// import ContactListComponet from './Components/container/contact_list';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        
        {/* Componente propop Greeting.jsx */}
        {/* <Greeting name="Martin" /> */}
        {/* <GreetingF name={"Martin"} /> */}
        {/* <ContactListComponet/> */}
        {/* Ejemplos de uso de Hooks */}
        {/* <Ejemplo1/> */}
        {/* <Ejemplo2/> */}
        {/* <MiComponenteConContexto/> */}
        {/* <Ejemplo4 nombre ='Martin'> */}
        {/* Todo lo que hay aquí. es tratado como props.children  */}
          {/* <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name='Martin'/> */}

      {/* </header> */}
      {/* Gestión de enventos */}
      {/* <Father/> */}
      {/* Ejemplos de Renderizado condicional */}
      {/* <OptionalRender/> */}

      {/* Ejemplo de uso de Fomrik y Yup */}
      {/* <LoginFormik/> */}
      <RegisterFormik/>

      <TaskListComponent/>
      {/* <ContactListComponet/> */}


    </div>
  );
}

export default App;

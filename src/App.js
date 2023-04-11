import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/**COMPONENTE PROPIO GREETING:JSX <Greeting name="Andrés"></Greeting> */}
        {/*<GreetingF name="ANDRES"></GreetingF>*/}
        {/*LISTADO DE TAREAS*/}
        {/*<TaskListComponent></TaskListComponent>*/}
        {/*LISTADO DE CONTACTOS*/}
        <ContactListComponent></ContactListComponent>
      </header>
    </div>
  );
}

export default App;

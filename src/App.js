// Components
import Navbar from './Components/Navbar';

// Pages
import Todos from './Pages/Todos';

// CSS
import './Supports/Stylesheets/Todos.css'

function App() {
  return (
    <div>
      <Navbar />
      <Todos />
    </div>
  );
}

export default App;

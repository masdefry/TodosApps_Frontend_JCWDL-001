// Components
import Navbar from './Components/Navbar';

// Pages
import Todos from './Pages/Todos';

// CSS
import './Supports/Stylesheets/Todos.css'
import './Supports/Stylesheets/Utilities.css'

function App() {
  return (
    <div>
      <Navbar />
      <Todos />
    </div>
  );
}

export default App;

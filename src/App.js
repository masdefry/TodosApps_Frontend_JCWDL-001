// Components
import Navbar from './Components/Navbar';

// Pages
import Todos from './Pages/Todos';
import Register from './Pages/Register';

// CSS
import './Supports/Stylesheets/Todos.css'
import './Supports/Stylesheets/Utilities.css'

import { Routes, Route } from 'react-router-dom'

// Redux
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducer from './Redux/Reducers/Index';

const store = createStore(allReducer, applyMiddleware(thunk))

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

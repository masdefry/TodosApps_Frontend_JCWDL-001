// Components
import Navbar from './Components/Navbar';

// Pages
import Todos from './Pages/Todos';
import Register from './Pages/Register';
import Confirmation from './Pages/Confirmation';
import ConfirmationCode from './Pages/ConfirmationCode';
import Login from './Pages/Login';

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
          <Route path="/login" element={<Login />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/confirmation/:id" element={<Confirmation />} />
          <Route path="/confirmationcode/:id" element={<ConfirmationCode />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

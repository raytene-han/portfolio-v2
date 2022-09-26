import { BrowserRouter } from 'react-router-dom';

import Navigation from './components/Navigation';
import RoutesList from './components/RoutesList';
import About from './components/About'

import './App.css';

/** App component.
 *
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;

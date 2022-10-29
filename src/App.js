import { BrowserRouter } from 'react-router-dom';
import {useState, useEffect} from "react";

import Navigation from './components/Navigation';
import RoutesList from './components/RoutesList';

import './App.css';

/** App component.
 *
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('effect ran')
    setIsLoading(false);
  },[]);

  if (isLoading) return <p>Loading...</p>

  return (
    <div className="App">
      <div className="test-box"></div>
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;

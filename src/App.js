import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Store } from './context/context';
import Header from './pages/Header';
import Landing from './pages/Landing';
import Alert from './pages/Alert';
import './App.css';

const App = () => {
  return (
    <Store>
      <Router>
        <Header />
        <Route exact path="/" component={Landing} />
        <Alert />
      </Router>
    </Store>
  )
}

export default App;
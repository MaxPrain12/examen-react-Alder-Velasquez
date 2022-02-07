import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import { MenuItems } from './Data/MenuItems';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar />
      {MenuItems.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
  );
}

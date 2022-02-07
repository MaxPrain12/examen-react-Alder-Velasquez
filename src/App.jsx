import React from 'react';
import './style.css';
import Navbar2 from './components/Navbar2';
import { MenuItems } from './Data/MenuItems';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar2 />
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

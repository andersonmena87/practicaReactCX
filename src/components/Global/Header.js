// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    //Forma corta de setear variables
    const { title, items } = this.props;

    /*Forma larga 
    const title = this.props.title;
    const itmes = this.props.items;*/
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
          <h2>{title}</h2>
          <ul className="Menu">
            {items && items.map((item, key) => {
              return <li key={key}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;

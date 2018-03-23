import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import './header.css';

class Header extends Component {

  static defaultProps = {
    city:'北京'
  }

  render() {

    return (
      <div className="header">
        <header className="header-inner">
        	<Link to="/cityList" className="city">{this.props.city?this.props.city:'北京'}</Link>
        	<div className="search">输入商户名、地点</div>
        	<div className="person_center"></div>
        </header>
        <div className="header-fill"></div>
      </div>
    );
  }
}

export default Header;

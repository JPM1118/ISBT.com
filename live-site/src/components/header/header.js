import React, { Component } from 'react';
import { Link } from 'gatsby';
import headerStyles from './header.module.scss'
import logo from './logo.svg';
import downArrow from './downArrow.png';
import upArrow from './upArrow.png';

const initialState = { arrowUp: true }

class Header extends Component {

  state = initialState


  handleClick = () => {
    this.setState({
      arrowUp: !this.state.arrowUp,
    })
  }

  resetState = (e) => {
    this.setState(initialState)
  }

  componentDidMount() {
    window.addEventListener('resize', this.resetState)
  }
  componentWillUnmount() {
    window.addEventListener('resize', this.resetState)

  }

  render() {
    const ListLink = this.props.ListLink;
    let arrow = this.state.arrowUp ? upArrow : downArrow
    let display = window.innerWidth <= 700 && this.state.arrowUp ? { display: 'none' } : { display: 'inline-block' }
    return (
      <header >
        <div className={headerStyles.header}>
          <div className={headerStyles.gridContainer}>
            <Link to='/' className={headerStyles.imgContainer}>
              <img src={logo} alt="logo" />
            </Link>
            <div className={headerStyles.navToggle} onClick={this.handleClick} >
              <img src={arrow} alt="navigation toggle" />
            </div>
          </div>

          <ul className={headerStyles.linkGroup} style={display} >
            <ListLink to='/'>Home</ListLink>
            <ListLink to='/about/'>About</ListLink>
            <ListLink to='/represented-lines/'>Represented Lines</ListLink>
            <ListLink to='/contact/'>Contact</ListLink>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header;
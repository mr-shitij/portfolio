import React from 'react'
import '../App.css'
import {Navbar,Nav} from 'react-bootstrap';
import Constants from '../constants';

function Header({tab, setTab}) {
 const onClickOnNavTab = (tab) =>{
    setTab(tab)
  }
  const navItemStyle = {
    'color': 'black'
  }
  const selectedItemStyle = {
    color: 'var(--raw-seinna)',
    'borderBottom': 'solid 1px var(--raw-seinna)'

  }

  return (
    <Navbar
    className="mb-3 justify-content-center">
      <Nav  variant='tab' defaultActiveKey={Constants.HOME}>
        <Nav.Item className='navItem'>
          <Nav.Link className='navLink' eventKey={Constants.HOME}  onClick={()=>{
              onClickOnNavTab(Constants.HOME);
          }} style={tab === Constants.HOME ? selectedItemStyle : navItemStyle}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navLink' style={
            tab === Constants.SKILLS ?
             selectedItemStyle
             : navItemStyle
            }  eventKey={Constants.SKILLS} onClick={()=>{
              onClickOnNavTab(Constants.SKILLS);
          }}>Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item> 
          <Nav.Link className='navLink' eventKey={Constants.CAREER} onClick={()=>{
              onClickOnNavTab(Constants.CAREER);
          }} style={tab === Constants.CAREER ? selectedItemStyle : navItemStyle}>Career</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navLink' eventKey={Constants.PROJECTS} onClick={()=>{
              onClickOnNavTab(Constants.PROJECTS);
          }} style={tab === Constants.PROJECTS ? selectedItemStyle : navItemStyle}>Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navLink' eventKey={Constants.CONTACT} onClick={()=>{
              onClickOnNavTab(Constants.CONTACT);
          }} style={tab === Constants.CONTACT ? selectedItemStyle : navItemStyle}>Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}

export default Header
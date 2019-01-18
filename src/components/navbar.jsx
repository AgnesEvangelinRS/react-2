import React, { Component } from 'react';
//stateless functional component
//we cannot use lifecycle hooks in stateless functional components
const NavBar =() =>{
    let navigation ={
        'background-color': '#7fffd4',
        'padding': '20px',
        'text-align': 'center'
      };
   // console.log('navbar rendered');
    return (  
        <div className="navigation" style ={navigation} ><h1>COUNTER</h1> <span></span></div>
     );
}

export default NavBar;
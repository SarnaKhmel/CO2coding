import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class Header extends React.Component
{
  render()
  {
    return (
        <header className="headerApp" style={{display: 'flex', flexDirection:'row'}}>
            <nav class="" style={{display: 'flex', flexDirection:'row'}} >
                <ul class="navbar-nav">
                <li class="nav-item ">
                    <a class="nav-link" href="./">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./distribution">Distribution</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./summary">Summary</a>
                </li>
                {/* <li class="nav-item">
                    <a class="nav-link" href="#">My things about that</a>
                </li> */}
                </ul>
            </nav>
       </header>
      
    )
  }
}
export default Header;
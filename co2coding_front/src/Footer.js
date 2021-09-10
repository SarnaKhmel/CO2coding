import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class Footer extends React.Component
{
  render()
  {
    return (
       <footer className="footerApp">
            <nav class="navbar navbar-expand-sm" >
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="./">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./distribution">Distribution</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./summary">Summary</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">My things about that</a>
                </li>
                </ul>
            </nav>
            <nav class="navbar navbar-expand-sm" >
                <ul class="navbar-nav">
                <li class="nav-item active">
                    by OlSa for DataArt Programmer Day
                </li>
                <li class="nav-item">
                   <image src="http://"></image>
                </li>
                <li class="nav-item">
                    <a href="https://github.com/SarnaKhmel/CO2coding">Github Project</a>
                </li>
                </ul>
            </nav>

       </footer>
    )
  }
}
export default Footer;
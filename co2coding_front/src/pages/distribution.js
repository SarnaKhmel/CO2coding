import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header'; //Include Heder
import Footer from '../Footer'; //Include Footer

class Distribution extends React.Component {
  
    render() {
      return (
       <div className="maincontainer">
        <Header></Header>
        <h1 className="mr-5 mt-5">Distribution</h1>
         <div className="container mb-5 mt-5">
          <h1 className="mr-5 mt-5">This is main container!!</h1>
        </div>
          <Footer></Footer>
      </div>
     )
    };
  }
  export default Distribution;
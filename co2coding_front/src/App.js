import React from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'; //Include Heder
import Footer from './Footer'; //Include Footer
 
class App extends React.Component {
  
  render() {
    return (
     <div className="maincontainer">
      <Header></Header>
      <h1 className="mr-5 mt-5">hi </h1>
       <div className="container mb-5 mt-5">
        <h1 className="mr-5 mt-5">Home page</h1>
      </div>
        <Footer></Footer>
    </div>
   )
  };
}
export default App;
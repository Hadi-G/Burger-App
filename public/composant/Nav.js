var Router = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;

var React = require('react');

class Nav extends React.Component {
  render() {
     return (
       <nav className="bar bar-tab">
         <Link className="tab-item active" to="/">
           <span className="icon icon-home"></span>
           <span className="tab-label">Home</span>
         </Link>
         <Link className="tab-item" to="/shop">
           <span className="icon icon-person"></span>
           <span className="tab-label">Burgers</span>
         </Link>
       </nav>
     )
   };
}

module.exports = Nav;

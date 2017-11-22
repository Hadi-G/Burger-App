var Router = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;
var Switch = require('react-router-dom').Switch;

var React = require('react');
var ReactDOM = require('react-dom');

var Nav = require('./Nav');
var App = require('./App');

class Home extends React.Component {

  constructor() {
    super();
}
  render() {

    return (
<div>
<img src="https://i2.wp.com/images.ithink.fr/2014/10/Application-mobile-Burger-King.png?resize=250%2C250"></img>
<Nav />
</div>
      );
  }
}

ReactDOM.render(
<Router>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/shop" component={App} />
    <Route component={Home} />
  </Switch>
</Router>
  ,
  document.getElementById('container')
);

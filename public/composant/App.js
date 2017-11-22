var Router = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;

var React = require('react');
var Title = require('./Title');
var BurgerList = require('./BurgerList');
var Nav = require('./Nav');

class App extends React.Component {

  constructor() {
    super();
    this.test = this.test.bind(this);
    this.state = {qte : 0};
  }

test() {
  this.setState({qte : this.state.qte + 1});
  console.log(this.state.qte);
}

  render() {

    return (
<div>
      <Title qte={this.state.qte}/>
      <BurgerList title={"Hadi Burger Shop"} burgers={burgers} testclick={this.test}/>
      <Nav />
</div>
      );
  }
}

var burgers = [
  {image: 'https://lacapsule.academy/wks2/burger_1.png', price: '11€', name: 'Le New-yorker', desc:'Burger de boeuf limousin, cheddar, oignons rings, roquette, tomate, cornichon, sauce paprika'},
  {image: 'https://lacapsule.academy/wks2/burger_2.png', price: '12€', name: 'Le Amberger', desc:'Burger de boeuf limousin, oignons confits, salade, tomate, fourme d’Ambert et noix'},
  {image: 'https://lacapsule.academy/wks2/burger_3.png', price: '11€', name: 'Le Poulet', desc:'Burger de poulet, cheddar, avocat, tomate, oignons, sauce au citron vert'}
];


module.exports = App;

var React = require('react');

var Item1 = require('./Item1');

class BurgerList extends React.Component {

  constructor() {
    super();
  }

  render() {

  var burgersList = [];
  for(var i = 0; i<this.props.burgers.length; i++){
    burgersList.push(<Item1 burgers={this.props.burgers[i]}  testclick={this.props.testclick}/>);
  }

    return (

    <div className="content">
      <h6>{this.props.title}</h6>
        <ul className="table-view">
          {burgersList}
        </ul>
      </div>
    );

  }

}

module.exports = BurgerList;

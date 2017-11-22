var React = require('react');


class Title extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (

      <header className="bar bar-nav">
      <h1 className="title"><i className="fa fa-shopping-cart fa-2x"></i>
      <span className="badge">{this.props.qte}</span></h1>
      </header>

    );

  }

}


module.exports = Title;

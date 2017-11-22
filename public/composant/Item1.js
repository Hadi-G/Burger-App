var React = require('react');


class Item1 extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state={quantity:0};
  }

  handleClick() {

    this.setState({quantity: this.state.quantity + 1});
    this.props.testclick();
  }

  render() {

    return (
      <li onClick={this.handleClick} className="table-view-cell media">
        <span className="badge">{this.state.quantity}</span>
          <img className="media-object pull-left"
      src={this.props.burgers.image}></img>
            <div className="media-body">
              {this.props.burgers.name} {this.props.burgers.price}
    <p>{this.props.burgers.desc}</p>
    </div>
    </li>
    );
  }
}

module.exports = Item1;

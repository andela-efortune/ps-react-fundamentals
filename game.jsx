const StarFrame = React.createClass({
  render() {
    let numOfStars = Math.floor(Math.random() * 9) + 1;

    let stars = [];
    for (let i = 0; i < numOfStars; i++) {
      stars.push(
        <span className="glyphicon glyphicon-star"></span>
      );
    }

    return (
      <div id="star-frame">
        <div className="well">
          { stars }
        </div>
      </div>
    );
  }
});

const ButtonFrame = React.createClass({
  render() {
    return (
      <div id="btn-frame">
        <button className="btn btn-success btn-lg"> = </button>
      </div>
    );
  }
});

const AnswerFrame = React.createClass({
  render() {
    let props = this.props;
    let selectedNumbers = this.props.selectedNumbers.map((num) => {
      return (
        <span>{num}</span>
      );
    });

    return (
      <div id="answer-frame">
        <div className="well">
          { selectedNumbers }
        </div>
      </div>
    );
  }
});

const NumbersFrame = React.createClass({
  render() {
    let numbers = [], className, selectedNumbers = this.props.selectedNumbers;

    for (let i = 1; i <= 9; i++) {
      className = "number selected-" + (selectedNumbers.indexOf(i) >= 0);
      numbers.push(
        <div className={className}>{i}</div>
      );
    }
    return (
      <div className="well">
        <div id="numbers-frame">
          {numbers}
        </div>
      </div>
    )
  }
})

const Game = React.createClass({
  getInitialState() {
    return { selectedNumbers: [4, 3] };
  },

  render() {
    return (
      <div id="game">
        <h2>Play Nine</h2>
        <hr/>
        <div className="clearfix">
          <StarFrame />
          <ButtonFrame />
          <AnswerFrame selectedNumbers={this.state.selectedNumbers}/>
        </div>

        <NumbersFrame selectedNumbers={this.state.selectedNumbers}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Game />,
  document.getElementById('container')
);

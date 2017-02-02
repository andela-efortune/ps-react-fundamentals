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
    return (
      <div id="answer-frame">
        <div className="well">
          ......
        </div>
      </div>
    );
  }
});

const NumbersFrame = React.createClass({
  render() {
    let numbers = [];

    for (let i = 1; i <= 9; i++) {
      numbers.push(
        <div className="number">{i}</div>
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
  render() {
    return (
      <div id="game">
        <h2>Play Nine</h2>
        <hr/>
        <div className="clearfix">
          <StarFrame />
          <ButtonFrame />
          <AnswerFrame />
        </div>

        <NumbersFrame />
      </div>
    );
  }
});

ReactDOM.render(
  <Game />,
  document.getElementById('container')
);

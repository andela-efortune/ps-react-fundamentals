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
        <button className="btn btn-primary btn-lg"> = </button>
      </div>
    );
  }
});

AnswerFrame = React.createClass({
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
      </div>
    );
  }
});

ReactDOM.render(
  <Game />,
  document.getElementById('container')
);

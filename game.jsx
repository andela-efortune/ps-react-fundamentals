const StarFrame = React.createClass({
  render() {
    return (
      <div id="star-frame">
        <div className="well">
        <span className="glyphicon glyphicon-star"></span>
        <span className="glyphicon glyphicon-star"></span>
        <span className="glyphicon glyphicon-star"></span>
        <span className="glyphicon glyphicon-star"></span>
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

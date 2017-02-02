const StarFrame = React.createClass({
  render() {
    let stars = [];
    for (let i = 0; i < this.props.numOfStars; i++) {
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
    // let props = this.props;
    let selectedNumbers = this.props.selectedNumbers.map((num) => {
      return (
        <span onClick={this.props.unselectNumber.bind(null, num)}>{num}</span>
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
    let numbers = [], className,
        selectNumber = this.props.selectNumber,
        selectedNumbers = this.props.selectedNumbers;

    for (let i = 1; i <= 9; i++) {
      className = "number selected-" + (selectedNumbers.indexOf(i) >= 0);
      numbers.push(
        <div className={className} onClick={selectNumber.bind(null, i)}>{i}</div>
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
    return {
            numOfStars: Math.floor(Math.random() * 9) + 1,
            selectedNumbers: []
           };
  },

  selectNumber(clickedNumber) {
    // Only select a number once.
    if (this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
      this.setState(
        { selectedNumbers: this.state.selectedNumbers.concat(clickedNumber) }
      );
    }
  },

  unselectNumber(clickedNumber) {
    // Get selectedNumbers state and indexOf of number to unselect
    let selectedNumbers = this.state.selectedNumbers,
        indexOfNum = selectedNumbers.indexOf(clickedNumber);

    // Remove clickedNumber from selectedNumbers
    selectedNumbers.splice(indexOfNum, 1);

    // Update state of selectedNumbers
    this.setState({ selectedNumbers: selectedNumbers });
  },

  render() {
    return (
      <div id="game">
        <h2>Play Nine</h2>
        <hr/>
        <div className="clearfix">
          <StarFrame numOfStars={this.state.numOfStars}/>
          <ButtonFrame />
          <AnswerFrame selectedNumbers={this.state.selectedNumbers}
                       unselectNumber={this.unselectNumber}/>
        </div>

        <NumbersFrame selectedNumbers={this.state.selectedNumbers}
                      selectNumber={this.selectNumber} />
      </div>
    );
  }
});

ReactDOM.render(
  <Game />,
  document.getElementById('container')
);

const possibleCombinationSum = (arr, n) => {
  if (arr.indexOf(n) >= 0) { return true; }
  if (arr[0] > n) { return false; }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  let listSize = arr.length, combinationsCount = (1 << listSize)
  for (let i = 1; i < combinationsCount ; i++ ) {
    let combinationSum = 0;
    for (let j=0 ; j < listSize ; j++) {
      if (i & (1 << j)) { combinationSum += arr[j]; }
    }
    if (n === combinationSum) { return true; }
  }
  return false;
};

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
    let disabled, button, correct = this.props.correct;

    switch (correct) {
      case true:
        button = (
          <button className="btn btn-success btn-lg" onClick={ this.props.acceptAnswer }>
            <span className="glyphicon glyphicon-ok"></span>
          </button>
        )
        break;
      case false:
        button = (
          <button className="btn btn-danger btn-lg">
            <span className="glyphicon glyphicon-remove"></span>
          </button>
        )
        break;
      default:
        disabled = (this.props.selectedNumbers.length === 0);
        button = (
          <button className="btn btn-default btn-lg" onClick={this.props.checkAnswer} disabled={disabled}> = </button>
        )

    }

    return (
      <div id="btn-frame">
        { button }
        <br/> <br/>
        <button className="btn btn-warning btn-xs" onClick={ this.props.redraw } disabled={this.props.redraws === 0}>
          <span className="glyphicon glyphicon-refresh"></span> &nbsp; { this.props.redraws }
        </button>
      </div>
    );
  }
});

const AnswerFrame = React.createClass({
  render() {
    // Update selectedNumbers as they change
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
        usedNumbers = this.props.usedNumbers,
        selectedNumbers = this.props.selectedNumbers;

    for (let i = 1; i <= 9; i++) {
      className = "number selected-" + (selectedNumbers.indexOf(i) >= 0);
      className = "number used-" + (usedNumbers.indexOf(i) >= 0);
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

const DoneFrame = React.createClass({
  render() {
    return (
      <div className="well text-center">
        <h2>{this.props.doneStatus}</h2>
      </div>
    );
  }
});

const Game = React.createClass({
  getInitialState() {
    return {
            numOfStars: this.randomNum(),
            selectedNumbers: [],
            correct: null,
            redraws: 5,
            usedNumbers: [],
            doneStatus: null
           };
  },

  randomNum() {
    return Math.floor(Math.random() * 9) + 1;
  },

  selectNumber(clickedNumber) {
    // Only select a number once.
    if (this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
      this.setState(
        {
          selectedNumbers: this.state.selectedNumbers.concat(clickedNumber),
          correct: null
        }
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
    this.setState(
      {
        selectedNumbers: selectedNumbers,
        correct: null
      }
    );
  },

  sumOfSelectedNums() {
    return this.state.selectedNumbers.reduce((p, n) => {
      return p + n;
    }, 0);
  },

  checkAnswer() {
    let correct = (this.state.numOfStars === this.sumOfSelectedNums());
    this.setState({ correct: correct });
  },

  acceptAnswer() {
    let usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);

    this.setState({
      selectedNumbers: [],
      usedNumbers: usedNumbers,
      correct: null,
      numOfStars: this.randomNum(),
    }, () => this.updateDoneStatus());
  },

  redraw() {
    if (this.state.redraws > 0) {
      this.setState({
        numOfStars: this.randomNum(),
        correct: null,
        selectedNumbers: [],
        redraws: this.state.redraws - 1
      }, () => this.updateDoneStatus());
    }
  },

  possibleSolutions() {
    let numOfStars = this.state.numOfStars,
        possibleNums = [],
        usedNumbers = this.state.usedNumbers;

    for (let i = 1; i <= 9; i++) {
      if (usedNumbers.indexOf(i) < 0) {
        possibleNums.push(i);
      }
    }
    return possibleCombinationSum(possibleNums, numOfStars);
  },

  updateDoneStatus() {
    if (this.state.usedNumbers.length === 9) {
      this.setState({
        doneStatus: 'Yeah! You won!'
      });
      return;
    }

    if (this.state.redraws === 0 && !this.possibleSolutions()) {
      this.setState({
        doneStatus: 'You Lost. Game Over!'
      })
    }
  },

  render() {
    let selectedNumbers = this.state.selectedNumbers,
        numOfStars = this.state.numOfStars,
        correct = this.state.correct,
        usedNumbers = this.state.usedNumbers,
        redraws = this.state.redraws,
        doneStatus = this.state.doneStatus,
        bottomFrame;

    if (doneStatus) {
      bottomFrame = <DoneFrame doneStatus={doneStatus} />;
    } else {
      bottomFrame = <NumbersFrame selectedNumbers={selectedNumbers}
                    selectNumber={this.selectNumber}
                    usedNumbers={usedNumbers} />;
    }
    return (
      <div id="game">
        <h2>Play Nine</h2>
        <hr/>
        <div className="clearfix">
          <StarFrame numOfStars={numOfStars}/>
          <ButtonFrame selectedNumbers={selectedNumbers}
                       correct={ correct }
                       checkAnswer={ this.checkAnswer }
                       acceptAnswer={ this.acceptAnswer }
                       redraw={ this.redraw }
                       redraws={ redraws } />
          <AnswerFrame selectedNumbers={selectedNumbers}
                       unselectNumber={this.unselectNumber} />
        </div>

        { bottomFrame }
      </div>
    );
  }
});

ReactDOM.render(
  <Game />,
  document.getElementById('container')
);

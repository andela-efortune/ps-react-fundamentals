
  /**
   * Cards React Class
   * gets users github gravatar and name
   * displays it to the user in Cards
   */
  const Cards = React.createClass({
    // Initial state of the component
    getInitialState() {
      return {};
    },

    /**
     * the lifecycle hook
     * makes an ajax request to get
     * data
     */
    componentDidMount() {
      // let component = this;
      $.get("https://api.github.com/users/" + this.props.login, (data) => {
        this.setState(data);
        // component.setState(data);
      })
    },

    /**
     * Renders the gravatar and the
     * name of the Github User.
     */
    render() {
      return (
        <div>
          <img src={this.state.avatar_url} alt="Github gravatar" width="80px"/>
          <h3>{ this.state.name }</h3>
          <hr/>
        </div>
      );
    }
  });

  /**
   * Colloects userInput and passes it to
   * addCard method that triggers the addCard
   * method of the Main component.
   */
  const Form = React.createClass({
    handleSubmit(e) {
      e.preventDefault();
      const userInput = this.refs.username;
      this.props.addCard(userInput.value);
      userInput.value = '';
    },

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Enter Github username" ref="username"/>
          <button>Add</button>
        </form>
      );
    }
  })

  // Main component
  const Main = React.createClass({
    getInitialState() {
      return { logins: [] }
    },

    addCard(userInput) {
      this.setState({logins: this.state.logins.concat(userInput)});
    },

    render() {
      const cards = this.state.logins.map((login) => {
        return <Cards login={login} />
      })
      return (
          <div>
            <Form addCard={this.addCard} />
            { cards }
          </div>
      );
    }
  });

  ReactDOM.render(<Main />, document.getElementById('container'));

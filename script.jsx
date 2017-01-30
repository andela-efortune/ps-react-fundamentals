/** @jsx React.Dom */
var Hello = react.createClass({
  render: function () {
    return <div>
              <h1>Hello at {this.props.now}</h1>
           </div>;
  }
});

React.renderComponent(<Hello now={new Date().toString()} />, document.getElementById('container'));

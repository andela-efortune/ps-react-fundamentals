// // // This file should have the extension .jsx so that plunker compiles all the JSX
// // // The index.html file will include this file as script.js (not .jsx) however
// //
// // // Define a component:
// // var Main = React.createClass({
// //   render: function() {
// //     return (
// //       <div>
// //         <h1>React.js: Getting Started</h1>
// //         <p style={{fontSize: '2em'}}>
// //           Checkout the new <a target="_blank" href="http://jscomplete.com/interactive-learning-demo/">jsComplete Interactive Lab</a>
// //         </p>
// //       </div>
// //     );
// //   }
// // });
// //
// // // Render a component to the browser:
// // ReactDOM.render(
// //   <Main />, // What to render (an instance of the Main component)
// //   document.getElementById('container') // Where to render it
// // );
// //
// // // If nothing appears in the browser, check the dev-tools console for errors.
// //
// // // ******************************************************
// // // *  Checkout the new jsComplete Interactive Lab!!     *
// // // *  http://jscomplete.com/interactive-learning-demo/  *
// // // ******************************************************
// //
//
// /** @jsx React.Dom */
//   var Hello = React.createClass({
//     render: function () {
//       return <div>
//                 <h1>Hello at {this.props.now}</h1>
//              </div>;
//     }
//   });
//
//   ReactDOM.render(<Hello now={new Date().toString()} />, document.getElementById('container'));

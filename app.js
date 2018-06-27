
// react way of createing the compenent
// var App = () => (
//   <div>Some cliche salutation</div>
// );
//
// var GroceryList = () => (
//   <div>
//   <h2> My Todo List </h2>
//     <ul id = "items">
//       <li> first item </li>
//       <li> second item </li>
//     </ul>
//   </div>
// );
//
// var Cucumbers = () => (
//   <li> Get Cucumbers </li>
// );
//
// var Kale = () => (
//   <li> Get Kale </li>
// );

var groceryList = ['Cucumbers', 'steak', 'rice'];

var GroceryListItem = (props) => (
  <ul>
    <li>{props.todos[0]}</li>
    <li>{props.todos[1]}</li>
    <li>{props.todos[2]}</li>
  </ul>
);

var App = () => (
  <div>
    <h2>My GroceryList</h2>
    <GroceryListItem todos={groceryList}/>
  </div>
);


ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(<Cucumbers />, document.getElementById('items'));
// ReactDOM.render(<Kale />, document.getElementById('items'));

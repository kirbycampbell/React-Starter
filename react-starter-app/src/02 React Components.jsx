// 1). Create a component folder in src folder and add a something.jsx file

// 2). Use the imrc and cc shortcuts to set up the file

// 3). Give it a <h1>Hello World</h1> inside of Render

// 4). Add import Something from './components/counter'; in INDEX.JS

// 5). In the index.js ReactDOM.render() add <Something /> in the render statement

// 6). In the Counter component - add a button next to the <h1></h1>.
//      Wrap all of it in a <React.Fragment></React.Fragment>

// 7). Adding a state to a component Example::

class Counter extends Component {
  state = {
    count: 0,
    address: {
      street: ""
    }
  };
  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button>Increment</button>
      </div>
    );
  }
}
// This would connect to its own state through this.state.count

////////////////////////////////////////////////////////////////////////

// 8).  If a component had a state with tags: ['tag1', 'tag2', 'tag3']  render with:
// and it needs a key::::
<ul>
  {this.state.tags.map(tag => (
    <li key={tag}>{tag}</li>
  ))}
</ul>;

////////////////////////////////////////////////////////////////////////

// 9). To add interactions ::
<button onClick={this.handleIncrement}>Click Me</button>
// Above the render method put:
handleIncrement(){
    console.log('Increment Clicked');
} // BUT HANDLEINCREMENT() DOESN"T HAVE ACCESS TO this. anything!

////////////////////////////////////////////////////////////////////////

// 10). Add access to "this" in your method by adding a constructor with super:::
constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
} // This connects the event handler to this. 
// Also an arrow function automatically adds access to "this" on an event handler!!!

////////////////////////////////////////////////////////////////////////

// 11). Updating the state Properly:::
handleIncrement = () => {
    this.setState({count: this.state.count + 1})
}

////////////////////////////////////////////////////////////////////////

// 12). Passing Event Arguments::

// Change your event in the render to an arrow function like::::
<button onClick={() => this.handleIncrement(product)}

// And change your handler to::
handleIncrement = product => {
    this.setState({count: this.state.count + 1})
    console.log(product)
}

////////////////////////////////////////////////////////////////////////


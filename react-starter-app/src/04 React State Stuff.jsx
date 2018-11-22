// 1). In order to lift the state, move all methods that modify the state and the state to the child!
//    Paste all of it from the state to the render into the child.

/////////////////////////////////////////////////////////////////////////////////////////////

// 2). So in the App.js you would set the
<Counters onReset={this.handleReset} onIncrement={this.handleIncrement} />; //...

/////////////////////////////////////////////////////////////////////////////////////////////

// 3). In parent change the counter piece to::::
<Counter key={counter.id} onReset={this.props.onDelete} onIncrement={this.props.onIncrement/>
// The above bubbles the Child stuff up to the App level through the parent.

/////////////////////////////////////////////////////////////////////////////////////////////

// 4). Instead of a class to define component we can make it a Stateless Functional Component

const NavBar = (props) => {
    return {
        // No this.props needed, just props
        <h1>{props.totalCounters}</h1>
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////

// 5). To stop using this.props in your parent pieces - destructure!!:::
const { onReset, counters, onDelete, onIncrement } = this.props;
// now can remove all this.props parts away!

/////////////////////////////////////////////////////////////////////////////////////////////


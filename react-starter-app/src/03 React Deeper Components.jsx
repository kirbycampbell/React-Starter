/////////////////////////////////////////////////////////////////////////////////////////////

// 1). In order to render multiple of a component Create a plural file version of it
    // For Example if you have a counter.jsx you could create a counters.jsx as well

/////////////////////////////////////////////////////////////////////////////////////////////

// 2). Import Counter from'./counter' in your counters.jsx file

/////////////////////////////////////////////////////////////////////////////////////////////

// 3). Put your counter render in the div::
state = {
    counters: [
        { id: 1, value: 1},
        { id: 2, value: 2}
    ]
}
    render(){
        return(
            <div>
                {this.state.counters.map(counter => <Counter key={counter.id}/>)}
            </div>
        )
    }

/////////////////////////////////////////////////////////////////////////////////////////////

// 4). PROPS PROPS PROPS PROPS PROPS PROPS and State

// In your Counter file make state = { value: this.props.value }
// Props is data that we give to a component. Cannot assign a prop, is purely for interactions!!
// State is data that is local or private to that component.  Other objects can't access the state.

/////////////////////////////////////////////////////////////////////////////////////////////

// 5). Adding a function to the outer component and calling via props::

handleDelete = () => {
    console.log('delete called')
}
render(){
    return(
        <Counter onDelete={this.handleDelete} />
    )
}
// And in Counter child component make button onClick=
<button onClick={this.props.onDelete} />
// This passes the prop down to the child.  Meaning the Counter component is raising an event to the parent
//   where the parent handles that event.

/////////////////////////////////////////////////////////////////////////////////////////////

// 6). To pass something in that onClick function above do this::
<button onClick={() => this.props.onDelete(this.props.id)} />
// and change handleDelete = counterId => { ....}  which makes it receive the argument.

/////////////////////////////////////////////////////////////////////////////////////////////

// 7). To delete something you want to filter all of an item besides the one passed in, and set state:::
handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters })
    // or to simplify the above since they are the same
    this.setState({ counters });
}

/////////////////////////////////////////////////////////////////////////////////////////////

// 8). To simplify the parent component attaching all props you can just do:::
<Counter key={counter.id} onDelete={this.handleDelete} counter={counter} />
// The above passes all parts of the component to it.  Includes all counter data. 
//But with that change must change stuff in counter.jsx ::
state = {
    value: this.props.counter.value
} // do the same whereever else that shows up

/////////////////////////////////////////////////////////////////////////////////////////////

// 9). Removing the local state in order to make a single sorce of truth:

//  in counter.jsx (child) remove the state and remove the functions that call upon the state.
//  And in the buttons change onClick to 

onClick={() => this.props.onIncrement(this.props.counter)}

//   This now connects it to its parent for management. 
//    Do the same for all this.state and change to this.props.counter
//      Now in parent - change the handleIncrement function to::::

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
}

/////////////////////////////////////////////////////////////////////////////////////////////
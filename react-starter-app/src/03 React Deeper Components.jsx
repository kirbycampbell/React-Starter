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
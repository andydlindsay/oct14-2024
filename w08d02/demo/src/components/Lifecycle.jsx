import React from 'react';

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      interval: null,
    };
  }

  // fires once when component is added to the DOM
  // document.ready(), fetch data, set up a web socket connection, start a timer
  // useEffect(() => {}, [])
  componentDidMount() {
    console.log('the component has been added to the DOM');

    const interval = setInterval(() => {
      console.log('the interval has fired');
    }, 2000);

    this.setState({ interval });
  }

  // fires every time state or props change
  // listen for a particular state/prop value to change
  // useEffect(() => {}, [props.counter])
  componentDidUpdate(prevProps, prevState) {
    if (this.state.counter !== prevState.counter) {
      // counter has changed
    }

    console.log('the component has updated');
  }

  // fires once right before the component is removed from the DOM
  // cleanup
  // returning a callback from a useEffect
  componentWillUnmount() {
    console.log('the component is about to be removed from the DOM');

    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        <h2>Lifecycle is Awesome!!!!</h2>
        <div>
          <label>Search Term:</label>
          <input 
            value={this.state.searchTerm}
            onChange={(event) => this.setState({ searchTerm: event.target.value })}
          />
        </div>
      </div>
    );
  }
}

export default Lifecycle;

import * as React from 'react';
import * as ReactDOM from 'react-dom';

type AppProps = { message: string };
type AppState = { count: number };

class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    //used arrow instead of normal function call to 'not' loose 'this' binding
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div onClick={this.increment}>
        hi {this.props.message} {this.state.count}
      </div>
    );
  }
}

ReactDOM.render(<App message="hi there" />, document.getElementById('root'));

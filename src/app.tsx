import * as React from 'react';
import * as ReactDOM from 'react-dom';

type AppProps = { message: string };

const App: React.SFC<AppProps> = ({ message }) => <div>{message}</div>;
const App2 = () => <div>Hello world again again</div>;
const App3 = () => <div>Hello world again again again </div>;

ReactDOM.render(<App message="hi there" />, document.getElementById('root'));

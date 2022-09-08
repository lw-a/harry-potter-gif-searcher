import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';

const rootContainer = document.querySelector('#root');
if (rootContainer) {
  const root = ReactDOM.createRoot(rootContainer);
  root.render(<App />);
}

// const Hello = (props) => {
//   const{ name, job } = props;

//   return <h1>Hello { name } you is { job }!!</h1>;
// };

// class Hello extends React.Component {
//   render() {
//     const{ name, job } = this.props;
//   return (
//     <h1>
//       Hello { name } you is { job }!!
//       </h1>
//     )
//   }
// }

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

const defaultAppPath = 'Home';
const examplesDir = 'examples';

// This is the argument that you pass when running `npm start --app=<app_path>`
const appPath = process.env.REACT_APP_APP_PATH || defaultAppPath;

// The component is lazy loaded, so that it is possible to dynamically construct
// a path to the app's directory
const App = React.lazy(() => import(`./${examplesDir}/${appPath}`));

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading">
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

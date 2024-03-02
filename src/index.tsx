import ReactDOM from 'react-dom/client';
import init from './init';
import './styles/application.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(init());

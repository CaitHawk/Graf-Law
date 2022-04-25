import { Outlet } from 'react-router-dom';
import HeaderCollapsed from './components/HeaderCollapsed';

export default function App() {
  return (
    <div className="App">
      <HeaderCollapsed />
      <h1 style={{ color: 'blue' }}>header full / header collapsed here</h1>
      <Outlet />
    </div>
  );
}


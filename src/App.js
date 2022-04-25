import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <h1 style={{ color: 'blue' }}>header full / header collapsed here</h1>
      <Outlet />
    </div>
  );
}


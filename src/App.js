import { RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Componants/Home/Home/Home';
import Navbar from './Componants/Shared/Navbar/Navbar';
import { router } from './Router/Routes/Routes';

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

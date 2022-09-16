import { BrowserRouter, Routes, Route, Links, Link } from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser copy';
import ListUser from './components/ListUser';

function App() {
  return (
    <div className="App">
      <h1>React CRUD using PHP API and MySQL</h1>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>

            <li>
              <Link to="user/create">Create Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route index element={<ListUser />} />
          <Route path='user/create' element={<CreateUser />} />
          <Route path='user/:id/edit' element={<EditUser />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import Users from './Users.jsx';
import Posts from './Posts.jsx';
import Favorites from './Favorites.jsx';
import { appPaths } from '../routes.js';

const App = () => {
  const {users, posts, favorites} = appPaths;
  
  return (
    <BrowserRouter>
     <Routes>
       <Route path={users} element={<Users/>} />
       <Route path={`${posts}/:userId`} element={<Posts />} /> 
       <Route path={favorites} element={<Favorites/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;

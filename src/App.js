import './App.css';
import { PostList } from './components/PostList';
import { Post } from './components/Post';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { TopBar } from './components/TopBar';

function App() {
  return (
    <div className='bg-dark min-h-screen text-slate-50'>
      <BrowserRouter>
        <TopBar/>
          <Routes>
            <Route path={"/"} element={<PostList/>}/>
            <Route path={"/post/:id"} element={<Post/>}/>
          </Routes>
      </BrowserRouter>  
    </div>
  
  );
}

export default App;

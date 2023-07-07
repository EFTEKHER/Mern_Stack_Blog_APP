import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Blogs from './components/Blogs';
import Auth from './components/Auth';
import BlogDetail from './components/BlogDetail';
import UserBlogs from './components/UserBlogs';
import AddBlog from './components/AddBlog';
import DisplayNews from './components/DisplayNews';
import {Route,Routes} from "react-router-dom"
import {  useSelector } from 'react-redux';
import NotFound from './components/NotFound';
function App() {
  const isLoggedIn = useSelector(state=>state.isLoggedIn);
  console.log(isLoggedIn);
  return <React.Fragment>
<header>
<Header/>
</header>
<main>
  <Routes>
  <Route path="/" element={<Auth/>} />
  <Route path="/auth" element={<Auth/>}/>
  <Route path="/blogs" element={<Blogs/>}/>
  <Route path="/myBlogs" element={<UserBlogs/>}/>
  <Route path="/myBlogs/:id" element={<BlogDetail/>}/>
  <Route path="/blogs/add" element={<AddBlog/>}/>
  <Route path="/news" element={<DisplayNews/>}/>
  <Route path="*" element={<NotFound/>}/>
  </Routes>

</main>

    </React.Fragment>
}

export default App;

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleToAddBookmark = blog =>{
    console.log('bookmark added soon');
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleToAddBookmark={handleToAddBookmark}></Blogs>
      <Bookmarks></Bookmarks>
      </div>


    </>
  )
}

export default App

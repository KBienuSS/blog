import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home'
import Post from './components/pages/Post/Post'
import AddPost from './components/pages/AddPost/AddPost'
import EditPost from './components/pages/EditPost/EditPost'
import About from './components/pages/About/About'
import NotFound from './components/pages/NotFound/NotFound'
import Header from './components/views/Header/Header'
import Footer from './components/views/Footer/Footer'
import {Container} from 'react-bootstrap';
import Categories from './components/pages/Categories/Categories';
import CategoryPage from './components/pages/CategoryPage/CategoryPage.js';

function App() {
  return (
    <main>
      <Header/>
      <Container>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/category/:category" element={<CategoryPage/>} />
            <Route path="/post/:postId" element={<Post/>} />
            <Route path="/post/add" element={<AddPost/>} />
            <Route path="/post/edit/:id" element={<EditPost/>} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;

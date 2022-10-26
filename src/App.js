<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import './App.css';
import Navbar from './components/NavbarElements';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route  path='/'  element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/sign-up' element={<SignUp/>} />
	</Routes>
	</Router>
);
=======
import logo from './logo.svg';
=======
import React from 'react';
>>>>>>> abb862c (updates 1.2)
import './App.css';
import Navbar from './Components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/index';
import About from './Pages/about';
import Blogs from './Pages/blogs';
import SignUp from './Pages/signup';
import Contact from './Pages/contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  );
>>>>>>> 8bd8838 (Initialize project using Create React App)
}

export default App;

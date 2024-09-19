import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact_page from './components/Contact_page/Contact_page';
import Examples from './components/Examples_page/Examples';
import Resources from './components/Resources_page/Resources';
import Register from './components/Register_page/Register';
import Sign_in from './components/Sign_in_page/Sign_in';
import CreatePage from './components/Create_page/Create_page';

import Menu from './components/Menu/Menu';
import HeroSection from './components/Hero_section/Hero_section';
import Video from './components/Video_section/Video';
import Character_section from './components/Character_section/Character_section';
import Movement_section from './components/Movement_section/Movement_section';
import Items_section from './components/Items_section/Items_section';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
          <Menu />
          <main>
            <Routes>
              <Route path="/" element={
                <div>
                  <HeroSection />
                  <Video />
                  <Character_section />
                  <Movement_section />
                  <Items_section />
                </div>
              } />
              <Route path="/create" element={<CreatePage />}/>
              <Route path="/contact" element={<Contact_page />} />
              <Route path="/examples" element={<Examples />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Sign_in />} />
            </Routes>
          </main>
        <footer >
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;

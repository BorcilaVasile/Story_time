import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact_page from './components/Contact_page/Contact_page';
import Examples from './components/Examples_page/Examples';
import Resources from './components/Resources_page/Resources';

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
              <Route path="/create" element={
                <div>
                  <HeroSection />
                  <Video />
                  <Character_section />
                  <Movement_section />
                  <Items_section />
                </div>
              } />
              <Route path="/contact" element={<Contact_page />} />
              {
                // Add the following routes
              }
              <Route path="/examples" element={<Examples />} />
              {
                // Add the following routes
              }
              <Route path="/resources" element={<Resources />} />
              {
                // Add the following routes
              }
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

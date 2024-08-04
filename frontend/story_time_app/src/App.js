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
    <div className="app">
      <main>
        <Menu />
        <HeroSection />
        <Video />
        <Character_section />
        <Movement_section />
        <Items_section />
      </main>
      <footer >
        <Footer />
      </footer>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Collections from './components/Collections';

const App = () => {
  return (
    <div className='bg-[#2b2b2b]'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collections />} />
      </Routes>
    </div>
  );
}

export default App;

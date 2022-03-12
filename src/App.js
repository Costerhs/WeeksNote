import { Route, Routes } from 'react-router-dom';
import './App.css';
import Target from './components/Target';
import Week from './components/week/Week';
const App = () => {
  // console.log(arr);
  // console.log(days);
  return (
    <div className="boss">
      <Routes>
        <Route path="/" element={<Week />} />
        <Route path="/targets/*" element={<Target />} />
      </Routes>
    </div>
  );
};

export default App;

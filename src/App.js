import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionForm from './components/QuestionForm';
import InfoForm from './components/InfoForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuestionForm/>}/>
        <Route path="personalInformation" element={<InfoForm/>} />
      </Routes>
    </Router>
  );
}

export default App;

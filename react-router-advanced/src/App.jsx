import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';

function App () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={Profile} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
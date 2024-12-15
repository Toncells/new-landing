import Body from './components/Body/';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

console.log(process.env)
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

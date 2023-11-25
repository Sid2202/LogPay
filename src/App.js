import {Link, Routes, Route,BrowserRouter as Router} from 'react-router-dom'
import {Suspense} from 'react'

import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <nav className='w-full bg-blue  flex flex-row'>
        <Link className='p-2' to="/">Home</Link>
        <Link className='p-2' to="/about">About</Link>
      </nav>
      <Routes>
        <Route index element={
          <Suspense fallback={<>Loading...</>}>
            <Home />
          </Suspense>
        } />
        <Route path="about" element={
          <Suspense fallback={<>Loading...</>}>
            <About />
          </Suspense>
        } />
        <Route path="*" element={
          <Suspense fallback={<>Loading...</>}>
            <NoMatch />
          </Suspense>
        } />
      </Routes>
    </div>
  );
}

const NoMatch = () =>{
  return <div><h1>NO MATCH!!</h1></div>
}

export default App;

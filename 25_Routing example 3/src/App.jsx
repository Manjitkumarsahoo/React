// import Header from './components/Header'
// import Footer from './components/Footer'
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import User from './components/User'
// import GIthub, { githubinfoloader } from './components/GIthub'

// function App() {


//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/user/:userid" element={<User />} />
//         <Route 
//         loader = {githubinfoloader}
//         path="/github" 
//         element={<GIthub />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   )
// }

// export default App





import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App


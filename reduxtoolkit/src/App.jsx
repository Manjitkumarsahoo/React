// import React from 'react'
// import { useEffect, useLayoutEffect, useState } from 'react'

import Debouncing from "./components/Debouncing"

// function App() {

//   const [state, setState] = useState(0)

//   useEffect(() => {
//     console.log("Effect");
//   }, [state])

//   useLayoutEffect(() => {
//     console.log("layout Effect");

//   }, [state])

//   return (
//     <>
//       {console.log("render")}
//       <h1>{state}</h1>
//       <button onClick={() => setState(state + 1)}>Change State</button>
//     </>
//   )
// }

// export default App

//import Parent from './components/Parent'
//import ShowUsers from './components/ShowUsers'
//import Child1 from './components/Child1'
//import Child2 from './components/Child2'

//import { lazy, Suspense } from 'react'
//const LazyComponent = lazy(() => import('./components/LazyComponent'))

function App() {

  return (
    <> 
      {/* <Child1/> */}
      {/* <Child2/> */}
      {/* <ShowUsers/> */}
      {/* <Parent/> */}
      {/* <Suspense fallback={<h1>The Component is loading.....</h1>}>
        <LazyComponent />
      </Suspense> */}
      <Debouncing/>
    </>
  )
}

export default App

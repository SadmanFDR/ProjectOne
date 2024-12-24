
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './LayoutOne/LayoutOne'

import LayoutTwo from './LayoutTwo/LayoutTwo'

function App() {
const myRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}/>
      <Route path='/about' element={<LayoutTwo/>}/> 
    </Route>
  )
)

  return (
    <>
    
    <RouterProvider router={myRoute}/>

    </>
  )
}

export default App

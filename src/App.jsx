import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "./App.css"
import Room from './Room'
import Web from './Web'

const App = () => {
  return (
 
    <BrowserRouter>
<Routes>
  <Route path='/' element={<Web/>} />
  <Route path='/room/:id' element={<Room/>} />
</Routes>
    </BrowserRouter>
  )
}

export default App
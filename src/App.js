import React from 'react';
// components user collection
import AllUsers from './Component/user/AllUsers';
import AddUser from './Component/user/AddUser';
import EditUser from './Component/user/EditUser';
// components product collection
import AllItems from './Component/item/AllItems';
import EditItem from './Component/item/EditItem';
import AddItem from './Component/item/AddItem';
//header components
import NavBar from './Component/NavBar';
import Home from './Home';
// import Footer from './Component/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/allitems" element={<AllItems />} />
        <Route path="/edititem/:id" element={<EditItem />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

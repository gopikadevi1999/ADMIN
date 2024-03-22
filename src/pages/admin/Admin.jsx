import React from 'react'
import './Admin.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../../components/addproduct/AddProduct'
import ListProduct from '../../components/listproduct/ListProduct'
import EditProduct from '../../components/editproduct/EditProduct'


function Admin() {
  return <>
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
        <Route path="/editproduct/:id" element={<EditProduct />} />
      </Routes>
    </div>
  </>
}

export default Admin
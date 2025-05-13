import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
// PEMOHON
import UserIndex from './pages/User/UserIndex'; 
import UserCreate from './pages/User/UserCreate'; 
import UserEdit from './pages/User/UserEdit';

import WajibretribusiIndex from './pages/Wajibretribusi/WajibretribusiIndex'; 
import WajibretribusiCreate from './pages/Wajibretribusi/WajibretribusiCreate'; 
import WajibretribusiEdit from './pages/Wajibretribusi/WajibretribusiEdit';
// MANAGEMENT SEWA
import JenispermohonanIndex from './pages/Jenispermohonan/JenispermohonanIndex'; 
import JenispermohonanCreate from './pages/Jenispermohonan/JenispermohonanCreate'; 
import JenispermohonanEdit from './pages/Jenispermohonan/JenispermohonanEdit';

import PeruntukansewaIndex from './pages/Peruntukansewa/PeruntukansewaIndex'; 
import PeruntukansewaCreate from './pages/Peruntukansewa/PeruntukansewaCreate'; 
import PeruntukansewaEdit from './pages/Peruntukansewa/PeruntukansewaEdit';

import PermohonansewaIndex from './pages/Permohonansewa/PermohonansewaIndex'; 
import PermohonansewaCreate from './pages/Permohonansewa/PermohonansewaCreate'; 
import PermohonansewaEdit from './pages/Permohonansewa/PermohonansewaEdit';  
// WAKTU PERMOHONAN
import JangkawaktusewaIndex from './pages/Jangkawaktusewa/JangkawaktusewaIndex'; 
import JangkawaktusewaCreate from './pages/Jangkawaktusewa/JangkawaktusewaCreate'; 
import JangkawaktusewaEdit from './pages/Jangkawaktusewa/JangkawaktusewaEdit'; 

import JenisjangkawaktuIndex from './pages/Jenisjangkawaktu/JenisjangkawaktuIndex'; 
import JenisjangkawaktuCreate from './pages/Jenisjangkawaktu/JenisjangkawaktuCreate'; 
import JenisjangkawaktuEdit from './pages/Jenisjangkawaktu/JenisjangkawaktuEdit'; 
// MANAGEMENT STATUS
import StatusIndex from './pages/Status/StatusIndex'; 
import StatusCreate from './pages/Status/StatusCreate'; 
import StatusEdit from './pages/Status/StatusEdit'; 

import JenisstatusIndex from './pages/Jenisstatus/JenisstatusIndex'; 
import JenisstatusCreate from './pages/Jenisstatus/JenisstatusCreate'; 
import JenisstatusEdit from './pages/Jenisstatus/JenisstatusEdit'; 
// OBJEK
import JenisobjekIndex from './pages/Jenisobjek/JenisobjekIndex'; 
import JenisobjekCreate from './pages/Jenisobjek/JenisobjekCreate'; 
import JenisobjekEdit from './pages/Jenisobjek/JenisobjekEdit'; 

import LokasiobjekIndex from './pages/Lokasiobjek/LokasiobjekIndex'; 
import LokasiobjekCreate from './pages/Lokasiobjek/LokasiobjekCreate'; 
import LokasiobjekEdit from './pages/Lokasiobjek/LokasiobjekEdit'; 

import TarifobjekIndex from './pages/Tarifobjek/TarifobjekIndex'; 
import TarifobjekCreate from './pages/Tarifobjek/TarifobjekCreate'; 
import TarifobjekEdit from './pages/Tarifobjek/TarifobjekEdit'; 

import ObjekretribusiIndex from './pages/Objekretribusi/ObjekretribusiIndex'; 
import ObjekretribusiCreate from './pages/Objekretribusi/ObjekretribusiCreate'; 
import ObjekretribusiEdit from './pages/Objekretribusi/ObjekretribusiEdit'; 

function App() {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  return (
    <Routes>
      {/* Login page (tanpa layout) */}
      <Route path="/login" element={<Login />} />

      {/* Dashboard page (dengan AdminLayout) */}
      <Route path="/Dashboard" element={isLoggedIn ? (<AdminLayout><Dashboard /></AdminLayout>) : (<Navigate to="/login" replace />)} />

      {/* Jenisstatus Index page */}
      <Route path="/Jenisstatus-index" element={isLoggedIn ? (<AdminLayout><JenisstatusIndex /></AdminLayout>) : (<Navigate to="/login" replace />)} />

      {/* Jenisstatus Create page */}
      <Route path="/Jenisstatus-create" element={isLoggedIn ? (<AdminLayout><JenisstatusCreate /></AdminLayout>) : (<Navigate to="/login" replace />)} />

      {/* Jenisstatus Edit page */}
      <Route path="/Jenisstatus-edit/:id" element={isLoggedIn ? (<AdminLayout><JenisstatusEdit /></AdminLayout>) : (<Navigate to="/login" replace />)} />

      {/* Jenispermohonan Index page */}
      <Route path="/Jenispermohonan-index" element={isLoggedIn ? (<AdminLayout><JenispermohonanIndex /></AdminLayout>) : (<Navigate to="/login" replace />)} />

      {/* Jenispermohonan Create page */}
      <Route path="/Jenispermohonan-create" element={isLoggedIn ? (<AdminLayout><JenispermohonanCreate /></AdminLayout>) : (<Navigate to="/login" replace />)} />

      {/* Jenispermohonan Edit page */}
      <Route path="/Jenispermohonan-edit/:id" element={isLoggedIn ? (<AdminLayout><JenispermohonanEdit /></AdminLayout>) : (<Navigate to="/login" replace />)} />

      {/* User Index page */}
      <Route path="/users-index" element={isLoggedIn ? (<AdminLayout><UserIndex /></AdminLayout>) : (<Navigate to="/login" replace />)} />

      {/* User Create page */}
      <Route path="/User-create" element={isLoggedIn ? (<AdminLayout><UserCreate /></AdminLayout>) : (<Navigate to="/login" replace />)} />

      {/* User Edit page */}
      <Route path="/users/edit/:id" element={isLoggedIn ? (<AdminLayout><UserEdit /></AdminLayout>) : (<Navigate to="/login" replace />)} />

      {/* Wajib-retribusi Index page */}
      <Route path="/wajib-retribusi-index" element={isLoggedIn ? (<AdminLayout><WajibretribusiIndex /></AdminLayout>) : (<Navigate to="/login" replace />)} />

      {/* Wajib-retribusi Create page */}
      <Route path="/Wajib-retribusi-create" element={isLoggedIn ? (<AdminLayout><WajibretribusiCreate /></AdminLayout>) : (<Navigate to="/login" replace />)} />

      {/* Wajib-retribusi Edit page */}
      <Route path="/Wajib-retribusi-edit/:id" element={isLoggedIn ? (<AdminLayout><WajibretribusiEdit /></AdminLayout>) : (<Navigate to="/login" replace />)} />

      {/* Peruntukansewa Index page */}
            <Route path="/Peruntukansewa-index" element={isLoggedIn ? (<AdminLayout><PeruntukansewaIndex /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
      {/* Peruntukansewa Create page */}
      <Route path="/Peruntukansewa-create" element={isLoggedIn ? (<AdminLayout><PeruntukansewaCreate /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
      {/* Peruntukansewa Edit page */}
      <Route path="/Peruntukansewa-edit/:id" element={isLoggedIn ? (<AdminLayout><PeruntukansewaEdit /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
      {/* Permohonansewa Index page */}
      <Route path="/Permohonansewa-index" element={isLoggedIn ? (<AdminLayout><PermohonansewaIndex /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
      {/* Permohonansewa Create page */}
      <Route path="/Permohonansewa-create" element={isLoggedIn ? (<AdminLayout><PermohonansewaCreate /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Permohonansewa Edit page */}
            <Route path="/Permohonansewa-edit/:id" element={isLoggedIn ? (<AdminLayout><PermohonansewaEdit /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Jangkawaktusewa Index page */}
            <Route path="/Jangkawaktusewa-index" element={isLoggedIn ? (<AdminLayout><JangkawaktusewaIndex /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Jangkawaktusewa Create page */}
            <Route path="/Jangkawaktusewa-create" element={isLoggedIn ? (<AdminLayout><JangkawaktusewaCreate /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Jangkawaktusewa Edit page */}
            <Route path="/Jangkawaktusewa-edit/:id" element={isLoggedIn ? (<AdminLayout><JangkawaktusewaEdit /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Jenisjangkawaktu Index page */}
            <Route path="/Jenisjangkawaktu-index" element={isLoggedIn ? (<AdminLayout><JenisjangkawaktuIndex /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Jenisjangkawaktu Create page */}
            <Route path="/Jenisjangkawaktu-create" element={isLoggedIn ? (<AdminLayout><JenisjangkawaktuCreate /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Jenisjangkawaktu Edit page */}
            <Route path="/Jenisjangkawaktu-edit/:id" element={isLoggedIn ? (<AdminLayout><JenisjangkawaktuEdit /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Status Index page */}
            <Route path="/Status-index" element={isLoggedIn ? (<AdminLayout><StatusIndex /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Status Create page */}
            <Route path="/Status-create" element={isLoggedIn ? (<AdminLayout><StatusCreate /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Status Edit page */}
            <Route path="/Status-edit/:id" element={isLoggedIn ? (<AdminLayout><StatusEdit /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Jenisobjek Index page */}
            <Route path="/Jenisobjek-index" element={isLoggedIn ? (<AdminLayout><JenisobjekIndex /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Jenisobjek Create page */}
            <Route path="/Jenisobjek-create" element={isLoggedIn ? (<AdminLayout><JenisobjekCreate /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Jenisobjek Edit page */}
            <Route path="/Jenisobjek-edit/:id" element={isLoggedIn ? (<AdminLayout><JenisobjekEdit /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Lokasiobjek Index page */}
            <Route path="/Lokasiobjek-index" element={isLoggedIn ? (<AdminLayout><LokasiobjekIndex /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Lokasiobjek Create page */}
            <Route path="/Lokasiobjek-create" element={isLoggedIn ? (<AdminLayout><LokasiobjekCreate /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Lokasiobjek Edit page */}
            <Route path="/Lokasiobjek-edit/:id" element={isLoggedIn ? (<AdminLayout><LokasiobjekEdit /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Tarifobjek Index page */}
            <Route path="/Tarifobjek-index" element={isLoggedIn ? (<AdminLayout><TarifobjekIndex /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Tarifobjek Create page */}
            <Route path="/Tarifobjek-create" element={isLoggedIn ? (<AdminLayout><TarifobjekCreate /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
            {/* Tarifobjek Edit page */}
            <Route path="/Tarifobjek-edit/:id" element={isLoggedIn ? (<AdminLayout><TarifobjekEdit /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
    

      {/* Objek-retribusi Index page */}
            <Route path="/Objek-retribusi-index" element={isLoggedIn ? (<AdminLayout><ObjekretribusiIndex /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
      {/* Objek-retribusi Create page */}
            <Route path="/Objek-retribusi-create" element={isLoggedIn ? (<AdminLayout><ObjekretribusiCreate /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
      {/* Objek-retribusi Edit page */}
            <Route path="/Objek-retribusi-edit/:id" element={isLoggedIn ? (<AdminLayout><ObjekretribusiEdit /></AdminLayout>) : (<Navigate to="/login" replace />)} />
      
      

      {/* Redirect default "/" ke dashboard jika login, jika tidak ke login */}
      <Route
        path="/"
        element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />}
      />
    </Routes>
  );
}

export default App;

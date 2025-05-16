import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

// PEMOHON
import UserIndex from './pages/User/UserIndex'; 
import UserCreate from './pages/User/UserCreate'; 
import UserEdit from './pages/User/UserEdit';

// Wajib Retribusi
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
      {/* Login page */}
      <Route path="/login" element={<Login />} />

      {/* Dashboard page */}
      <Route path="/Dashboard" element={isLoggedIn ? <AdminLayout><Dashboard /></AdminLayout> : <Navigate to="/login" replace />} />

      {/* Users Routes */}
      <Route path="/users-index" element={isLoggedIn ? <AdminLayout><UserIndex /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/User-create" element={isLoggedIn ? <AdminLayout><UserCreate /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/users/edit/:id" element={isLoggedIn ? <AdminLayout><UserEdit /></AdminLayout> : <Navigate to="/login" replace />} />

      {/* Wajib Retribusi Routes */}
      <Route path="/wajib-retribusi-index" element={isLoggedIn ? <AdminLayout><WajibretribusiIndex /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Wajib-retribusi-create" element={isLoggedIn ? <AdminLayout><WajibretribusiCreate /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Wajib-retribusi-edit/:id" element={isLoggedIn ? <AdminLayout><WajibretribusiEdit /></AdminLayout> : <Navigate to="/login" replace />} />

      {/* Jenispermohonan Routes */}
      <Route path="/Jenispermohonan-index" element={isLoggedIn ? <AdminLayout><JenispermohonanIndex /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Jenispermohonan-create" element={isLoggedIn ? <AdminLayout><JenispermohonanCreate /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Jenispermohonan-edit/:id" element={isLoggedIn ? <AdminLayout><JenispermohonanEdit /></AdminLayout> : <Navigate to="/login" replace />} />

      {/* Peruntukansewa Routes */}
      <Route path="/Peruntukansewa-index" element={isLoggedIn ? <AdminLayout><PeruntukansewaIndex /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Peruntukansewa-create" element={isLoggedIn ? <AdminLayout><PeruntukansewaCreate /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Peruntukansewa-edit/:id" element={isLoggedIn ? <AdminLayout><PeruntukansewaEdit /></AdminLayout> : <Navigate to="/login" replace />} />

      {/* Permohonansewa Routes */}
      <Route path="/Permohonansewa-index" element={isLoggedIn ? <AdminLayout><PermohonansewaIndex /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Permohonansewa-create" element={isLoggedIn ? <AdminLayout><PermohonansewaCreate /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Permohonansewa-edit/:id" element={isLoggedIn ? <AdminLayout><PermohonansewaEdit /></AdminLayout> : <Navigate to="/login" replace />} />

      {/* Jangkawaktusewa Routes */}
      <Route path="/Jangkawaktusewa-index" element={isLoggedIn ? <AdminLayout><JangkawaktusewaIndex /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Jangkawaktusewa-create" element={isLoggedIn ? <AdminLayout><JangkawaktusewaCreate /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Jangkawaktusewa-edit/:id" element={isLoggedIn ? <AdminLayout><JangkawaktusewaEdit /></AdminLayout> : <Navigate to="/login" replace />} />

      {/* Jenisjangkawaktu Routes */}
      <Route path="/Jenisjangkawaktu-index" element={isLoggedIn ? <AdminLayout><JenisjangkawaktuIndex /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Jenisjangkawaktu-create" element={isLoggedIn ? <AdminLayout><JenisjangkawaktuCreate /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Jenisjangkawaktu-edit/:id" element={isLoggedIn ? <AdminLayout><JenisjangkawaktuEdit /></AdminLayout> : <Navigate to="/login" replace />} />

      {/* Status Routes */}
      <Route path="/Status-index" element={isLoggedIn ? <AdminLayout><StatusIndex /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Status-create" element={isLoggedIn ? <AdminLayout><StatusCreate /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Status-edit/:id" element={isLoggedIn ? <AdminLayout><StatusEdit /></AdminLayout> : <Navigate to="/login" replace />} />

      {/* Jenisobjek Routes */}
      <Route path="/Jenisobjek-index" element={isLoggedIn ? <AdminLayout><JenisobjekIndex /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Jenisobjek-create" element={isLoggedIn ? <AdminLayout><JenisobjekCreate /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Jenisobjek-edit/:id" element={isLoggedIn ? <AdminLayout><JenisobjekEdit /></AdminLayout> : <Navigate to="/login" replace />} />

      {/* Lokasiobjek Routes */}
      <Route path="/lokasi-objek-retribusi" element={isLoggedIn ? <AdminLayout><LokasiobjekIndex /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/lokasi-objek-retribusi-create" element={isLoggedIn ? <AdminLayout><LokasiobjekCreate /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/lokasi-objek-retribusi-edit/:id" element={isLoggedIn ? <AdminLayout><LokasiobjekEdit /></AdminLayout> : <Navigate to="/login" replace />} />
      {/* // Jenisstatus Routes */}
<Route path="/Jenisstatus-index" element={isLoggedIn ? <AdminLayout><JenisstatusIndex /></AdminLayout> : <Navigate to="/login" replace />} />
<Route path="/Jenisstatus-create" element={isLoggedIn ? <AdminLayout><JenisstatusCreate /></AdminLayout> : <Navigate to="/login" replace />} />
<Route path="/Jenisstatus-edit/:id" element={isLoggedIn ? <AdminLayout><JenisstatusEdit /></AdminLayout> : <Navigate to="/login" replace />} />

      {/* Tarifobjek Routes */}
      <Route path="/Tarifobjek-index" element={isLoggedIn ? <AdminLayout><TarifobjekIndex /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Tarifobjek-create" element={isLoggedIn ? <AdminLayout><TarifobjekCreate /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Tarifobjek-edit/:id" element={isLoggedIn ? <AdminLayout><TarifobjekEdit /></AdminLayout> : <Navigate to="/login" replace />} />

      {/* Objekretribusi Routes */}
      <Route path="/Objekretribusi-index" element={isLoggedIn ? <AdminLayout><ObjekretribusiIndex /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Objekretribusi-create" element={isLoggedIn ? <AdminLayout><ObjekretribusiCreate /></AdminLayout> : <Navigate to="/login" replace />} />
      <Route path="/Objekretribusi-edit/:id" element={isLoggedIn ? <AdminLayout><ObjekretribusiEdit /></AdminLayout> : <Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;

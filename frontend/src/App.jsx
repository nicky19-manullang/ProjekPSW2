import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import JenisIndex from './pages/Jenis/JenisIndex'; // sesuai nama file dan fungsinya
import JenisCreate from './pages/Jenis/JenisCreate'; // import create
import JenisEdit from './pages/Jenis/JenisEdit'; // import edit
import ManajemenIndex from './pages/Manajemen/ManajemenIndex'; // sesuai nama file dan fungsinya
import ManajemenCreate from './pages/Manajemen/ManajemenCreate'; // import create
import ManajemenEdit from './pages/Manajemen/ManajemenEdit'; // import edit

function App() {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  return (
    <Routes>
      {/* Login page (tanpa layout) */}
      <Route path="/login" element={<Login />} />

      {/* Dashboard page (dengan AdminLayout) */}
      <Route
        path="/Dashboard"
        element={
          isLoggedIn ? (
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Jenis Index page */}
      <Route
        path="/jenis-index"
        element={
          isLoggedIn ? (
            <AdminLayout>
              <JenisIndex />
            </AdminLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Jenis Create page */}
      <Route
        path="/jenis-create"
        element={
          isLoggedIn ? (
            <AdminLayout>
              <JenisCreate />
            </AdminLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Jenis Edit page */}
      <Route
        path="/jenis-edit/:id"
        element={
          isLoggedIn ? (
            <AdminLayout>
              <JenisEdit />
            </AdminLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    {/* Manajemen Index page */}
      <Route
        path="/Manajemen-index"
        element={
          isLoggedIn ? (
            <AdminLayout>
              <ManajemenIndex />
            </AdminLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Manajemen Create page */}
      <Route
        path="/Manajemen-create"
        element={
          isLoggedIn ? (
            <AdminLayout>
              <ManajemenCreate />
            </AdminLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Manajemen Edit page */}
      <Route
        path="/Manajemen-edit/:id"
        element={
          isLoggedIn ? (
            <AdminLayout>
              <ManajemenEdit />
            </AdminLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Redirect default "/" ke dashboard jika login, jika tidak ke login */}
      <Route
        path="/"
        element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />}
      />
    </Routes>
  );
}

export default App;

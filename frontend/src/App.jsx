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
import UserIndex from './pages/User/UserIndex'; // sesuai nama file dan fungsinya
import UserCreate from './pages/User/UserCreate'; // import create
import UserEdit from './pages/User/UserEdit'; // import edit
import WajibretribusiIndex from './pages/Wajibretribusi/Wajib-retribusiIndex'; // sesuai nama file dan fungsinya
import WajibretribusiCreate from './pages/Wajibretribusi/Wajib-retribusiCreate'; // import create
import WajibretribusiEdit from './pages/Wajibretribusi/Wajib-retribusiEdit'; // import edit

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

        {/* User Index page */}
        <Route
        path="/User-index"
        element={
          isLoggedIn ? (
            <AdminLayout>
              <UserIndex />
            </AdminLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* User Create page */}
      <Route
        path="/User-create"
        element={
          isLoggedIn ? (
            <AdminLayout>
              <UserCreate />
            </AdminLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* User Edit page */}
      <Route
        path="/User-edit/:id"
        element={
          isLoggedIn ? (
            <AdminLayout>
              <UserEdit />
            </AdminLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Wajib-retribusi Index page */}
      <Route
        path="/Wajib-retribusi-index"
        element={
          isLoggedIn ? (
            <AdminLayout>
              <WajibretribusiIndex />
            </AdminLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Wajib-retribusi Create page */}
      <Route
        path="/Wajib-retribusi-create"
        element={
          isLoggedIn ? (
            <AdminLayout>
              <WajibretribusiCreate />
            </AdminLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Wajib-retribusi Edit page */}
      <Route
        path="/Wajib-retribusi-edit/:id"
        element={
          isLoggedIn ? (
            <AdminLayout>
              <WajibretribusiEdit />
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

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const menus = [
    {
      title: "Dashboard",
      icon: "fa-home",
      path: "/dashboard"
    },
    {
      title: "Pemohon",
      icon: "fa-users",
      submenus: [
        { title: "User", path: "/users-index" },
        { title: "Wajib Retribusi", path: "/wajib-retribusi-index" }
      ]
    },
    {
      title: "Management Sewa",
      icon: "fa-clipboard-list",
      submenus: [
        { title: "Jenis Permohonan", path: "/Jenispermohonan-Index" },
        { title: "Peruntukan Sewa", path: "/Peruntukansewa-index" },
        { title: "Permohonan Sewa", path: "/Permohonansewa-index" }
      ]
    },
    {
      title: "Waktu Permohonan",
      icon: "fa-clock",
      submenus: [
        { title: "Jangka Waktu Sewa", path: "/Jangkawaktusewa-index" },
        { title: "Jenis Jangka Waktu", path: "/Jenisjangkawaktu-index" }
      ]
    },
    {
      title: "Management Status",
      icon: "fa-edit",
      submenus: [
        { title: "Status", path: "/Status-index" },
        { title: "Jenis Status", path: "/Jenisstatus-index" }
      ]
    },
    {
      title: "Objek",
      icon: "fa-map",
      submenus: [
        { title: "Jenis Objek", path: "/Jenisobjek-index" },
        { title: "Lokasi Objek", path: "/Lokasiobjek-index" },
        { title: "Tarif Objek", path: "/Tarifobjek-index" },
        { title: "Objek Retribusi", path: "/Objek-retribusi-index" }
      ]
    }
  ];

  const toggleMenu = (menuTitle) => {
    setActiveMenu(activeMenu === menuTitle ? null : menuTitle);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Sidebar */}
      <aside style={{
        width: sidebarOpen ? '250px' : '80px',
        backgroundColor: '#4682B4',
        color: 'white',
        transition: 'all 0.3s ease',
        boxShadow: '4px 0 15px rgba(0,0,0,0.1)',
        position: 'fixed',
        height: '100vh',
        zIndex: 100
      }}>
        <div style={{
          padding: '20px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center'
        }}>
          <img 
            src="/images/logo.jpg" 
            alt="Logo" 
            style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%',
              marginBottom: '10px'
            }} 
          />
          {sidebarOpen && <h5 style={{ margin: 0, fontWeight: '600' }}>T A P A T U P A</h5>}
        </div>

        <nav style={{ padding: '10px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {menus.map((menu, index) => (
              <li key={index}>
                {menu.submenus ? (
                  <>
                    <div 
                      onClick={() => toggleMenu(menu.title)}
                      style={{
                        padding: '12px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        margin: '5px 0',
                        backgroundColor: activeMenu === menu.title ? 'rgba(255,255,255,0.15)' : 'transparent',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <i className={`fas ${menu.icon}`} style={{ width: '24px' }}></i>
                        {sidebarOpen && <span style={{ marginLeft: '10px' }}>{menu.title}</span>}
                      </div>
                      {sidebarOpen && (
                        <i className={`fas fa-chevron-${activeMenu === menu.title ? 'down' : 'right'}`}></i>
                      )}
                    </div>

                    {sidebarOpen && activeMenu === menu.title && (
                      <ul style={{ 
                        paddingLeft: '34px',
                        animation: 'fadeIn 0.3s ease'
                      }}>
                        {menu.submenus.map((submenu, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={submenu.path}
                              style={{
                                display: 'block',
                                padding: '8px 0',
                                color: 'white',
                                textDecoration: 'none',
                                transition: 'all 0.2s'
                              }}
                            >
                              {submenu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={menu.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '12px',
                      borderRadius: '8px',
                      color: 'white',
                      textDecoration: 'none',
                      margin: '5px 0',
                      transition: 'all 0.2s'
                    }}
                  >
                    <i className={`fas ${menu.icon}`} style={{ width: '24px' }}></i>
                    {sidebarOpen && <span style={{ marginLeft: '10px' }}>{menu.title}</span>}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div style={{ 
        marginLeft: sidebarOpen ? '250px' : '80px',
        flex: 1,
        transition: 'all 0.3s ease'
      }}>
        {/* Navbar */}
        <div style={{
          padding: '15px 30px',
          backgroundColor: 'white',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 90
        }}>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: '#4682B4',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <i className="fas fa-bars"></i>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{
              backgroundColor: '#4682B4',
              color: 'white',
              padding: '8px 15px',
              borderRadius: '20px',
              fontWeight: '500'
            }}>
              <i className="fas fa-user" style={{ marginRight: '8px' }}></i>
              Admin Tapatupa
            </div>

            {/* Tombol Logout */}
            <button 
              onClick={handleLogout}
              style={{
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                padding: '8px 15px',
                borderRadius: '20px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              <i className="fas fa-sign-out-alt" style={{ marginRight: '8px' }}></i>
              Logout
            </button>
          </div>
        </div>

        {/* Page Content */}
        <main style={{ 
          padding: '30px',
          minHeight: 'calc(100vh - 140px)',
          backgroundColor: 'white'
        }}>
          {children}
        </main>

        {/* Footer */}
        <footer style={{ 
          padding: '15px 30px',
          backgroundColor: 'white',
          borderTop: '1px solid #eee',
          textAlign: 'center',
          color: '#64748b'
        }}>
          <p style={{ margin: 0 }}>&copy; 2025 Tapatupa. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

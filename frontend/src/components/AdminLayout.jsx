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
        { title: "User", path: "/user-index" },
        { title: "Retribusi", path: "/wajib-retribusi-index" }
      ]
    },
    {
      title: "Management Sewa",
      icon: "fa-clipboard-list",
      submenus: [
        { title: "Jenis Permohonan", path: "/jenis-sewa" },
        { title: "Peruntukan Sewa", path: "/peruntukan-sewa" },
        { title: "Permohonan Sewa", path: "/permohonan-sewa" }
      ]
    },
    {
      title: "Waktu Permohonan",
      icon: "fa-clock",
      submenus: [
        { title: "Jangka Waktu Sewa", path: "/jangka-waktu" },
        { title: "Jenis Jangka Waktu", path: "/jenis-jangka-waktu" }
      ]
    },
    {
      title: "Management Status",
      icon: "fa-edit",
      submenus: [
        { title: "Status", path: "/status" },
        { title: "Jenis Status", path: "/jenis-index" }
      ]
    },
    {
      title: "Objek",
      icon: "fa-map",
      submenus: [
        { title: "Jenis Objek", path: "/jenis-objek" },
        { title: "Lokasi Objek", path: "/lokasi-objek" },
        { title: "Tarif Objek", path: "/tarif-objek" },
        { title: "Objek Retribusi", path: "/objek-retribusi" }
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

          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
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
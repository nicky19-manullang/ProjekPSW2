import React from "react";

export default function Dashboard() {
  return (
    <section className="content">
      <div className="container-fluid">
        <h1 className="mb-4 text-center">Welcome to Admin Dashboard</h1>

        <div className="row">
          {/* Card 1 */}
          <div className="col-lg-3 col-6">
            <div className="small-box bg-info">
              <div className="inner">
                <h3>150</h3>
                <p>New Orders</p>
              </div>
              <div className="icon">
                <i className="fas fa-cart-plus"></i>
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-3 col-6">
            <div className="small-box bg-success">
              <div className="inner">
                <h3>53<sup>%</sup></h3>
                <p>Bounce Rate</p>
              </div>
              <div className="icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-3 col-6">
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>44</h3>
                <p>User Registrations</p>
              </div>
              <div className="icon">
                <i className="fas fa-users"></i>
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-lg-3 col-6">
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>65</h3>
                <p>Support Tickets</p>
              </div>
              <div className="icon">
                <i className="fas fa-ticket-alt"></i>
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Main Card with Additional Info */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Analytics Overview</h3>
          </div>
          <div className="card-body">
            <div className="row">
              {/* Placeholder for Chart */}
              <div className="col-12 col-md-6">
                <div className="chart-container" style={{ height: "300px", width: "100%" }}>
                  {/* Implement chart here */}
                  <h4>Chart Placeholder</h4>
                  <p>Implement chart using libraries like Chart.js.</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="col-12 col-md-6">
                <h4>Quick Stats</h4>
                <ul>
                  <li>New Users: 120</li>
                  <li>Active Users: 500</li>
                  <li>Total Revenue: $20,000</li>
                  <li>Total Products: 150</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

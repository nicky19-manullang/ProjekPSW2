import React from "react";

export default function Dashboard() {
  return (
    <section className="content">
      <div className="container py-5">
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-2">Welcome to Tapatupa, Admin!</h1>
        <p className="mb-4 text-muted">What do you need help with?</p>

        {/* Search */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Ex. Permohonan Sewa"
            className="form-control"
            style={{ maxWidth: "400px" }}
          />
        </div>

        {/* Section: Please select a category */}
        <h5 className="font-weight-bold mb-3">Please select a category</h5>

        <div className="row">
          {/* Card Item */}
          <div className="col-md-4 mb-4">
            <div className="card text-white bg-primary h-100">
              <img
                src="/img/pemohon.png"
                className="card-img-top p-3"
                alt="Pemohon"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Pemohon</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card bg-light h-100">
              <img
                src="/img/sewa.png"
                className="card-img-top p-3"
                alt="Manajemen Sewa"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Manajemen Sewa</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card bg-light h-100">
              <img
                src="/img/waktu.png"
                className="card-img-top p-3"
                alt="Waktu Permohonan"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Waktu Permohonan</h5>
              </div>
            </div>
          </div>

          {/* Tambahan kategori */}
          <div className="col-md-4 mb-4">
            <div className="card bg-light h-100">
              <img
                src="/img/status.png"
                className="card-img-top p-3"
                alt="Manajemen Status"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Manajemen Status</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card bg-light h-100">
              <img
                src="/img/objek.png"
                className="card-img-top p-3"
                alt="Objek"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Objek</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="text-end mt-4">
          <button className="btn btn-primary">Next</button>
        </div>
      </div>
    </section>
  );
}

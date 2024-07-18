import React, { Component } from "react";

class ThongTinGhe extends Component {
  render() {
    return (
      <div>
        <div>
          <button className="text-red-600 text-4xl">
            <span className="w-6 h-6 inline-block bg-black rounded-1"></span>{" "}
            Ghe Da Dat
          </button>
          <button className="text-red-600 text-4xl">
            <span className="w-6 h-6 inline-block bg-green-300 rounded-1"></span>{" "}
            Ghe Dang Dat
          </button>
          <button className="text-red-600 text-4xl">
            <span className="w-6 h-6 inline-block bg-red-500 rounded-1"></span>{" "}
            Ghe Chua Dat
          </button>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">So Ghe</th>
                <th scope="col">Gia</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ThongTinGhe;

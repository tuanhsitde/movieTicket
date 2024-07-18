import React, { Component, Fragment } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinGhe from "./ThongTinGhe";
import danhSachGheData from "../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";

class MovieTicketMenu extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <Fragment key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </Fragment>
      );
    });
  };
  render() {
    return (
      <div className="fixed w-full h-full bg-blend-darken grid container">
        <div className="row">
          <div className="col-8">
            <h1 className="text-gray-600 text-5xl text-center">
              Dat Ve Xem Phim
            </h1>
            <div className="flex justify-center items-center">
              <div className="screen mt-5"></div>
            </div>
            {this.renderHangGhe()}
          </div>
          <div className="col-4">
            <h1 className="text-gray-600 text-5xl text-center">
              Danh Sach Ghe Ban Chon
            </h1>
            <ThongTinGhe />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieTicketMenu;

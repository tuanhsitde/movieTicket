import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disable = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }

      // xet trang thai dang dat
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe,
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          disabled={disable}
          key={index}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          onClick={() => {}}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
    } else {
      return (
        <Fragment>
          {" "}
          {this.props.hangGhe.hang}
          {this.renderGhe()}{" "}
        </Fragment>
      );
    }
  };
  render() {
    return (
      <div className="text-left ml-4 text-2xl">{this.renderHangGhe()}</div>
    );
  }
}
const mapStateToProps = (state) => {
  return { danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat };
};
export default connect(mapStateToProps)(HangGhe);

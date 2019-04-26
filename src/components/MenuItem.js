import React, { Component } from "react";

export default class MenuItem extends Component {

  render() {
    const {row} = this.props;
    return (
      <div className={`menu-item ${row.active ? "active" : ""}`}>
        <p className="item-title">{row.title}</p>
        <p className="sub-txt">{row.subTitle}</p>
      </div>
    );
  }
}

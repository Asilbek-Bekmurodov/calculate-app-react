import React, { Component } from "react";

import sunImg from "../assets/sun.svg";
import moonImg from "../assets/moon.svg";
import { darkTheme , lightTheme, GlobalStyles } from "./themes";

import { ThemeProvider } from "styled-components";
import "./second.css";

export default class SecondCalculate extends Component {
  state = {
    count: "0",
    total: "",
    theme: "",
  };

  handleClick = (e) => {
    this.setState({ total: this.state.total.concat(e.target.innerText) });
  };

  handleResult = () => {
    // eslint-disable-next-line no-eval
    this.setState({ count: eval(this.state.total) });
  };

  handleReset = () => {
    this.setState({ total: "", count: 0 });
  };
  handleBack = () => {
    this.setState({
      total: this.state.total.slice(0, this.state.total.length - 1),
    });
  };

  onChangeTheme = () => {
    this.setState({
      theme: "light" ? this.state.theme : "dark" ? this.state.theme : "light",
    });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme ===  "light" ? darkTheme : lightTheme}>
      <GlobalStyles/>
        <div className="second">
          <div className="calculate"> 
            <div className="calculate-display">
              <div className="icon-theme">
                <img
                  className="sun-icon"
                  src={sunImg}
                  alt=""
                  onClick={this.onChangeTheme}
                />
                <img className="moon-icon" src={moonImg} alt="" />
              </div>
              <div className="result">
                <h1>{this.state.count === "" ? 0 : this.state.count}</h1>
                <span id="result-table">{this.state.total}</span>
              </div>
            </div>
            <div className="calculate-controls">
              <div
                onClick={this.handleReset}
                className="calculate-control operators"
              >
                C
              </div>
              <div
                onClick={this.handleBack}
                className="calculate-control operators"
              >
                <i className="fa-solid fa-delete-left fa-1x"></i>
              </div>
              <div
                onClick={this.handleClick}
                className="calculate-control operators"
              >
                %
              </div>
              <div
                onClick={this.handleClick}
                className="calculate-control operators"
              >
                /
              </div>
              <div
                onClick={this.handleClick}
                className="calculate-control nums"
              >
                7
              </div>
              <div
                onClick={this.handleClick}
                className="calculate-control nums"
              >
                8
              </div>
              <div
                onClick={this.handleClick}
                className="calculate-control nums"
              >
                9
              </div>
              <div
                onClick={this.handleClick}
                className="calculate-control operators"
              >
                *
              </div>
              <div
                onClick={this.handleClick}
                className="calculate-control nums"
              >
                4
              </div>
              <div
                onClick={this.handleClick}
                className="calculate-control nums"
              >
                5
              </div>
              <div
                onClick={this.handleClick}
                className="calculate-control nums"
              >
                6
              </div>
              <div
                onClick={this.handleClick}
                className="calculate-control operators"
              >
                -
              </div>
              <div
                onClick={this.handleClick}
                className="calculate-control nums"
              >
                1
              </div>
              <div
                onClick={this.handleClick}
                className="calculate-control nums"
              >
                2
              </div>
              <div
                onClick={this.handleClick}
                className="calculate-control nums"
              >
                3
              </div>
              <div
                onClick={this.handleClick}
                className="calculate-control operators"
              >
                +
              </div>
            </div>

            <div className="bottom-controls" onClick={this.handleClick}>
              <div className="bottom-control" onClick={this.handleClick}>
                0
              </div>
              <div className="bottom-control" onClick={this.handleClick}>
                .
              </div>
            </div>
            <div
              className="bottom-control font equal"
              onClick={this.handleResult}
            >
              =
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

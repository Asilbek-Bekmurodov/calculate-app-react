import React, { Component } from 'react'

import del from "../assets/delete.svg";
import "./first.css";

export default class FirstCalculate extends Component {
    state = {
        count : '0',
        total: '',
    }
    handleCount = (e) => {
        this.setState({total : this.state.total.concat(e.target.innerText)})
    }

    handleReset = () => {
        this.setState({total: '', count: 0})
    }

    handleResult = () => {
        // eslint-disable-next-line no-eval
        this.setState({count: eval(this.state.total)})
    }

    handleBack = () => {
        this.setState({total: this.state.total.slice(0, this.state.total.length-1)})
    }
  render() {
    return (
        <div className='first'>
            <div className="calculator">
                <div className="calculator__top">
                    <b className="num">{this.state.total}</b>
                    <h1 className="big__num">{this.state.count === "" ? 0 : this.state.count}</h1>
                    <img src={del} alt=""  onClick={this.handleBack}/>
                </div>

                <div className="calculator__bottom">
                    <div className="row bg">
                        <div className="div" onClick={this.handleReset}>C</div>
                        <div className="div" onClick={this.handleCount}>%</div>
                        <div className="div" onClick={this.handleCount}>+/-</div>
                        <div className="div" onClick={this.handleCount}>/</div>
                    </div>

                    <div className="row">
                        <div className="div" onClick={this.handleCount}>7</div>
                        <div className="div" onClick={this.handleCount}>8</div>
                        <div className="div" onClick={this.handleCount}>9</div>
                        <div className="div bg" onClick={this.handleCount}>*</div>
                    </div>

                    <div className="row">
                        <div className="div" onClick={this.handleCount}>4</div>
                        <div className="div" onClick={this.handleCount}>5</div>
                        <div className="div" onClick={this.handleCount}>6</div>
                        <div className="div bg" onClick={this.handleCount}>-</div>
                    </div>

                    <div className="row">
                        <div className="div" onClick={this.handleCount}>1</div>
                        <div className="div" onClick={this.handleCount}>2</div>
                        <div className="div" onClick={this.handleCount}>3</div>
                        <div className="div bg" onClick={this.handleCount}>+</div>
                    </div>

                    <div className="row">
                        <div className="div flex" onClick={this.handleCount}>0</div>
                        <div className="div flex_1" onClick={this.handleCount}>.</div>
                        <div className="div bg flex_1"onClick={this.handleResult}>=</div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

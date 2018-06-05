import React, { Component } from 'react';

export default class AddorMinu extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    increment() {
        this.props.store.dispatch({
            type: "INCREAMENT"
        });
        this.changeCount();
    }

    componentDidMount() {
        console.log(this.props, "dk");
    }

    decrement() {
        console.log("dddd");
         this.props.store.dispatch({
             type: "DECREAMENT"
         });
       this.changeCount();
    }

    changeCount() {
          this.props.store.subscribe(() => {
              this.setState({
                  count: this.props.store.getState()
              });
          });
    }

    render() {
        return (
            <div>
                <div className="opt">
                    <button className="add" onClick={this.increment.bind(this)}>+</button>
                    <button className = "minu" onClick = {this.decrement.bind(this)} > - </button>
                 </div>
                <div><span>{this.state.count}</span></div>
            </div>
        )
    }
}
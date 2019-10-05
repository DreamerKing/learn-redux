import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: 0
        }
    }
    
    clickBnt(){
        this.setState({ name: "King"});
        setTimeout(() => {
            this.setState({ age: 1 });
            console.log("templatei");
        }, 0);
    }

    render() {
        let { name, age } = this.state;
        //
         console.log(name, age);
        return (
            <div>
                <button onClick={this.clickBnt.bind(this)}>Click</button>
                {/* <div>{{name}}:{{age}}</div> */}
            </div>
        )
    }
}

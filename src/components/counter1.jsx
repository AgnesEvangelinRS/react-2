import React, { Component } from 'react';
class Count extends Component {
    state = { 
        count : this.props.counterObj.value
     }
     //constructor()
    // {
         //super();
        //this.handleIncrement = this.handleIncrement.bind(this);
     //}
    render() { 

        return ( 
            <div>
                <span>{this.formatCount()}</span>
                <button onClick ={this.handleIncrement}>Increment</button>
                <button onClick ={() =>this.props.onDelete(this.props.counterObj.id)}>Delete</button> <br/>
            </div>
         );
    }
    formatCount()
    {
        const number = this.state.count;
        return number === 0 ? 'Zero' : number ;
    }
    handleIncrement=()=>{
        this.setState({count: this.state.count + 1});
        console.log(this.props.counterObj.value)
    }
}
 
export default Count ;
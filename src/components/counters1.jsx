import React, { Component } from 'react';
import Count from './counter1';
class Counts extends Component {
    state = {
        counters :[
            {id: 1, value :0},
            {id: 2, value :0},
            {id: 3, value :0},
            {id: 4, value :0}
        ]
      }
    render() { 
        return ( <div>
           {this.state.counters.map(child => 
           <Count key ={child.id} counterObj ={child} onDelete ={this.handleDelete} onIncrement ={this.handleIncrement}
           />)}

        </div> );
    }
   // handleIncrement =() =>
    //{
      //  this.setState({value : this.state.counters.value + 1})
    //}
    handleDelete = counterID =>
    {
        const countersNew = this.state.counters.filter(c=>c.id !== counterID);
        this.setState({counters:countersNew});
    } 
}
 
export default Counts;
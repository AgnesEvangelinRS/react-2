import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
 state ={
     counters:[
         {id:1, value:0},
         {id:2, value:0},
         {id:3, value:0},
         {id:4, value:0}
     ]
 }
 handleDelete= counterID =>
 {
  const countersNew = this.state.counters.filter(c=>c.id !== counterID);
  this.setState({counters:countersNew});
 }
 //single source of truth
 handleReset =() =>
 {
const counters =this.state.counters.map(c => {
    c.value =0;
    return c;
 });
 
 this.setState({counters});
 };
 handleIncrement = counter =>
 {
     //cloning using spread operator
    const counters = [... this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] ={...counter};
    counters[index].value++;
     //counters[0].value++;
     this.setState({counters});
     //console.log(this.state.counters[0])
 };
 componentDidUpdate(prevState, prevProps){
   //  console.log('component updated');
 }
 componentWillUnmount()
 {
    // console.log('component unmounted');
 }
    render() {
        let column ={
             'background-color': '#yellow',
             'border-style': 'solid',
             'padding': '15px',
             'margin-bottom': '10px',
             'margin-top': '10px'
           };
        //console.log('counters rendered') 
        return ( 
            <div>
                <button onClick={this.handleReset} style ={column}>Reset</button><br/>
                {this.state.counters.map(counter =>
                <Counter key={counter.id}   onDelete={this.handleDelete} onIncrement={this.handleIncrement}
               // value={counter.value} id={counter.id}
               counter ={counter}
                />)}
            </div>
         );
    }
}
 
export default Counters;
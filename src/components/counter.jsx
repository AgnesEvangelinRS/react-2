import React, { Component } from 'react';
class Counter extends Component {
    //remove the local state of the component to have single source of truth
   // state = {
        //count :0,
      // value:this.props.counter.value,
        //tags :['tag1','tag2','tag3'],
        //id:this.props.id

      //}
      /*constructor()
        {
            super();
           this.handleIncrement = this.handleIncrement.bind(this);
        }*/

      //handleIncrement =()=>{
        //we canot modify any property of the props object. we can only modify state
        //this.props.value=0
        //this.state.count++
        //console.log(product)
        //this.setState({count : this.state.count + 1});
           // this.setState({value : this.state.value + 1});
       
       // }
        //conditional rendering
       /* renderTag(){
            if(this.state.tags.length ===0) return <p>There are no tags</p>
            return <ul>{this.state.tags.map(tag =><li key ={tag}>{tag}</li>)}</ul>
        }*/
           
        //Passing event arguments
       /* doHandleIncrement =() =>{
            this.handleIncrement({id:1});
        }*/
    render() { 
        let column ={
           // 'float': 'left',
            //'width': '30%',
            'background-color': '#ffebcd',
            'border-style': 'solid',
           'padding': '15px',
           'margin-bottom': '10px',
             'margin-TOP': '10px',
             'margin-left':'10px'
          };
        //console.log('props', this.state.id);
        //console.log('counter rendered') 
        return ( 
            <div className="row">
                <span className={this.dynamicClass()} style ={column}>{this.formatCount()}</span>
                <button onClick ={() =>this.props.onIncrement(this.props.counter)} style ={column}>Increment</button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id)}style ={column}>Delete</button><br/>

            </div>
         );
    }
//adding class dynamically
    dynamicClass() {
        let className = 'menu';
      //  className = this.state.count === 0 ? ' menu-active' : className;
        return className;
    }

 

    formatCount(){
        const value =this.props.counter.value;
        //
        //const {value} =this.state.value;
        return value ===0? "Zero" :value;
    }

}
 
export default Counter;



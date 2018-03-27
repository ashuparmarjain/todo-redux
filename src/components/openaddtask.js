import React,{Component} from 'react';
import {toggleView} from '../actions/action.js';
import {connect} from 'react-redux';
class OpenAddTask extends Component{

	render(){
		return (
				<div className="app-addTask">
					<button onClick = {this.props.toggleView}> Add a task <span><i className="fa fa-plus" aria-hidden="true"></i></span> </button>
				</div>

			)
	}
}

const mapDispatchToProps = (dispatch)=>{	 
	return {toggleView:()=>{dispatch(toggleView())} };
}


export default connect(null,mapDispatchToProps)(OpenAddTask)

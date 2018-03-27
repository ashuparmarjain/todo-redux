import React,{Component} from 'react';
import {connect} from 'react-redux';
import {toggleView,addingTodo,addTodo} from '../actions/action.js';

class AddTaskView extends Component{

	render(){
		return (
				<div className="app-addTask-screen">
					<div className="app-addTask-screen-wrapper"> 
						<div className="app-addTask-header">
							<h2><span onClick={this.props.closeAddTodoView}><i className="fa fa-arrow-left" aria-hidden="true"></i></span> Add Task</h2>
						</div>					
						<div className="app-addTask-content">
							<label>Add Note</label>
							<input type="text" name="task" value={this.props.newTodo} onChange = {(e)=>this.props.addingNewTodo(e.target.value)} />
							<span className="app-errorMsg">Cannot be empty</span>
						</div>
						<div className="app-addTask-footer">
							<button onClick = {this.props.addTodo}> Add Task </button>
						</div>		
					</div>								
				</div>

			)
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		closeAddTodoView : ()=>{dispatch(toggleView())},
		addingNewTodo 	: (e) =>{dispatch(addingTodo(e))},
		addTodo 	: () =>{dispatch(addTodo())}
	}
}

const mapStateToProps = (state) => {
	return {newTodo : state.newTodo}
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTaskView);


import React,{Component} from 'react';
import HomeView from './home.js';
import AddTaskView from './addtaskview.js';
import {connect} from 'react-redux';

class App extends Component{

	render(){		
		return (
			<div className="myApp">
				<HomeView/>	
				 
						{this.props.toogleAddTask && <AddTaskView />}			
				
				<p className="app-taskPending"> { this.props.pendingTask } task pending</p>
			</div>


	)}
} 

function mapStateToProps(state){
	return {
		toogleAddTask:state.addTaskView,
		pendingTask: state.todo.filter(task=>task.status === true).length
	}
}

export default connect(mapStateToProps)(App);
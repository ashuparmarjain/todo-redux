import React,{Component} from 'react';

export default class AddTaskView extends Component{

	render(){
		return (
				<div className="app-addTask-screen">
					<div className="app-addTask-screen-wrapper"> 
						<div className="app-addTask-header">
							<h2><span ><i className="fa fa-arrow-left" aria-hidden="true"></i></span> Add Task</h2>
						</div>					
						<div className="app-addTask-content">
							<label>Add Note</label>
							<input type="text" name="task"/>
							<span className="app-errorMsg">Cannot be empty</span>
						</div>
						<div className="app-addTask-footer">
							<button > Add Task </button>
						</div>		
					</div>								
				</div>

			)
	}
}
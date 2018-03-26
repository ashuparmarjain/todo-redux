import React,{Component} from 'react';
import {connect} from 'react-redux';
 class ToDoList extends Component{
	render(){
		const todoList = this.props.todolist.map((data,index) => {
			return(
					<li key={index} className={!data.status && 'done'} className={(!data.status)?"done" :"not-done"}>
						<span onClick={()=>{this.taskDone(index)}}>
							<i className={(!data.status)?"fa fa-check" :"fa fa-square-o"} aria-hidden="true"></i>
						</span>
						<p className='test'>{data.note}</p>
						<span onClick={()=>{this.deleteTask(index)}}><i className="fa fa-trash-o" aria-hidden="true"></i></span>
						{(data.status) && <span onClick={()=>this.editTaskMode(index)}><i className="fa fa-pencil" aria-hidden="true"></i></span>}
					</li>
				)
		
		});

		return (
				<div className="app-tasks">
					<ul>
						{todoList}			
					</ul>
				</div>	
		)
	}
}

function mapStateToProps(state){
	return {
		todolist : state.todo
	}
}



export default connect(mapStateToProps)(ToDoList);


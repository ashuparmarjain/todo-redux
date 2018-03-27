import React,{Component} from 'react';
import {connect} from 'react-redux';
import {completedTodo,deleteTodo,editTodo} from '../actions/action.js';

 class ToDoList extends Component{
	render(){
		const todoList = this.props.todolist.todo.slice(0).reverse().map((data,index) => {
			return(
					<li key={index} className={!data.status && 'done'} className={(!data.status)?"done" :"not-done"}>
					
						<span onClick={()=>{this.props.taskDone(index)}}>
							<i className={(!data.status)?"fa fa-check" :"fa fa-square-o"} aria-hidden="true"></i>
						</span>
						<p className='test'>{data.note}</p>
						<span onClick={()=>{this.props.deleteTask(index)}}><i className="fa fa-trash-o" aria-hidden="true"></i></span>
						{(data.status) && <span onClick={()=>this.props.editTodo(index)}><i className="fa fa-pencil" aria-hidden="true"></i></span>}
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
		todolist : state
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		taskDone : (element)	=>	{dispatch(completedTodo(element))},
		deleteTask: (element) 	=>  {dispatch(deleteTodo(element))}, 
		editTodo: (element)	=>  {dispatch(editTodo(element))}, 
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);


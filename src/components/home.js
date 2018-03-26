import React,{Component} from 'react';
import OpenAddTask from './openaddtask.js';
import ToDoList from './todolist.js';
export default class HomeView extends Component{
	render(){
		return (
				<div className="app-mainScreen">
					<div className="app-title">
						<h1>To Do List</h1>
					</div>
					<OpenAddTask/>				
					<ToDoList />			
				</div>

			)
	}
}
let initialState = {
	addTaskView : false,
	isEditing:-1,
	todo:[],
	newTodo:'',
	isError:false	
};

export default function todoAppReducers (state = initialState, action){
	switch(action.type){
		case 'TOGGOLE_VIEW' : 
			return Object.assign({},state,{addTaskView:!state.addTaskView,newTodo:'',isEditing:-1});
			break;
		case 'COMPLETED_TODO' :
			const newState1 = {...state};
			newState1.todo[state.todo.length-(action.payload+1)].status = !state.todo[state.todo.length-(action.payload+1)].status;
			return newState1;
			break;	
		case 'DELETE_TODO' :
			const newState2	= {...state};
			newState2.todo.splice(state.todo.length-(action.payload+1),1);			
			return newState2;
			break;
		case 'ADDING_TODO' :
			return Object.assign({},state,{newTodo:action.payload});
			break; 	
		case 'ADD_TODO' :
			const newState4 = {...state};
			if((newState4.newTodo !== '') && (newState4.isEditing < 0)){
				newState4.todo.push({note:newState4.newTodo,status:true});
				newState4.isError = false;
				newState4.addTaskView  = false;				
			} else if((newState4.newTodo !== '') && (newState4.isEditing >-1)){
				newState4.todo[newState4.isEditing].note = newState4.newTodo;
				newState4.isError = false;
				newState4.addTaskView  = false;
			} else {
				newState4.isError = true;
			}
			
			newState4.newTodo = '';
			newState4.isEditing = -1;
			return newState4;
			break; 						
		case 'EDIT_TODO' :
			return Object.assign({},state,{newTodo:state.todo[state.todo.length-(action.payload+1)].note,addTaskView:true,isEditing:state.todo.length-(action.payload+1)});
			break; 
		default :
			return state;					
	}

	return state;
}
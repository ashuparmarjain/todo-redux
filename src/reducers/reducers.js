let initialState = {
	addTaskView : false,
	todo:[
			{
				note:"hello",
				status:true
			},
			{
				note:"hello1",
				status:true
			}
		],
	newTodo:''	
};

export default function todoAppReducers (state = initialState, action){
	switch(action.type){
		case 'TOGGOLE_VIEW' : 
			const newState = {...state};
			newState.addTaskView = !newState.addTaskView;
			return newState;
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
			const newState3 = {...state};
			newState3.newTodo = action.payload;
			return newState3;
			break; 	
		case 'ADD_TODO' :
			const newState4 = {...state};
			if(newState4.newTodo !== ''){
				newState4.todo.push({note:newState4.newTodo,status:true});
				newState4.addTaskView  = false;
				newState4.newTodo = '';
			}
			return newState4;
			break; 						
		case 'EDIT_TODO' :
			const newState5 = {...state};
			newState5.newTodo = newState5.todo[state.todo.length-(action.payload+1)].note;
			newState5.addTaskView = true;
			return newState5;
			break; 				
	}
	return state;
}
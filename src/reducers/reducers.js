import action from '../actions/action.js';

let initialState = {
	addTaskView : false,
	todo:[{note:"hello",status:false}]
};

export default function todoAppReducers (state = initialState, action){
	switch(action.type){
		case 'TOGGOLE_VIEW' : 
			const newState = {...state};
			newState.addTaskView = true;
			return newState;
			break;
		
	}
	return state;
}
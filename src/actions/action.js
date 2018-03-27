export  function toggleView (){
	return {		
		type:"TOGGOLE_VIEW"
	}
}

export  function completedTodo (element){
	return {
		type:"COMPLETED_TODO",
		payload:element
	}
}

export  function deleteTodo (element){
	return {
		type:"DELETE_TODO",
		payload:element
	}
}

export function addingTodo(e){
	return {
		type : "ADDING_TODO",
		payload:e
	}
}

export function addTodo(e){
	return {
		type : "ADD_TODO",
		payload:e
	}
}

export function editTodo(element){
	return {
		type : "EDIT_TODO",
		payload:element
	}
}
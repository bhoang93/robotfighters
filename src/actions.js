import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
 } from './constants'

export const setSearchField = (text) => ({ // Action that takes user typing.
	type: CHANGE_SEARCH_FIELD, // What it does. A constant is usually capitilised.
	payload: text // Payload is what it is sending to the recducer.
})

export const requestRobots = () => (dispatch) => {
	dispatch({ type: REQUEST_ROBOTS_PENDING });
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
		.catch(err => dispatch({type: REQUEST_ROBOTS_FAILED, payload: err }))
}
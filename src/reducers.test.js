import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
 } from './constants'

import * as reducers from './reducers';

describe('searchRobots', () => {
	const initialStateSearch ={
		searchField: ''
	}
	it('should return the initial state', () => {
		expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
	})

	it('should handle CHANGE_SEARCH_FIELD', () => {
		expect(reducers.searchRobots(initialStateSearch, {
			type: CHANGE_SEARCH_FIELD,
			payload: 'abc'
		})).toEqual({
			searchField: 'abc'
		})
	})
})

describe('requestsRobots', () => {
	const initialStateRobots = {
		robots: [],
		isPending: false,
		error: ''
	}

	it('should return initialState', () => {
		expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
	})

	it('should handle REQUEST_ROBOTS_PENDING', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_PENDING,
			payload: { isPending: true }
		})).toEqual({
			robots: [],
			isPending: true,
			error: ''
		})
	})

	it('should handle REQUEST_ROBOTS_SUCCESS', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_SUCCESS,
			payload: [{ 
				id: '123',
				name: 'test',
				email: 'test@1.com'
			 }]
		})).toEqual({
			robots: [{				
				id: '123',
				name: 'test',
				email: 'test@1.com'
			}],
			isPending: false,
			error: ''
		})
	})

	it('should handle REQUEST_ROBOTS_PENDING', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_FAILED,
			payload: 'there was an error' 
		})).toEqual({
			robots: [],
			isPending: false,
			error: 'there was an error'
		})
	})
})
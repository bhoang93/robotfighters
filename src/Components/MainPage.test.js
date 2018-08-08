import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'Obo',
			email: 'hold@1.com'
		}],
		searchField: 'a',
		isPending: false
	}
	wrapper = shallow(<MainPage { ...mockProps}/>)
})

it('renders main page properly', () => {
	expect(wrapper).toMatchSnapshot();
})

it('it filters robots properly', () => {
	expect(wrapper.instance().filteredRobots()).toEqual([])
})

it('it filters robots properly', () => {
		const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'Obo',
			email: 'hold@1.com'
		}],
		searchField: 'Obo',
		isPending: false
	}
	const wrapper2 = shallow(<MainPage { ...mockProps2}/>)
	expect(wrapper2.instance().filteredRobots()).toEqual( [{
			id: 3,
			name: 'Obo',
			email: 'hold@1.com'
		}])
})

it('it filters robots properly', () => {
		const mockProps3 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'Obo',
			email: 'hold@1.com'
		}],
		searchField: 'a',
		isPending: false
	}
	const filteredRobots = []
	const wrapper2 = shallow(<MainPage { ...mockProps3}/>)
	expect(wrapper2.instance().filteredRobots()).toEqual(filteredRobots)
})

it('Should not return anything if it is pending', () => {
		const mockProps3 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'Obo',
			email: 'hold@1.com'
		}],
		searchField: 'a',
		isPending: true
	}
	const filteredRobots = []
	const wrapper2 = shallow(<MainPage { ...mockProps3}/>)
	expect(wrapper2.instance().filteredRobots()).toEqual(filteredRobots)
})
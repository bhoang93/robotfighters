import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expects to render Card component', () => {
	const mockRobots = [
		{
			id: 1,
			name: 'Chester',
			username: 'Terry',
			email: 'f@1.com'
		}
	]
	expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})

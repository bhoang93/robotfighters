import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('expects to render Card component', () => {
	expect(shallow(<Header CounterButton={<button>Counter</button>}/>)).toMatchSnapshot();
})

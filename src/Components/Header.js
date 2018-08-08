import React, {Component} from 'react';
import CounterButton from './CounterButton';

	class Header extends Component {
		render() {
			return (<div>
			<h1 className='f1'>Super Robot Fighting League</h1>
				<CounterButton colour="red"/>
			</div>)
		}
	}

export default Header;
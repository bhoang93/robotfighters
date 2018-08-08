import React from 'react';
import Card from '../Components/Card';

const CardList = ({ robots }) => {
	return (
		<div> 
			{
		robots.map((user, i) => {
		return (<Card 
			key={robots[i].id}
			id={robots[i].id} 
			name={robots[i].name} 
			email={robots[i].email}
			 />
			);
	})
	}
			</div>
		);
	} // DIV IS IMPORTANT FFS

export default CardList;
import React from 'react';

function Filter({ setFilter }) {
	return(
			<div className='filter'>
				<button onClick={(() => setFilter('all'))}>All</button>
				<button onClick={(() => setFilter('personnel'))}>Personal</button>
				<button onClick={(() => setFilter('important'))}>Important</button>
				<button onClick={(() => setFilter('travail'))}>Job</button>
			</div>
		)
}

export default Filter;
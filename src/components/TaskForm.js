import React, { useState } from 'react';

function TaskForm({addTask}) {
	const[text,setText] = useState('');
	const [category,setCategory] = useState('personnel');

		const handleSubmit = (e) => {
			e.preventDefault();
			if(!text) return;
			const newTask = {
				id: Date.now(),
				text,
				category,
				completed: false,
			};

			addTask(newTask);
			setText('')
			setCategory('personnel')
		};

		return(
				<form className='task-form' onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="New Task"
						value={text}
						onChange={(e) => setText(e.target.value)}
					 />
					 <select value={category} onChange={(e) => setCategory(e.target.value)}>
					 	<option value='personnel'>Personnel</option>
					 	<option value='important'>Important</option>
					 	<option value='travail'>Travail</option>
					 </select>
					 <button type='submit'>Ajouter</button>
				</form>
			);
}

export default TaskForm;
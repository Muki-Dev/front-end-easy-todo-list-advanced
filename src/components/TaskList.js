import React, { useState } from 'react';

function TaskList({tasks, filter, deleteTask, toggleTask, updateTask}){
	const [editingId, setEditingId] = useState(null);
	const[editText,setEditText] = useState('');

	const filteredTasks = tasks.filter(task =>{
		if(filter === 'all') return true;
		return task.category === filter;
	} );

	const handleUpdate = (task) => {
		updateTask({...task,text: editText});
		setEditingId(null);
		setEditText('');
	};

	return(
			<ul className='task-list'>
				{
					filteredTasks.map(task => (
							<li key={task.id} className={task.completed ? 'completed' : ''}>
								{
									editingId === task.id ? (
											<>
												<input 
													value={editText}
													onChange={(e) => setEditText(e.target.value)}
												/>
												<button onClick={() => handleUpdate(task)}>OK</button>
											</>
										):(
											<>
												<span onClick={() => toggleTask(task.id)}>{task.text}</span>
												<em>({task.category})</em>
												<button onClick={() => {setEditingId(task.id); setEditText(task.text)}}>Edit</button>
												<button onClick={() => deleteTask(task.id)}>Delete</button>
											</>
										)
								}
							</li>
						))
				}
			</ul>
		);
}

export default TaskList;
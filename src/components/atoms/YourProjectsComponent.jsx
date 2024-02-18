import { useState } from 'react';

function YourProjectsComponent({ clickAddProject, taskElement, onChildClick}) {
	const [taskClick, setTaskClick] = useState(null);
	
	function handleTaskClick(index) {
		setTaskClick(index);	
		onChildClick(index)
	}
	
	const taskList = taskElement.map((task, index) => {
		return (
			<button
			key={index}
			onClick={() => {
				handleTaskClick(index)
			}}
			className={`text-slate-500 text-xl text-left w-fit ml-10 mt-3 p-1 ${taskClick === index ? 'bg-gray-500 w-80 text-white': '' }`}
			>
				{task}
			</button>
		);
	});
	
	function handleClick() {
		clickAddProject(false);
	}

	return (
		<div className='flex flex-col mt-20'>
			<h1 className='text-white ml-10 font-sans uppercase font-semibold text-2xl'>
				Your Projects
			</h1>
			<button
				className='bg-zinc-800 text-slate-500 w-40 ml-10 my-14 text-xl py-3 rounded-lg'
				onClick={handleClick}
			>
				+ Add Project
			</button>
			<ul className='flex flex-col'>{taskList}</ul>
		</div>
	);
}

export default YourProjectsComponent;

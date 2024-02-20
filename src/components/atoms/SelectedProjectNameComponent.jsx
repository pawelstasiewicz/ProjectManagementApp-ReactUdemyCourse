import { useState, useRef } from 'react';

function SelectedProjectNameComponent({
	taskElement,
	indexElement,
	deleteTask,
}) {
	const [addTask, setAddTask] = useState('');
	const [clickedBtn, setClickedBtn] = useState(true);

	const inputRef = useRef(null);

	function handleInputChange(e) {
		setAddTask(e.target.value);
	}

	function handleClick() {
		setClickedBtn(false);
	}

	const changeDate = () => {
		const selectedDate = inputRef.current.value;

		const  paragraphDate = document.createElement('p')
		paragraphDate.textContent = selectedDate
		paragraphDate.style.margin = '10px 0 10px 0'

		inputRef.current.parentNode.insertBefore(paragraphDate, inputRef.current.nextSibling)
		inputRef.current.style.display = 'none'
	};

	return (
		<div className='flex flex-col w-3/5 '>
			<div className='flex flex-row w-full justify-between mt-16 ml-10'>
				<div>
					<h1 className='text-5xl font-bold '>{taskElement[indexElement]}</h1>
					<div className='flex flex-row'>
						<input
							type='date'
							className='text-slate-500 mt-10'
							ref={inputRef}	
						/>
					</div>
					<button onClick={changeDate} className='h-5 my-auto mt-3 mr-20'>+Add date</button>
				</div>
				<button className='h-5 my-auto mr-20' onClick={deleteTask}>
					Delete
				</button>
			</div>
			<div className='mt-5 ml-10 mr-10 flex flex-row justify-between'>
				<input
					className='h-20 w-4/5'
					type='text'
					placeholder='Write your task description '
					textarea='true'
				/>
				<button className='w-32 my-auto bg-slate-500'>+Add description</button>
			</div>
			<hr className='mt-5 ml-10 mr-10' />
			<div className='mt-16 ml-10'>
				<h1 className='text-5xl font-bold '>Tasks</h1>
				<div>
					<input
						className='mt-5 h-10 w-2/5'
						type='text'
						value={addTask}
						onChange={handleInputChange}
					/>
					<button className='ml-5' onClick={handleClick}>
						Add Task
					</button>
				</div>
				<div>
					{clickedBtn ? (
						''
					) : (
						<div className='flex flex-row justify-between mt-10 bg-slate-200 h-24'>
							<p className='ml-10 my-auto'>{addTask}</p>
							<button className='mr-12'>Clear</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default SelectedProjectNameComponent;

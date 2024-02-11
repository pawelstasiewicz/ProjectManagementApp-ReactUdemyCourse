import MainScreenComponent from '../molecules/MainScreenComponent';
import SidebarComponent from '../molecules/SidebarComponent';
import AddTitlePopupComponent from '../molecules/AddTitlePopupComponent';
import { useState } from 'react';

function MainPageComponent() {
	const [activatePopup, setActivatePopup] = useState(true)
	let taskElement = ''

	function handleChange(data){
		setActivatePopup(data)
	}

	function createTask(task){
		taskElement = task
	}


	return (
		<>
			<div className='flex flex-row mt-20 h-screen '>
				<SidebarComponent className='basin-1/4 z-0' clickAddProject={handleChange} taskElement={taskElement}/>
				<MainScreenComponent className='basin=1/3 z-0' clickCreateProject={handleChange}/>
			</div>
				{activatePopup ? '' : <AddTitlePopupComponent clickExitBtn={handleChange} onSend={createTask}/>}
		</>
	);
}

export default MainPageComponent;

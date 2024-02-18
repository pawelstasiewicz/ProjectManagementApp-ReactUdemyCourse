import MainScreenComponent from '../molecules/MainScreenComponent';
import SidebarComponent from '../molecules/SidebarComponent';
import AddTitlePopupComponent from '../molecules/AddTitlePopupComponent';
import SelectedProjectComponent from '../molecules/SelectedProjectComponent';
import { useState } from 'react';

function MainPageComponent() {
	const [activatePopup, setActivatePopup] = useState(true)
	const [taskElement, setTaskElement] = useState([])
	const [indexElement, setIndexElement] = useState()

	function handleChange(data){
		setActivatePopup(data)
	}

	function createTask(task){
		setTaskElement(prevState => [...prevState, task])
	}

	function handleChildClick(index){
		setIndexElement(index)
	}
	


	return (
		<>
			<div className='flex flex-row mt-20 h-screen '>
				<SidebarComponent className='basin-1/4 z-0' clickAddProject={handleChange} taskElement={taskElement} handleChildClick={handleChildClick}/>
				{taskElement.length === 0 ? 
				 <MainScreenComponent className='basin-1/3 z-0' clickCreateProject={handleChange}/> :
				<SelectedProjectComponent taskElement={taskElement} indexElement={indexElement}/>
				}
			</div>
				{activatePopup ? '' : <AddTitlePopupComponent clickExitBtn={handleChange} onSend={createTask}/>}
		</>
	);
}

export default MainPageComponent;

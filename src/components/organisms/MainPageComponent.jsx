import MainScreenComponent from '../molecules/MainScreenComponent';
import SidebarComponent from '../molecules/SidebarComponent';
import AddTitlePopupComponent from '../molecules/AddTitlePopupComponent';
import { useState } from 'react';

function MainPageComponent() {
	const [activatePopup, setActivatePopup] = useState(true)

	function handleChange(data){
		setActivatePopup(data)
	}

	return (
		<>
			<div className='flex flex-row mt-20 h-screen '>
				<SidebarComponent className='basin-1/4 z-0' clickAddProject={handleChange}/>
				<MainScreenComponent className='basin=1/3 z-0' clickCreateProject={handleChange}/>
			</div>
				{activatePopup ? '' : <AddTitlePopupComponent clickExitBtn={handleChange}/>}
		</>
	);
}

export default MainPageComponent;

import MainScreenComponent from '../molecules/MainScreenComponent';
import SidebarComponent from '../molecules/SidebarComponent';

function MainPageComponent() {
	return (
		<div className='flex flex-row mt-20 h-screen '>
			<SidebarComponent className='basin-1/4' />
			<MainScreenComponent className='basin=1/3'/>
		</div>
	);
}

export default MainPageComponent;

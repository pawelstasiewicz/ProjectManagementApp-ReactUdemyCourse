import SidebarComponent from '../molecules/SidebarComponent';

function MainPageComponent() {
	return (
		<div className='flex flex-row mt-10 h-full bg-slate-400'>
			<SidebarComponent className='basin-1/4' />
			<h1 className='basin=1/3 my-8 text-center text-5xl font-bold mx-auto'>
				Hello World
			</h1>
		</div>
	);
}

export default MainPageComponent;

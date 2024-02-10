import BookImage from './../../assets/no-projects.png'


function NoProjectComponent({clickCreateProject}) {

    function handleClick(){    
		clickCreateProject(false)    
    }

	return (
		<div className='flex flex-col mx-auto mt-32 items-center'>
			<img className='w-28 h-28' src={BookImage} alt='' />
			<h2 className='my-8 text-center text-5xl font-bold mx-auto'>
				No Project Selected
			</h2>
			<p className='text-3xl text-slate-500'>
				Select a project or get started with a new one
			</p>
			<button className=' text-slate-500 bg-zinc-800 w-52 my-16 text-xl py-4 rounded-lg' onClick={handleClick} >
				Create new project
			</button>
		</div>
	);
}

export default NoProjectComponent;

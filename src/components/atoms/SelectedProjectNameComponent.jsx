function SelectedProjectNameComponent() {
	return (
		<div className="flex flex-col w-3/5 ">
			<div className="flex flex-row w-full justify-between mt-16 ml-10">
				<div>
					<h1 className="text-5xl font-bold ">Learning React</h1>
					<p className="mt-5 text-slate-500">Dec 29, 2024</p>
				</div>
				<button className="h-5 my-auto mr-20">Delete</button>
			</div>
            <div className="mt-5 ml-10 mr-10 flex flex-row justify-between">
                <input className="h-20 w-4/5" type="text"  placeholder="Write your task description " />
                <button className="w-32 my-auto bg-slate-500">+Add description</button>
            </div>
            <hr className="mt-5 ml-10 mr-10"/>
		</div>
	);
}

export default SelectedProjectNameComponent;

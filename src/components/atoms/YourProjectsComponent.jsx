function YourProjectsComponent({clickAddProject}) {

  function handleClick(){
    clickAddProject(false)
  }

  return (
    <div className="flex flex-col mt-20">
        <h1 className="text-white ml-10 font-sans uppercase font-semibold text-2xl">Your Projects</h1>
        <button className="bg-zinc-800 text-slate-500 w-40 ml-10 my-14 text-xl py-3 rounded-lg" onClick={handleClick}>+ Add Project</button>
        <ul className="flex flex-col">
            <li className="text-slate-500 ml-14 text-xl">Learning React</li>
        </ul>
    </div>
  )
}

export default YourProjectsComponent
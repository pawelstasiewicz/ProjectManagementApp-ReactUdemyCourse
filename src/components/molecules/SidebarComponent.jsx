import YourProjectsComponent from "../atoms/YourProjectsComponent"

function SidebarComponent({clickAddProject, taskElement, handleChildClick}) {
  return (
    <div className="bg-black h-full w-1/4 rounded-tr-3xl">
      <YourProjectsComponent clickAddProject={clickAddProject} taskElement={taskElement} onChildClick={handleChildClick}/>
    </div>
  )
}

export default SidebarComponent
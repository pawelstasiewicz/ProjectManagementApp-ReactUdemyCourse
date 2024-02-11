import YourProjectsComponent from "../atoms/YourProjectsComponent"

function SidebarComponent({clickAddProject, taskElement}) {
  return (
    <div className="bg-black h-full w-1/4 rounded-tr-3xl">
      <YourProjectsComponent clickAddProject={clickAddProject} taskElement={taskElement}/>
    </div>
  )
}

export default SidebarComponent
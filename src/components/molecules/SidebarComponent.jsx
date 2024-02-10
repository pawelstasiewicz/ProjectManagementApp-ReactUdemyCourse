import YourProjectsComponent from "../atoms/YourProjectsComponent"

function SidebarComponent({clickAddProject}) {
  return (
    <div className="bg-black h-full w-1/4 rounded-tr-3xl">
      <YourProjectsComponent clickAddProject={clickAddProject}/>
    </div>
  )
}

export default SidebarComponent
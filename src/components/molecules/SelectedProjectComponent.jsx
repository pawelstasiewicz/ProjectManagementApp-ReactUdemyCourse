import SelectedProjectNameComponent from "../atoms/SelectedProjectNameComponent"

function SelectedProjectComponent({ taskElement, indexElement, deleteTask }) {
  return (
    <>
        <SelectedProjectNameComponent taskElement={taskElement} indexElement={indexElement} deleteTask={deleteTask}/>
        
    </>
  )
}

export default SelectedProjectComponent
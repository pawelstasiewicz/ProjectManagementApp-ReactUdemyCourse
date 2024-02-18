import SelectedProjectNameComponent from "../atoms/SelectedProjectNameComponent"

function SelectedProjectComponent({ taskElement, indexElement }) {
  return (
    <>
        <SelectedProjectNameComponent taskElement={taskElement} indexElement={indexElement}/>
        
    </>
  )
}

export default SelectedProjectComponent
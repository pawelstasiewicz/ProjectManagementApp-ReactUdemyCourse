
function TasksComponent({ClickedDeleteTaskButton}) {

    function handleClick(){
        ClickedDeleteTaskButton(false)
    }

    return (
    <>
        <h1 className='mt-20 ml-10 text-5xl font-bold'>Tasks</h1>
        <button onClick={handleClick}>Delete</button>
    </>
  )
}

export default TasksComponent
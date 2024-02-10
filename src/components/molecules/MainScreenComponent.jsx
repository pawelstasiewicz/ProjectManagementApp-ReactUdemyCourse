import NoProjectComponent from '../atoms/NoProjectComponent';
import TasksComponent from '../atoms/TasksComponent';
import { useState } from 'react';

function MainScreenComponent() {
	const [changeScreen, setChangeScreen] = useState(false);

	function ButtonData(data) {
		setChangeScreen(data);
	}

	return (
		<>
			{changeScreen ? (
				<TasksComponent ClickedDeleteTaskButton={ButtonData} />
			) : (
				<NoProjectComponent ClickedCreateProjectButton={ButtonData} />
			)}
		</>
	);
}

export default MainScreenComponent;

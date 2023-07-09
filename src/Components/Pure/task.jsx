import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task, complete, remove }) => {
	useEffect(() => {
		console.log("Created Task");
		return () => {
			console.log(`Task: ${task.name} is going to unmount`);
		};
	}, [task]);

	/* 
		Comprobamos si se trata de un level o de otro 
	*/
	function taskLevelBadge() {
		switch (task.level) {
			case LEVELS.NORMAL:
				return (
					<h6 className="mb-0 ">
						<span className="badge bg-primary">{task.level}</span>
					</h6>
				);
			case LEVELS.URGENT:
				return (
					<h6 className="mb-0 ">
						<span className="badge bg-warning">{task.level}</span>
					</h6>
				);
			case LEVELS.BLOCKING:
				return (
					<h6 className="mb-0 ">
						<span className="badge bg-danger">{task.level}</span>
					</h6>
				);
			default:
				break;
		}
	}

	function taskCompletedIcon() {
		if (task.completed)
			return (
				<i
					onClick={() => complete(task)}
					className="bi bi-check-circle-fill fs-3 task-action"
					style={{ color: "green", fontWeight: "bold" }}
				></i>
			);
		else
			return (
				<i
					onClick={() => complete(task)}
					className="bi bi-circle fs-3 task-action"
					style={{ color: "grey", fontWeight: "bold" }}
				></i>
			);
	}

	return (
		<tr className="fw-normal">
			<th>
				<span className="ms-2">{task.name}</span>
			</th>
			<td className="align-middle">
				<span>{task.description}</span>
			</td>
			<td className="align-middle">{taskLevelBadge()}</td>
			<td className="align-middle">
				{taskCompletedIcon()}
				<i
					onClick={()=> remove(task)}
					className="bi bi-trash fs-3 task-action"
					style={{ color: "tomato", fontWeight: "bold" }}
				></i>
			</td>
		</tr>
	);
};

TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task).isRequired,
	complete: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired,
};

export default TaskComponent;

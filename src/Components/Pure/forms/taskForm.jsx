import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add, length }) => {
	const nameRef = useRef("");
	const descriptionRef = useRef("");
	const levelRef = useRef(LEVELS.NORMAL);

	function addTask(e) {
		e.preventDefault();
		const newTask = new Task(
			nameRef.current.value,
			descriptionRef.current.value,
			false,
			levelRef.current.value
		);

		add(newTask);
	}

	const normalStyle ={
		backgroundColor : 'blue',
		color: 'white',
		fontWeight : 'bold'
	}

	const urgentlStyle ={
		backgroundColor : 'gold',
		color: 'white',
		fontWeight : 'bold'
	}

	const blockingStyle ={
		backgroundColor : 'tomato',
		color: 'white',
		fontWeight : 'bold'
	}

	return (
		<form
			onSubmit={addTask}
			className="d-flex flex-column justify-content-center align-items-center mb-4"
		>
			<div className="form-outline d-flex flex-column gap-2">
				<input
					placeholder="Task name"
					type="text"
					id="inputName"
					ref={nameRef}
					className="form-control form-control-lg"
					required
					autoFocus
				/>
				<input
					placeholder="Task description"
					type="text"
					id="inputDescription"
					ref={descriptionRef}
					className="form-control form-control-lg"
					required
					autoFocus
				/>
				<select
					ref={levelRef}
					defaultValue={LEVELS.NORMAL}
					className="form-control form-control-lg"
				>
					<option style={normalStyle} value={LEVELS.NORMAL}>Normal</option>
					<option	style={urgentlStyle} value={LEVELS.URGENT}>Urgente</option>
					<option style={blockingStyle} value={LEVELS.BLOCKING}>Blocking</option>
				</select>
				<button type="submit" className="btn btn-success btn-lg ">
					{length > 0 ? "Add New Task" : "Create your first Task"}
				</button>
			</div>
		</form>
	);
};

TaskForm.propTypes = {
	add: PropTypes.func.isRequired,
	length: PropTypes.number.isRequired,
};

export default TaskForm;

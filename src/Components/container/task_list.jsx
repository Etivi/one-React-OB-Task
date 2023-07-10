import React, { useState } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../Pure/task";
import { useEffect } from "react";
import "../../styles/task.scss";
import TaskForm from "../Pure/forms/taskForm";
import TaskFormik from "../Pure/forms/taskFormik";

const TaskListComponent = () => {
	const defaultTask1 = new Task(
		"Example1",
		"Default description1",
		true,
		LEVELS.NORMAL
	);
	const defaultTask2 = new Task(
		"Example2",
		"Default description2",
		false,
		LEVELS.URGENT
	);
	const defaultTask3 = new Task(
		"Example3",
		"Default description3",
		false,
		LEVELS.BLOCKING
	);

	// estado del componente
	const [tasks, setTasks] = useState([
		defaultTask1,
		defaultTask2,
		defaultTask3,
	]);
	const [loading, setLoading] = useState(true);

	// Control del ciclo de vuda del componente
	useEffect(() => {
		console.log("Task State has been modified");
		setTimeout(() => {
			setLoading(false);
		}, 1500);
		return () => {
			console.log("TaskList component is going to unmount");
		};
	}, [tasks]);

	function completeTask(task) {
		console.log("Complete this Task:", Task);
		const index = tasks.indexOf(task);
		const tempTask = [...tasks];
		tempTask[index].completed = !tempTask[index].completed;
		// we update the state of the component and it will update the
		// iteration of the tasks in order to show the tasl updated
		setTasks(tempTask);
	}

	function removeTask(task) {
		console.log("Delete this Task:", Task);
		const index = tasks.indexOf(task);
		const tempTask = [...tasks];
		tempTask.splice(index, 1);
		setTasks(tempTask);
	}

	function addTask(task) {
		console.log("Delete this Task:", Task);
		const tempTask = [...tasks];
		tempTask.push(task);
		setTasks(tempTask);
	}

	const Table = () => {
		return (
			<table>
				<thead>
					<tr>
						<th scope="col">Title</th>
						<th scope="col">Description</th>
						<th scope="col">Priority</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{tasks.map((task, index) => {
						return (
							<TaskComponent
								key={index}
								task={task}
								complete={completeTask}
								remove={removeTask}
							/>
						);
					})}
				</tbody>
			</table>
		);
	};

	let taskTable = <Table />;

	if (tasks.length > 0) taskTable = <Table />;
	else
		taskTable = (
			<div className="d-flex flex-column align-items-center">
				<h3>There are no tasks to show</h3>
				<h4>Please, create one</h4>
			</div>
		);

	const LoadingStyle = () => {
		return (
			<div class="d-flex justify-content-center align-items-center h-100">
				<div class="spinner-border text-warning" role="status" >
					<span class="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	};

	let loadingStyleSpinner = <LoadingStyle/>

	return (
		<div className="d-flex flex-column gap-3">
			<div className="col-12">
				<div className="card">
					<div className="card-header p-3">
						<h5>Your Task:</h5>
					</div>
					<div
						className="card-body"
						data-mdb-perfect-scrollbar="true"
						style={{ position: "relative", height: "250px" }}
					>
						{/* TODO: Add Loading Spinner */}
						{loading ? loadingStyleSpinner : taskTable}
					</div>
				</div>
			</div>
			<div>
				<TaskFormik />
				{/* <TaskForm add={addTask} length={tasks.length} /> */}
			</div>
			{/* TODO: Apilcar un for/Map para rederizar una lista de tareas */}
			{/* <TaskComponent task={defaultTask} /> */}
		</div>
	);
};

export default TaskListComponent;

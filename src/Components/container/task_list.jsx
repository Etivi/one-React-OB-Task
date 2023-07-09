import React, { useState } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../Pure/task";
import { useEffect } from "react";
import "../../styles/task.scss";
import TaskForm from "../Pure/forms/taskForm";

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
		setLoading(false);
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
		const index = tasks.indexOf(task);
		const tempTask = [...tasks];
		tempTask.push(task);
		setTasks(tempTask);
	}

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
					</div>
				</div>
			</div>
			<div>
				<TaskForm add={addTask} />
			</div>
			{/* TODO: Apilcar un for/Map para rederizar una lista de tareas */}
			{/* <TaskComponent task={defaultTask} /> */}
		</div>
	);
};

export default TaskListComponent;

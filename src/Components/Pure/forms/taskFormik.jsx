import React from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LEVELS } from "../../../models/levels.enum";

const TaskFormik = () => {
	const initialValues = {
		taskName: "",
		description: "",
		priorityLevel: LEVELS.NORMAL,
	};

	const addTaskSchema = Yup.object().shape({
		taskName: Yup.string()
			.min(5, "El minimo de caracter son 5")
			.required("El nombre es requerido"),
		description: Yup.string()
			.min(10, "El minimo de caracteres es de 10")
			.required("La descripción es requerida"),
		priorityLevel: Yup.string()
			.oneOf(
				[LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING],
				"Debes de seleccionar una prioridad"
			)
			.required("La prioriodad es requerida"),
	});

	return (
		<div>
			<h3>Agregar Tarea</h3>
			<Formik
				initialValues={initialValues}
				validationSchema={addTaskSchema}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 1000));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				{({
					values,
					touched,
					errors,
					isSubmitting,
					handleChange,
					handleBlur,
				}) => (
					<Form
						className="d-flex flex-column gap-2"
						style={{ width: "400px" }}
					>
						<label htmlFor="taskName">Nombre: </label>
						<Field
							id="taskName"
							name="taskName"
							placeholder="Task name"
							type="text"
						/>

						{errors.taskName && touched.taskName && (
							<ErrorMessage name="taskName" component="div" />
						)}

						<label htmlFor="description">Descripción: </label>
						<Field
							id="description"
							name="description"
							placeholder="Task description"
							type="text"
						/>

						{errors.description && touched.description && (
							<ErrorMessage name="description" component="div" />
						)}

						<label htmlFor="priorityLevel">Priority Level: </label>
						<select id="priorityLevel" defaultValue={LEVELS.NORMAL}>
							<option value={LEVELS.NORMAL}>Normal</option>
							<option value={LEVELS.URGENT}>Urgent</option>
							<option value={LEVELS.BLOCKING}>Blocking</option>
						</select>

						{errors.priorityLevel && touched.priorityLevel && (
							<ErrorMessage name="priorityLevel" component="div" />
						)}

						<button type="submit">Add New Task</button>
						{isSubmitting ? <p>Sending yor new task...</p> : null}
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default TaskFormik;

import React, { useState } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../Pure/task';
import { useEffect } from 'react';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', true, LEVELS.NORMAL)

    // estado del componente
    const [task, setTask] = useState(defaultTask);

    // Control del ciclo de vuda del componente
    useEffect(() => {
        console.log('Task State has been modified')
        return () => {
            console.log('TaskList component is going to unmount')
        };
    }, [task]);


    cosnt changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea');
    }

    return (
        <div>
            <h1>
                Your Task:
            </h1>
            {/* TODO: Apilcar un for/Map para rederizar una lista de tareas */}
            <TaskComponent task={defaultTask} />
        </div>
    );
};



export default TaskListComponent;

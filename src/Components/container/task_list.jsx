import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../Pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', true, LEVELS.NORMAL)

    // changeState = (id) => {
    //     console.log('TODO: Cambiar estado de una tarea');
    // }

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

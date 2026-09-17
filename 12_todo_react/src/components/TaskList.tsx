import React from "react";
import TaskItem from "./TaskItem";

// interfaces
import { ITask } from "../interfaces/Task";

import styles from "./TaskList.module.css";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  taskList: ITask[];
  handleDelete(title: string): void;
  handleEdit(task: ITask): void;
  handleComplete(id: number): void;
}

const TaskList = ({
  taskList,
  handleDelete,
  handleEdit,
  handleComplete,
}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleComplete={handleComplete}
          />
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;

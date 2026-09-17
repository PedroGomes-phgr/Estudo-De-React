import { ITask } from "../interfaces/Task";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import styles from "./TaskList.module.css";

interface Props {
  task: ITask;
  handleDelete(title: string): void;
  handleEdit(task: ITask): void;
  handleComplete(id: number): void;
}

const TaskItem = ({
  task,
  handleDelete,
  handleEdit,
  handleComplete,
}: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: task.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`${styles.task} ${task.completed ? styles.taskCompleted : ""}`}
    >
      {/* Área para arrastar */}
      <div className={styles.dragHandle} {...attributes} {...listeners}>
        ☰
      </div>

      {/* Informações da tarefa */}
      <div className={styles.details}>
        <div className={styles.taskTitle}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleComplete(task.id)}
          />

          <h4 className={task.completed ? styles.completed : ""}>
            {task.title}
          </h4>
        </div>

        {/* Badge de dificuldade */}
        <span
          className={`${styles.badge} ${
            task.difficulty <= 2
              ? styles.easy
              : task.difficulty === 3
                ? styles.medium
                : styles.hard
          }`}
        >
          {task.difficulty <= 2
            ? "Fácil"
            : task.difficulty === 3
              ? "Média"
              : "Difícil"}
        </span>
      </div>

      {/* Ações */}
      <div className={styles.actions}>
        <i className="bi bi-pencil" onClick={() => handleEdit(task)} />

        <i className="bi bi-trash" onClick={() => handleDelete(task.title)} />
      </div>
    </div>
  );
};

export default TaskItem;

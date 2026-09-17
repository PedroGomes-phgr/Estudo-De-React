import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

// components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// interfaces
import { ITask } from "./interfaces/Task";

// Drag and Drop
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [];
  });
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  useEffect(() => {
    localStorage.setItem(
      "tasks",

      JSON.stringify(taskList),
    );
  }, [taskList]);

  // Excluir tarefa
  const deleteTask = (title: string): void => {
    setTaskList(
      taskList.filter((task) => {
        return task.title !== title;
      }),
    );
  };

  // Mostrar ou esconder modal
  const hideOrShowModal = (display: boolean) => {
    const modal = document.getElementById("modal");

    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  // Editar tarefa
  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  // Atualizar tarefa
  const updateTask = (
    id: number,

    title: string,

    difficulty: number,
  ): void => {
    const taskToEdit = taskList.find((task) => task.id === id);

    if (!taskToEdit) return;

    const updatedTask: ITask = {
      id,

      title,

      difficulty,

      completed: taskToEdit.completed,
    };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);

    hideOrShowModal(false);
  };

  // Drag and Drop
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    // Caso não esteja sobre nenhuma tarefa
    if (!over) return;

    // Só altera se mudou de posição
    if (active.id !== over.id) {
      setTaskList((tasks) => {
        // Descobre a posição antiga
        const oldIndex = tasks.findIndex((task) => task.id === active.id);

        // Descobre a nova posição
        const newIndex = tasks.findIndex((task) => task.id === over.id);

        // Reorganiza o array
        return arrayMove(tasks, oldIndex, newIndex);
      });
    }
  };

  const completeTask = (id: number): void => {
    const updatedTasks = taskList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTaskList(updatedTasks);
  };

  return (
    <div className={styles.app}>
      {/* Vídeo de fundo */}

      <video
        className={styles.videoBackground}
        src="/videos/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        /videos/background.mp4
      </video>

      {/* Camada escura */}

      <div className={styles.videoOverlay}></div>

      {/* Conteúdo */}

      <div className={styles.content}>
        <Modal
          title="Editar tarefa"
          children={
            <TaskForm
              btnText="Editar"
              taskList={taskList}
              task={taskToUpdate}
              handleUpdate={updateTask}
            />
          }
        />

        <Header />

        <main className={styles.main}>
          <div className={styles.todo_form}>
            <h2>Nova tarefa</h2>

            <TaskForm
              taskList={taskList}
              setTaskList={setTaskList}
              btnText="Cadastrar"
            />
          </div>

          <div className={styles.todo_container}>
            <h2>Minhas tarefas</h2>

            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={taskList.map((task) => task.id)}
                strategy={verticalListSortingStrategy}
              >
                <TaskList
                  taskList={taskList}
                  handleDelete={deleteTask}
                  handleEdit={editTask}
                  handleComplete={completeTask}
                />
              </SortableContext>
            </DndContext>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;

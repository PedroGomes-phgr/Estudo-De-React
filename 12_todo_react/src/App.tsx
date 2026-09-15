import React, { use, useState } from "react";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

//css
import styles from "./App.module.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

//inteface
import { ITask } from "./interfaces/Task";

function App() {
  const [taskList, setTasklist] = useState<ITask[]>([]);

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar tarefa"
            taskList={taskList}
            setTaskList={setTasklist}
          />
        </div>
        <div>
          <h2>Suas tarfeas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";
import CreateProjectForm from "./components/CreateProjectForm.jsx";
import NewProject from "./components/NewProject.jsx";
import Sidebar from "./components/Sidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import "./App.css";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  // const [projects, setProjects] = useState([]);

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleSaveAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId,
        ),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleSaveAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected handleAddProject={handleAddProject} />;
  }

  return (
    <>
      <div className="flex my-8 h-screen ">
        <Sidebar
          handleAddProject={handleAddProject}
          projects={projectsState.projects}
          onSelectProject={handleSelectProject}
          selectedProjectId={projectsState.selectedProjectId}
        />

        <main className="flex-1 p-8 md:ml-64">
          <h1 className="text-3xl font-bold">Page Content</h1>

          {content}
        </main>
      </div>
    </>
  );
}

export default App;

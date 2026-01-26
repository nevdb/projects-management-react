import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import CreateProjectForm from "./components/CreateProjectForm.jsx";
import NewProject from "./components/NewProject.jsx";

import "./App.css";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  // const [projects, setProjects] = useState([]);

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

  console.log(projectsState);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleSaveAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected handleAddProject={handleAddProject} />;
  }

  return (
    <>
      <div className="flex my-8 h-screen ">
        <Sidebar
          handleAddProject={handleAddProject}
          projects={projectsState.projects}
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

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

  // function handleChange(project) {
  //   const newProject = {
  //     id: crypto.randomUUID,
  //     title: project.title,
  //     description: project.description,
  //   };
  //   setProjects((prev) => [...prev, newProject]);
  //   console.log(projects);
  // }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected handleAddProject={handleAddProject} />;
  }

  return (
    <>
      <div className="flex my-8 h-screen ">
        <Sidebar handleAddProject={handleAddProject} />

        <main className="flex-1 p-8 ">
          <h1 className="text-3xl font-bold">Page Content</h1>

          {content}
        </main>
      </div>
    </>
  );
}

export default App;

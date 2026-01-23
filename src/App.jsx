import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import CreateProjectForm from "./components/CreateProjectForm.jsx";
import NewProject from "./components/NewProject.jsx";

import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);

  function handleChange(project) {
    const newProject = {
      id: crypto.randomUUID,
      title: project.title,
      description: project.description,
    };
    setProjects((prev) => [...prev, newProject]);
    console.log(projects);
  }

  return (
    <>
      <div className="flex my-8 h-screen ">
        <Sidebar projects={projects} />

        <main className="flex-1 p-8 ">
          <h1 className="text-3xl font-bold mb-4">Page Content</h1>
          <p className="text-gray-300">This is the main page area.</p>

          <NewProject />
        </main>
      </div>
    </>
  );
}

export default App;

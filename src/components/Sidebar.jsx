import BaseButton from "./BaseButton";

export default function Sidebar({
  handleAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <>
      <aside className="w-64 md:fixed md:inset-y-0 left-0 top-0 md:h-screen bg-gradient-to-b from-zinc-700 to-zinc-800 text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 ">My Projects</h2>

          <BaseButton name="Create New Project" onClick={handleAddProject} />
          <ul className="my-4">
            {projects.map((project) => {
              let cssClasses =
                "w-full text-left px-2 py-1 my-1 hover:text-stone-100";

              if (project.id === selectedProjectId) {
                cssClasses += " bg-stone-800 text-stone-200";
              } else {
                cssClasses += " text-stone-400";
              }

              return (
                <li key={project.id}>
                  <button
                    onClick={() => onSelectProject(project.id)}
                    className={cssClasses}
                  >
                    {project.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
}

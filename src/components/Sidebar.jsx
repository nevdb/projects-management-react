import BaseButton from "./BaseButton";

export default function Sidebar({ handleAddProject }) {
  return (
    <>
      <aside className="w-auto bg-gradient-to-b from-zinc-700 to-zinc-800 text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 ">My Projects</h2>

          <BaseButton name="Create New Project" onClick={handleAddProject} />
          <ul className="space-y-2">
            {/* {projects.map((project) => (
              <li key={project.id}>
                <a>{project.title}</a>
              </li>
            ))} */}
          </ul>
        </div>
      </aside>
    </>
  );
}

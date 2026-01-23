export default function Sidebar({ projects }) {
  return (
    <>
      <aside className="w-64 bg-gradient-to-b from-zinc-700 to-zinc-800 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold ">
          <h2 className="text-2xl font-bold mb-4 ">My Projects</h2>
          <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
            Create New Project
          </button>
          <ul className="space-y-2">
            {projects.map((project) => (
              <li key={project.id}>
                <a>{project.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

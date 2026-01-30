export default function SelectProject({ project, onDelete }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-2/3 mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-400">
        <div className="flex items-center justify-between">
          <h1 className="font-bold ">{project.title}</h1>
          <button
            className="text-stone-600 hover:text-stone-200"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p>{formattedDate}</p>
        <p className="whitespace-pre-wrap">{project.description}</p>
      </header>
      Task
    </div>
  );
}

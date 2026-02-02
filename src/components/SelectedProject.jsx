import Tasks from "./Tasks";

export default function SelectProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-auto max-w-sm my-8">
      <header className="pb-4 mb-4 border-b-2 border-stone-400 flex flex-col">
        <div className="my-4 flex items-center justify-between">
          <h1 className="font-medium">{project.title}</h1>
          <button
            className="text-stone-600 hover:text-stone-200"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="justify-items-start">{formattedDate}</p>
        <p className="whitespace-pre-wrap">{project.description}</p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}

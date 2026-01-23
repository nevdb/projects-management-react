export default function CreateProjectForm({ onProjectCreate, projectInput }) {
  return (
    <>
      <div className="max-w-lg mx-auto my-4 shadow-md bg-gradient-to-b from-zinc-700 to-zinc-800 ">
        <div>
          <p className="my-4">
            <label className="block mb-2 uppercase text-stone-300">
              Initial Investment
            </label>
            <input
              className="w-3/4 px-3 py-2 mx-2  border rounded-md border-amber-50"
              type="text"
              required
              value={projectInput.title}
            />
          </p>
          <p className="my-4">
            <label className="block mb-2 uppercase text-stone-300">
              Description
            </label>
            <input
              className="w-3/4 px-3 py-2 mx-2  border rounded-md border-amber-50"
              type="text"
              required
              value={projectInput.description}
            />
          </p>
        </div>
        <button
          className="border-1 border-amber-100"
          onClick={(event) => onProjectCreate(event.target.value)}
        >
          Add Project
        </button>
      </div>
    </>
  );
}

import noProjectImage from "../assets/project-image.png";
import BaseButton from "./BaseButton";
export default function NoProjectSelected({ handleAddProject }) {
  return (
    <div className="flex-1 p-8 w-auto mx-auto">
      <img
        src={noProjectImage}
        alt="Project image"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold my-4">No Project Selected</h2>
      <p className="text-gray-300">
        Select a project or get started with a new one
      </p>
      <p className="my-8">
        <BaseButton name="Create New Project" onClick={handleAddProject} />
      </p>
    </div>
  );
}

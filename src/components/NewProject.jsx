import BaseInput from "./BaseInput";
import BaseButton from "./BaseButton";

export default function NewProject() {
  return (
    <div className="max-w-lg mx-auto my-4 py-4 shadow-md bg-gradient-to-b from-zinc-700 to-zinc-800">
      <menu className="flex justify-center gap-4">
        <li>
          <BaseButton name="Cancel" />
        </li>
        <li>
          <BaseButton name="Save" />
        </li>
      </menu>
      <div>
        <BaseInput label="Title" />
        <BaseInput label="Description" textarea={true} />
        <BaseInput label="Due Date" />
      </div>
    </div>
  );
}

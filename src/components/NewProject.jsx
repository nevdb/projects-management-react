import BaseInput from "./BaseInput";
import BaseButton from "./BaseButton";
import { useRef } from "react";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation ...

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="max-w-lg mx-auto my-4 py-4 shadow-md bg-gradient-to-b from-zinc-700 to-zinc-800">
      <menu className="flex justify-center gap-4">
        <li>
          <BaseButton name="Cancel" />
        </li>
        <li>
          <BaseButton onClick={handleSave} name="Save" />
        </li>
      </menu>
      <div>
        <BaseInput type="text" ref={title} label="Title" />
        <BaseInput ref={description} label="Description" textarea={true} />
        <BaseInput type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}

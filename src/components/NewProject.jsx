import BaseInput from "./BaseInput";
import BaseButton from "./BaseButton";
import BaseModal from "./BaseModal";
import { useRef } from "react";

export default function NewProject({ onAdd }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation ...
    if (
      enteredDescription.trim() === "" ||
      enteredDescription.trim() ||
      enteredDueDate.trim()
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <BaseModal ref={modal} buttonCaption="OK">
        <h2>Invalid Input</h2>
        <p>Oops ... looks like you forgot to enter a value.</p>
        <p>Please make sure you provide a valid value for every input field.</p>
        <p></p>
      </BaseModal>
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
    </>
  );
}

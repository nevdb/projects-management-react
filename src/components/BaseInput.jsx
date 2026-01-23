export default function BaseInput({ label, textarea, ...props }) {
  const classes =
    "w-3/4 px-3 py-2 mx-2 border rounded-md border-amber-50 focus:outline-none focus:border-stone-600";
  return (
    <p className="my-4">
      <label className="block mb-2 uppercase text-stone-300">{label}</label>
      {textarea ? (
        <textarea {...props} className={classes} />
      ) : (
        <input {...props} className={classes} />
      )}
    </p>
  );
}

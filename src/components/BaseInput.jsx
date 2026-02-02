export default function BaseInput({ label, textarea, ref, ...props }) {
  const classes =
    "w-3/4 px-3 py-2 mx-2 text-white border rounded-md border-amber-50 focus:outline-none focus:border-stone-600";
  return (
    <p className="my-4">
      <label className="block mb-2 uppercase text-stone-300">{label}</label>
      {textarea ? (
        <textarea ref={ref} {...props} className={classes} />
      ) : (
        <input ref={ref} {...props} className={classes} />
      )}
    </p>
  );
}

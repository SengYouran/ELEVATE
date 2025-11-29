function Noting() {
  return (
    <div>
      <h2 className="text-xl font-medium mt-2 ">Note</h2>
      <textarea
        className="border border-black w-full h-20 outline-0 p-2 rounded"
        name="comment"
        id="comment"
        placeholder="Note"
      ></textarea>
    </div>
  );
}

export default Noting;

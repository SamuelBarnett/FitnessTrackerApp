const Diary = () => {
  return (
    <div className="bg-green-900">
      <div>
        <h1> Diary </h1>
      </div>
      <div>
        <label> Notes </label>
        <textarea/>
      </div>
      {/* This is to be replaced by the goals set and stored */}
      <div>
        <h3> Nutrients </h3>
      </div>
      <div>
        <label> Protein </label>
        <input />
      </div>
      <div>
        <label> Fats </label>
        <input />
      </div>
      <div>
        <label> Carbohydrates </label>
        <input />
      </div>
    </div>
  );
};

export default Diary;

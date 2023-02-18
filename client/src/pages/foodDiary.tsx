import React from "react";

const Diary = () => {
  return (
    <section className="flex justify-center flex-1 h-full rounded-tl-3xl border border-solid">
      <div>
        <div>
          <h1> Food Diary </h1>
        </div>
        <div>
          <label> Notes </label>
          <textarea />
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
    </section>
  );
};

export default Diary;

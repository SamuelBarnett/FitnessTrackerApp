import React, { useState } from "react";
import "../styles/index.css";
import { Link } from "react-router-dom";

const Goals = () => {
  // state variable is display and function is setDisplay starts as false and is set to one of the pages
  const [display, setDisplay] = useState(false);

  const HandleClick = (current) => {
    setDisplay(current);
  };

  const Pages = [
    { label: "Weight", page: "weight-page" },
    { label: "Weightlifting", page: "weightlifting-page" },
    { label: "Cardio", page: "cardio-page" },
    { label: "Nutrition", page: "nutrition-page" },
    { label: "BMI", page: "BMI-page" },
  ];

  // may be better to replace the divs with templates.
  return (
    <div className="">
      <div>
        <h1 className="">Goals</h1>
      </div>
      <div>
        <h2 className="">Add goals</h2>
        <div>
          {/* set-goals-button */}
          {Pages.map((Page) => (
            <button className="" onClick={() => HandleClick(Page.page)}>
              {Page.label}
            </button>
          ))}
        </div>
      </div>
      <div className="">
        {/* weight page */}
        <div className={`weight-page ${display === "weight-page" ? "" : "hidden"}`}>
          <label>help</label>
          <div className="">
            {/* className={`weight-help ${display === "weight-help" ? "" : "hidden"}`} */}
            <p>
              Keeping track of your weight is a key factor in health and fitness. Keeping track of your weight will make you more aware of whether you
              are eating the correct amount of food to reach your goals.
            </p>
            <p>Enter your current weight and the weight you wish to be and dates for both. You can then visualize your progress to stay motivated.</p>
          </div>
          <form method="post" className="content-goals">
            <div>
              <label>Current Weight</label>
              <div>
                <input />
              </div>
            </div>
            <div>
              <label>Goal Weight</label>
              <div>
                <input />
              </div>
            </div>
          </form>
        </div>
        {/* end of weight page */}

        {/* Weightlifting page */}
        <div className={`weightlifting-page ${display === "weightlifting-page" ? "" : "hidden"}`}>
          <div className="">
            <label className="help-label">help</label>
            <p>
              Weightlifting can be a fun hobby a great way to stay in shape. Remember to start small and learn proper form so you don't injure
              yourself.
            </p>
            <p>
              The 3 main compound movements are Bench squat and DeadLift however none of them are required to form a balance weightlifting routine.
              Add and remove different workouts to form a balanced workout routine and use the smart meter for suggestions.
            </p>
          </div>
          <form method="post" className="content-goals">
            <div>
              <label>Bench</label>
              <div>
                <input />
              </div>
            </div>
            <div>
              <label>Squat</label>
              <div>
                <input />
              </div>
            </div>
            <div>
              <label>DeadLift</label>
              <div>
                <input />
              </div>
            </div>
          </form>
        </div>
        {/* End of weightlifting page */}

        {/* Cardio */}
        <div className={`cardio-page ${display === "cardio-page" ? "" : "hidden"}`}>
          <label className="help-label">help</label>
          <div
            className=""
            // className={`cardio-help ${display === "cardio-help" ? "" : "hidden"}`}
          >
            <p>
              Cardio is a essential part of healthy lifestyle and is often neglected by most. Even just 30 minutes of walking a day can greatly
              improve your overall well being and health.
            </p>
            <p>Add and remove different cardio movements to reach your daily goal.</p>
          </div>
          <form method="post" className="content-goals">
            <div>
              <label>Walking</label>
              <div>
                <input />
              </div>
            </div>
            <div>
              <label>Running</label>
              <div>
                <input />
              </div>
            </div>
            <div>
              <label>Swimming</label>
              <div>
                <input />
              </div>
            </div>
          </form>
        </div>
        {/* end of cardio */}
        {/* Nutrition */}
        <div className={`nutrition-page ${display === "nutrition-page" ? "" : "hidden"}`}>
          <label className="help-label">help</label>
          <div
            className=""
            // className={`nutrition-help ${display === "nutrition-help" ? "" : "hidden"}`}
          >
            <p>
              Nutrition is what you consume on a consistent basis and is the backbone of a healthy lifestyle. The amount you eat and what you eat will
              determine if you reach your goals or not. Nutrition makes up 90% of your routine and should be given 90% of your effort.
            </p>
            <p>Add or remove daily nutrition goals.</p>
          </div>
          <form method="post" className="content-goals">
            <div>
              <label>Calories</label>
              <div>
                <input />
              </div>
            </div>
            <div>
              <label>Protein</label>
              <div>
                <input />
              </div>
            </div>
            <div>
              <label>Fats</label>
              <div>
                <input />
              </div>
            </div>
            <div>
              <label>Carbohydrates</label>
              <div>
                <input />
              </div>
            </div>
          </form>
        </div>
        {/* End of nutrition */}
        {/* BMI */}
        <div className={`BMI-page ${display === "BMI-page" ? "" : "hidden"}`}>
          <label className="help-label">help</label>
          <div
            className=""
            // className={`BMI-help ${display === "BMI-help" ? "" : "hidden"}`}
          >
            <p>BMI or body mass index is a way of telling the composition of your body.</p>
            <p>Add a current BMI and the BMI you want to be at.</p>
          </div>
          <form method="post" className="content-goals">
            <div>
              <label>Current BMI</label>
              <div>
                <input />
              </div>
            </div>
            <div>
              <label>Goal BMI</label>
              <div>
                <input />
              </div>
            </div>
          </form>
        </div>
        {/* End of BMI */}
      </div>
    </div>
  );
};
export default Goals;

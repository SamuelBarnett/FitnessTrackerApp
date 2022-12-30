import "../styles/index.css";
import "../scripts/goals.js";
const Goals = () => {
  return (
    <div class="goals">
      <div>
        <h1>Goals</h1>
      </div>
      <div>
        <h2>Add goals</h2>
        <div>
          <label class="help-label">help</label>
        </div>
        <div>
          <button>Weight</button>
          <button>Weightlifting</button>
          <button>Cardio</button>
          <button>Nutrition</button>
          <button>BMI</button>
        </div>
      </div>

      {/* weight page */}
      <div class="weight-page" id="weight">
        <label class="help-label">help</label>
        <p>
          Keeping track of your weight is a key factor in health and fitness.
          Keeping track of your weight will make you more aware of whether you
          are eating the correct amount of food to reach your goals.
        </p>
        <p>
          Enter your current weight and the weight you wish to be and dates for
          both. You can then visualize your progress to stay motivated.
        </p>
        <form method="post" class="content-goals">
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
      <div class="weightlifting-page">
        <label class="help-label">help</label>
        <div class="help">
          <p>
            Weightlifting can be a fun hobby a great way to stay in shape.
            Remember to start small and learn proper form so you don't injure
            yourself.
          </p>
          <p>
            The 3 main compound movements are Bench squat and DeadLift however
            none of them are required to form a balance weightlifting routine.
            Add and remove different workouts to form a balanced workout routine
            and use the smart meter for suggestions.
          </p>
        </div>
        <form method="post" class="content-goals">
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
      <div class="cardio-page">
        <label class="help-label">help</label>
        <div class="help">
          <p>
            Cardio is a essential part of healthy lifestyle and is often
            neglected by most. Even just 30 minutes of walking a day can greatly
            improve your overall well being and health.
          </p>
          <p>
            Add and remove different cardio movements to reach your daily goal.
          </p>
        </div>
        <form method="post" class="content-goals">
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
      {/* nutrition */}
      <div class="nutrition-page">
        <label class="help-label">help</label>
        <div class="help">
          <p>
            Nutrition is what you consume on a consistent basis and is the
            backbone of a healthy lifestyle. The amount you eat and what you eat
            will determine if you reach your goals or not. Nutrition makes up
            90% of your routine and should be given 90% of your effort.
          </p>
          <p>Add or remove daily nutrition goals.</p>
        </div>
        <form method="post" class="content-goals">
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
      {/* End of nutrition */}
      {/* BMI */}
      <div class="BMI-page">
        <label class="help-label">help</label>
        <div class="help">
          <p>
            BMI or body mass index is a way of telling the composition of your
            body.
          </p>
          <p>Add a current BMI and the BMI you want to be at.</p>
        </div>
        <form method="post" class="content-goals">
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
  );
};
export default Goals;

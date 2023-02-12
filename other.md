// let path = require("path");
// let cors = require("cors");
// let dotenv = require("dotenv");
// let express = require("express");

// let GoalRoutes = require("./routes/Goals.js");
// let UserRoutes = require("./routes/Users.js");
// let db = require("./config/database.js");
// let bodyParser = require("body-parser");

// // server/index.js

// const express = require("express");

// const PORT = process.env.PORT || 3001;

// const app = express();

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//   });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

/* "compilerOptions": {
      "target": "es2016",
      "jsx": "preserve",
      "module": "commonjs",
      "allowJs": true,
      "outDir": "./dist",
      "esModuleInterop": true,
      "forceConsistentCasingInFileNames": true,
      "strict": true,
      "skipLibCheck": true
    },*/


/* "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },*/


axiosInstance
    .post("/results/add", {
      result: completedEvent, //this is very big
    })
    .then((response) => {
      // handle response
    })
    .catch((e) => {
        console.log(e);
        //this console logs Error: Network Error
        // at createError (monkeytype.js:formatted:35086:25)
        // at XMLHttpRequest.handleError (monkeytype.js:formatted:34457:28)
    });



{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}





Naming conventions: The naming conventions you are using are a mix of camelCase and snake_case. It is better to follow a single naming convention throughout the code.

Unused variables: In the GetGoals function, you have an unused variable 'err'. It is better to remove it to avoid any confusion.

Use of Promise.then and Promise.catch: In the GetGoals function, you are using a Promise to handle the response from the handleGetGoals function, but you are not returning anything from the then and catch blocks. You should either return something from the then block or handle the error in the catch block.

Start and end date: The startDate and endDate values are of type string, but they should be of type Date. You can use the JavaScript Date object to store the date and time values, and then format them before sending a request to the backend.

State Management: In the AddGoal component, you are storing the values of the form inputs in local state variables, which is fine. However, it is a better practice to store the form data in a single object, and update the object properties instead of individual state variables. This way, you don't have to pass all the state variables as properties to the axios.post method.
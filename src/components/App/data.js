import { 
  empDir, 
  confessions, 
  budgetApp, 
  gitShopping, 
  fitTracker,
  readmeGen 
} from "../Images";

const ProjData = [
  {
    name: "e-directory",
    description: "The primary goal of e-directory is to provide quick access to an entire employee directory built with React.",
    image: empDir,
    imgAlt: "Employee directory website displaying several employee's information along with a search input",
    languages: "HTML, CSS, JavaScript, React",
    githubLink: "https://github.com/Rudy-Menjivar/e-directory",
    liveSite: "https://rudy-menjivar.github.io/e-directory/"
  },
  {
    name: "confessions",
    description: "Confessions is a social platform that allows users to post and share thoughts anonymously.",
    image: confessions,
    imgAlt: "Confessions website displaying an image of pollen flying off a plant",
    languages: "HTML, CSS, JavaScript, React",
    githubLink: "https://github.com/Rudy-Menjivar/confessions",
    liveSite: "https://app-confessions.herokuapp.com/"
  },
  {
    name: "budget-app",
    description: "Budget-App is designed with offline access and functionality to reliably keep the budget on track. Expenses and deposits can be added with or without an internet connection.",
    image: budgetApp,
    imgAlt: "A budget tracking website with inputs to add or subtract from total budget, which is also tracked by a graph",
    languages: "HTML, CSS, JavaScript",
    githubLink: "https://github.com/Rudy-Menjivar/budget-app",
    liveSite: "https://dry-caverns-42087.herokuapp.com/"
  },
  {
    name: "git-shopping",
    description: "Git-Shopping is a team project involving the deployment of a fictitious E-commerce site. The site is hosted thru Heroku and uses MySQL as its database.",
    image: gitShopping,
    imgAlt: "An e-commerce website with links to navigate the site as well as buttons to add items to cart",
    languages: "HTML, CSS, JavaScript, Handlebars, MySQL, passport, Heroku",
    githubLink: "https://github.com/Rudy-Menjivar/git-shopping",
    liveSite: "https://gentle-cove-47687.herokuapp.com/"
  },
  {
    name: "workout-tracker",
    description: "With Workout Tracker anyone can create and track daily workouts via any web browser. Tracking includes exercise details such as type, weight, sets, reps, and duration. Additionally, cardio exercises can track total distance.",
    image: fitTracker,
    imgAlt: "A fitness tracker website with inputs to enter a completed exercise",
    languages: "HTML, CSS, JavaScript, Express, Mongoose, Heroku",
    githubLink: "https://github.com/Rudy-Menjivar/workout-tracker",
    liveSite: "https://guarded-ocean-13572.herokuapp.com/"
  },
  {
    name: "readme-generator",
    description: "This CLI application creates high-quality README files for any application. This should free the developer to devote more time to work on their project.",
    image: readmeGen,
    imgAlt: "An example of what the readme generator can create",
    languages: "JavaScript",
    githubLink: "https://github.com/Rudy-Menjivar/readme-generator",
    liveSite: "https://github.com/Rudy-Menjivar/readme-generator"
  }
];

export default ProjData;

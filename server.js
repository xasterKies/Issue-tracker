//Initialising express app
const app = express();

//Creating a middleware
const fileServerMiddleware = express.static('public');
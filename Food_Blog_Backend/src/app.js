import express from 'express';
import bodyParser from 'body-parser';
import foodRoute from './routes/foodRoute.js';
import peopleRoute from './routes/peopleRoute.js';


const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api/food", foodRoute);
app.use("/api/people", peopleRoute);
app.get("/",(req, res) =>{res.send("/ - Home page <br/> \
 /api/food - Food page <br/>\
  /api/food/search/word - Food search page <br/>\
   /api/people - People page <br/>\
    /api/people/search/word - People search page");

});
app.listen(PORT, () => console.log(`port ${PORT}`));
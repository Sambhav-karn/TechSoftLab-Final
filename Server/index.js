 let express = require('express');
const mongoose = require('mongoose');
let cors = require('cors');

require("dotenv").config();
const mainRoute = require('./App/routes/mainRoute');

let app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use(mainRoute);

mongoose.connect(`${process.env.MONGO_CONNECTION_STRING}/${process.env.DBNAME}`)
    .then(() => {
        app.listen(`${process.env.PORT}`); //http://localhost:8000
});


 
// mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DBNAME}`)
//     .then(async()=>{
//         app.listen(`${process.env.PORT}`);
//         console.log(`Server is running on http://localhost:${process.env.PORT}`);
//     });

const express = require('express');
const app = express();


// swagger import //
const swaggerui = require('swagger-ui-express');
const swaggerjsdoc = require('swagger-jsdoc')

//== create object first off all ==//
const options = {
    definition : {
        openai: "3.0.0",   ///swaggr version
        info: {
            title: "Nodejs api documentation for mysql",
            version : "1.0.0"
        },
        servers: [    ///aapka server kis url me chal raha hai 
            {
                url: "http://localhost:5001"
            }
        ]
    },
    apis: ["./Route/empRoute/empRoute.js"]   // jab hum documentaion banate hai uska path  yaha dete hai ..
}


// Create Swagger docs
const swaggerSpec = swaggerjsdoc(options);

// ab yaha par swagger ka route create karege.. 
app.use("/swagger", swaggerui.serve, swaggerui.setup(swaggerSpec));  // ye dono method hai



app.use(express.json());

const dotenv = require('dotenv');
dotenv.config();

/////////route ka use kiya gay hai /////////////////

const empRouter = require('./Route/empRoute/empRoute.js')
app.use("/api/admin", empRouter)

/////////////////////////////////////////////////////

const port = 5001; 

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
}) 
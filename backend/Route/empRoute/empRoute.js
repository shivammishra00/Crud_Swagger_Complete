const express = require('express');
const empRouter = express.Router();

const {postemployee,getUser,updateUser} = require("../../Controller/empController/empController");

// here create swagger api //

/**
 * @swagger
 * components:
 *       schemas:
 *           emp:
 *             type: object
 *               properties: 
 *                     id:
 *                        type: string
 *                     name:
 *                        type: string
 *                     email:
 *                         type: string
 *                     salary: 
 *                         type: number
 *                     
 */


/**
 * @swagger
 * /showuser:
 *      get:
 *          summary: node js api for get method 
 *          description: node js api for get method 
 *          responses: 
 *                200:
 *                   description: view Successfully
 *                   content:
 *                       application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                        $ref: '#/components/schemas/emp'
 */

empRouter.post("/adduser", postemployee)
empRouter.get("/showuser", getUser)
empRouter.put("/updateuser/:id", updateUser)

module.exports = empRouter
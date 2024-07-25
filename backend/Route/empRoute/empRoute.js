const express = require('express');
const empRouter = express.Router();

const {postemployee,getUser,updateUser} = require("../../Controller/empController/empController");

// here create swagger api //
// === swagger api me next line likhte time 2 charactor chhod kar likhege rool hai ..//  

/**
 * @swagger
 * components:
 *   schemas:
 *     emp:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         salary:
 *           type: number
 */

/**
 * @swagger
 * /api/admin/showuser:
 *   get:
 *     summary: Node.js API for GET method
 *     description: Node.js API for GET method
 *     responses:
 *       200:
 *         description: View Successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/emp'
 */

empRouter.get("/showuser", getUser)

empRouter.post("/adduser", postemployee)
empRouter.put("/updateuser/:id", updateUser)

module.exports = empRouter
const connection = require("../../Modal/dbConnect");
const {emailfunction} = require('../nodeMailer/nodemailer.js')

const postemployee = (req, res) => {
    const sqlQuery = "INSERT INTO emp SET ?";
    const email = req.body.email;
    const data = req.body;
    console.log(email)
    connection.query(sqlQuery, [data], (err, result) => {
        if (err) {
            res.send(err.sqlMessage)
        }
        else {
            res.status(200).send(result)
            // here call node mailer function 
            emailfunction(email)
        }
    })
}

const getUser = (req, res) => {
    const sqlQuery = "SELECT * FROM emp";
    connection.query(sqlQuery, (err, result) => {
        if (err) {
            res.status(500).send("err", err.sqlMessage)
        }
        else {
            res.send(result)
        }
    })
}

const updateUser = async (req, res) => {
    const sqlQuery = "UPDATE emp SET name=?, email=?, salary=? WHERE id=?";
    const { name, email, salary } = req.body
    const id = req.params.id;

    await connection.query(sqlQuery, [name, email, salary, id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ error: "query error", message: err.sqlMessage });
        }
        else {
            res.status(200).send({ message: "Data updated successfully!!!" , result});
        }
    });
}


module.exports = { postemployee, getUser, updateUser }
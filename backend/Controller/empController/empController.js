const connection = require("../../Modal/dbConnect");

const postemployee = (req, res) => {
    const sqlQuery = "INSERT INTO emp SET ?";
    const data = req.body;
    connection.query(sqlQuery, [data], (err, result) => {
        if (err) {
            res.status(500).send("err", err.sqlMessage)
        }
        else {
            res.status(200).send(result)
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
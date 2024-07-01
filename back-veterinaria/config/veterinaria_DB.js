const mysql=require("mysql2");
const dotenv=require("dotenv")
dotenv.config()

const options = {
    host:process.env.HOST,
    user:process.env.DBUSERNAME,
    password:process.env.DBPASSWORD,
    database:process.env.DATABASE
}

const connection = mysql.createConnection(
    options
)

module.exports={connection}
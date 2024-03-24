import dotenv from 'dotenv'

dotenv.config();

const {PORT, USER, PASSWORD, DATABASE, HOST, SERVER} = process.env
const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

const config = {
    port: PORT,
    host: HOST,
    url: URL,
    sql: {
        server: SERVER,
        database: DATABASE,
        user: USER,
        password: PASSWORD,
        options: {
            encrypt: sqlEncrypt,
        }
    }
}

export default config;
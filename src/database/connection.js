import sql from 'mssql'
import config from '../config'

const dbSettigs = {
     user: config.user
    ,password: config.pass
    ,server: config.host
    ,database:config.database,
    dialect: "mssql",
    dialectOptions: {
        "instanceName": config.dbInstanceName
    },
    options:{
        encrypt: true,
        trustServerCertificate: true
    }
}


export async function getConnection(){
    try {
        
        const pool = await sql.connect(dbSettigs);
        return pool;
        
    } catch (error) {
        console.error(error);
    }
    

}


export {sql}
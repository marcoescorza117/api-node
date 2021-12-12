import sql from 'mssql'

const dbSettigs = {
     user: "marco-api"
    ,password:"marco123@"
    ,server:"localhost"
    ,database:"webstore",
    dialect: "mssql",
    dialectOptions: {
        "instanceName": "SQLSERVERLOCAL"
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
    
    //const result = await pool.request().query("SELECT 1"
    //console.log(result);

}


export {sql}
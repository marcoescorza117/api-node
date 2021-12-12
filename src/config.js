//settings
//let port = 3000
import {config} from 'dotenv'

config();

console.log(process.env.PORT);

export default{
 port: process.env.PORT || 4000,
 user : process.env.USER || '',
 pass : process.env.PASS || '',
 host : process.env.HOST || '',
 database: process.env.DATABASE || '',
 dbInstanceName : process.env.INSTANCE ||'',

}
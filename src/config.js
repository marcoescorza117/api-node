//settings
//let port = 3000
import {config} from 'dotenv'

config();

console.log(process.env.PORT);

export default{
 port: process.env.PORT || 4000   
}
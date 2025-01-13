const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ItAXDR7L#MphBR1VExsM5ZljGh71Aq4FiAtSWIhkJIOxLqH2O8Do", //put your session id
MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
MODE: process.env.MODE || "public", //private or public
AUTO_VOICE:"true" //true or false
};

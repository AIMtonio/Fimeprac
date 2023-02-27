const dbConnection = require('../../database/config_pos.js');
const moment = require('moment')
const { CustomResponse } = require('../../helpers/response/customResponseHE.js');
const responseJson = new CustomResponse();
const login = async (req, res) => {
    console.log(JSON.stringify(req.body));
    const connection = dbConnection();
    let email = req.body.email;
    let password = req.body.password;
    //const query = 'SELECT marca, modelo, capacidad, color, COUNT(id) total, centro_sap FROM stock_out WHERE '+centro_sap+' fecha_creacion >= "'+req.body.fecha_inicial+' 00:00:00" AND fecha_creacion <= "'+req.body.fecha_final+' 23:59:59" GROUP BY capacidad, captura_libre, centro_sap, color, marca, modelo, centro_sap ';
    const query = 'select user_id  from user_login where user_email = "'+email+'" and user_password = "'+password+'"';
    
    connection.query(query, (err, resp) => {
        try{
            if (err) {
                return res.status(400).json(responseJson.isResponseJson("400", false, 'Error', err));
            }else{
                return res.status(200).json(responseJson.isResponseJson("200", true, 'Success', resp));
            }
        }catch(e){
            return res.status(400).json(responseJson.isResponseJson("400", false, 'Error', e));
        }
    });
};
module.exports = {
    login
}
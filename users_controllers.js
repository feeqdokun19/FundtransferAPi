require('dotenv').config()
const res = require('express/lib/response')
const Joi = require('Joi')
const { v4: uuidv4 } = require ('uuid');


const createNewFundUser = () => {
    const userSchema = Joi.object({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        phoneNumber: Joi.string().length(11).$required(),
        email: Joi.string().email.required(),
        organization: Joi.string().alphanum.required(),
        address: Joi.string().required(),
        country: Joi.string().required()
    })
    const validateUser = userSchema.validation(req.body)
        if(validateUser.error){
            res.status(200).send({
                status:"false",
                message: "Sorry! invalide credentials provided"
            })
        }
    const {firstname, lastname, phoneNumber, email, organization, address, country} = req.body
    const user_id = uuidv4()

    return createNewFundUser(firstname, lastname, phoneNumber, email, organization, address, country)
}





module.exports = {
    createNewFundUser
}
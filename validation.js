const Joi = require('joi');

// Validate Registration
const registerValidation = (data) => {
    const schema = Joi.object ({
            userName: Joi.string().min(4).max(255).required(),
            email: Joi.string().min(6).max(255).required(),
            password: Joi.string().min(6).max(255).required()
        });
    return schema.validate(data);
} 

// Validate Login

// Verify Token

module.exports = { registerValidation };
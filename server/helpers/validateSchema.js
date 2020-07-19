import Joi from '@hapi/joi';

// validating signup
export const messageValidateSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(100)
    .required(),

  address: Joi.string()
    .min(2),

  email: Joi.string()
    .email({
      minDomainSegments: 2
    })
    .required()
    .error(new Error('Invalid Email')),

  message: Joi.string()
    .min(2)
    .required()
});

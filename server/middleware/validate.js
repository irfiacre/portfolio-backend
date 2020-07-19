import { messageValidateSchema } from '../helpers/validateSchema';

// validate signup
export const validateMessageData = (req, res, next) => {
  const {
    name, address, email, message,
  } = req.body;
  const { error } = messageValidateSchema.validate({
    name, address, email, message,
  });

  if (error) {
    res.status(400).json({
      status: res.statusCode,
      error: error.message,
    });
  }
  
  next();
};

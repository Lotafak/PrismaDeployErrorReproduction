const apolloErrors = require('apollo-errors');

const errors = {
  NotAuthorizedError: apolloErrors.createError(
    'NotAuthorizedError',
    { message: 'Not authorized' },
  ),

  ExistingUserError: apolloErrors.createError(
    'ExistingUserError',
    { message: 'Email already in use' },
  ),

  FacebookAccountAssignedError: apolloErrors.createError(
    'FacebookAccountAssignedError',
    { message: 'Facebook account already assigned to some user' },
  ),

  InvalidEmailError: apolloErrors.createError(
    'InvalidEmailError',
    { message: 'Not a valid email' },
  ),

  InvalidPasswordError: apolloErrors.createError(
    'InvalidPasswordError',
    { message: 'Not a valid password' },
  ),

  RequiredFieldMissingError: apolloErrors.createError(
    'RequiredFieldMissingError',
    { message: 'Required field not provided' },
  ),

  InvalidTokenError: apolloErrors.createError(
    'InvalidTokenError',
    { message: 'Token invalid or expired' },
  ),

  UserNotFoundError: apolloErrors.createError(
    'UserNotFoundError',
    { message: 'User not found' },
  ),

  FacebookAccountAlreadyConnectedError: apolloErrors.createError(
    'FacebookAccountAlreadyConnectedError',
    { message: 'Facebook account already connected with the user' },
  ),

  EmailAlreadyConfirmedError: apolloErrors.createError(
    'EmailAlreadyConfirmedError',
    { message: 'Users email already confirmed' },
  ),

  EmailNotConfirmedError: apolloErrors.createError(
    'EmailNotConfirmedError',
    { message: 'Email not confirmed' },
  ),

  ActiveContractExistsError: apolloErrors.createError(
    'ActiveContractExistsError',
    { message: 'Property has an active contract already' },
  ),

  PropertyNotActiveError: apolloErrors.createError(
    'PropertyNotActiveError',
    { message: 'Property is not active' },
  ),

  FeedbackExistsError: apolloErrors.createError(
    'FeedbackExistsError',
    { message: 'Contract has a feedback already' },
  ),

  UserHasAppliedAlreadyError: apolloErrors.createError(
    'UserHasAppliedAlreadyError',
    { message: 'User has applied to property already' },
  ),

  SendEmailError: apolloErrors.createError(
    'SendEmailError',
    { message: 'Sending email failed' },
  ),

  FatalError: apolloErrors.createError(
    'FatalError',
    { message: 'Something went wrong' },
  ),
};

module.exports = errors;


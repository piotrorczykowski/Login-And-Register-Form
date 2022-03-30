const { check } = require('express-validator')

exports.loginValidator = [
    check('email', 'Email is required')
        .isEmail()
        .normalizeEmail(),
    check('password', 'Password name must be 8+ characters long')
        .exists()
        .isLength({ min: 8 }),
]

exports.registerValidator = [
    check('firstName', 'First name must be 4+ characters long')
        .exists()
        .isLength({ min: 4 }),
    check('lastName', 'Last name must be 4+ characters long')
        .exists()
        .isLength({ min: 4 }),
    check('email', 'Email is required')
        .isEmail(),
    check('password', 'Password name must be 8+ characters long')
        .exists()
        .isLength({ min: 8 }),
]
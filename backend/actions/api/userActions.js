const User = require('../../db/models/user')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config')

class UserActions {
    async login(req, res) {
        //  Check validation
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(422).json(errors.array())
        }

        //  Get user data
        const { email, password } = req.body

        //  Find user
        const user = await User.findOne({ email }).lean()
        if(!user) {
            return res.status(404).json({ message: 'User doesn\'t exist!' })
        }

        //  Check if password is correct
        if(await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({
                email: user.email,
                firstName: user.firstName
            }, JWT_SECRET)

            return res.status(200).json({
                message: 'Authorization successfully!',
                token
            })
        }

        res.status(401).json({ message: 'Invalid email/password!' })
    }
    
    async register(req, res) {
        //  Check validation
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(422).json(errors.array())
        }

        //  Get user data
        const { firstName, lastName, email, password } = req.body

        //  Hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        //  Create new user object
        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })

        //  Try add user to database
        try {
            await user.save()
            return res.status(201).json({ message: 'User Added Successfully!' })
        } catch (err) {
            //  Message for duplicate username
            if(err.code === 11000) {
                return res.status(409).json({ message: 'Username already in use' })
            }
            return res.status(500).json({ message: err.message })
        }
    }

    async authUser(req, res) {
        //  Extract token
        const token = req.headers.authorization.split(' ')[1]

        // Check if the token exists
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' })
        }

        try {
            // Verify the token
            const decode = await jwt.verify(token, JWT_SECRET);
            return res.status(200).json({ message: 'Authorized', data: decode});
        } catch (err) {
            return res.status(401).json({ message: 'Unauthorized' })
        }

    }
}

module.exports = new UserActions()
const User = require('../../db/models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserActions {
    login(req, res) {
        const { email, password } = req.body
        res.send(email + '\n' + password)
    }
    
    async register(req, res) {
        const { firstName, lastName, email, password } = req.body

        await bcrypt.hash(password, 10, (err, hashedPassword) => {
            if(err) {
                res.status(500).json({ message: err.message })
            }

            const user = new User({
                firstName,
                lastName,
                email,
                password: hashedPassword
            })
    
            try {
                user.save()
            } catch(err) {
                res.status(500).json({ message: err.message })
            }
    
            res.status(201).json({ message: 'User Added Successfully!' })
        })
    }
}

module.exports = new UserActions();
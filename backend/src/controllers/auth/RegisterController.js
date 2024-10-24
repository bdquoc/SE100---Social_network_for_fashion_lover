const User = require('../../models/user')
const mongoose = require('mongoose')
const connectToDb = require('../../config/database/db')
mongoose.set('debug',true)

class RegisterController {

    //[POST]
    async create(req, res) {
        console.log('abc')


        try {
            connectToDb()
            console.log(req.body)
            const {email, password, firstName, lastName, phone} = req.body

            const newUser = User({
                email: email,
                password: password,
                firstname: firstName,
                lastname: lastName,
                phone: phone,
                createdAt: new Date()                
            })

            //console.log(newUser)

            await newUser.save()

            return res.status(200).json({
                message: 'create user successfully'
            })
        } catch(e) {
            console.log('Some error in registration. Try again!!', e)
        }
    }
}

module.exports = new RegisterController
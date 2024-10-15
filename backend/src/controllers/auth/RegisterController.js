const User = require('../../models/user')
const mongoose = require('mongoose')
mongoose.set('debug',true)

class RegisterController {

    //[POST]
    async create(req, res) {
        console.log('abc')


        try {
            const [{value: email}, {value: password}, {value: phone}, {value: firstName}, {value: lastName}, {value: role}, {value: avatar}] = req.body

            const newUser = User({
                email: email,
                password: password,
                phone: phone,
                firstname: firstName,
                lastname: lastName,
                role: role,
                avatar: avatar,
                createdAt: new Date()                
            })

            console.log(newUser)

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
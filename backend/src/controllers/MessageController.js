const User = require('../models/user')
const Message = require('../models/Message')
const mongoose = require('mongoose')
const connectToDb = require('../../src/config/database/db')
mongoose.set('debug', true)

class RegisterController {

    //[POST]
    async create(req, res) {
        console.log('abc')


        try {
            connectToDb()
            console.log(req.body)
            const { email, password, firstName, lastName, phone } = req.body

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
        } catch (e) {
            console.log('Some error in registration. Try again!!', e)
        }
    }

    async getRencentSender(req, res) {
        try {
            connectToDb()

            const { email } = req.query

            // console.log(typeof email)
            // const message = new Message({
            //     recipentEmail: "Baonguyen1@gmail.com",
            //     senderEmail: "Baonguyen2@gmail.com",
                
            //     content: "MU Vodoiiiiiii",
            //     sendAt:Date(),
            //     isDeleted: false
            // })

            // console.log(message)

            // await message.save()

            const recentMessagesArray = await Message.aggregate([
                //get all recieved messages
                {
                    '$match': {
                        'recipentEmail': email,
                        'isDeleted': false
                    }
                },
                //sort by latest sent message
                {
                    '$sort': {
                        'sendAt': -1
                    }
                },
                //group by email. content and sendAt
                {
                    '$group': {
                        '_id': '$senderEmail',
                        'latestMessage': { '$first': "$content" },
                        'timeStamp': { '$first': "$sendAt" }
                    }
                }

            ])

            const recentMessages = recentMessagesArray.length>0? recentMessagesArray:[]
            
            console.log("recentMessages",recentMessages)

            res.json({
                'recentMessages': recentMessages
            })
        } catch (e) {
            console.log(e)
        }
    }

    async getChatHistory(req, res) {
        try {
            connectToDb()

            const { senderEmail, recipentEmail } = req.query

            console.log(typeof email)
            // const message = new Message({
            //     recipentEmail: "Baonguyen2@gmail.com",
            //     senderEmail: "Baonguyen1@gmail.com",
                
            //     content: "MU Vodoi 3",
            //     sendAt:Date(),
            //     isDeleted: false
            // })

            // console.log(message)

            // await message.save()
            console.log("senderEmail",senderEmail)
            console.log("type", typeof senderEmail)

            const chatHistoryArray = await Message.aggregate([
                //get all recieved messages
                {
                    '$match': {
                        '$expr': {
                            '$or': [
                                {
                                    'recipentEmail': recipentEmail,
                                    'senderEmail': senderEmail,
                                    'isDeleted': false
                                },
                                {
                                    'recipentEmail': senderEmail,
                                    'senderEmail': recipentEmail,
                                    'isDeleted': false
                                },
                            ]
                        }
                        
                    }
                },
                {
                    '$addFields': {
                        'isSender': { '$eq': ['$senderEmail', senderEmail] }
                    }
                },
                //sort by latest sent message
                {
                    '$sort': {
                        'sendAt': 1
                    }
                },
                {
                    '$limit': 10
                }
                // {
                //     '$group': {
                //         '_id': null,
                //         'isSender': {'$first': '$isSender'},
                //         'content': {'$first': '$content'},
                //         'timeStamp': {'$first': '$sendAt'}
                //     }
                // }
            ])

            const chatHistory = chatHistoryArray.length>0? chatHistoryArray:[]
            
            console.log("chatHistory",chatHistory)

            res.json({
                'chatHistory': chatHistory
            })
        } catch (e) {
            console.log(e)
        }
    }

    async saveMessage(req,res) {
        try {

            connectToDb()
            const {senderEmail, recipentEmail, content} = req.query

            const newMessage = new Message({
                senderEmail: senderEmail,
                recipentEmail: recipentEmail,
                content: content,
                sendAt: new Date()
            })

            await newMessage.save()

            return res.status(200)
        } catch(e) {
            console.log("Some erros happen", e)
        }
    }

    // async getRencentMessage(req,res) {
    //     try {
    //         connectToDb()

            
    //     } catch(e) {
    //         console.log("Some errors happen", e)
    //     }
    // }
}

module.exports = new RegisterController
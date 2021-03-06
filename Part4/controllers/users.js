const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
    const users = await User
        .find({}).populate('blogs', { url : 1, title : 1, author : 1 })

    response.json(users.map(u => u.toJSON()))
})

usersRouter.post('/', async (request, response, next) => {
    try {
        const body = request.body

        if(body.password.length < 3){
            return response.status(400).json({error:'password is shorter than the minimum allowed length (3).' })
        }

        const user = new User({
            username: body.username,
            name: body.name,
            password:await bcrypt.hash(body.password,10)
        })

        const savedUser = await user.save()

        response.json(savedUser)
    } catch (exception) {
        next(exception)
    }
})

module.exports = usersRouter
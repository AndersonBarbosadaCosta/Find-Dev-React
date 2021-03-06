const axios = require('axios')
const Dev = require('../models/Dev')
const ParseStringAsArray = require('../utils/parseStringtoArray')
module.exports = {

    async index(req,res) {
    const devs = await Dev.find()
    return res.json(devs)
    },

    async store(req, res)  {
        const {github_username, techs,latitude,longitude} = req.body

        let dev = await Dev.findOne({github_username})
        if(!dev){
            const response = await axios.get(`https://api.github.com/users/${github_username}`)
    
            const {name = login, bio, avatar_url} = response.data
        
            const techsArray = ParseStringAsArray(techs)
        
            const location = {
                type:'Point',
                coordinates:[ longitude,latitude]
            }
        
              dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
             console.log(name, bio, avatar_url, github_username)
        }
        
        return res.json(dev)
    }



}
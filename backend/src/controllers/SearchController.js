const Dev = require('../models/Dev')
const ParseStringAsArray = require('../utils/parseStringtoArray')

module.exports = {
    async index(req,res){
        const {latitude, longitude,techs} = req.query

        const techsArray = ParseStringAsArray(techs)
        console.log(techsArray)
        //buscar todos os devs num raio de 10km
        //filtrar por tecnologias

        const devs = await Dev.find({
         techs:{
             $in:techsArray
         },
         location:{
            $near:{
                $geometry:{
                    type:'Point',
                    coordinates:[longitude,latitude]
                },
                $maxDistance:10000
            } 
         }  
        })
        return res.json({devs})
    }
}
const express = require ('express')
const path = require ('path')
const urllib = require ('urllib')
const bodyParser = require('body-parser')
const { map } = require('async')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// keys data
const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}
// end keys data

let newdata = []

app.get(`/teams/:teamName`,function(req,res){
    const teamName = req.params.teamName
    urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, data, resp) {
        if (err) {
          throw err;
        }
        
        const dd= JSON.parse(data).league.standard
        console.log(dd)
        newdata = dd.filter(element =>(element.teamId == teamToIDs[teamName] && element.isActive == true)).map(element =>{return{ 
            firstName:element.firstName,
            lastName : element.lastName,
            postion : element.pos,
            jersey : element.jersey,
            imgSrc : `https://nba-players.herokuapp.com/players/${element.lastName}/${element.firstName}`
        }});
        console.log(newdata)
        res.send(newdata)
    })
})

const port = 3000
app.listen(port, function(){
console.log(`srever is up and running on port ${port}, and all is good!`)
})
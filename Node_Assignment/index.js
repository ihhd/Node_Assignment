const express = require('express')
const port = process.env.PORT || 3000
const app = express()

// just for checking
// app.get('/',(req,res) => {
//     res.send('Hello World!');
// })

// create one object called stories and within that added all the json data to get in the localhost server
const stories = [
    {
    "title": "Amy Schneider’s Jeopardy! Streak Ends at 40 Consecutive Wins and $1.4 Million",
    "link": "https://time.com/6142934/amy-schneider-jeopardy-streak-ends/"
    },
    {
    "title": "'Writing With Fire' Shines a Light on All-Women News Outlet",
    "link": "https://time.com/6142628/writing-with-fire-india-documentary/"
    },
    {
    "title": "Moderna Booster May Wane After 6 Months",
    "link": "https://time.com/6142852/moderna-booster-wanes-omicron/"
    },
    {
    "title": "Pressure Mounts for Biden to Nominate a Black Woman to the Supreme",
    "link":
    "https://time.com/6142743/joe-biden-supreme-court-nominee-black-woman-campaignpromise/"
    },
    {
    "title": "The James Webb Space Telescope Is in Position—And Now We Wait",
    "link": "https://time.com/6142769/james-webb-space-telescope-reaches-l2/"
    },
    {
    "title": "We Urgently Need a New National COVID-19 Response Plan",
    "link": "https://time.com/6142718/we-need-new-national-covid-19-response-plan/"
    }
]
// called the simple GET method 
// here the user has to mention the getTimeStories tag to get the JSON Objet Array
app.get('/getTimeStories',(req,res) => {
    res.send(stories)
})
app.listen(port,() => console.log(`Listening on port ${port}..`))
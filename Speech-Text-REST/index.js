import express from 'express';
import bodyParser from 'body-parser';
import { translate, Translator } from '@vitalets/google-translate-api';
import {wordsToNumbers} from 'words-to-numbers';
import qr from "qr-image";
import fs from "fs";
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// import {HttpProxyAgent} from 'http-proxy-agent';

// const agent =new HttpProxyAgent('http://103.152.112.162:80');


const app = express();
const PORT = 3000;


let userInput= "";
let userDate ;  

let symptoms= {        //Need to brilliantly calculate give this input array values.... KEY POINT
                  general: ["cold","fever","head","head ache","bruises","injuries","leg pain"],
                  exotic : {
                            ENT:["eyes","eye", "eye irritation","ear","mouth","tongue","tonsils","throat"] ,
                            gastero:["ulcer","stomach","stomach pain","stomach irritation","diahoera","gas"],
                            skin : ["skin","outer skin","fire burns","burns"]
                           },
            }; //Gowtham  from past, check if we can iterate to all the general , exotic ->ENT,gastero,skin ==> To find burns, try this 

//    do 2 seperate array of symptoms : 
//    GeneralSymptoms -> requires General MBBS , exoticSymptoms -> requires Specialized docs

let doctorMatcher = {     
                       effects : [],
                       days : 0,
                       doctorRequired : "",
                    }

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files
app.use(express.urlencoded({ extended: true }));

app.post("/userDetails",(req,res)=>{
    const values =JSON.stringify(req.body);
    console.log(values);
     handleQRCode(values);
     res.sendFile(path.join(__dirname,'public','1stPage.html'));

})



app.post('/datePage',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','2ndPage.html'));
    // res.send(`<h1>Working</h1>`);
})


// Endpoint to handle translation
app.post('/translate', async (req, res) => {
    const { tamilText } = req.body;

    try {
        const result = await translate(tamilText, { from: 'ta', to: 'en' }); //,fetchOptions: { agent }
        res.json({ translatedText: result.text });
        // console.log(typeof(result.text));
        userInput =  result.text;
      handleUserInput();
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Translation failed' });
    }
});

app.post('/date',async (req,res)=>{
  const {tamilDate} =  req.body;

    try{
        const date = await translate(tamilDate, {from:'ta', to:'en'});
        res.json({translatedDate: date.text});
        userDate  = date.text;
        handleDate();
    } catch(error){
        console.error("Error happened bro:",error);
        res.status(500).json({error: "Translation Failed bro"});
    }


})


function handleUserInput(){
    // console.log(userInput);
    doctorMatcher.effects.length = 0;
    // userInput =  "I have cold and fever";
    let lowerUserInp = userInput.toLowerCase();
    let flag = 0;
    for( let symptom of symptoms.general){
        if(lowerUserInp.includes(symptom)){
            console.log(symptom);
            doctorMatcher.effects.push(symptom);
            doctorMatcher.doctorRequired = "General Physician";
            flag = 1;
            // break; // donot break, collect all symptoms matching the symtpoms array!
        }
    }
    for( let symptom of symptoms.exotic.ENT){
        if(lowerUserInp.includes(symptom)){
            // console.log(symptom);
            doctorMatcher.effects.push(symptom);
            doctorMatcher.doctorRequired = "DLO";
            flag = 1;
            // break; // donot break, collect all symptoms matching the symtpoms array!
        }
    }
    for( let symptom of symptoms.exotic.gastero){
        if(lowerUserInp.includes(symptom)){
            // console.log(symptom);
            doctorMatcher.effects.push(symptom);
            doctorMatcher.doctorRequired = "GasteroIntestinelogists";
            flag=1;
            // break; // donot break, collect all symptoms matching the symtpoms array!
        }
    }
    for( let symptom of symptoms.exotic.skin){
        if(lowerUserInp.includes(symptom)){
            // console.log(symptom);
            doctorMatcher.effects.push(symptom);
            doctorMatcher.doctorRequired = "Dermatologists";
            flag=1;
            // break; // donot break, collect all symptoms matching the symtpoms array!
        }
    }

    //If suppose symptoms not found means we assign an MBBS in general
if(flag==0){
    doctorMatcher.effects.push("Symptom not identified");
    doctorMatcher.doctorRequired = "General Physician";

}
// console.log(doctorMatcher);
    
}

function handleDate(){
    doctorMatcher.days = 0;
let convertedDate = wordsToNumbers(userDate);
convertedDate = convertedDate.toString();
console.log("The converted date",convertedDate);
let number = convertedDate.match(/\d+/)[0];
    doctorMatcher.days = number;
    console.log(doctorMatcher);
}

function handleQRCode(userDetails){
    var qr_svg = qr.image(userDetails);
    qr_svg.pipe(fs.createWriteStream("report.png"));
}


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

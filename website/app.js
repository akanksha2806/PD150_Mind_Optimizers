var express =                      require("express"),
    app =                          express(),
    bodyParser =                   require("body-parser"),
    mongoose =                     require("mongoose"),
    methodOverride =               require("method-override"),
    Ngo = require("./models/ngo"),
    path = require('path'),
    fetch =                        require('node-fetch');
    Sentiment = require("sentiment")
const multer = require('multer');
const helpers = require('./helper');
const Nexmo = require('nexmo');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


mongoose.connect("mongodb://localhost:27017/webngo_app", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

//OCR IMAGE UPLOAD
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'ImageUpload/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});



const nexmo = new Nexmo({
    apiKey: '5d41d303',
    apiSecret: 'ADhpJ9QLgKjAqNBL',
});



app.get("/", function (req, res) {
    res.render("category");
});



//GET SYM

//SENTIMENTAL ANALYSIS 
var sentiment = new Sentiment();
app.get("/sentiment", function (req, res) {
    res.render("senti");
});
app.post("/sentiment", function (req, res) {
    var description = req.body.desc;
    var obj = sentiment.analyze(description);
    console.log(obj);
    console.log(obj.positive);
    var pos = obj.positive[0];
    var neg = obj.negative[0];
    if (pos !== undefined)
        res.redirect("/happy");
    else if (neg !== undefined)
        res.redirect("/sad");
    else
        res.redirect("/okayMood");

});
app.get("/happy", function (req, res) {
    res.render("happy");
});
app.get("/sad", function (req, res) {
    res.render("sad");
});
app.get("/okaymood", function (req, res) {
    res.render("okaymood");
});

//#######GAME 1#########
app.get("/game1", function (req, res) {
    res.render("game1");
});


app.get("/game2", function (req, res) {

    res.render("game2");
});

//TTS

app.get("/TextToSpeech", function (req, res) {
    res.render("TTS");
});
//show all ngos
app.get("/ngo", function (req, res) {
    Ngo.find({}, function (err, allngo) {
        if (err) {
            console.log(err);
        } else {
            res.render("ngo", { Ngo: allngo});
        }
    });
});
// create ngo
app.get("/newngo", function (req, res) {
    res.render("newngo");
});

app.post("/newngo", function (req, res) {
    var name = req.body.name;
    var phone = req.body.phone;
    var image = req.body.image;
    var address = req.body.address;
    var email = req.body.email;
    var description = req.body.description;

    var newngo = {
        name: name,
        phone: phone,
        image: image,
        address: address,
        email:email,
        description: description
    }


    Ngo.create(newngo, function (err, newNgo) {
        if (err)
            console.log(err);
        else
            res.redirect("/ngo");
    });
});

// show particular ngo

app.get("/ngo/:id", function (req, res) {
    Ngo.findById(req.params.id, function (err, showNgo) {
        if (err)
            console.log(err);
        else
            res.render("showngo", { ngo: showNgo });
    });
});




// message form
app.get("/ngo/:id/message", function (req, res) {
    Ngo.findById(req.params.id, function (err, particularNgo) {
        if (err)
            console.log(err);
        else
            res.render("Messageform", { ngo: particularNgo });
    });

    
});


app.post("/ngo/:id/message", function (req, res) {
    console.log(req.body);
    console.log(req.params);
    //console.log(particularNgo);
    Ngo.findById(req.params.id, function (err, ngoName) {
        if (err)
            console.log(err);
        else {
            const from = '919650009644'
            const to = ngoName.phone
            const text = req.body.message

            nexmo.message.sendSms(from, to, text, (err, responseData) => {
                if (err) {
                    console.log(err);
                } else {
                    if (responseData.messages[0]['status'] === "0") {
                        console.log("Message sent successfully.");
                    } else {
                        console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
                    }
                }
            });
            res.redirect("/ngo");
        }
    });
});
//vr 
app.get("/mountain", function (req, res) {
    res.render("mountain");
});
app.get("/temple", function (req, res) {
    res.render("temple");
});
app.get("/beaches", function (req, res) {
    res.render("beaches");
});
app.get("/undersea", function (req, res) {
    res.render("undersea");
});
//doctors api
app.get("/doc", function (req, res) {
    res.render("doc");
});
//app.post('/geo', (req, res) => {
//    var lat = req.body.lat;
//    var long = req.body.long;
//    console.log("inpost req block", lat, long);
//    var obj = [lat, long]
//    console.log("object in post", obj)
//    res.redirect(`/geo/${obj}`)
//})
//app.get('/geo/:obj', async (req, res) => {
//    const arr = req.params.obj.split(",")
//    console.log(arr)
//    var lati = arr[0]
//    var longi = arr[1]
//    console.log(lati)
//    const lat = parseFloat(lati)
//    const long = parseFloat(longi)
//    const resource_url = `https://api.betterdoctor.com/2016-03-01/practices?location=${lat}%2C${long}%2C100&user_location=${lat}%2C${long}&skip=0&limit=10&user_key=44756af5e37f78c4e8794317d56d7d7c`
//    console.log(resource_url)
//    const response = await fetch(resource_url)
//    const doctor_data = await response.json()
//    console.log(doctor_data)

//    const data = {
//        doctor: doctor_data

//    };

//    res.json(data);

//})
//symptoms api

app.get('/health', function (req, res) {
    res.render('healthForm')
})
app.post('/health', function (req, res) {
    // var parameters = {id:req.body.symptom, gender:req.body.gen, year:req.body.year}
    console.log("REQUEST", req.body);
    var id = req.body.sym;
    var gender = req.body.gen;
    var year = req.body.year;
    var parameters = [id, gender, year]
    console.log("PARAMETERS", parameters)

    res.redirect(`/health/${parameters}`)

})
app.get('/health/:parameters', async (request, response) => {
    console.log(request.params);
    const parameters = request.params.parameters.split(',');
    console.log(parameters);
    const id = parameters[0];
    const gender = parameters[1];
    const year = parameters[2];
    console.log(id, gender, year);
    //const api_key = process.env.API_KEY;
    const health_url = `https://healthservice.priaid.ch/diagnosis?symptoms=[${id}]&gender=${gender}&year_of_birth=${year}&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imx1YmhhbmlhZ2Fyd2FsQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMzY0OSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjEwOSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiIxMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJCYXNpYyIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjAtMDEtMTgiLCJpc3MiOiJodHRwczovL2F1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE1Nzk4MDA5NTQsIm5iZiI6MTU3OTc5Mzc1NH0.mUk15ZITJQHlBm7DhqDVTgSnYAUVlCO5kldbjao59wM&format=json&language=en-gb`;
    //  const health_url = `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${id}]&gender=${gender}&year_of_birth=${year}&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imt1amFzcml2YXN0YXZhMjRAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI2MzE5IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIwLTAxLTE4IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE1NzkzNjc3MTEsIm5iZiI6MTU3OTM2MDUxMX0.LkSJTqdmtLLTy5uwv3snGTdI6Lg-OdTs1CsLozshM1k&format=json&language=en-gb`;
    const health_response = await fetch(health_url);
    //console.log(health_response);
    const health_data = await health_response.json();


    //console.log(health_data)
    const data = {
        health: health_data,

    };
    //console.log(data);
    //new object().toString()

    //const x = JSON.parse(health_data);
    //console.log(x);

    //const x =  health_data().toString();
    //const y =  JSON.parse(x);
    //console.log(y);


    response.json(data);

});

app.delete("/ngo/:id", function (req, res) {
    Ngo.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect("/ngo");
        } else {
         
            res.redirect("/ngo");
        }
    });
});



//OCR DYSLEXIC
app.get("/getImage", function (req, res) {

    res.render("getImageForm");
});

app.post('/getImage', (req, res) => {
   
    let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).single('pic');

    upload(req, res, function (err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }
        //console.log(req.file.path);
        
        var imageUrl = req.file.path;
        //console.log(imageUrl);
        const spawn = require("child_process").spawn;
        const process = spawn('python', ["./ocr.py", imageUrl]);
        process.stdout.setEncoding('utf-8');
        process.stderr.on('data', function (data) {
            console.log(data.toString())
        });
        process.stdout.on('data', function (data) {
            response = data.toString();
            respJson = JSON.parse(response)
            res.render("DyslexicPage", { Text: respJson.text });
        });
    
    });
});


//search by categories
//app.get("/categories", function (req, res) {
//    res.render("category");
//});

app.post("/categories", function (req, res) {
    var Cat = req.body.categories;
    console.log("cat=", Cat);
    res.redirect("/" + Cat); 
});

app.get("/home", function (req, res) {
    res.render("home");
});
app.get("/handicapped", function (req, res) {
    res.render("handicapped");
});
//visually impaired 
app.get("/blind", function (req, res) {
    res.render("blind");
});

app.get("/audioBooks", function (req, res) {
    res.render("audioBooks");
});
app.get("/dyslexia",function(req,res){
    res.render("LearningDisabilities")
})

app.get('/skill', function (req, res) {
    res.sendFile(path.join(__dirname + '/GK.html'));
    //__dirname : It will resolve to your project folder.
});
app.get("/quiz", function (req, res) {
    res.render("Quiz");
});

app.listen(3000, function () {
    console.log("server started");
});

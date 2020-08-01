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




app.delete("/ngo/:id", function (req, res) {
    Ngo.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect("/ngo");
        } else {
         
            res.redirect("/ngo");
        }
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

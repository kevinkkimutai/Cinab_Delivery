const { Vonage } = require('@vonage/server-sdk');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const vonage = new Vonage({
    apiKey: process.env.VONAGE_API_KEY,
    apiSecret: process.env.VONAGE_API_SECRET
});

//todo create custom error message on error and success
// app.post('/sendOTP', function (req, res) {
//     let phoneNumber = req.body.phoneNumber;
//     console.log(phoneNumber);
//     vonage.verify.start({
//         number: phoneNumber,
//         brand: "Cinab",
//         pinExpiry: 900,
//         codeLength: 4,
//         workflowId: 6
//     }).then(resp => {
//         console.log(resp.request_id);
//         return res.status(200).send(resp.request_id);
//     }).catch(err => {
//         return res.status(500).send(err);
//     });
// });

//
// app.post('/verifyOTP', function (req, res) {
//     let REQUEST_ID = req.body.requestId;
//     let CODE = req.body.code;
//     console.log(REQUEST_ID + ": " + CODE)

//     // vonage.verify.check(REQUEST_ID, CODE)
//     //     .then(resp => console.log(resp))
//     //     .catch(err => console.error(err));

//     vonage.verify.check(REQUEST_ID, CODE)
//         .then(resp => {
//             return res.status(202).send(resp);
//         })
//         .catch(err => {
//             return res.status(500).send(err);
//         });
// });


//dummy 
app.post('/sendOTP', function (req, res) {
    let phoneNumber = req.body.phoneNumber;
    console.log(phoneNumber);
    let resp = {
        'request_id': "498561c45b13463899bddac5ebde1be8",
        'err': "invalid number"
    };
    if (phoneNumber.length == 13) {
        return res.status(200).send(resp.request_id);
    } else {
        return res.status(500).send(resp.err);
    }
});

//dummy
app.post('/verifyOTP', function (req, res) {
    let REQUEST_ID = req.body.requestId;
    let CODE = req.body.code;
    let resp = {
        'request_id': "498561c45b13463899bddac5ebde1be8",
        'err': "invalid number"
    };
    console.log(REQUEST_ID + ": " + CODE)

    if (CODE == "5353") {
        return res.status(202);
    } else {
        return res.status(500);
    }
});



app.listen(3000, function () {
    return console.log('Started backend delivery server on port ' + 3000);
})
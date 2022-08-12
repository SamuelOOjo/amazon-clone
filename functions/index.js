const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { onRequest } = require("firebase-functions/v1/https");
const stripe = require("stripe")("sk_test_51JkEr9AkawONvp5eSfA3I2vUQ7G0O5F5BS7fcuhFfabhxVF0KCNn2fjq3o4CQvakfBPVIOQhBXdBnCwcz1tzhCPw00vpu2hhCZ")

//Api

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello World!'))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd"
    });

    // OK - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
})

// - Listen command
exports.api = functions.https.onRequest(app)
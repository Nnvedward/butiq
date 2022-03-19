const stripe = require('stripe')(process.env.STRIPE_KEY)
const router = require('express').Router()

router.post('/payment', (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd'
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send(stripeErr)
        } else {
            res.status(200).send(stripeRes)
        }
    })
})

module.exports = router
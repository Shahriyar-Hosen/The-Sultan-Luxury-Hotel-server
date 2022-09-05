

// export const createPayment = async (req, res, next) => {
//     const { price } = new Payment(req.body)
//     const amount = price * 100
//     try {
//         // const paymentIntent = await stripe.paymentIntents.create({
//         //     amount: amount,
//         //     currency: 'usd',
//         //     payment_method_type: ['card']
//         // })
//         // res.status(200).json({clientSecret: paymentIntent.client_secret})
//     } catch (err) {
//         res.status(400).json(err)
//     }
// }
const sgMail = require('@sendgrid/mail')
const sendgridAPIkey = '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';

sgMail.setApiKey(sendgridAPIkey);

sendingWelcomeEmail = (email,name)=>{
    const message = {
            to: email,
            from: '19dce111@charusat.edu.in',
            subject: `welcome ${name} to parivahan`,
            text: `Hello ${name} welcome to parivahan famaily`
        }
    sgMail.send(message).then((res)=>{console.log("email is successfully sent")}).catch((e)=>{console.log(e);})
}
sendingDeleteEmail = (email,name)=>{
    const message = {
            to: email,
            from: '19dce111@charusat.edu.in',
            subject: `Account deletion of task manager`,
            text: `Hello ${name}, Your account with ${email} has been successfully deleted form task manager database`
        }
    sgMail.send(message).then((res)=>{console.log("email is successfully sent")}).catch((e)=>{console.log(e);})
}
orderPlacedEmail = (email,cname)=>{
    const message = {
            to: email,
            from: '19dce111@charusat.edu.in',
            subject: `Your order has been placed`,
            text: `Hello ${cname}, Your account with ${email} has an order, which has been accepted by driver`
        }
    sgMail.send(message).then((res)=>{console.log("email is successfully sent")}).catch((e)=>{console.log(e);})
}
orderPlacedEmail_new = (email,cname,pickup_address,drop_address,order_type,quantity,rate)=>{
    const message = {
            to: email,
            from: '19dce111@charusat.edu.in',
            subject: `Your order has been placed`,
            text: `Hello ${cname}, Your account with ${email} has an order, which has been accepted by driver`,
            text: `order detais are here`,
            text: `pickup_address :- ${pickup_address}`,
            text: `drop_address :- ${drop_address}`,
            text: `order_type :- ${order_type}`,
            text: `quantity :- ${quantity}`,
            text: `rate :- ${rate}`,
        }
    sgMail.send(message).then((res)=>{console.log("email is successfully sent")}).catch((e)=>{console.log(e);})
}

module.exports = {
    sendingWelcomeEmail,
    sendingDeleteEmail,
    orderPlacedEmail,
    orderPlacedEmail_new
}

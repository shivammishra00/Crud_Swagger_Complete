//===========  require node mailer
const nodemailer = require('nodemailer')

// console.log(nodemailer)

// configure email credentials  ///
const emailfunction = (emails) => {

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",   /// simple male tranfer protocall 
    port: 465 , 
    secure: true,
    auth: {
        user: "shivam8878213950@gmail.com",   ///  ye keval login ka kaam kar raha 
        pass: 'edxy qvda bkgr nujg'    // email ka pass except nhi karta  alag se create karna padta hi ..
    }  
})

///////============  set email / compose email ===================//////////
 let maileOptios = {
    from: 'shivam8878213950@gmail.com',  //   ye sender hai 
    to: emails,      //  kisko karna hai ..
    subject: 'this mail send from ode js',
    text: 'hii  how are you , you are registerd successfully'
 }

 ///////////////================    send email    /////////////////////

    transporter.sendMail(maileOptios, (err, ack)=>{
        if(err) {
            console.log("mail sending failed")
        }
        else{
            console.log("mail sending successfully")
        }
    })
 }


module.exports = {emailfunction}

const nodemailer = require('nodemailer')
class MailService{
    this.transporter = nodemailer.createTransport({
        host:"smpt.example.com",
        port:587,
        secure:false
    })
    async sendActivationMail(to,link){

    }
}
module.exports = new MailService();
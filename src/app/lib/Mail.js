import nodemailer from 'nodemailer';
import mailConfig from '../../app/config/mail'

export default nodemailer.createTransport(mailConfig)
// "use strict";
// const nodemailer = require("nodemailer");

const router = require("express").Router();
const { User } = require("../../models");

// // nodemailer sender user log in information
// const transporter = nodemailer.createTransport({
//   host: "smtp.sendgrid.net",
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: process.env.DB_NODEMAILER_USER, // generated ethereal user
//     pass: process.env.DB_NODEMAILER_PASS // generated ethereal password
//   },
// });
const { Resend } = require("resend");

const RESEND_APIKEY = process.env.RESEND_APIKEY;

const resend = new Resend(RESEND_APIKEY);

module.exports = resend;

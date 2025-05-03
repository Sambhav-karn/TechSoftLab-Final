const {check} = require("express-validator");

exports.ClientRegisterValidator = [
    check("clientName", "Name is Required").not().isEmpty(),
    check("clientEmail", "Email is Required").not().normalizeEmail({
        gmail_remove_dots:true,
    }),
    check("clientPassword", "Client Password is Required").not().isEmpty()
];


exports.ClientLoginValidator = [
    check("clientEmail", "Email is Required").not().normalizeEmail({
        gmail_remove_dots:true,
    }),
    check("clientPassword", "Client Password is Required").not().isEmpty()
];
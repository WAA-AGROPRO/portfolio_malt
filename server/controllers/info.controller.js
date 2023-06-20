const Info = require("../models/info.model");
const nodemailer = require("nodemailer");

exports.createInfo = async(req, res) => {
    try {
        const info = await Info.create({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            telephone: req.body.telephone,
            message: req.body.message,
        });
        res.status(201).json({
            message: "Info created successfully!",
        });
    } catch (error) {
        res.status(400).json({
            error: error,
        });
    }
};

exports.sendEmail = async(req, res) => {
    try {
        const info = await Info.create({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            telephone: req.body.telephone,
            message: req.body.message,
        });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "Sending Email using Node.js",
            text: `Name: ${req.body.name} \n Email: ${req.body.email} \n Subject: ${req.body.subject} \n Telephone: ${req.body.telephone} \n Message: ${req.body.message}`,
        };
        
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
                res.status(400).json({
                    error: error,
                });
            } else {
                console.log("Email sent: " + info.response);
                res.status(201).json({
                    message: "Info created successfully!",
                });
            }
        });
    } catch (error) {
        res.status(400).json({
            error: error,
        });
    }
};



exports.getAllInfo = async (req, res) => {
    try {
        const info = await Info.findAll();
        res.status(200).json({ info });
    } catch (error) {
        res.status(400).json({
            error: error,
        });
    }
}

exports.getOneInfo = async(req, res) => {
    try {
        const info = await Info.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(info);
    } catch (error) {
        res.status(400).json({
            error: error,
        });
    }
};


exports.deleteInfo = async(req, res) => {
    try {
        const info = await Info.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Info deleted successfully!",
        });
    } catch (error) {
        res.status(400).json({
            error: error,
        });
    }
};
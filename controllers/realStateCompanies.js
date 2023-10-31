const jwt = require('jsonwebtoken');
const RSC = require('../models/realStateCompanies');
const bcrypt = require('bcrypt');

exports.createRSC = async (req, res) => {
    /*  
        #swagger.description = Create a real state company
        #swagger.parameters['body'] = {
            in: 'body',
            description: "Real State Company to create",
            required: true,
            schema: {
              fantasyName: "MyRealState",
              contactEmail: "myrealstate@gmail.com",
              password: ""
            }
        }
        #swagger.tags = ['Real State Companies']
    */
    const {
        fantasyName,
        contactEmail,
        password,
    } = req.body;
    const isNewRSC = await RSC.isThisEmailInUse(contactEmail);
    if (!isNewRSC) {
        return res.status(409).json({
            success: false,
            message: 'Este email ya existe en la plataforma. Si no recuerda la contraseña la puede recuperar',
        });
    }
    const newRSC = await RSC({
        fantasyName,
        contactEmail,
        password,
    });
    await newRSC.save();
    res.status(201).json({ success: true, newRSC });
};

exports.getRSC = async (req, res) => {
    /*  
        #swagger.description = Obtain a real state company with ID.
        #swagger.parameters['id'] = {
            in: 'query',
            description: "Real State Company ID.",
            required: true,
            type: "number"
        }
        #swagger.tags = ['Real State Companies']
    */
    const {
        id,
    } = req.query;
    if (id === "no existe") {
        res.status(404).json({ success: false, message: "Dummy response" })
    }
    res.status(200).json({ success: true, message: "Dummy response" });
};

exports.getOwnProperties = async (req, res) => {
    /*  
        #swagger.description = Obtain properties for a real state company.
        #swagger.parameters['id'] = {
            in: 'query',
            description: "Real State Company ID for get own properties.",
            required: true,
            type: "number"
        }
        #swagger.tags = ['Real State Companies']
    */
    const {
        id,
    } = req.query;
    if (id === "no existe") {
        res.status(404).json({ success: false, message: "Dummy response" })
    }
    res.status(200).json({ success: true, message: "Dummy response" });
};

exports.updateRSC = async (req, res) => {
    /*  
        #swagger.description = Update a real estate company
        #swagger.parameters['id'] = {
            in: 'path',
            description: "Real State Company ID.",
            required: true,
            type: "number"
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: "Fields to update.",
            required: true,
            schema: {
                key: "value"
            }
        }
        #swagger.tags = ['Real State Companies']
    */
    const {
        id,
    } = req.path;
    if (id === "no existe") {
        res.status(404).json({ success: false, message: "Dummy response" })
    }

    const {
        field,
    } = req.body;
    if (field === "no existe") {
        res.status(409).json({ success: false, message: "Dummy response" })
    }

    res.status(200).json({ success: true, message: "Dummy response" });
};

exports.updateFieldRSC = async (req, res) => {
    /*  
        #swagger.description = Update a field for a real estate company
        #swagger.parameters['id'] = {
            in: 'path',
            description: "Real State Company ID.",
            required: true,
            type: "number"
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: "Field to update.",
            required: true,
            schema: {
                key: "value"
            }
        }
        #swagger.tags = ['Real State Companies']
    */
    const {
        id,
    } = req.path;
    if (id === "no existe") {
        res.status(404).json({ success: false, message: "Dummy response" })
    }

    const {
        field,
    } = req.body;
    if (field === "no existe") {
        res.status(409).json({ success: false, message: "Dummy response" })
    }

    res.status(200).json({ success: true, message: "Dummy response" });
};

exports.getAppointments = async (req, res) => {
    /*  
        #swagger.description = Get appointments for a real state company.
        #swagger.parameters['RealStateID'] = {
            in: 'query',
            description: "Real State Company ID.",
            required: true,
            type: "number"
        }
        #swagger.tags = ['Real State Companies']
    */
    const {
        RealStateID
    } = req.query;
    if (RealStateID === "no existe") {
        res.status(404).json({ success: false, message: "Dummy response" })
    }

    res.status(200).json({ success: true, message: "Dummy response" });
};

exports.deleteRSC = async (req, res) => {
    /*  
        #swagger.description = Delete a real estate company
        #swagger.parameters['id'] = {
            in: 'path',
            description: "Real State Company ID.",
            required: true,
            type: "number"
        }
        #swagger.tags = ['Real State Companies']
    */
    const {
        id,
    } = req.path;
    if (id === "no existe") {
        res.status(404).json({ success: false, message: "Dummy response" })
    }

    res.status(204).json({ success: true, message: "Dummy response" });
};
const ProviderModel = require('../models/provider.model')

createProvider = (req, res) => {
    const {name, locale, available} = req.body
    let payload = {
        name: name,
        locale: locale,
        available: available
    }
    const provider = new ProviderModel(payload)
    provider
    .save()
    .then((addedProvider) => {
        return res.status(201).json({
            success: true,
            id: addedProvider._id,
            message: 'Provider created!',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message: 'Provider not created!',
        })
    })  
}

updateProvider = async (req, res) => {
    const body = req.body
    console.log(body, 'update body in controller');
 
    ProviderModel.findByIdAndUpdate({ _id: req.body.id },{$set: {name: req.body.name, locale: req.body.locale, available: req.body.available}}).then((provider, err) => {
        if (err) {
            console.log(`Server Error ${err}`);
        }else {
            ProviderModel.find({_id: req.body.id}).then((users, err) => {
                if (err) {
                    console.log(`Server Error ${err}`);
                }else {
                res.send({authenticated: true, users: users})
                }
            })
        }    
    }) 
}

deleteProvider = async (req, res) => {
    ProviderModel.findByIdAndDelete({ _id: req.params.id}).then((err) => {
        if (err) {
            console.log(`Server Error ${err}`);
        }else {
            res.send({authenticated: true})
        }
    })
}

getProviderById = async (req, res) => {
    await ProviderController.findOne({ _id: req.params.id }, (err, provider) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!provider) {
            return res
                .status(404)
                .json({ success: false, error: `Provider not found` })
        }
        return res.status(200).json({ success: true, data: provider })
    }).catch(err => console.log(err))
}

getProviders = async (req, res) => {
    ProviderModel.find().then((allProviders, err) => {
        if (err) {
            console.log(`Server Error: ${err}`);
        }else {
            res.json(allProviders)
        }
    })
}

module.exports = {
    createProvider,
    updateProvider,
    deleteProvider,
    getProviders,
    getProviderById,
}
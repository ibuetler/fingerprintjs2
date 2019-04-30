// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String
    },
    fingerprints: [String]
}, {
    usePushEach: true
});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// checking if user has fingerprint
userSchema.methods.hasFingerprint = function(fingerprint) {
    return this.fingerprints.indexOf(fingerprint) !== -1;
};

// adding new fingerprints to user
userSchema.methods.addFingerprint = function(fingerprint) {
    if (!this.hasFingerprint(fingerprint)) {
        this.fingerprints.push(fingerprint);
    }
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);

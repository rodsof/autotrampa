const mongoose = require('mongoose');
const { Double } = require('bson');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    company_id: {type: String, required: true, unique: true},
    company_name: {type: String},
    company_short_info: {type: String},
    phone_number: {type: Number},
    number_of_posts: {type: Number},
    address: {type: String},
    email: {type: String},
    picture: {type: String},
    type_of_account: {type: String},
    //statistics: {type: String}, vidjeti sta tacno hoce pod statistikom
    Url: {type: String}
});

const Company = mongoose.model('Company',CompanySchema);

module.exports = Company;

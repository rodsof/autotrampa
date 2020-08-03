const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarSchema = new Schema({
  car_id: { type: String, required: true, unique: true },
  car_name: { type: String },
  car_brand: { type: String },
  car_model: { type: String },
  car_location: { type: String },
  car_year: { type: Number },
  transmission_type: { type: String },
  drive_type: { type: String },
  miles: { type: Number },
  registration_due: { type: Date },
  VIN_number: { type: String },
  engine_size: { type: Number },
  engine_power: { type: Number },
  max_speed: { type: Number },
  fuel_consumption: { type: Number },
  number_of_seats: { type: Number },
  air_condition: { type: Boolean },
  radio_type: { type: String },
  navigation: { type: Boolean },
  sensors: { type: Boolean },
  alarm: { type: Boolean },
  description: { type: String },
  Url: { type: String },
});

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;

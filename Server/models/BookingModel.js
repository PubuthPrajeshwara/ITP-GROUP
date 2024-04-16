const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  specialNotes: { type: String },
  status: { type: String, default: 'pending' }, // Set default value to 'pending'
  mechanic: { type: String },
  location: { type: String, required: true },
  serviceType: { type: String, required: true },
  vehicleModel: { type: String, required: true },
  vehicleNumber: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;

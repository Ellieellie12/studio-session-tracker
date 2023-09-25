import mongoose from 'mongoose'

const Schema = mongoose.Schema

const sessionSchema = new Schema({
  room: {
    type: Number, min:1, max:7},
  drink: {
    type: String, 
    enum:['Bottled Water', 'Sparkling Water', 'Tea', 'Coffee']
  },
  snack: {
    type: String,
    enum:['Cookies', 'Chips','Fruit Bowl', 'Trail Mix']
  },
  personBooking: {type: Schema.Types.ObjectId, ref: 'Profile'},
  instruments: [{
    type: Schema.Types.ObjectId, ref: 'Instrument'
  }], 
  }, {
  timestamps: true
})


const Session = mongoose.model('Session', sessionSchema)

export {
  Session
}
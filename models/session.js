import mongoose from 'mongoose'

const Schema = mongoose.Schema

const sessionSchema = new Schema({
  room: {
    type: Number, min:1, max:7},
  drinks: {
    type: String, 
    enum:['Bottled Water', 'Sparkling Water', 'Tea', 'Coffee']
  },
  snacks: {
    type: String,
    enum:['Cookies', 'Chips','Fruit Bowl', 'Trail Mix']
  },
  personBooking: {type: Schema.Types.ObjectId, ref: 'Profile'},
  instruments: {type: Schema.Types.ObjectId, ref: 'Instrument'}
})



const Session = mongoose.model('Session', userSchema)

export {
  Session
}
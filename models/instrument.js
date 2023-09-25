import mongoose from 'mongoose'

const Schema = mongoose.Schema

const instrumentSchema = new Schema({
  name: { 
    type: String, 
    enum: ['Piano', 'Bass Guitar', 'Electric Guitar', 'Acoustic Guitar', 'Drums', 'Flute'], 
    required: true},
}, {
  timestamps: true
})

const Instrument = mongoose.model('Instrument', instrumentSchema)

export {
  Instrument
}
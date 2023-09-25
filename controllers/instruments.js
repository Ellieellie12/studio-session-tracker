import { Instrument } from '../models/instrument.js'

function newInstrument(req, res) {
    Instrument.find({})
    .then(instruments => {
      res.render('instruments/new', {
        title: 'Add Instruments to Booking',
        instruments: instruments,
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/sessions')
    })
  }

function create(req, res) {
  Instrument.create(req.body)
  .then(instrument =>{
    res.redirect('/instruments/new')
  } )
}

export {
  newInstrument as new,
  create
}
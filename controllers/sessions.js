import { Session } from "../models/session.js";
import { Instrument } from "../models/instrument.js";


function newSession(req, res) {
  res.render('sessions/new', {
    title: 'Book a Session',
    })
  }


  
  function create(req, res) {
    req.body.personBooking = req.user.profile._id
    Session.create(req.body)
    .then(session => {
      console.log('this is the create session: ', session)
      res.redirect(`/sessions/${session._id}`)
    })
    .catch(err=> {
      console.log(err)
      res.redirect('/sessions')
    })
  }



function index(req, res) {
  Session.find({})
  .then(sessions => {
    res.render('sessions/index', {
      sessions: sessions,
      title: 'My Sessions'
    })
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/sessions')
  })
}

function show(req, res) {
  console.log(req.user.profile._id)
  Session.findById(req.params.sessionId)
  .populate(['instruments', 'personBooking' ])
  .then(session => {
    Instrument.find({_id: {$nin: session.instruments}})
    .then(instruments => {
    //get all the instruments from the instrument model and then pass that in the render as instruments and in order to do that i would need to have access to the instrument model and add a .then after that. nested .thens
    console.log('this is a show session: ', session)
        res.render('sessions/show',{
          title: 'Session Detail',
          session: session,
          instruments: instruments,
          currUserId: req.user.profile._id
        })
        }) 
      })
  .catch(err => {
    console.log(err)
    res.redirect('/sessions')
  })
}



function deleteSession(req, res) {
  Session.findByIdAndDelete(req.params.sessionId)
  .then(session => {
    if (session.personBooking.equals(req.user.profile._id)) {
      res.redirect('/sessions')
    } else {
      throw new Error('Not Authorized')
    }
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/sessions')
  })
}


function edit(req, res) {
  Session.findById(req.params.sessionId)
  .then(session => {
    if (session.personBooking.equals(req.user.profile._id)) {
    res.render('sessions/edit', {
      session,
      title:'Edit Session'
    })
    } else {
      throw new Error('Not Authorized')
    }
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/sessions')
  })
}

function update(req, res) {
  Session.findByIdAndUpdate(req.params.sessionId, req.body, {new:true})
  .then(session => {
    if (session.personBooking.equals(req.user.profile)) {
      res.redirect(`/sessions/${session._id}`)
    } else {
      throw new Error('Not authorized')
    }
  })
  .catch(err => {
    console.log(err)
      res.redirect('/sessions/')
  })
}

function addInstrument(req, res) {
  Session.findById(req.params.sessionId)
  .then (session => {
    session.instruments.push(req.body.instrumentId)
    session.save()
    .then(() => {
      res.redirect(`/sessions/${session._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/sessions')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/sessions')
  })
}



export {
  newSession as new,
  create,
  index,
  show,
  deleteSession as delete,
  edit,
  update,
  addInstrument
}


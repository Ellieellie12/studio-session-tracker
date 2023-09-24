import { Session } from "../models/session.js";


function newSession(req, res) {
  res.render('sessions/new', {
    title: 'Book a Session',
    })
  }


  
  function create(req, res) {
    req.body.personBooking = req.user.profile._id
    Session.create(req.body)
    .then(session => {
      res.redirect('/sessions')
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
  Session.findById(req.params.sessionId)
  .then(session => {
    res.render('sessions/show',{
      title: 'Session Detail',
      session: session
    })
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/sessions')
  })
}


function deleteSession(req, res) {
  Session.findByIdAndDelete(req.params.sessionId)
  .then(session => {
    res.redirect('/sessions')
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/sessions')
  })
}

function edit(req, res) {
  Session.findById(req.params.sessionId)
  .then(session => {
    res.render('sessions/edit', {
      session,
      title:'Edit Session'
    })
  })
  .catch(err=> {
    console.log(err)
    res.redirect('/')
  })
}

export {
  newSession as new,
  create,
  index,
  show,
  edit,
  deleteSession as delete
}


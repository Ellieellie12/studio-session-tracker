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
    res.redirect('/')
  })
}


export {
  newSession as new,
  create,
  index
}





// Session.create(req.body)
// .then(session => {
//   res.redirect('sessions/new')
// })
// .catch(err => {
//   console.log(err)
//   res.redirect('/sessions/new')
// })
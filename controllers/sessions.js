import { Session } from "../models/session.js";


function newSession(req, res) {
  res.render("sessions/new", {
    title: "Book Sessions",
    })
  }




export {
  newSession as new
}
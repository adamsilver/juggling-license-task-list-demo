//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/has-account', (req, res) => {
  if(req.session.data.new.hasAccount == 'No') {
    res.redirect('/can-juggle')
  } else {
    res.redirect('/email-address')
  }
})

router.post('/can-juggle', (req, res) => {
  if(req.session.data.new.canJuggle == 'No') {
    res.redirect('/not-eligible')
  } else {
    res.redirect('/email-address')
  }
})

router.post('/email-address', (req, res) => {
  res.redirect('/code')
})

router.post('/code', (req, res) => {
  res.redirect('/application')
})

require('./routes/application/show')(router)
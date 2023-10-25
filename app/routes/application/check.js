const appHelper = require('../../helpers/application-helper')

module.exports = router => {

  router.get('/application/check', (req, res) => {
    let personalDetailsPage = appHelper.getFirstUnansweredQuestionFromPersonalDetails(req.session.data)
    if(!personalDetailsPage && req.session.data.personalDetails.status != 'Completed') {
      personalDetailsPage = 'check'
    }

    let experiencePage = appHelper.getFirstUnansweredQuestionFromExperience(req.session.data)
    if(!experiencePage && req.session.data.experience.status != 'Completed') {
      experiencePage = 'check'
    }

    let evidencePage = appHelper.getFirstUnansweredQuestionFromEvidence(req.session.data)
    if(!evidencePage && req.session.data.evidence.status != 'Completed') {
      evidencePage = 'check'
    }

    res.render('application/check', {
      personalDetailsPage,
      experiencePage,
      evidencePage
    })
  })

  router.post('/application/check', (req, res) => {
    req.session.data.sentDate = new Date().toISOString()
    res.redirect('/application/confirmation')
  })

}

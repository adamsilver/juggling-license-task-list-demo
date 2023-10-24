const appHelper = require('../../helpers/application-helper')

module.exports = router => {

  router.get('/application/check', (req, res) => {
    let personalDetailsFirstUnansweredQuestion = appHelper.getFirstUnansweredQuestionFromPersonalDetails(req.session.data)
    if(!personalDetailsFirstUnansweredQuestion && req.session.data.personalDetails.status != 'Completed') {
      personalDetailsFirstUnansweredQuestion = 'check'
    }
    let experienceFirstUnansweredQuestion = appHelper.getFirstUnansweredQuestionFromExperience(req.session.data)
    if(!experienceFirstUnansweredQuestion && req.session.data.experience.status != 'Completed') {
      experienceFirstUnansweredQuestion = 'check'
    }
    let evidenceFirstUnansweredQuestion = appHelper.getFirstUnansweredQuestionFromEvidence(req.session.data)
    if(!evidenceFirstUnansweredQuestion && req.session.data.evidence.status != 'Completed') {
      evidenceFirstUnansweredQuestion = 'check'
    }
    res.render('application/check', {
      personalDetailsFirstUnansweredQuestion,
      experienceFirstUnansweredQuestion,
      evidenceFirstUnansweredQuestion
    })
  })

  router.post('/application/check', (req, res) => {
    req.session.data.sentDate = new Date().toISOString()
    res.redirect('/application/confirmation')
  })

}

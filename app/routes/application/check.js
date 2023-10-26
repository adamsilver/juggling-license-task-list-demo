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

    let errorList = []
    if(req.flash('error') == 'Errors detected') {
      if(personalDetailsPage) {
        errorList.push({
          text: 'You must complete personal details before you can send your application',
          href: '#app-personal-details'
        })
      }
      if(experiencePage) {
        errorList.push({
          text: 'You must complete juggling experience before you can send your application',
          href: '#app-experience'
        })
      }
      if(evidencePage) {
        errorList.push({
          text: 'You must complete evidence before you can send your application',
          href: '#app-evidence'
        })
      }
    }

    res.render('application/check', {
      personalDetailsPage,
      experiencePage,
      evidencePage,
      errorList
    })
  })

  router.post('/application/check', (req, res) => {
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

    if(personalDetailsPage || experiencePage || evidencePage) {
      req.flash('error', 'Errors detected')
      res.redirect('/application/check')
    } else {
      req.session.data.sentDate = new Date().toISOString()
      res.redirect('/application/confirmation')
    }
  })

}

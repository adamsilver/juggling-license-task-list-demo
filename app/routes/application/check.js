const appHelper = require('../../helpers/application-helper')

module.exports = router => {

  router.get('/application/check', (req, res) => {
    let personalDetailsPage = appHelper.getFirstUnansweredQuestionFromPersonalDetails(req.session.data)
    if(!personalDetailsPage && req.session.data.personalDetails.status != 'Completed') {
      personalDetailsPage = 'check'
    }
    let experienceFirstPage = appHelper.getFirstUnansweredQuestionFromExperience(req.session.data)
    if(!experienceFirstPage && req.session.data.experience.status != 'Completed') {
      experienceFirstPage = 'check'
    }
    let evidencePage = appHelper.getFirstUnansweredQuestionFromEvidence(req.session.data)
    if(!evidencePage && req.session.data.evidence.status != 'Completed') {
      evidencePage = 'check'
    }

    let errorsList = []
    if(req.flash('error') == 'Errors detected') {
      if(personalDetailsPage) {
        errorsList.push({
          href: '#app-personal-details',
          text: 'You must complete personal details before you can send your application'
        })
      }
      if(experienceFirstPage) {
        errorsList.push({
          href: '#app-experience',
          text: 'You must complete juggling experience before you can send your application'
        })
      }
      if(evidencePage) {
        errorsList.push({
          href: '#app-evidence',
          text: 'You must complete evidence before you can send your application'
        })
      }
    }

    res.render('application/check', {
      personalDetailsPage,
      experienceFirstPage,
      evidencePage,
      errorsList
    })
  })

  router.post('/application/check', (req, res) => {
    let personalDetailsPage = appHelper.getFirstUnansweredQuestionFromPersonalDetails(req.session.data)
    if(!personalDetailsPage && req.session.data.personalDetails.status != 'Completed') {
      personalDetailsPage = 'check'
    }
    let experienceFirstPage = appHelper.getFirstUnansweredQuestionFromExperience(req.session.data)
    if(!experienceFirstPage && req.session.data.experience.status != 'Completed') {
      experienceFirstPage = 'check'
    }
    let evidencePage = appHelper.getFirstUnansweredQuestionFromEvidence(req.session.data)
    if(!evidencePage && req.session.data.evidence.status != 'Completed') {
      evidencePage = 'check'
    }

    if( personalDetailsPage || experienceFirstPage || evidencePage ) {
      req.flash('error', 'Errors detected')
      res.redirect(`/application/check`)
    } else {
      req.session.data.sentDate = new Date().toISOString()
      res.redirect('/application/confirmation')
    }
  })

}

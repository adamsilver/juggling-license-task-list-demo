const appHelper = require('../../helpers/application-helper')

module.exports = router => {

  router.post('/application/edit-personal-details/name', (req, res) => {
    res.redirect('/application/edit-personal-details/telephone')
  })

  router.post('/application/edit-personal-details/telephone', (req, res) => {
    res.redirect('/application/edit-personal-details/address')
  })

  router.post('/application/edit-personal-details/address', (req, res) => {
    res.redirect('/application/edit-personal-details/check')
  })

  router.get('/application/edit-personal-details/check', (req, res) => {
    let personalDetailsFirstUnansweredQuestion = appHelper.getFirstUnansweredQuestionFromPersonalDetails(req.session.data)

    res.render('application/edit-personal-details/check', {
      personalDetailsFirstUnansweredQuestion
    })
  })

  router.post('/application/edit-personal-details/check', (req, res) => {
    res.redirect('/application')
  })

}

const appHelper = require('../../helpers/application-helper')

module.exports = router => {

  router.post('/application/edit-experience/juggling-balls', (req, res) => {
    res.redirect('/application/edit-experience/juggling-trick')
  })

  router.post('/application/edit-experience/juggling-trick', (req, res) => {
    res.redirect('/application/edit-experience/start-date')
  })

  router.post('/application/edit-experience/start-date', (req, res) => {
    res.redirect('/application/edit-experience/check')
  })

  router.get('/application/edit-experience/check', (req, res) => {
    let experienceFirstUnansweredQuestion = appHelper.getFirstUnansweredQuestionFromExperience(req.session.data)

    res.render('application/edit-experience/check', {
      experienceFirstUnansweredQuestion
    })
  })

  router.post('/application/edit-experience/check', (req, res) => {
    res.redirect('/application')
  })

}

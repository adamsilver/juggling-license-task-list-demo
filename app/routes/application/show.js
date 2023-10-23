const appHelper = require('../../helpers/application-helper')

module.exports = router => {

  router.get('/application', (req, res) => {

    if(req.session.data.sentDate) {
      res.render('application/show--submitted')
    } else {
      let sections = [
        'personalDetails',
        'experience',
        'evidence'
      ]

      let completedSectionsCount = 0
      for(const section of sections) {
        if(req.session.data[section] && req.session.data[section].status == 'Completed') {
          completedSectionsCount++
        }
      }

      let personalDetailsStatus = appHelper.getPersonalDetailsStatus(req.session.data)
      let experienceStatus = appHelper.getExperienceStatus(req.session.data)
      let evidenceStatus = appHelper.getEvidenceStatus(req.session.data)

      let personalDetailsPage = 'name'
      if(personalDetailsStatus != 'Not started') {
        personalDetailsPage = 'check'
      }

      res.render('application/show', {
        personalDetailsStatus,
        personalDetailsPage,
        experienceStatus,
        evidenceStatus,
        completedSectionsCount
      })
    }

  })

}

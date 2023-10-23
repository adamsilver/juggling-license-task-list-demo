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

      res.render('application/show', {
        completedSectionsCount
      })
    }

  })

}

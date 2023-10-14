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

  router.post('/application/edit-experience/check', (req, res) => {
    res.redirect('/application')
  })

}

module.exports = router => {

  router.get('/application', (req, res) => {
    res.render('application/show')
  })

}

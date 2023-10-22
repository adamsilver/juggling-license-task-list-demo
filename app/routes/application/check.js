module.exports = router => {

  router.post('/application/check', (req, res) => {
    res.redirect('/application/confirmation')
  })

}

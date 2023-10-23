module.exports = router => {

  router.post('/application/check', (req, res) => {
    req.session.data.sentDate = new Date().toISOString()
    res.redirect('/application/confirmation')
  })

}

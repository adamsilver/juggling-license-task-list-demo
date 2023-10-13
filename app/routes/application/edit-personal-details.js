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

  router.post('/application/edit-personal-details/check', (req, res) => {
    res.redirect('/application')
  })

}

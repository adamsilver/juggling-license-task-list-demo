module.exports = router => {

  router.post('/application/edit-evidence/has-evidence', (req, res) => {
    if(req.session.data.evidence.hasEvidence == "Yes") {
      res.redirect('/application/edit-evidence/upload')
    } else {
      res.redirect('/application/edit-evidence/check')
    }
  })

  router.post('/application/edit-evidence/upload', (req, res) => {
    // complex

    res.redirect('/application/edit-evidence/check-files')
  })

  router.post('/application/edit-evidence/check-files', (req, res) => {
    if(req.session.data.evidence.addMore == "Yes") {
      res.redirect('/application/edit-evidence/upload')
    } else {
      res.redirect('/application/edit-evidence/check')
    }
  })

}
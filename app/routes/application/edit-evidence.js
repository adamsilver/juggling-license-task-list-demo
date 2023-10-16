const _ = require('lodash')
const { v4: uuidv4 } = require('uuid')

module.exports = router => {

  router.post('/application/edit-evidence/has-evidence', (req, res) => {
    if(req.session.data.evidence.hasEvidence == "Yes") {
      res.redirect('/application/edit-evidence/upload')
    } else {
      res.redirect('/application/edit-evidence/check')
    }
  })

  router.post('/application/edit-evidence/upload', (req, res) => {

    // 1. Create a list of files to choose from

    let files = [
      'trick-performance.mp4',
      'juggling-show.mp4',
      'testimonial.mp3'
    ]

    if(!req.session.data.evidence.files) {
      req.session.data.evidence.files = {}
    }

    // Get the next file
    let filesCount = _.size(req.session.data.evidence.files)
    let nextFile = files[filesCount]

    // storing that file in memory so we can present it in the view
    if(nextFile) {
      req.session.data.evidence.files[uuidv4()] = {
        filename: nextFile
      }
    }

    res.redirect('/application/edit-evidence/check-files')
  })

  router.post('/application/edit-evidence/check-files', (req, res) => {
    if(req.session.data.evidence.addMore == "Yes") {
      res.redirect('/application/edit-evidence/upload')
    } else {
      res.redirect('/application/edit-evidence/check')
    }
  })

  router.post('/application/edit-evidence/check', (req, res) => {
    res.redirect('/application')
  })

  router.get('/application/edit-evidence/:fileId/delete', (req, res) => {
    let file = req.session.data.evidence.files[req.params.fileId]
    res.render('application/edit-evidence/delete', {
      file
    })
  })

  router.post('/application/edit-evidence/:fileId/delete', (req, res) => {
    delete req.session.data.evidence.files[req.params.fileId]

    let filesCount = _.size(req.session.data.evidence.files)

    req.flash('success', 'File deleted')

    if(filesCount > 0) {
      res.redirect('/application/edit-evidence/check-files')
    } else {
      res.redirect('/application/edit-evidence/has-evidence')
    }

  })


}

const _ = require('lodash')

exports.getPersonalDetailsStatus = (data) => {
  if(_.get(data, 'personalDetails.status')) {
    return data.personalDetails.status
  }

  if(_.get(data, 'personalDetails.firstName')) {
    return 'Incomplete'
  }

  return 'Not started'
}

exports.getExperienceStatus = (data) => {
  if(_.get(data, 'experience.status')) {
    return data.experience.status
  }

  if(_.get(data, 'experience.numberOfBalls')) {
    return 'Incomplete'
  }

  return 'Not started'
}

exports.getEvidenceStatus = (data) => {
  if(_.get(data, 'evidence.status')) {
    return data.evidence.status
  }

  if(_.get(data, 'evidence.hasEvidence')) {
    return 'Incomplete'
  }

  return 'Not started'
}
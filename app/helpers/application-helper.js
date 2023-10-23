
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

exports.getFirstUnansweredQuestionFromPersonalDetails = (data) => {
  let firstName = _.get(data, 'personalDetails.firstName')
  let telephone = _.get(data, 'personalDetails.telephone')
  let addressLine1 = _.get(data, 'personalDetails.address.line1')

  if(!firstName) {
    return 'name'
  }

  if(!telephone) {
    return 'telephone'
  }

  if(!addressLine1) {
    return 'address'
  }

  return null
}
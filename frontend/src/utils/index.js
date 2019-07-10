export const Utils = {
  validationEmail: (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  calculateResult: (answers) => {
    var EI = "E"
    if (answers.answer1 && answers.answer4 && answers.answer9) {
      if (answers.answer1 > answers.answer4) {
        if (answers.answer1 > answers.answer9) {
          EI = "I"
        } else {
          EI = "E"
        }
      } else {
        EI = "E"
      }
    }
    var SN = "S"
    if (answers.answer2 && answers.answer5) {
      if (answers.answer2 >= answers.answer5) {
        SN = "S"
      } else {
        SN = "N"
      }
    }
    var TF = "T"
    if (answers.answer3 && answers.answer7) {
      if (answers.answer3 > answers.answer7) {
        TF = "F"
      } else {
        TF = "T"
      }
    }
    var JP = "J"
    if (answers.answer6 && answers.answer8 && answers.answer10) {
      if (answers.answer8 > answers.answer6) {
        if (answers.answer8 > answers.answer10) {
          JP = "J"
        } else {
          JP = "P"
        }
      } else {
        JP = "P"
      }
    }
    
    return `${EI}${SN}${TF}${JP}`
  }
}
let calculateBtn = document.getElementById('calculateBtn')
let resultField = document.getElementById('result')

calculateBtn.addEventListener('click', (e) => {
  e.preventDefault()
  clearResultValue(resultField)
  hideResult(resultField)

  let heightValue = parseInt(document.getElementById('height').value)
  let weightValue = parseInt(document.getElementById('weight').value)

  if (heightValue > 0 && weightValue > 0) {
    let bodyMassIndex = calculateBMI(heightValue, weightValue)
    showResult(resultField)
    resultField.innerHTML = displayResultBMI(heightValue, weightValue, bodyMassIndex)
  }
})

/**
 * Display text tag.
 *
 * @param {Object} resultField result tag
 * @return void
 */
function showResult (resultField) {
  resultField.style.display = 'block'
}

/**
 * Hide text tag.
 *
 * @param {Object} resultField result tag
 * @return void
 */
function hideResult (resultField) {
  resultField.style.display = 'none'
}

/**
 * Clear text tag value
 *
 * @param {Object} resultField result tag
 * @return void
 */
function clearResultValue (resultField) {
  resultField.innerHTML = ''
}

/**
 * Calculate body mass index
 *
 * @param {Number} height person height in cm.
 * @param {Number} weight person weight in kg.
 *
 * @return {Number} Body mass index result.
 */
function calculateBMI (height, weight) {
  let heightInMeters = height / 100
  return weight / (heightInMeters * heightInMeters)
}

/**
 *
 *
 * @param {Number} height person height in cm.
 * @param {Number} weight person weight in kg.
 * @param {Number} bodyMassIndex calculated body mass index
 * @return {String}
 */
function displayResultBMI (height, weight, bodyMassIndex) {
  let heightString = `Рост: ${height} см`
  let weightString = `Вес: ${weight} кг`
  let bodyMassIndexString = `Индекс массы тела: ${bodyMassIndex.toFixed(2)}`
  let newLine = '<br>'

  return heightString + newLine + weightString + newLine + bodyMassIndexString
}

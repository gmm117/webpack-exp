const loginput = input => `입력받은 값 : ${input}`;
const logResult = (figure, result) => `${figure}의 넓이는 : ${result} 입니다.`;
const logFigureError = 'invalid shape';

module.exports = {
    loginput,
    logResult,
    logFigureError
};
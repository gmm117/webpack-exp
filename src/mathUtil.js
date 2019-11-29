const PI = 3.14;
const getCircleArea = r => r * r * PI;
const getSquareArea = d => d * d;

// commonjs
module.exports = {
    PI,
    getCircleArea,
    getSquareArea
};

// 객체 이름을 지정 시 export default로 지정
// export {
//     PI,
//     getCircleArea
// };


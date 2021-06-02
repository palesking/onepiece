
const isProduction = process.env.NODE_ENV === 'production';

const url = isProduction ? 'http://localhost:8088/' : 'http://localhost:8088/';

const apiUrl = '/api';  

console.log(process.env.NODE_ENV)
console.log(process.env.BASE_URL)
console.log(isProduction)
export {
  apiUrl,
  url
};

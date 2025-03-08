const hello =  (req, res) => {
  res.send('Hello World!');
}; 

const name = (req, res) => {
  res.send('Gustavo');
}

const school = (req, res) => {
  res.send('BYU-idaho');
}

module.exports = {
  hello,
  name,
  school
};
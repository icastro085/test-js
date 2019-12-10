const app = require('./app');
const PORT = process.env.PORT || 4212;

app.listen(PORT, () => {
  console.log(`Running app on PORT ${PORT}`);
});

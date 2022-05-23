const mongoose = require("mongoose");

// connection to mongoDB
mongoose.connect("mongodb://localhost:27017/wrr-graphql", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

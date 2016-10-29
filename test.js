const amazon = require("./");

amazon.search("ipad").then(a => console.log(a)).catch(e => console.log(e));

const http = require("http"); // https kanonika gia to mathima

const start = Date.now();

function doRequest() {
  http
    .request("http://192.168.140.40", res => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
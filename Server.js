const http = require("http");
const fs = require("fs");
function renderPage(page) {
  let layout = fs.readFileSync(page, "utf-8");
  let header = fs.readFileSync("./header.html", "utf-8");

  return layout.replace("{{header}}", header);
}
const server = http.createServer((req, res) => {
  let filepath = "";

  switch (req.url) {
    case "/":
    case "/home.html":
      filepath = "./home.html";
      break;

    case "/Products.html":
      filepath = "./Products.html";
      break;

    case "/Rooms.html":
      filepath = "./Rooms.html";
      break;

    case "/Inspirations.html":
      filepath = "./Inspirations.html";
      break;

    default:
      filepath = "./notfound.html";
      break;
  }

  let data = fs.readFileSync(filepath, "utf-8");
  res.end(data);
});

server.listen(8005, () => {
  console.log("Server started at http://localhost:8005");
});

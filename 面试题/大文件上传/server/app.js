const http = require("http");
const multiparty = require("multiparty"); // 用于解析前端传过来的formData数据
const path = require("path");
const fse = require("fs-extra");

const UPLOAD_DIR = path.resolve(__dirname, ".", "chunks");

const server = http.createServer((req, res) => {
  // 解决跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.status = 200;
    res.end();
    return;
  }

  // 前端传过来的切片
  if (req.url === "/upload") {
    const form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {
      res.writeHead(200, { "content-type": "text/plain" });
      res.write("received upload:\n\n");
      if (err) {
        console.log(err);
        return;
      }

      // console.log(fields, files);
      const file = files.file[0]; // 切片的内容
      const fileName = fields.fileName[0];
      const chunkName = fields.chunkName[0];

      // 将切片存起来
      const chunkDir = path.resolve(UPLOAD_DIR, `${fileName}-chunks`);
      console.log(chunkDir);

      if (!fse.existsSync(chunkDir)) {
        fse.mkdirsSync(chunkDir);
      }
      // 将切片写入到文件夹中
      fse.moveSync(file.path, `${chunkDir}/${chunkName}`);

      res.end("切片上传成功");
    });
  } else if (req.url === "/merge") {
  }
});

server.listen(3000, () => {
  console.log("listening on port 3000");
});

self.addEventListener('message', function (e) {
  // console.log(e); //获取到的主线程的图片资源
  const image = e.data.ImageBitmap;

  createImageBitmap(processImage(image)).then(processImageBitmap => {
    // console.log(processImageBitmap); //处理后的图片资源
    self.postMessage({ processImageBitmap}, [processImageBitmap])
  })
})

function processImage(inputImageBitmap) {
  const canvas = new OffscreenCanvas(inputImageBitmap.width, inputImageBitmap.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(inputImageBitmap, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const inputData = new Uint8Array(imageData.data);
  const outputData = new Uint8Array(inputData.length);

  // 将图片处理成黑白色
  for (let i = 0; i < inputData.length; i+=4){
    const avg = (inputData[i] + inputData[i + 1] + inputData[i + 2]) / 3;
    outputData[i] = avg;
    outputData[i + 1] = avg;
    outputData[i + 2] = avg;
    outputData[i + 3] = inputData[i + 3];
  }
  return new ImageData(new Uint8ClampedArray(outputData), canvas.width, canvas.height);
}
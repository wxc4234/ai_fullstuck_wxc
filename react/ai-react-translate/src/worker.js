import {
  pipeline,
  env,
} from "https://jsd.cdn.zzko.cn/npm/@xenova/transformers@2.6.0";
env.allowLocalModels = false;
// 新的线程，不能做DOM编程，没有this，只有self
// 监听message事件 ，使用 postMessage 发送消息

// ES6 简单优雅 企业级大型项目开发 面向对象的class
// extends 继承 static 静态方法 get set 访问器
class MyTranslationPipeline {
  static task = "translation";
  static model = "Xenova/nllb-200-distilled-600M";
  static instance = null;
  // nlp 任务对象 只能实例化一次
  static async getInstance(progress_callback = null) {
    if (this.instance === null) {
      this.instance = pipeline(this.task, this.model, { progress_callback });
      // 以上代码的作用是实例化一个pipeline对象，这个对象是一个nlp任务对象，可以用来处理文本数据
      // 传入的参数是任务名称、模型名称、进度回调函数
    }
    return this.instance;
  }
}

self.addEventListener("message", async (event) => {
  console.log(event);

  let translator = await MyTranslationPipeline.getInstance((x) => {
    console.log(x);
    self.postMessage(x);
  });
  let output = await translator(event.data.text, {
    tgt_lang: event.data.tgt_lang,
    src_lang: event.data.src_lang,
    callback_function: (x) => {
      self.postMessage({
        status: "update",
        output: translator.tokenizer.decode(x[0].output_token_ids, {
          skip_special_tokens: true,
        }),
      });
    },
  });

  self.postMessage({
    status: " complete",
    output: output,
  });
});

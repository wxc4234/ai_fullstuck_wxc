// 让 node 支持更先进的ES6 Module
// VUE MVVM 设计模式的需求 CommonJS 不能满足，所以需要使用 ES6 Module
// 为了代码统一
// node require 代码风格不统一 js优势就是一份代码前后端运行
// 统一模块化,干掉CommonJS
import { OpenAIApi, Configuration } from "openai";
// api key 的配置
const configuration = new Configuration({
  // apiKey: "",
});

const openai = new OpenAIApi(configuration);

// 封装了一个聊天函数
// chat业务

async function chat(input) {
  // system assistant
  // 使用数组是为了上下文语义相关性 靠一个数组 将问的问题和回答的问题不断加入数组
  // 之后使用JSON.stringify()将数组转换为字符串，然后传给openai 得到最新结果
  // role: 'assistant', content: content;
  const messages = [{ role: "user", content: input }];
  const response = await openai.createChatCompletion(
    {
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0,
    },
    {
      proxy: {
        host: "127.0.0.1",
        port: 7897,
      },
    }
  );
  return response.data.choices[0].message.content;
}

const question = "Can you tell me some food about JiangXi ?";
chat(question)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

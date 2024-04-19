import { useState, useRef, useEffect } from "react";
import LanguageSelector from "./components/LanguageSelector";
import Progress from "./components/Progress";

import "./App.css";

function App() {
  const [sourceLanguage, setSourceLanguage] = useState("eng_Latn");
  const [targetLanguage, setTargetLanguage] = useState("zho_Hans");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [disabled, setDisabled] = useState(false);

  const worker = useRef(null);

  const translate = () => {
    setDisabled(true);
    worker.current.postMessage({
      text: input,
      src_lang: sourceLanguage,
      tat_lang: targetLanguage,
    });
  };

  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(new URL("./worker.js", import.meta.url), {
        type: "module",
      });
      const onMessageReceived = (e) => {
        console.log(e);
      }
      worker.current.addEventListener('message', onMessageReceived);
      return ()=> worker.current.removeEventListener('message', onMessageReceived);
    }
  });

  return (
    <>
      <h1>Transformers.js</h1>
      <h2>ML-powered multiligual translation in React！</h2>
      <div className="container">
        <LanguageSelector
          type="Source"
          defaultLanguage="eng_Latn"
          onChange={(x) => setSourceLanguage(x.target.value)}
        />
        <LanguageSelector
          type="Target"
          defaultLanguage="zho_Hans"
          onChange={(x) => setTargetLanguage(x.target.value)}
        />
      </div>
      <div className="textbox-container">
        <textarea
          value={input}
          rows={3}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <textarea value={output} rows={3} readOnly></textarea>
      </div>
      <button disabled={disabled} onClick={translate}>
        Translate
      </button>
      <Progress text="下载中" percentage={20} />
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import GoofyButton from "./components/GoofyButton";
import { decode } from "./utils/encodingUtils";

function App() {
  const [msg, setMsg] = useState("");
  const [title, setTitle] = useState("");
  const [yes, setYes] = useState("");
  const [size, setSize] = useState(80);
  const [no, setNo] = useState("");
  const [img, setImg] = useState("");
  const [victory, setVictory] = useState("");
  const [zap, setZap] = useState("");
  const [ws, setWs] = useState<string | boolean>("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const encTitle = params.get("t") || "dCBwYXJhbQ==";

    setTitle(decode(encTitle));
    const encMsg = params.get("m") || "bSBwYXJhbQ==";
    setMsg(decode(encMsg));

    const encVictory = params.get("v") || "diBwYXJhbQ==";
    setVictory(decode(encVictory));

    const encYes = params.get("y") || "eSBwYXJhbQ==";
    setYes(decode(encYes));
    const encNo = params.get("n") || "biBwYXJhbQ==";
    setNo(decode(encNo));

    const encZap = params.get("z") || "eiBwYXJhbQ==";
    setZap(decode(encZap));
    const encWs = params.get("ws") || "d3MgcGFyYW0=";
    setWs(decode(encWs));
  }, []);
  return (
    <>
      <title>{title}</title>
      <div className="flex flex-col justify-center items-center m-1">
        <img
          className="w-100 h-100 rounded flex-1"
          src={
            img
              ? img
              : "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTI2YWx3dHY5ODR1dWlwaHZuampjcGY2Y3NnZnptcnVibjlvMDRxaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1zZ9IIFeFEVLaeqzOq/giphy.gif"
          }
        />
        <p className="flex-1 text-4xl mt-3">{show ? victory : msg}</p>
        {show === false && (
          <div className="flex-1 flex mt-4 justify-center items-center flex-col md:flex-row">
            <button
              style={{ width: size * 3, height: size }}
              className="block flex-1 text-black text-lg bg-green-200 p-5 px-20 rounded-xl m-1 hover:bg-green-300 transition-transform"
              onClick={() => {
                setImg(
                  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWl3c3Yzc3Vsa3dyYWY0cXM4Z25pMzh6bml2aGd6eG1yNWFxb2pzOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OuQmhmAAdJFLi/giphy.gif",
                );
                setShow(true);
              }}
            >
              {yes}
            </button>
            <GoofyButton msg={no} size={size} setSize={setSize} />
          </div>
        )}
        <button
          className="block flex-1 text-black text-sm bg-yellow-200 p-2 rounded-xl m-2 mt-5 hover:bg-yellow-300"
          onClick={() => {
            if (ws === true) {
              const audio = new Audio(window.location + "zap.mp3");
              audio.play();
              return;
            }
            alert(ws);
            setWs(true);
          }}
        >
          {zap}
        </button>
      </div>
    </>
  );
}

export default App;

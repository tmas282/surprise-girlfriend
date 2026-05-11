import { useEffect, useState } from "react";
import GoofyButton from "./components/GoofyButton";

function App() {
  const [msg, setMsg] = useState("");
  const [title, setTitle] = useState("");
  const [yes, setYes] = useState("");
  const [no, setNo] = useState("");
  const [img, setImg] = useState("");
  const [victory, setVictory] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    let params = new URLSearchParams(document.location.search);
    let encTitle = params.get("t") || "U3VycHJpc2Uh";
    setTitle(atob(encTitle));
    let encMsg = params.get("m") || "QmVzdCBnaXJsZnJpZW5kIQ==";
    setMsg(atob(encMsg));

    let encVictory = params.get("v") || "VGhhbmsgeW91IDwz";
    setVictory(atob(encVictory));

    let encYes = params.get("y") || "WWVz";
    setYes(atob(encYes));
    let encNo = params.get("n") || "Tm8K";
    setNo(atob(encNo));
  }, [setMsg, setTitle, setYes, setNo, setVictory]);
  useEffect(() => {
    setImg(
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTI2YWx3dHY5ODR1dWlwaHZuampjcGY2Y3NnZnptcnVibjlvMDRxaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1zZ9IIFeFEVLaeqzOq/giphy.gif",
    );
  }, [setImg]);
  return (
    <>
      <title>{title}</title>
      <div className="flex flex-col justify-center items-center m-1">
        <img className="w-100 h-100 rounded flex-1" src={img} />
        <p className="flex-1 text-4xl mt-3">{show ? victory : msg}</p>
        {show === false && (
          <div className="flex-1 flex mt-4 justify-center items-center">
            <button
              className="block flex-1 text-black text-xl bg-green-200 p-5 px-20 rounded-xl m-1 hover:bg-green-300"
              onClick={() => {
                setImg(
                  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWl3c3Yzc3Vsa3dyYWY0cXM4Z25pMzh6bml2aGd6eG1yNWFxb2pzOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OuQmhmAAdJFLi/giphy.gif",
                );
                setShow(true);
              }}
            >
              {yes}
            </button>
            <GoofyButton msg={no} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;

import { useState } from "react";

export default function AccordionItem({ num, title, content,url,score }) {
  const [open, setOpen] = useState(false);

  function handletoggle() {
    setOpen((open) => !open);
  }

  return (
    <><div className={`item ${open?"open":""}`} onClick={handletoggle}>
      <p className="number">{num<9?`0${num+1}`:num+1}</p>
      <p className="title">{title}</p>
      <p className="icon">{open?"-":"+"}</p>
      
</div>
<div>
      {open && <div className="content-box">
        <p className="content">{content}</p>
        <p className="url">{url}</p>
        <p className="score">score: {score}</p></div>}
    </div>
    </>
  );
}

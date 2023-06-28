import React,{ useState,Fragment } from 'react'

export default function TextForm(props) {
    const upHandler=()=>{
       //console.log("Uppercase Clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To UpperCase","Success");
    }

    const lowHandler=()=>{
      //console.log("Uppercase Clicked"+text);
       let newText=text.toLowerCase();
       setText(newText)
       props.showAlert("Converted To LowerCase","Success");
   }

   const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied","Success");
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra Space Removed","Success");
}

    const onchangeHandler=(event)=>{
        //console.log("On Change Handle");
        setText(event.target.value);
    }

    const [text,setText]=useState('');

  return (
    <Fragment>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
        <textarea className="form-control" value={text} onChange={onchangeHandler} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={upHandler}>Click to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={lowHandler}>Click to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text summary</h1>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words And {text.length} Characters</p>
      <p>{0.08* text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes Read</p>
    </div>
    </Fragment>
  )
}

import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("UpperCase Was Clicked" , + text);
    let newText = text.toUpperCase();
    setText("NewText")

  }

  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value)
  }
   const handleLoClick = () =>{
    let newText = to.LowerCase();
    setText("NewText")
  }

  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)

  }
    const [text, setText] = useState('');
    // text = "nandani" Wrong way to change the state
    // setText("Nandani"); Correct way to change the state

  return (
    <>
    <div className = "container">
        <h1>{props.heading}</h1>
    <div class="mb-3">
  <textarea className="form-control" value = {text} onChange = {handleOnChange} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" OnClick = {handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-3" OnClick = {handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-3" OnClick = {handleClearClick}>Clear Text</button>


    </div>
    <div className = "container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length}Words and {text.length} Characters</p>
    </div>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>

    </>

  )
}

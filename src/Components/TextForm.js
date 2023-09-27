
import React from "react";
import { useState } from "react"

export default function TextForm(prop) {

    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText)
        prop.alert("converted to Uppercase!", "danger")

    }
    const handleLowClick = () => {

        let newText = text.toLowerCase();
        setText(newText)
        prop.alert("converted to Lowercase!", "success")
    }
    const handleClearClick = () => {
        setText("");
        prop.alert("Text Cleared!", "success")
    }


    const handleRemoveSpacesClick = () => {
        let new_text = text;
        console.log(new_text)
        let without_white_space_text = new_text.replace(/\s/g, "");
        setText(without_white_space_text);
        prop.alert("Removed extra spaces!", "success")
    }


    const handlesearchValue = () => {

        let searched_value = search_input;
        let text_value = text;

        let result = text_value.includes(searched_value);

        if (result === true) {
            PrintSearch(`Searched Result:  "${searched_value}" exist.`)

        } else {
            PrintSearch(`Searched Result: "${searched_value}" doesn't exist.`)
        }

    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);

        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
            prop.alert("Speak Started!", "success")
        }
        else {
            toogle.innerHTML = "Speak"
            prop.alert("Speak Stopped!", "success")
            if (toogle.innerHTML === "Speak") {
                window.speechSynthesis.cancel()
            }
        }
    }






    const handleOnChange = (e) => {

        setText(`${e.target.value}`)

    }
    const searchValueProvider = (e) => {

        set_search_input(e.target.value)
    }

    const toggleMode = () => {


        if (style.color === "white") {
            setStyle(
                {
                    color: "black",
                    backgroundColor: "white",
                    display: 'block'
                })
            setbtnText("Enable Dark Box")


        } else {
            setStyle(
                {
                    color: "white",
                    backgroundColor: "#121212"
                })
            setbtnText("Disable Dark Box")
        }
    }

    const handleCopy = () => {
        const text = document.getElementById('text_box');
       
        navigator.clipboard.writeText(text.value)

        prop.alert("copied to clipboard!", "success")
    }







    const [btnText, setbtnText] = useState("Enable Dark Box")

    const [style, setStyle] = useState({
        color: "black",
        backgroundColor: "white",
    })

    const [search_input, set_search_input] = useState("");

    const [text, setText] = useState("")

    const [search, PrintSearch] = useState("")



    return (<>
        <div className="container mb-3 my-3" >

            <label htmlFor="text_box" className="form-label">  <h1>{prop.heading}</h1></label>
            <textarea className="form-control w-75" style={style} id="text_box" value={text} onChange={handleOnChange} placeholder="Enter your text here..." rows="8"></textarea>
            <button disabled={text.length === 0} className="btn btn-danger mt-4 mx-2" onClick={handleUpClick}  >{prop.firstbutton} </button>
            <button disabled={text.length === 0} className="btn btn-danger mt-4 mx-2" onClick={handleRemoveSpacesClick}  >Remove Spaces </button>
            <button disabled={text.length === 0} className="btn btn-danger mt-4 mx-2" onClick={handleCopy}  >Copy Text </button>
            <button disabled={text.length === 0} className="btn btn-danger mt-4 mx-2" onClick={handleClearClick}  > Clear Text </button>
            <button disabled={text.length === 0} className="btn btn-danger mt-4 mx-2" onClick={handleLowClick}  >{prop.secondbutton} </button>
            <button disabled={text.length === 0} type="submit" onClick={speak} className="btn btn-danger mx-2 mt-4" id="toggle">Speak</button>
            <button className='btn btn-danger mt-4 mx-2   ' onClick={toggleMode}>{btnText}</button>



            <div disabled={text.length === 0} className="accordion accordion-flush  mt-3 " style={{ 'maxWidth': '80vmin', 'width': '50vmin' }} id="accordionFlushExample">
                <div className="accordion-item border-danger">
                    <h2 className="accordion-header text-white" id="flush-headingOne">
                        <button className="accordion-button --bs-accordion-bg-danger  collapsed  border-none btn bg-danger text-white btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Search for Word
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" role="search">
                        <div className={`p-3  ${prop.mode === "light"? "bg-light":"bg-dark"}`}>
                            <input id="search_val" onChange={searchValueProvider} placeholder="Check the existence..." style={{ 'minWidth': '20vmin', 'width': '10vmin' }} className=" me-2 mb-2" value={search_input} />
                            <button id="search_btn" disabled={text.length === 0} className="btn btn-outline-danger" onClick={handlesearchValue} type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>






        <div className="container my-3"><h5>{search}</h5></div>

        <div className="container">
            <h2>Your Text Summary</h2>
            <p><b>{text.split(/\s+/).filter((Element) => { return Element.length !== 0 }).length}</b> words and <b>{text.length}</b> characters</p>
            <p><b>{(0.008 * text.split(" ").filter((Element) => { return Element.length !== 0 }).length).toFixed(2)}</b> Minutes read</p>
        </div>
        <div className="container">
            <h2>{text.length > 0 ? "Preview:" : ""}</h2>
            <p style={style} className="text-break" >{text}</p>
        </div>
    </>)

}




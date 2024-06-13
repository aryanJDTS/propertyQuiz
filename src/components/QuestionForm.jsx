import React, { useEffect, useState } from 'react'
import profileImg from '../profileImg.png';
import { selectedAnswer } from './selectedAnswer';
import InfoForm from './InfoForm';
export default function QuestionForm() {
    const [state, setState] = useState(0);
    const [answerOne, setAnswerOne] = useState();
    const [answerTwo, setAnswerTwo] = useState();
    const [answerThree, setAnswerThree] = useState();
    const [answerFour, setAnswerFour] = useState();
    const [a1, setA1] = useState([0, 0, 0]);
    const [a2, setA2] = useState([0, 0, 0]);
    const [a3, setA3] = useState([0, 0, 0]);
    const [name,setName]=useState();
    const [email,setEmail]= useState();
    const [phone,setPhone]= useState();
    const quizHandler = () => {
        setState(1);
    };

    const submitHandler= async ()=>{
        console.log("button clicked")
        const response= await fetch('http://localhost:8000/saveLeadData',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({
                name,email,phone,answerOne,answerTwo,answerThree,answerFour
            })
        });
        try {
            if(response.ok){
                console.log("Form submitted");
                alert("Submitted Successfully");
                window.location.reload();
            }
            else{
                console.log("cant save the form data");
            }
        } catch (error) {
            console.log("error submitting form data");
        }
    }
    useEffect(() => {
        if (state === 0) {
            const btn = document.getElementById('submit-btn');
            if (answerOne && answerTwo && answerThree && answerFour) {
                btn.disabled = false
            }
            else {
                btn.disabled = true
            };
        }
    });
    useEffect(() => {
        if (state === 0) {
            selectedAnswer(a1, a2, a3)
        }
    })
    return (
        <div className="container form-container row">
            <div className="banner ">
                <div className="inner rounded px-4 pb-3 ">
                    <img src={profileImg} alt="" />
                    <p className="text-center fs-5 fw-bold">JDTS RealEstate</p>
                    <p className="fs-4 fw-bold">First time all developers under one roof</p>
                    <div>
                        <p className="fw-bold">&#x2022; Dunabe | Dubai | Saudi | Vincitore</p>
                        <p className="fw-bold">&#x2022; Emmar | Soabha | Heart of Europe</p>
                    </div>
                </div>
            </div>
            <div className="form rounded">
                {state === 0 ? <>
                    <p className="fw-bolder fw-4">Please answer the following questions!</p>
                    <div className="question-card mt-2">
                        <div className="questions  rounded p-3">
                            <p className="fw-bolder question"> What are you looking for?</p>
                            <p id="a1.1" onClick={(e) => { setAnswerOne(e.target.textContent); setA1([1, 0, 0]) }} className="p-2 option rounded">I am looking for Investment Purpose</p>
                            <p id="a1.2" onClick={(e) => { setAnswerOne(e.target.textContent); setA1([0, 1, 0]) }} className="p-2 option rounded">I am looking for self-use</p>
                            <p id="a1.3" onClick={(e) => { setAnswerOne(e.target.textContent); setA1([0, 0, 1]) }} className="p-2 option rounded">I am a real estate Agent/Broker</p>
                        </div>
                    </div>
                    <div className="question-card mt-2">
                        <div className="questions  rounded p-3">
                            <p className="fw-bolder question">What property budget are you looking?</p>
                            <p id="a2.1" onClick={(e) => { setAnswerTwo(e.target.textContent); setA2([1, 0, 0]) }} className="p-2 option rounded">INR 1-2 CR</p>
                            <p id="a2.2" onClick={(e) => { setAnswerTwo(e.target.textContent); setA2([0, 1, 0]) }} className="p-2 option rounded">INR 2-3 CR</p>
                            <p id="a2.3" onClick={(e) => { setAnswerTwo(e.target.textContent); setA2([0, 0, 1]) }} className="p-2 option rounded">I am not Sure</p>
                        </div>
                    </div>
                    <div className="question-card mt-2">
                        <div className="questions  rounded p-3">
                            <p className="fw-bolder question">When can we expect you to visit the event?</p>
                            <p id="a3.1" onClick={(e) => { setAnswerThree(e.target.textContent); setA3([1, 0, 0]) }} className="p-2 option rounded">29th June 2024</p>
                            <p id="a3.2" onClick={(e) => { setAnswerThree(e.target.textContent); setA3([0, 1, 0]) }} className="p-2 option rounded">30th June 2024</p>
                        </div>
                    </div>
                    <div className="question-card mt-2">
                        <div className="questions  rounded p-3">
                            <p className="fw-bolder question">Have you ever visited to DUBAI?</p>
                            <div className="text-center">
                                <input className="rounded" type="text" name="" id="" onChange={(e) => { setAnswerFour(e.target.value) }} />
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button id="submit-btn" className='btn btn-primary px-5 my-3' onClick={() => { quizHandler(); }}>
                            Submit
                        </button>
                    </div>
                </> :
                    <>
                        <div className='personal-info'>
                            <label htmlFor="name">Name</label> <br />
                            <input className='rounded  fw-bold' type="text" name="name"  onChange={(e)=>{setName(e.target.value)}} /> <br />

                            <label htmlFor="email">Email</label><br />
                            <input className='rounded fw-bold' type="text" name='email' onChange={(e)=>{setEmail(e.target.value)}} /> <br />

                            <label htmlFor="phone">Phone</label> <br />
                            <input className='rounded fw-bold' type="text" name="phone"  onChange={(e)=>{setPhone(e.target.value)}} /> <br />

                            <div className='text-center container-btn'>
                                <button className='btn btn-primary px-5 my-3' onClick={submitHandler}>Submit</button>
                            </div>
                        </div>
                    </>}
            </div>
        </div>
    )
}

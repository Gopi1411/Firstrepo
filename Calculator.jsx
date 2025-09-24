import React from 'react';
import {useState} from 'react';

export default function Calculator() {

    function Loanamount () {
       const [amount, setAmount] = useState ("");
        const [intrate, setIntrate] = useState ("");
        const [terms, setTerms] = useState("");
    }

    function setAmount(e) =>  {
            amount(e.target.value)
    };

    function setIntrate(e) => {
            intrate(e.target.value)
            value.Calculator( number%=amount);
        };
    
    function setTerms(e) => {
            terms(e.target.value)
            value.Calculator( number*12 % $`Intrate`);
        };
    <>
    <div style={'width'='80%','hight'='140px','border'='5px solid grey'} >EMI Calculator</div>
  
    <input 
    type="Numbers"
    name="Loan Amount(Rs.)"
    value="setAmount"
    />

    <input 
    type="number"
    name="Annual Interest Rate(%)" 
    value="SetIntrate"
     />
    
    <input 
    type="number" 
    name="Loan Terms(Year)" 
    value="setTerms" 
    />
    
    <button style={'width'='15%','hight'='30px','border'='3px solid black', 'background-color'='blue'}>Calculation</button>

    <b style={'text-color'="black"}>Monthly Payment: {$`setAmount`}</b>
    <b style={'text-color'="black"}>Total Payment: {$`setIntrate`}</b>
    <b style={'text-color'="black"}>Total Interest: {$`setTerms`}</b>
    </>
}

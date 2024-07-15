import { useEffect, useState } from "react"

export default function App(){
const [from, setFrom] = useState('EUR');
const [to, setTo] = useState('USD');
const [converted, setConverted] = useState();
const [amount, setAmount] = useState()
useEffect(function(){
    async function Convert() {
            const host = 'api.frankfurter.app';
            
fetch(`https://${host}/latest?amount=${amount}&from=${from}&to=${to}`)
  .then(resp => resp.json())
  .then((data) => {
    setConverted(data.rates[to]);
    console.log(converted)
  });
    }
    Convert()
},[from, to, amount])

    return(
        <div>
            <input type="text" onChange={(e)=>setAmount(e.target.value)}/>
            <select defaultValue="EUR" onChange={(e)=>setFrom(e.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <select  onChange={(e)=>setTo(e.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <p>{ converted ? converted : "OUTPUT" }</p>
        </div>
    )
}
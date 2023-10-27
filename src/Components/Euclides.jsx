import React, { useState } from 'react'
import './Euclides.css'

export const Euclides = () => {
    const [valido, setValido] = useState(true)
    const [numero, setNumero] = useState({
        numero1 :20,
        numero2 :60,
    });


    const [gcd, setGCD] = useState(null);

    const setMcd = (e)=>{
        const {name, value} = e.target;
        if(value>=1){
            setValido(true)
            setNumero({...numero,[name]:value})
        }else{
            setValido(false)
        }

    }
    
    const calculateGCD = () => {
        let a = numero.numero1;
        let b = numero.numero2;
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        setGCD(a);
    };

    return (
        <div className='euclides'>
            <h1>Algoritmo de Euclides</h1>

           <div className='main-container1'>
            <input className={(valido == false)?"error":"normal"} type='number'  name='numero1' onChange={setMcd}/>
            <input className={(valido == false)?"error":"normal"} type='number'  name='numero2'onChange={setMcd}/>
            <button onClick={calculateGCD}>Calcular MCD</button>
            {gcd !== null && <h3>Máximo Común Divisor (MCD): {gcd}</h3>}
           </div>
        </div>
    );
}

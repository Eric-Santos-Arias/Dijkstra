import React, { useEffect,  useState } from "react";
import './App.css';
import Graph from 'node-dijkstra';

function Dijkstra() {

    const [resultGrafo,setResultGrafo] = useState([]);
    const[dataGrafo, setDataGrafo] = useState( {
      ab: 8,
      bc: 9,
      ac: 9,
      bd: 5,
      ce: 2,
      de: 5
    })


    const [orden, setOrden]= useState({
           inicio: "A",
           final: "E"
    })


    const getOrden = (e)=>{
      const {name, value} = e.target;
      if(value){
        setOrden({...orden,[name]:value.toUpperCase()})
        console.log(orden)
      }
    }

    const [result, setResult] = useState([])
    function ordenarCadena(cadena) {
      return cadena.split('').sort().join('');
    }
    
    const Dijkstra = ()=>{
      const route = new Graph();    
      route.addNode( 'A', { B: dataGrafo.ab, C: dataGrafo.ac });
      route.addNode('B', { A: dataGrafo.ab, C: dataGrafo.bc,D: dataGrafo.bd});
      route.addNode('C', { A: dataGrafo.ac, B: dataGrafo.bc,E: dataGrafo.ce });
      route.addNode('D',{ B: dataGrafo.bd, E: dataGrafo.de});
      route.addNode('E', { D: dataGrafo.de, C: dataGrafo.ce });



      const resDijkstra = route.path(orden.inicio,orden.final)
      setResultGrafo(resDijkstra);
      console.log(resultGrafo);
     


      const result = route.path(orden.inicio,orden.final, {reverse: true})
      const listaNueva = [];
      if(result){
        for (let i = 0; i < result.length - 1; i++) {
          const combinacion = result[i] + result[i + 1];
          listaNueva.push(combinacion);
        }
      }



     
      // Lista original
  
      
      // Lista para almacenar todas las combinaciones
      const listaCombinaciones = [];
      
      // Itera sobre la lista original
      for (const cadena of listaNueva) {
        // Copia la cadena, ordénala y agrega a la lista de combinaciones
        const cadenaOrdenada = ordenarCadena(cadena);
        listaCombinaciones.push(cadena);
        listaCombinaciones.push(cadenaOrdenada);
      }

      


      setResult(listaCombinaciones)
      console.log(listaCombinaciones)
  
    }






    const cambio = (e)=>{
      const {name, value} = e.target;
      if(value>=1){
        setDataGrafo({...dataGrafo,[name]:value})
      }
    }

  

    useEffect(()=>{
      Dijkstra()
    }
    
    
    ,[dataGrafo,orden]);
    
  return (
    <div>
     <header>
      <img className="logo" src="../public/umg.png" alt="no hay imagen"/>
      <h1>Proyecto Matematica Discreta</h1>
      <h3>Eric Santos - 9490-23-22679</h3>
     </header>
    
     
      <h2>Dijkstra</h2>
      <h2> Camino mas corto: {resultGrafo && resultGrafo.map((e,f)=><span className="camino-corto" key={f}>-{e}</span>)}</h2>
      
      
      
      
      <div className="main-container">
        <label htmlFor="">Inicio</label>
        <input type="text" name="inicio" placeholder={orden.inicio} onChange={getOrden}/>
        <label htmlFor="">Final</label>
        <input type="text" name="final" placeholder={orden.final} onChange={getOrden}/>
        <div className="dijkstra-imagen">
          <div className="node node1">A</div>
          <div className="node node2">B</div>
          <div className="node node3">C</div>
          <div className="node node4">D</div>
          <div className="node node5">E</div>
          <div className={(result.includes('AB'))?"aritsa arista1 color":"arista arista1"}></div>
          <div className={(result.includes('AC'))?"aritsa arista2 color":"arista arista2"}></div>
          <div className={(result.includes('BC'))?"aritsa arista3 color":"arista arista3"}></div>
          <div className={(result.includes('BD'))?"aritsa arista4 color":"arista arista4"}></div>
          <div className={(result.includes('DE'))?"aritsa arista5 color":"arista arista5"}></div>
          <div className={(result.includes('CE'))?"aritsa arista6 color":"arista arista6"}></div>
         
          <input type="number" className="valor-arista1 width" placeholder={dataGrafo.ab} name="ab"  onChange={cambio} />
          <input type="number" className="valor-arista2 width" placeholder={dataGrafo.bc} name="bc"  onChange={cambio} />
          <input type="number" className="valor-arista3 width" placeholder={dataGrafo.ac} name="ac"  onChange={cambio} />
          <input type="number" className="valor-arista4 width" placeholder={dataGrafo.bd} name="bd"  onChange={cambio} />
          <input type="number" className="valor-arista5 width" placeholder={dataGrafo.ce} name="ce"  onChange={cambio} />
          <input type="number" className="valor-arista6 width" placeholder={dataGrafo.de} name="de"  onChange={cambio} />
        </div>
      </div>
    </div>
  );
}

export default Dijkstra;

import React, { useState } from "react";
import './App.css';

function Dijkstra() {
  const [graph, setGraph] = useState({
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2 },
    C: { A: 4, B: 2 },
    D: { B: 5, E: 5 },
    E: { D: 5, C: 2 }
  });

  const cambio = ()=>{
    setGraph({...graph,A:{B:8,C:9}})
  }
  console.log(graph)

  return (
    <div>
      <h1>Dijkstra</h1>
      <div className="main-container">
        <div className="dijkstra-imagen">
          <div className="node node1">A</div>
          <div className="node node2">B</div>
          <div className="node node3">C</div>
          <div className="node node4">D</div>
          <div className="node node5">E</div>
          <div className="arista arista1"></div>
          <div className="arista arista2"></div>
          <div className="arista arista3"></div>
          <div className="arista arista4"></div>
          <div className="arista arista5"></div>
          <div className="arista arista6"></div>
          <input type="text" className="valor-arista1 a-b" placeholder="a-b" onChange={cambio} />
          <input type="text" className="valor-arista2 b-c" placeholder="b-c" onChange={cambio} />
          <input type="text" className="valor-arista3 a-c" placeholder="a-c" onChange={cambio} />
          <input type="text" className="valor-arista4 b-d" placeholder="b-d" onChange={cambio} />
          <input type="text" className="valor-arista5 c-e" placeholder="c-e" onChange={cambio} />
          <input type="text" className="valor-arista6 d-e" placeholder="d-e" onChange={cambio} />
        </div>
      </div>
    </div>
  );
}

export default Dijkstra;

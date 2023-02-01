import { useState } from "react";
import $ from "jquery";
import "./App.css";
import {Routes,Route} from "react-router-dom";
import TableComp from "./component/TableComp";
import InputComponent from "./component/InputComp";
import NotValidate from "./demandeargent/NotValidate";
import ListeEnchere from "./enchere/ListeEnchere"
import IntervalInput from "./enchere/IntervalInput";
function App() {
    // const [, setName] = useState("");
    // const [result, setResult] = useState("");
  
  
    // const hSub= ()=>{
    //   var http=new XMLHttpRequest();
    //   http.onreadystatechange = function() {
    //     if (http.readyState === 4 && http.status === 200) {
    //       setResult(http.responseText);
    //     }
    //   }
    //   http.open('GET','http://localhost:8084/server.php');
    //   http.send();
    // }

    // const hteste= () =>{
    // axios.get('http://localhost:8084/server.php')
    // .then(response => response.json()).then(
    //     data=>{ console.log(data);}
    // )
    // }
  
    let data=[
        {
            a:"a",
            b:"b",
            c:1,
            d:<p>Salama</p>
        },
        {
            a:"a",
            b:"b",
            c:2,
            d:<p>tezitra</p>

        }
    ];
    let header=["a","b","d"];
    return (
        <>
           <Routes>
           <Route path="/t" element={<TableComp border="1" cellSpacing="0" className="table table-striped table-sm" data={data} header={header}></TableComp>}/>
           <Route path="/tt" element={<NotValidate></NotValidate>}/>
           <Route path="/" element={<ListeEnchere></ListeEnchere>}/>
           <Route path="/teste" element={<IntervalInput></IntervalInput>}/>
           <Route path="/input" element={<InputComponent className="form-control" placeholder="Enter your Name" name="nom" type="date"></InputComponent>}/>
           </Routes>
        </>
    );
}
  
export default App;
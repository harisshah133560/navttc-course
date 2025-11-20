import { useEffect, useState } from 'react'

import './App.css'

function App() {
const [show , setShow] = useState([]);
const getdata=async()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/posts");
  const data=await res.json();
setShow(data);
// console.log(data);
}
// getdata();
useEffect(()=>{
  getdata();
},[])
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Userid</th>
              <th>id</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {show.map((item)=>{
            return(
              <tr>
                <th>
                  {item.userId}
                </th>
                <th>
                  {item.id}
                </th>
                <th>
                  {item.title}
                </th>
                <th>
                  {item.body}
                </th>
               
              </tr>
            )            
            })}
          </tbody>
        </table>
        </div>
     </>
  )
}

export default App

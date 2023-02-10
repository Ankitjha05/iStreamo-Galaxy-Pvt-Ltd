import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Component/Navbar/Navbar';
import Upper from './Component/Uppersection/Upper';
import { Lower } from './Component/Lowersection/Lower';

function App() {

  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(50);
  const [startdate, setstartdate] = useState("2022-04-01");
  const [enddate, setenddate] = useState("2022-08-24");

  const url = `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=${startdate}&todate=${enddate}&page=${page}&limit=${limit}`;

  const url2 = `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=${startdate}&todate=${enddate}&page=1&limit=10`;


const [datalist, setDatalist] = useState([]);
const [datalist2, setDatalist2] = useState([]);
const [totaldocs, settotaldocs] = useState();

  const getdata = async ()=>{
    let data = await fetch(url);
    let parsedata = await data.json();
    setDatalist(parsedata.data.data);
    settotaldocs(parsedata.data.total_documents);
  }

  const getdata2 = async ()=>{
    let data = await fetch(url2);
    let parsedata = await data.json();
    setDatalist2(parsedata.data);  
  }

  const updateusestate = (val)=>{
    setlimit(val);
    getdata();
  }

  const updatepagestate = (val)=>{
    setPage(val);
    getdata();
  }

  const updatedatevale = (val1, val2)=>{
    setstartdate(val1);
    setenddate(val2);
    getdata2();
  }

  useEffect(()=>{
    getdata2();
    // eslint-disable-next-line 
  },[enddate])
  
  useEffect(()=>{
    getdata();
    // eslint-disable-next-line 
  },[enddate])

  useEffect(()=>{
    getdata();
    // eslint-disable-next-line 
  },[limit])

  useEffect(()=>{
    getdata();
    // eslint-disable-next-line 
  },[page])

  useEffect(()=>{
    getdata();
    getdata2();
    // eslint-disable-next-line 
  },[])

  return (
    <div className="App">
      <Navbar/>
      <div className='rightside'>
      <Upper list={datalist2}/>
      <Lower date={updatedatevale} total={totaldocs} pagenumber={updatepagestate} setlimit={updateusestate} list={datalist}/>
      </div>
    </div>
  );
}

export default App;

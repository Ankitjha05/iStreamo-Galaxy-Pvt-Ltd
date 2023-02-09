import React, { useState } from 'react'
import "./index.css";
import android from "./Media/android.svg"
import iphone from "./Media/iphone.svg"
// import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Calender from './Calender';


export function Lower(props) {

    let style = {
        margin:"0",
        padding:"0",
        display:"inline-block",
        textAlign:"center",
        verticalAlign: "0px"
    }

    const options = [10,50,100,500,1000];

    const [page, setPage] = useState(50);

    const handlechnage =(e)=>{
        props.setlimit(e.target.value);
        setPage(e.target.value);
    }

    const handleclick = (e)=>{
        props.pagenumber(e.target.value);
    }

    const returnarraybutton = ()=>{
        const n = Math.ceil(props.total/page);
        const arr = [];
        for (let index = 0; index < n; index++) {
            arr.push(<button onClick={handleclick} value={index+1} key={index}>{index+1}</button>);
        }
        return arr;
    }

    //for toggling the calender

    const [calenderactive, setcalenderactive] = useState(false);

    const handleclickbutton = ()=>{

        setcalenderactive(current => !current);
    }

    return (
        <div className='lowercontainer'>
            <div className='lowercontainerheader'><span>Show  </span>
                <select defaultValue={50} onChange={handlechnage}>
                    {options.map((ele, ind)=>{
                        return <option value={ele} key={ind}>{ele}</option>
                    })}
                </select>
                <span>  Entries</span>
                <button onClick={handleclickbutton}>Select Duration</button>
            </div>
            <div id={!calenderactive?"":"hidden"} className="calendersection">
                <Calender buttonclick={handleclickbutton} date={props.date}/>
            </div>
            <ul>
                <li id='firstlist' className='firstlist'>
                    <span>Date</span>
                    <span>Day Installs</span>
                    <span>Platform</span>
                    <span>Day Uninstalls</span>
                    <span>Platform</span>
                    <span>Churn Rate</span>
                    <span>Churn Platform</span>
                </li>
                {props.list.map((ele, ind) => {
                    
                    return (
                        <li key={ind}><span>{new Date(ele.created_At).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        })}</span>
                        <span>{ele.ios_install+ele.android_install}</span>
                        <span className='totalinstalled'>
                        <span style={{marginTop:"0px"}}><img alt="" src={android}></img><span style={style}>{ele.android_install}</span></span>
                        <span style={{marginTop:"0px"}}><img alt="" src={iphone}></img><span style={style}>{ele.ios_install}</span></span>
                        </span>
                        <span>{ele.ios_uninstall+ele.android_uninstall}</span>
                        <span className='totalinstalled totalUninstalled '>
                        <span style={{marginTop:"0px"}}><img alt="" src={android}></img><span style={style}>{ele.android_uninstall}</span></span>
                        <span style={{marginTop:"0px"}}><img alt="" src={iphone}></img><span style={style}>{ele.ios_uninstall}</span></span>
                        </span>
                        <span style={{}}>{ele.totalchurn}%</span>
                        <span className='totalinstalled totalchurnrate '>
                        <span style={{marginTop:"0px"}}><img alt="" src={android}></img><span style={style}>{ele.android_churn?ele.android_churn:0}%</span></span>
                        <span style={{marginTop:"0px"}}><img alt="" src={iphone}></img><span style={style}>{ele.ios_churn?ele.ios_churn:0}%</span></span>
                        </span>
                        </li>
                    )
                })}
            </ul>
            <div className='buttoncontainer'>
                <div>
                {returnarraybutton()}<span>&gt;&gt;</span>
                </div>
            </div>
        </div>
    )
}
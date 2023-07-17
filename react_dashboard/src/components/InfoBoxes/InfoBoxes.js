import React,{useState} from 'react'
import InfoBox from './InfoBox/InfoBox';
import './InfoBoxes.css';
import {calcTotalWaste} from '../util';

export default function InfoBoxes({data,selLane,selCategory,setSelCategory}) {
    let dry = calcTotalWaste(data,selLane,'drywaste_af');
    let wet = calcTotalWaste(data,selLane,'wetwaste_af');
    let rejected = calcTotalWaste(data,selLane,'rejected');
    let total = dry+wet+rejected;
    let drypercent = ((dry/total)*100).toFixed(2);
    let wetpercent = ((wet/total)*100).toFixed(2);
    let rejectedpercent = ((rejected/total)*100).toFixed(2);
    let date_array = data[data.length - 1].date.split('-');
    let latest_date= `${date_array[2]}-${date_array[1]}-${date_array[0]}`;

    // const [dry,setDry] = useState();
    return (
        <div className="infoboxes">
        <InfoBox active={selCategory === 'dry' } onClick={() => setSelCategory("dry")} title={`Recyclable Dry Waste`} value={`${dry} kg`} date={`${drypercent}% of total waste till ${latest_date}`}/>
        <InfoBox active={selCategory === 'wet' } onClick={() => setSelCategory("wet")} title={`Compostable Wet Waste`} value={`${wet} kg`} date={`${wetpercent}% of total waste till ${latest_date}`}/>
        <InfoBox active={selCategory === 'rejected' } onClick={() => setSelCategory("rejected")} title={`Segregated Rejected Waste`} value={`${rejected} kg`} date={`${rejectedpercent}% of total waste till ${latest_date}`}/>
        <InfoBox active={selCategory === 'total' } onClick={() => setSelCategory("total")} title={`Total Waste`} value={`${total} kg`} date={`till ${latest_date}`}/>
        </div>
    )
}
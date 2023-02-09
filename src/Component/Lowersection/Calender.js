import React, { useState } from 'react'
import { addDays } from 'date-fns';
import { format } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Calender = (props) => {

    const [state, setState] = useState({
        selection: {
            startDate: new Date(2022, 4, 1),
            endDate: null,
            key: 'selection'
        },
    });

    const handleclick = ()=>{
        let endDate = !state.selection.endDate ? new Date(2022, 8, 24) : state.selection.endDate;
        props.date(format(state.selection.startDate, 'yyyy-MM-dd').toString(),
            format(endDate, 'yyyy-MM-dd').toString())
            props.buttonclick();
    }

    const handlecancel =()=>{
        props.buttonclick();
    }

    return (
        <div className='.datepicker'>
            <DateRangePicker
                onChange={item => setState({ ...state, ...item })}
                months={1}
                minDate={addDays(new Date(2022, 4, 1), 0)}
                maxDate={addDays(new Date(), 900)}
                direction="vertical"
                //   scroll={{ enabled: true }}
                ranges={[state.selection]}
            />
            <div className='calenderbuttonsection'>
                <button onClick={handleclick}>Apply</button>
                <button onClick={handlecancel}>Cancel</button>
            </div>
        </div>
    )
}

export default Calender

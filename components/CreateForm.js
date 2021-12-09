import React, { useEffect } from 'react';
import Result from './Result';

export default function CreateForm() {
    const [stand, setStand] = React.useState({
        location : 'New location..',
        min : 0,
        max : 0,
        avg : 0,
        condition : false
    
    })

    const handelSubmit = (e) =>{
        e.preventDefault()
                setStand({
                    location :e.target.location.value,
                    min :e.target.min.value,
                    max :e.target.max.value,
                    avg :e.target.avg.value,
                    condition : true
                }) 
    }

    return(

        
           <div>
            <form onSubmit={handelSubmit} className='bg-green-200' >
                <h2 className='font-medium text-center' >Create Cookie Stand</h2>
                <label className='' >Location</label>
                <input className="" placeholder={stand.location}  type="text" id = 'location' /> <br/>
                <div className='grid float-left grid-cols-3 ' >
                    <label className='' >Minimum Customer per Hour</label>
                    <label className='' >Maximum Customer per Hour</label>
                    <label className='' >Average Cookies per Sale </label>
                    
                    <input className='' placeholder={stand.min} name="min" type="number" id = 'min' />
                    <input className='' placeholder={stand.max} name="max" type="number" id = 'max' />
                    <input className='' placeholder={stand.avg} name="avg" type="number" id = 'avg' />
                </div>
                <button className='text-white bg-green-500' type='submit' >Create</button>
            </form>
            <p className='text-grey-600' >Report Table Coming Soon... </p>
            <Result stand={stand} />
            </div>
      
    )
} 
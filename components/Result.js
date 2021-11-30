function Result({stand}){

    return(
        
            <p className='bg-blue' >
                <span>Location : {stand.location} </span>,
                <span>Minimum Customer per Hour : {stand.min} </span>,
                <span>Maximum Customer per Hour : {stand.max} </span>,
                <span>Average Cookies per Sale : {stand.avg} </span>
            </p>
        
    )
}

export default Result
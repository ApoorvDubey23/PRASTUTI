import Card from './Card'
function Tours({tours, removeTour}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Plan With RouteRanger</h2>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                        // the ... operator is the operator which is used to copy the previous data and add into it a data which we are inputting
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;


function Result(props){


    return(
        <div className="container summary">
              <div className="h-100 p-3 bg-light border rounded-3">
          <h2>Summary :</h2>
          <p>{props.summary}</p>

        </div>
        </div>
      
    )
}

export default Result;
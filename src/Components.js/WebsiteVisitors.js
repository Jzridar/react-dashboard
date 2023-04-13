import { useState } from "react"
export function WebsiteVisitors(props){

    // Declare the state
  const [counter, setCounter] = useState(0)

  // Function to add one to the state
  const addOne = () => {
    // sets counter to its current value + 1
    setCounter(counter + 1)
  }


    return <div className="web-visitor" onClick={addOne}>
        <span className="title">Website Visitors</span>
        <span className="title-value">{counter}</span>
    </div>
}

export default WebsiteVisitors
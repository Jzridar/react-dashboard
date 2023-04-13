
export function AvgRating(props){

  return <div className="avgrating">
    <span className="title">Average Rating</span>
    <span className="title-value">{props.rating}</span>
  </div>
}

export default AvgRating
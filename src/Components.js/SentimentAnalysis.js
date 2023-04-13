export function SentimentAnalysis(props){

    var values = props.analysis.map(a =>{
        return (
            <span className="analysis-value">{a}</span>
        );
      });
   
    return <div className="sentiment-analysis">
       <span className="title">Sentiment Analysis</span> 
        {values}
    </div>
    
}

export default SentimentAnalysis
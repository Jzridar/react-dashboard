import Sidebar from "./Components.js/Sidebar";
import AvgRating from "./Components.js/AvgRating";
import WebsiteVisitors from "./Components.js/WebsiteVisitors";
import Reviews from "./Components.js/Reviews";
import SentimentAnalysis from "./Components.js/SentimentAnalysis";
import './Style.css';


function App() {
  return (
   
    <div className="main">
     
      <Sidebar />
      <main>
        <Reviews></Reviews>
        <AvgRating rating="4.6"></AvgRating>
        <SentimentAnalysis analysis={[960,122,321]}></SentimentAnalysis>
        <WebsiteVisitors visitor="30"></WebsiteVisitors>
      </main>
     
      
    </div>
   
  )
}

export default App;

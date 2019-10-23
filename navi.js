
function Button(){
  

      return (
        <div className="App" style={{background: '#f6f6f6'}}>
        
          <img src="https://cdn.glitch.com/e942effc-6ee0-4227-b383-dfaae560d60d%2Fnavi.jpeg?v=1571615424993" 
         className="custom-logo sp-no-webp" height="53" width="200" 
         srcset="https://cdn.glitch.com/e942effc-6ee0-4227-b383-dfaae560d60d%2Fnavi.jpeg?v=1571615424993" />
    
    <div className = "search">
      <input className = "search-txt" type="text" placeholder="Search by course, subject, etc" />
      <a className = "search-btn" href = "#">
      <i className = "fas fa-search"></i>
      </a>
    </div>
    <div className="container">
      <h3>
       Categories
    </h3>
      <div className = "categ">
        <h3>
          All
        </h3>
      </div>
      
      <div className = "categ">
        <h3>
          Sciences
        </h3>
      </div>
      
      <div className = "categ">
        <h3>
          Arts
        </h3>
      </div>
      
      <div className = "categ">
        <h3>
          Business
        </h3>
      </div>
      <div className = "categ">
        <h3>
          Others
        </h3>
      </div>
      
      <h3>
       Subjects
    </h3>
      <div className="box">
        <div className="content">
          <img src="https://cdn.glitch.com/e942effc-6ee0-4227-b383-dfaae560d60d%2FtmpImg3.jpeg?v=1571611161820" />
        </div>
        <div className="Subject" style={{color: '#2a2a2a', fontSize: '125%'}}>
          <h3>
          Mathematics
        </h3>
        </div>
      </div>
      
      <div className="box">
        <div className="content">
          <img src = "https://cdn.glitch.com/e942effc-6ee0-4227-b383-dfaae560d60d%2FtmpImg.jpeg?v=1571611363004" />
        </div>
        <div className="Subject">
          <h3>
          Computer Science
        </h3>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src = "https://cdn.glitch.com/e942effc-6ee0-4227-b383-dfaae560d60d%2FtmpImg4.jpeg?v=1571612061842" />
        </div>
        <div className="Subject" style={{color: 'white', fontSize: '125%'}}>
          <h3>
            Business
          </h3>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src = "https://cdn.glitch.com/e942effc-6ee0-4227-b383-dfaae560d60d%2FtmpImg5.jpeg?v=1571612080956" />
        </div>
        <div className="Subject" style={{color: 'white', fontSize: '125%'}}>
          <h3>
          Biology
        </h3>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src = "https://cdn.glitch.com/e942effc-6ee0-4227-b383-dfaae560d60d%2FtmpImg6.jpeg?v=1571612092364" />
        </div>
        <div className="Subject" style={{color: '#2a2a2a', fontSize: '125%'}}>
          <h3>
          Nursing
        </h3>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src = "https://cdn.glitch.com/e942effc-6ee0-4227-b383-dfaae560d60d%2FtmpImgg.jpeg?v=1571612161625" />
        </div>
        <div className="Subject" style={{color: '#2a2a2a', fontSize: '125%'}}>
          <h3>
          Economics
        </h3>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src = "https://cdn.glitch.com/e942effc-6ee0-4227-b383-dfaae560d60d%2FtmpImg8.jpeg?v=1571612168798" />
        </div>
        <div className="Subject" style={{color: 'white', fontSize: '125%'}}>
          <h3>
          Chemistry
        </h3>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src = "https://cdn.glitch.com/e942effc-6ee0-4227-b383-dfaae560d60d%2FtmpImg9.jpeg?v=1571612174564" />
        </div>
        <div className="Subject">
          <h3>
          Anthroplogy
        </h3>
        </div>
      </div>
      
      
    </div>
    
          
        </div>
      
      );

  // const [counter, setCounter] = useState(5);
  // return <button onClick = {() => setCounter(counter*2)}>{counter}</button>;
}
ReactDOM.render(
  < Button/>,
  document.getElementById("mountNode"),
);


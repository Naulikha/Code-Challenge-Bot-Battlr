import React, { useState, useEffect} from 'react';
import BotArmy from './botArmy';
import BotCollection from './BotCollection';

function App() {

  const [isBot, setIsBot] = useState([])
  const [selectedBots, setSelectedBots] = useState([]);


        useEffect(() => {
        fetch("http://localhost:3000/bots")
        .then(res => res.json())
        .then(data =>{
            setIsBot(data)
        }
            )
    }, []);
    

    const handleAddBot = (bota) => {
      if (!selectedBots.includes(bota) && selectedBots.length < 4) {
        setSelectedBots([...selectedBots, bota]);
      }
    }
  

      const handleReleaseBot = (bota) => {
        setSelectedBots(selectedBots.filter(bot => bot !== bota));
      }
    

  return (
    <div>
        <BotArmy selectedBots={selectedBots} 
          handleReleaseBot={handleReleaseBot}/>
        <BotCollection setIsBot={setIsBot} isBot={isBot} handleAddBot={handleAddBot} handleReleaseBot={handleReleaseBot}/>  
    </div>
  );
}

export default App;
import React from "react";
import BotCard from "./BotCard";


function BotArmy({selectedBots = [], handleReleaseBot}){



    

    return(
        <div className="army container-fluid row bg-success" >
            <h2>Your Bot Army</h2>
            {selectedBots.map(bot => (
              <div className="col-sm-3 mb-4 mb-sm-0 " onClick={() => handleReleaseBot(bot)}>
              <BotCard 
              image={bot.avatar_url}
              title={bot.name} 
              catchphrase={bot.catchphrase} 
              health={bot.health} 
              damage={bot.damage} 
              armor={bot.armor}  />
              </div>
            ))}
        </div>
    )
}

export default BotArmy;
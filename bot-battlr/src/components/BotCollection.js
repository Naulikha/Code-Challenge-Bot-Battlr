import React from "react";
import BotCard from "./BotCard";


function BotCollection({isBot,setIsBot, handleAddBot}){


    const handleDeleteBot = (id) => {
        fetch(`https://json-server-vercel-eight-alpha.vercel.app/bots/${id}`, {
          method: 'DELETE'
        })
        .then(() => {
           const updateBots = isBot.filter( isBot => isBot.id !== id)
           setIsBot(updateBots)
        })
        .catch(error => {
          console.error(error);
        });
      }

    
    return(
        <div className="container-fluid row">
            {isBot.map((bota) =>
            <div key={bota.id}  className=" col-sm-3 mb-4 mb-sm-0" >
                <div onClick={() => handleAddBot(bota)}>
                <BotCard
                className="bg-primary" 
                image={bota.avatar_url}
                title={bota.name}
                catchphrase={bota.catchphrase}
                health={bota.health}
                damage={bota.damage}
                armor={bota.armor}
                />
                </div>
                <button onClick={() => handleDeleteBot(bota.id)}>DELETE</button> 
            </div>
            )
            }                
        </div>
    );
}


export default BotCollection;
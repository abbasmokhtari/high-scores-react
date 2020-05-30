import React from 'react';
import allCountryScores from './scores' 


const ScoreTable = () => {
    return (
        <div>
            <ul>
                {allCountryScores.map(e => {
                    return (
                        <div>
                            <li><h2>HIGH SCORES: {e.name}</h2></li>
                            <ul>
                                {e.scores.map(x => {
                                    return (
                                        <li>
                                            <span>{x.n}</span>           <span>{x.s}</span>
                                        </li>
    )
})}
                            </ul>
                        </div>
                    )
                })}
            </ul>
         
        </div>
    )
}




export default ScoreTable
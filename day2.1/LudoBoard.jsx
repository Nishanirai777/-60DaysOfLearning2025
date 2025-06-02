
import { useState } from "react";


export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, purple: 0, green: 0, maroon: 0 });
    let [count, setCount] = useState(0);


    let updateBlue = () => {
        moves.blue += 1;
        console.log(`moves.blue=${moves.blue}`);
        setMoves({ ...moves });
    }

        let updatePurple = () => {
                moves.purple += 1;
            console.log(`moves.purple=${moves.purple}`);
        setMoves({...moves});
        }
    let updateGreen= ()=>{
        moves.green += 1;
        console.log(`moves.green=${moves.green}`);
        setMoves({...moves});
    }
 let updateMaroon= ()=>{
        moves.maroon += 1;
        console.log(`moves.maroon=${moves.maroon}`);
        setMoves({...moves});
    }

    return (
        <div>
            <p>Game Begins!</p>


            <div className="board">
                <p>Blue Moves={moves.blue}</p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>



                <p> purple Moves={moves.purple}</p>
                <button style={{ backgroundColor: "purple" }} onClick={updatePurple}>+1</button>

                <p>green Moves={moves.green}</p>
                <button style={{ backgroundColor: "green" }} onClick={updateGreen}>+1</button>

                <p>maroon Moves={moves.maroon}</p>
                <button style={{ backgroundColor: "maroon" }} onClick={{updateMaroon}}>+1</button>

            </div>
        </div>
    );
}
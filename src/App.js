import React, {useState, useRef} from 'react';
import CenteredBox from './CenteredBox'
import TicTacToeGrid from './TicTacToeGrid';
import {db, auth} from "./config/firebase";
import TTT from './TTT_grid';
import { initializeApp } from "firebase/app";
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc, QuerySnapshot } from 'firebase/firestore';


const App = () =>
{
    const [isGridVisible, setGridVisibility] = useState(false);
    const all_moves_db = collection(db, "un_trainedAI")
    const[f_d, setF_D] = useState([])

    const handleButtonClick = async () => 
    {
        try 
        {
            const querySnapshot = await getDocs(all_moves_db);
            const movesData = querySnapshot.docs.map((doc) => doc.data());
            setF_D(movesData);
            setGridVisibility(true);
        } 
        catch (error) 
        {
            console.error("Error fetching data:", error);
        }
    };
    
    return (
        <div className='App' style = {appStyle}>
            {isGridVisible ? (
                <TTT model={f_d}/>
            ) : (
                <CenteredBox onButtonClick={handleButtonClick} />
            )}
        </div>
    )
}

const appStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    minHeight: '100vh', // Ensure the entire viewport height is covered
  };

export default App;
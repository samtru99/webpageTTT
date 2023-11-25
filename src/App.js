import React, {useState, useRef} from 'react';
import CenteredBox from './CenteredBox'
//import NewGrid from './newGrid';
import TicTacToeGrid from './TicTacToeGrid';
import {db, auth} from "./config/firebase";
import TTT from './TTT_grid';
import { initializeApp } from "firebase/app";
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc, QuerySnapshot } from 'firebase/firestore';


const App = () =>
{
    const [isGridVisible, setGridVisibility] = useState(false);
    //const db = firebase.firestore()
    const all_moves_db = collection(db, "un_trainedAI")
    //const all_moves = []
    const[f_d, setF_D] = useState([])
    //const refsArray = Array.from({ length: 9 }, () => useRef(null));

    const handleButtonClick = async () => {
        
        

        try {
            const querySnapshot = await getDocs(all_moves_db);
            const movesData = querySnapshot.docs.map((doc) => doc.data());
            setF_D(movesData);
            setGridVisibility(true);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        
        /*
        const filteredData = await getDocs(all_moves_db).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const data = doc.data(); // Access the data of each document
              console.log("Document data:", data);
              all_moves.push(data)
            });
          }) 
        setF_D(filteredData)  
        setGridVisibility(true)
        */
    
        //console.log("all moves [3] is ", all_moves[3])
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
import React, {useState} from 'react';
import CenteredBox from './CenteredBox'
import TicTacToeGrid from './TicTacToeGrid';

const App = () =>
{
    const [isGridVisible, setGridVisibility] = useState(false);

    const handleButtonClick = () => {
        console.log("button clicked")
        setGridVisibility(true)
      };
    return (
        <div className='App' style = {appStyle}>
            {isGridVisible ? (
                <TicTacToeGrid/>
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
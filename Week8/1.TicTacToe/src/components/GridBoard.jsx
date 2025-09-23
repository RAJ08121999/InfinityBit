import React from 'react'

const GridBoard = ({board,onCellClick, player , resetBoard,winner,winningCombo}) => {
return (
    <div className=' bg-slate-200 p-4 shadow-2xl'>
        <div className=' grid grid-cols-3 gap-2 '>
            {
                board.map((cell,index)=>(
                    <div
                        key={index}
                        className={`h-20 w-20 flex justify-center items-center text-3xl font-bold cursor-pointer select-none
                        ${winningCombo.includes(index) 
                        ? 'bg-green-800 text-white' : cell 
                            ? 'bg-slate-800 text-white' 
                            : 'bg-slate-950 text-gray-100 hover:bg-slate-700'}`}
                        
                        onClick={()=>onCellClick(index)}
                    >
                        {cell}
                    </div>
                ))
            }
        </div>
        
        <div className='flex justify-between items-center mt-6'>
            <button
                className='bg-slate-700 text-white py-2 px-3 rounded-md text-lg hover:bg-red-600'
                onClick={resetBoard}>Reset</button>
            <div className='bg-slate-700 text-white py-2 px-3 rounded-md text-lg'>
                {
                    winner? 
                    winner ==='Draw'? "It's a Draw!"
                    :`${winner}  Wins!`
                    :`${player}'s Turn`
                }
            </div>
        </div>
    </div>
)
}

export default GridBoard

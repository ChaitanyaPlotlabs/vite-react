// You have to take one input from the user, let’s say n (an integer), and the task is to design a n*n chess board, just the ui part of it, nothing functional, it should be n*n and it should be black and white alternating squares

import { useState } from "react";

function App() {
  const [chessSquares, setChessSquares] = useState(8);

  return (
    <div className="w-full items-center flex flex-col gap-10 p-10">
      <h1 className="text-3xl font-bold">Chess Board</h1>

      <input
        value={chessSquares}
        onChange={(e) => setChessSquares(e.target.value)}
        className="border border-black p-2 text-lg"
        placeholder="Number of squares..."
        min="2"
        type="number"
      />

      <ChessBoard chessSquares={chessSquares} />
    </div>
  );
}

export default App;

function ChessBoard({ chessSquares }) {
  const getBgColor = (rowIndex, colIndex) => {
    let bgColor = "#FFF";

    if (chessSquares % 2 === 0) {
      (rowIndex + colIndex) % 2 === 0 ? (bgColor = "#000") : (bgColor = "#FFF");
    } else {
      (rowIndex + colIndex) % 2 === 0 ? (bgColor = "#FFF") : (bgColor = "#000");
    }

    return bgColor;
  };

  return (
    <div className="flex flex-col border">
      {Array.from({ length: chessSquares }).map((i, rowIndex) => (
        <div key={rowIndex} className="flex flex-row">
          {Array.from({ length: chessSquares }).map((j, colIndex) => (
            <div
              key={colIndex}
              className="w-10 h-10"
              style={{
                backgroundColor: getBgColor(rowIndex, colIndex),
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

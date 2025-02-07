interface ScoreProps {
  score: { X: number; O: number; Draw: number };
}

const Score = ({ score }: ScoreProps) => {
  return (
    <div className="w-full grid grid-cols-3 gap-5 text-slate-900 text-lg font-medium pointer-events-none">
      <div className="button-3d bg-sky-500 flex flex-1 flex-col items-center">
        <p>X Score</p>
        <span>{score.X}</span>
      </div>
      <div className="button-3d bg-[#A8BFC9] flex flex-1 flex-col items-center">
        <p>Draw</p>
        <span>{score.Draw}</span>
      </div>
      <div className="button-3d bg-yellow-500 flex flex-1 flex-col items-center">
        <p>O Score</p>
        <span>{score.O}</span>
      </div>
    </div>
  );
};

export default Score;

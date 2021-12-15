import { useReducer } from "preact/hooks";
import { Score } from "./score";

type ScoreDict = {
  teamName: string,
  score: number,
  isDeuce: boolean,
  hasRightToServe: boolean,
};

// the 0th one is on the left, the 1st one is on the right
type ScoreBoard = [ScoreDict, ScoreDict]; 

const initScoreBoard: ScoreBoard = [
  {
    teamName: "ひだり",
    score: 0,
    isDeuce: false,
    hasRightToServe: false,
  },
  {
    teamName: "みぎ",
    score: 0,
    isDeuce: false,
    hasRightToServe: false,
  },
];

export type scoreBoardAction = { type: string, payload?: string };

function useScoreBoard(initScoreBoard: ScoreBoard) {
  function scoreBoardReducer(state: ScoreBoard, action: scoreBoardAction) {
    switch (action.type) {
      case 'L+':
        return [
          { ...state[0], hasRightToServe: true, score: state[0].score+1 },
          { ...state[1], hasRightToServe: false },
        ] as ScoreBoard;
      case 'R+':
        return [
          { ...state[0], hasRightToServe: false },
          { ...state[1], hasRightToServe: true, score: state[1].score+1 },
        ] as ScoreBoard;

      case 'L-':
        if (state[0].score > 0) return [
          { ...state[0], score: state[0].score-1 },
          state[1],
        ] as ScoreBoard;
        else return state;
      case 'R-':
        if (state[1].score > 0) return [
          state[0],
          { ...state[1], score: state[1].score-1 },
        ] as ScoreBoard;
        else return state;

      case 'ChangeSide':
        return [state[1], state[0]] as ScoreBoard;
      case 'LChangeName':
        return [
          { ...state[0], teamName: action.payload },
          state[1],
        ] as ScoreBoard;
      case 'RChangeName':
        return [
          state[0],
          { ...state[1], teamName: action.payload },
        ] as ScoreBoard;
      case 'Zero':
        return [
          { ...initScoreBoard[0], teamName: state[0].teamName },
          { ...initScoreBoard[1], teamName: state[1].teamName },
        ] as ScoreBoard;

      
      default:
        return state;
    }
  }
  const stateHook = useReducer<ScoreBoard, scoreBoardAction>(scoreBoardReducer, initScoreBoard);
  return {
    scoreBoard: stateHook[0],
    left: stateHook[0][0],
    right: stateHook[0][1],
    dispatch: stateHook[1],
  };
}

export function App() {
  const { left, right, dispatch } = useScoreBoard(initScoreBoard);
  return (
    <>
      <Score teamName={left.teamName} score={left.score} dispatch={dispatch}/>
      <nav>
        <span>測試版</span>
        <button onClick={() => dispatch({ type: 'Zero' })}>歸零</button>
        <button onClick={() => dispatch({ type: 'ChangeSide' })}>換邊</button>
      </nav>
      <Score teamName={right.teamName} score={right.score} dispatch={dispatch} isOnTheRight/>
    </>
  )
}

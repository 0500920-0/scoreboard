import type { scoreBoardAction } from "./app"

export type ScoreProps = {
    teamName: string,
    score: number,
    isOnTheRight?: boolean,
    dispatch(action: scoreBoardAction): void,
};

export function Score({ teamName, score, isOnTheRight = false, dispatch }: ScoreProps) {
    return <div class="score">
        <header>
            <input
            value={teamName}
            onInput={(evt) => dispatch({ type: `${isOnTheRight?'R':'L'}ChangeName`, payload: evt?.target.value })}
            />
        </header>
        <main>{score}</main>
        <footer>
        {
            isOnTheRight ?
            <>
                <button onClick={() => dispatch({ type: 'R-' })}>減分-</button>
                <button onClick={() => dispatch({ type: 'R+' })}>加分+</button>
            </> :
            <>
                <button onClick={() => dispatch({ type: 'L+' })}>+加分</button>
                <button onClick={() => dispatch({ type: 'L-' })}>-減分</button>
            </>
        }
        </footer>
  </div>
}
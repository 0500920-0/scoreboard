import type { scoreBoardAction } from "./app";

export type ScoreProps = {
    teamName: string,
    score: number,
    // isOnTheRight?: boolean,
    hasRightToServe: boolean,
    isChangingSide: boolean,
    // dispatch(action: scoreBoardAction): void,
    onNameChange(name: string): void,
    onScoreChange(): void,
};

export function Score({ teamName, score, hasRightToServe, isChangingSide, onNameChange, onScoreChange }: ScoreProps) {
    function handleNameChange(evt: any) { /* TODO: I don't know what the type is here (with Preact)  */
        evt.preventDefault();
        if (evt.target instanceof HTMLInputElement)
            // dispatch({ type: `${isOnTheRight?'R':'L'}ChangeName`, payload: evt?.target?.value });
            onNameChange(evt?.target?.value);
    }
    return <div class="score">
        <header>
            <input
            value={teamName}
            onInput={handleNameChange}
            placeholder="請輸入名字……"
            />
        </header>
        <main onClick={onScoreChange} className={isChangingSide ? 'change-side' : hasRightToServe ? 'service' : ''}>{score}</main>
        {/* <footer>
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
        </footer> */}
  </div>
}
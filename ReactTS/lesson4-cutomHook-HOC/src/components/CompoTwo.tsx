import GenCompo from "./GenCompo";

const CompoTwo = (props: any) => {
    const { counter, inCount } = props;
    return (
        <div>
            CompoTwo {counter}
            <button onClick={inCount}>
                +1
            </button>
        </div>
    )
}

export default GenCompo(CompoTwo);
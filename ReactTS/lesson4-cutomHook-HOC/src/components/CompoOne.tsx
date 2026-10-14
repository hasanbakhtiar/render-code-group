import  GenCompo from "./GenCompo";

const CompoOne = (props: any) => {
    const { counter, inCount } = props;
    return (
        <div>
            CompoOne {counter}
            <button onClick={inCount}>
                +1
            </button>
        </div>
    )
}

export default GenCompo(CompoOne);
import { usePeopleCount } from "../context/StudentCount"


export default function Total() {

    const { state } = usePeopleCount()

    return (
        <>
            <h1>Total People Count : {state.students + state.trainers}</h1>
        </>
    )
}

import { useState } from "react"

type alertDataType = "Welcome" | "Hello" | "Good Morning" | null;

const Example = () => {
    const [alterData, setAlertData] = useState<alertDataType>(null);
    return (
        <div className="m-5">
            {alterData == null ? "" : <p className={`alert alert-${alterData == "Good Morning" ? "info" : alterData == "Hello" ? "success" : "primary"} w-50`}>{alterData}</p>}
            <button className={`btn btn-${alterData == "Good Morning" ? "info" : alterData == "Hello" ? "success" : "primary"}`}
                onClick={() => {
                    alterData == null ? setAlertData("Good Morning") :
                        alterData == "Good Morning" ? setAlertData('Welcome') :
                            alterData == "Welcome" ? setAlertData("Hello") :
                                setAlertData("Good Morning")
                }}

            >Say Hello</button>
        </div>
    )
}

export default Example
import React from 'react'

function HOC(CBComponent) {
    const NewComponent = ({ text }) => {

        const additionalProps = {}
        

        if (text == "reset") {
            additionalProps.textColor = "blue"
            additionalProps.bgColor = "red"
            additionalProps.handelClick = () => {alert("reset button is Clicked")}
        } else if (text == "Submit") {
            additionalProps.textColor = "white"
            additionalProps.bgColor = "black"
            additionalProps.handelClick = () => {alert("Submit button is  Clicked")}
        }
        return (
            <>
                <CBComponent text={text}
                    {...additionalProps} />
            </>
        )
    }
    return NewComponent
}

export default HOC
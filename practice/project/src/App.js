import React from 'react'


const App = (props) => {
    const Title = (props) => {
        console.log(props.value)
        return (
            <h1>{props.value}</h1>
        )
    }

    const Thingie = ({de, children}) => (
        <div>
            {children}
            <div class="Wrapper">
                <h3>{de}</h3>
            </div>
        </div>
    )
    const a = true
    const ThingieText = ({text, ...others}) => (
        <Thingie {...others}>
            <Title value={text}/>
            <h4>students</h4>
            {
                a && <h1>sibal</h1>
            }
        </Thingie>
    )
    return (
        <ThingieText text={"school"} de={"element school"}></ThingieText>

)
}

export default App;
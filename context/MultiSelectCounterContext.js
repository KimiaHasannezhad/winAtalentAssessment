import React, { createContext ,useState } from 'react'

export const MultiSelectCounterContext = createContext({
    counter: undefined,
    setCounter: () => { },
})

export const CounterProvider = (props) => {
    const [counter, setCounter] = useState(0)
    return (
        <MultiSelectCounterContext.Provider value={{ counter, setCounter }}>
            {props.children}
        </MultiSelectCounterContext.Provider>
    )
}

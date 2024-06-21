'use client'

const { createContext, useContext, useState } = require("react")

// Create Context

const GlobalContext = createContext()

// Create Provider
export function GlobalProvider({children}) {
    const [unreadCount, setUnreadCount] = useState(0)
    return (
        <GlobalContext.Provider value={{unreadCount, setUnreadCount}}>{children}</GlobalContext.Provider>
    )
}

// Create a custom hook to access context
export function useGlobalContext() {
    return useContext(GlobalContext)
}

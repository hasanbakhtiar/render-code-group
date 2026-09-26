import Header from "@/layouts/Header";
import React from "react"

interface RoutesLayoutProps {
    children: React.ReactNode;
}

const RoutesLayout = ({ children }: RoutesLayoutProps) => {
    return <>
        <Header />
        {children}
    </>
}

export default RoutesLayout
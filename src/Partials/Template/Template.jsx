import { Outlet } from "react-router-dom"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

// Définition de la fonction Template
export default function Template() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
    }
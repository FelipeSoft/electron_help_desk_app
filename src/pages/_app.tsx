import { AppProps } from "next/app";
import "../app/globals.css"
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const App = ({ Component, pageProps }: AppProps) => {
    const [enableTopButton, setEnableTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility)
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

    const toggleVisibility = () => {
        window.scrollY > 100
        ? setEnableTopButton(true)
        : setEnableTopButton(false)
    }

    const scrollToTop = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0,
            left: 0
        })
    }

    return (
        <>
            <div className="flex items-center justify-center py-10 w-screen fixed right-0 bottom-0 left-0 z-20">
                <button className={`${enableTopButton ? "mb-0" : "-mb-48"} duration-500 animate-bounce hover:animate-none flex items-center justify-center border-none outline-none transition-all hover:bg-blue-700 rounded-lg h-12 w-12 bg-blue-600`} onClick={scrollToTop}>
                    <ChevronUp className="text-white" />
                </button>
            </div>
            <Component {...pageProps} />
        </>
    )
}

export default App;
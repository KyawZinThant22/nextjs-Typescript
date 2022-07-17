import Header from "./Header"

type Props = {
    children : JSX.Element
}

const Layout: React.FC<Props> = ({children}) => {
    return (
        <div className="bg-black h-screen overflow-hidden text-white">
            <Header/>
            {children}
        </div>
    )
}

export default Layout
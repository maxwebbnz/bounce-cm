import Login from "./components/login";
import Header from "./components/header";
import './Home.css'
export default function Home() {
    return (
        <div className="home">
            <div className="container">
                <Header />
                <Login />
            </div>
        </div>
    )
}
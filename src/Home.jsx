import { Link } from "react-router-dom";

function Home(){
    return <>
        <div>This is the home page.</div>
        <Link to="/order-food-online">order food</Link>
    </>
}

export default Home;
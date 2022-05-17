import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div>
            <form action="">
                <input type="text" placeholder="Z" />
                <input type="text" placeholder="Do" />
            </form>
            <button>
                <Link to="/map">Map</Link>
            </button>
        </div>
    );
}

export default Home;
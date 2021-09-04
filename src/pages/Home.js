import { useEffect } from 'react';
import Copyright from '../components/footer/Copyright';
import HomeImages from '../components/home/HomeImages';

const Home = () => {
    useEffect(() => {
        document.title = 'Joanna Lin'
    }, [])
    return (
        <section className="home" id="home">
            <HomeImages />
            <Copyright />
        </section>
    )
}

export default Home

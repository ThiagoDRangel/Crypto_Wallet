import React from 'react';
import Header from '../../components/Header';
import Cards from '../../components/Cards';
import Notices from '../../components/Notices';
import './styles.css';
import Adverts from '../../components/Adverts';
import Footer from '../../components/Footer';

function Home () {
    return (
        <div className="container-btg">
            <Header />
            <Adverts />
            <div className="container-cards-notices">
                <Cards />
                <Notices />
            </div>
            <Adverts />
            <Footer />
        </div>
    );
}

export default Home;
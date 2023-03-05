import React from 'react';
import Footer from '../components/footer/Footer';
import Grid from '../components/grid/Grid';
import Navbar from '../components/navbar/Navbar';
import Pagination from '../components/pagination/Pagination';
import Tags from '../components/tags/Tags';

const Home = () => {
    return (
        <>
            <Navbar />
            <div>
                <Tags />
                <Grid />
                <Pagination />
                <Footer />
            </div>
        </>
    );
};

export default Home;
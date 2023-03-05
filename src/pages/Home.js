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
            <Tags />
            <Grid />
            <Pagination />
            <Footer />
        </>
    );
};

export default Home;
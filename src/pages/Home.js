import React from 'react';
import Grid from '../components/grid/Grid';
import Pagination from '../components/pagination/Pagination';
import Tags from '../components/tags/Tags';

const Home = () => {
    return (
        <>

            <Tags />
            <Grid />
            <Pagination />

        </>
    );
};

export default Home;
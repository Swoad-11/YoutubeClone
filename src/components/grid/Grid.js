import React from 'react';
import GridItem from './GridItem';

const Grid = () => {
    return (
        <div>
            <section class="pt-12">
                <section class="pt-12">
                    <div
                        class="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                    >
                        <div
                            class="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]"
                        >
                            <GridItem />
                        </div>
                        {/*<div class="col-span-12">some error happened</div>*/}
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Grid;
import React from 'react';
import SearchForm from './SearchForm';
import logo from '../../assets/lws.svg'

const Navbar = () => {
    return (
        <div>
            <nav class="bg-slate-100 shadow-md">
                <div
                    class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
                >
                    <a href="/">
                        <img
                            class="h-10"
                            src={logo}
                            alt="Learn with Sumit"
                        />
                    </a>
                    <div
                        class="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                    >
                        <SearchForm />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
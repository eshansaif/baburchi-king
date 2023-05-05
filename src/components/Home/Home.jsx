import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChefData from '../SingleChefData/SingleChefData';

const Home = () => {
    const chefData = useLoaderData();
    console.log(chefData);
    return (
        <div className="">
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://d3ox4wjkl7mf3m.cloudfront.net/feed_story/step/yCGo6Rzz3nsf4n9WrquZb3gEHxjaqEZqH5zhSo8h.jpeg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Traditional Bengali Cuisine</h1>
                        <p className="mb-5">If you are intrigued about Bengali cuisine and want to know more than its explicitly famous mishti doi, then give a read to this blog!</p>
                        <button className="btn btn-primary">Explore More</button>
                    </div>
                </div>
            </div>

            <div className="flex items-center mx-4 md:mx-16 my-6">
                <hr className="border-t border-gray-300 flex-grow mr-3" />
                <h2 className="text-gray-800 text-lg font-bold">Chefs</h2>
                <hr className="border-t border-gray-300 flex-grow ml-3" />
            </div>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mb-6 mx-4 md:mx-16'>
                {
                    chefData.chefs.map(singleChefData => <SingleChefData
                        key={singleChefData.id}
                        singleChefData={singleChefData}
                    ></SingleChefData>)
                }
            </div>
        </div>
    );
};

export default Home;
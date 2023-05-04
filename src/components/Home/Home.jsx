import React from 'react';

const Home = () => {
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
        </div>
    );
};

export default Home;
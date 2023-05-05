import React from 'react';
import { FaHatCowboy, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleChefData = ({ singleChefData }) => {
    console.log(singleChefData);
    const { id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = singleChefData;
    return (
        <div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <img className="h-48 w-full object-cover" src={chef_picture} alt="Chef's Picture" />

                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gray-800">{chef_name}</h1>
                    <p className="mt-2 text-base text-gray-600">  Years of Experience: {years_of_experience} Years</p>
                    <p className="mt-2 text-base text-gray-600">  Number of Recipes: {number_of_recipes}</p>
                    <p className="mt-2 text-base text-gray-600 flex items-center"><FaThumbsUp className='mx-2' />Likes  {likes}</p>

                    <div className="mt-4 flex justify-end">
                        <Link to={`/chefs/${id}`}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                View Recipes
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleChefData;
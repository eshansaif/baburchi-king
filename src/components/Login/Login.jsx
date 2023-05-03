import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                    <h3 className="text-center text-gray-900 font-bold mb-2">Please Login</h3>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            name='email'
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            name='password'
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <input
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            value="Login"
                        />
                        <p>
                            Are you new to Baburchi King? <Link to="/register"
                                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"

                            >
                                Register
                            </Link>
                        </p>
                    </div>
                </form>

                <div className="relative mb-3">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-2 bg-white text-lg font-bold text-gray-700">Or</span>
                    </div>
                </div>

                <div className="flex justify-center mb-4">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
                        Login with Google
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Login with Github
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;

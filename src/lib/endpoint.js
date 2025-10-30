import axios from "axios";

export const ENDPOINT = {
    // auth
    login: "/auth/login",
    signup: "/auth/signup",

    // logout , user pending
    user: "/user",
    logout: "/auth/logout",
    forgetpassword: "/auth/forgetpassword",
    resetPassword: "/auth/resetPassword",

    //discover
    discoverNowPlaying: "/discover/now-playing",
    discoverTrending: "/discover/trending",
    discoverTopRated: "/discover/top-rated",
    discoverUpcoming: "/discover/upcoming",
    
    // movies
    fetchActionMovies: `/movies/action`,
    fetchComedyMovies: `/movies/comedy`,
    fetchHorrorMovies: `/movies/horror`,
    fetchRomanceMovies: `/movies/romance`,
    fetchAnimeMovies: `/movies/anime`,

    //tv shows
    fetchActionTvShows: `/tv/action`,
    fetchComedyTvShows: `/tv/comedy`,
    fetchCrimeTvShows: `/tv/crime`,
    fetchDramaTvShows: `/tv/drama`,
    fetchMysteryTvShows: `/tv/mystery`,

    //eextra data 
    getMovieDetails: (id) => `/movies/details?id=${id}`,
    getTvShowsDetails: (id) => `/tv/details?id=${id}`,

    //user
    user: "/user",
    addToWishlist: "/user/wishlist",
    getWishlist: "/user/wishlist",


    //payment
    payment: "/payment/order",
    updatePremium: "/payment/update-premium-access",

    // streaming urls
    fetchAllStreamingVideos: `/premium/video`,
    fetchStreamingVideo: (name) => `/premium/video/steam?name=${name}`,
    fetchVideoThumbnail: (name) => `/premium/video/thumbnail?name=${name}`,

    //search movies
    searchAllMovies:(name)=>`/movies/search/?movieName=${name}`
}

export const media = (path,exception) => `https://image.tmdb.org/t/p/original` + (path || exception);

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const api = axios.create({
    baseURL: API_BASE_URL,
    // credentials
    withCredentials: true,
});


export const getUrlDetails=(vid,mediaType)=>{
    return mediaType==="tv" ? "/tv/watch?id="+vid : "/movies/watch?id="+vid 
}


export const getStreamingVideoThumbnail = (name) =>
    API_BASE_URL + ENDPOINT.fetchVideoThumbnail(name);
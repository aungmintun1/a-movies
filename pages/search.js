import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import axios from "axios";
import { useStateContext } from "../components/Provider";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function search() {

    const [popData, setPopData] = useState([]);
	const [searchData, setSearchData] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const [text, setText] = useState("");

    useEffect(() => {
		const fetchPopData = async () => {
			try {
				let response = await axios.get(
				`https://api.themoviedb.org/3/discover/movie?primary_release_year=2024&api_key=1db7688f317e15dd2ee2933dae838634&language=en-US`,
				);
				setPopData(response.data.results.filter((item, i) => i < 8));
				setShowResults(false);
				console.log("popdata", response.data.results);
			} catch (error) {
				console.log(error);
			}
		};

		fetchPopData();
	}, []);

    const handleInput = async (e) => {
		try {
			setText(e.target.value);
			let searchData = await axios.get(
				`https://api.themoviedb.org/3/search/multi?query=${e.target.value}&api_key=1db7688f317e15dd2ee2933dae838634&language=en-US`,
			);
			setSearchData(
				searchData.data.results.filter(
					(item, i) => item.media_type === "tv" || item.media_type === "movie",
				),
			);
			setShowResults(true);
		} catch (error) {
			console.log(error);
		}
	};

  return (
    <>
    <div className="wrapper">
    <Header/>
  
        <div class="search-wrapper margin-search">
            <div class="container container--add">
                <form id='search-form' method='get' class="search">
                    <input type="text" class="search__field" placeholder="Search" onChange={handleInput} value={text}/>
                    <select name="sorting_item" id="search-sort" class="search__sort" tabindex="0">
                        <option value="1" selected='selected'>By title</option>
                        <option value="2">By year</option>
                        <option value="3">By producer</option>
                        <option value="4">By title</option>
                        <option value="5">By year</option>
                    </select>
                    <button type='submit' class="btn btn-md btn--danger search__button">search a movie</button>
                </form>
            </div>
        </div>
        
   
        <section class="container">
            <div class="col-sm-12">
                <h2 class="page-heading">Movies</h2>

                {showResults && searchData.length >= 1 ? (
					<SearchResults
						searchData={searchData}
					
					/>
				) : (
					<PopularResults
						popData={popData}
				
					/>
				)}

                <div class="coloum-wrapper">
                    <div class="pagination paginatioon--full">
                            <a href='#' class="pagination__prev">prev</a>
                            <a href='#' class="pagination__next">next</a>
                    </div>
                </div>

            </div>

        </section>
    <Footer/>
    </div>
    </>
  )
}


const PopularResults = (props) => {
	return props.popData.map((movie, index) => {
		return (
           <Link href="/seats" >
            <div class="movie movie--preview movie--full release">
            <div class="col-sm-3 col-md-2 col-lg-2">
                   <div class="movie__images">
                       <img alt='movie poster' src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}/>
                   </div>
             
           </div>

           <div class="col-sm-9 col-md-10 col-lg-10 movie__about">
                   <a href='movie-page-full.html' class="movie__title link--huge">{movie.title}</a>

                   <p class="movie__time">105 min</p>

                   <p class="movie__option"><strong>Country: </strong><a href="#">USA</a></p>
                   <p class="movie__option"><strong>Release date: </strong>{movie.release_date}</p>
                   <p class="movie__option"><strong>Votes: </strong>{movie.vote_count}</p>
                   <p class="movie__option"><strong>Vote Average: </strong>{movie.vote_average}</p>
                   <p class="movie__option"><strong>Overview: </strong>{movie.overview}</p>

                   <div class="movie__btns">
                       <a href="#" class="btn btn-md btn--warning">book a ticket <span class="hidden-sm">for this movie</span></a>
                    
                   </div>

                 
           </div>

       </div>
       </Link>
		);
	});
};

const SearchResults = (props) => {
	return props.searchData.map((movie, index) => {
		return (

            <Link href="/seats" >  
            <div class="movie movie--preview movie--full release">
            <div class="col-sm-3 col-md-2 col-lg-2">
                   <div class="movie__images">
                       <img alt='movie poster' src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}/>
                   </div>
             
           </div>

           <div class="col-sm-9 col-md-10 col-lg-10 movie__about">
                   <a href='movie-page-full.html' class="movie__title link--huge">{movie.title}</a>

                   <p class="movie__time">105 min</p>

                   <p class="movie__option"><strong>Country: </strong><a href="#">USA</a></p>
                   <p class="movie__option"><strong>Release date: </strong>{movie.release_date}</p>
                   <p class="movie__option"><strong>Votes: </strong>{movie.vote_count}</p>
                   <p class="movie__option"><strong>Vote Average: </strong>{movie.vote_average}</p>
                   <p class="movie__option"><strong>Overview: </strong>{movie.overview}</p>

                   <div class="movie__btns">
                       <a href="#" class="btn btn-md btn--warning">book a ticket <span class="hidden-sm">for this movie</span></a>
                       <a href="#" class="watchlist">Add to watchlist</a>
                   </div>

                 
           </div>

       </div>
       </Link>
		);
	});
};
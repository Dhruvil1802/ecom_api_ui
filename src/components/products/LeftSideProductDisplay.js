import { Slider, Typography } from '@mui/material';
import { useState } from 'react';
import './LeftSideProductDisplay.css';

function LeftSideDisplayProducts({priceRange, setPriceRange, setSortType, setFilterRating}){

    const [showSortBy, setShowSortBy] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    // const [openLeft, setOpenLeft] = useState(true);

    return(

        <div className="left_side">


                <div className="star-filter">
                    <h3 onClick={() => setShowFilter(!showFilter)} className="collapsible-heading">
                        <span>FILTER</span>
                        <span>{showFilter ? "▲" : "▼"}</span>
                    </h3>
                    {showFilter && (<div className="filter_options">
                    <div className="price_range">
                        <h4>PRICE RANGE</h4>
                            <Typography variant="h6"><strong>${priceRange[0]} - ${priceRange[1]}</strong></Typography>
                            <Slider
                            value={priceRange}
                            onChange={(e, newValue) => setPriceRange(newValue)}
                            valueLabelDisplay="auto"
                            min={0}
                            max={8000}
                            disableSwap
                            className="custom-slider" 
                        />            
                    </div>

                    <h4>RATING</h4>

                    <label className="star-option">
                        <input type="checkbox" />
                        <span className="stars" onClick={()=>{setFilterRating(5)}}>★★★★★</span>
                    </label>
                    <label className="star-option">
                        <input type="checkbox" />
                        <span className="stars" onClick={()=>{setFilterRating(4)}}>★★★★</span>
                    </label>
                    <label className="star-option">
                        <input type="checkbox" />
                        <span className="stars" onClick={()=>{setFilterRating(3)}}>★★★</span>
                    </label>
                    <label className="star-option">
                        <input type="checkbox" />
                        <span className="stars" onClick={()=>{setFilterRating(2)}}>★★</span>
                    </label>
                    <label className="star-option">
                        <input type="checkbox" />
                        <span className="stars" onClick={()=>{setFilterRating(1)}}>★</span>
                    </label>
                    </div>)}
                </div>

                <div className="sorting">
                    <h3 onClick={() => setShowSortBy(!showSortBy)} className="collapsible-heading">
                        <span>SORT BY</span>
                        <span>{showSortBy ? "▲" : "▼"}</span>
                    </h3>
                    {showSortBy && (
                    <div className="sorting_options">
                        <label>
                                <input
                                    type="radio"
                                    value="Top rated"
                                    name="sorting"
                                    onClick={()=>setSortType("top_rated")}
                                />
                                Top rated
                        </label>
                        <label>
                                <input
                                    type="radio"
                                    value="price desc"
                                    name="sorting"
                                    onClick={()=>setSortType("price_desc")}

                                />
                                Price (max - min)
                        </label>
                        <label>
                                <input
                                    type="radio"
                                    value="price asc"
                                    name="sorting"
                                    onClick={()=>setSortType("price_asc")}

                                />
                                Price (min - max)
                        </label>
                        <label>
                                <input
                                    type="radio"
                                    value="Popularity"
                                    name="sorting"
                                    onClick={()=>setSortType("popularity")}

                                />
                                Popularity
                        </label>
                        <label>
                                <input
                                    type="radio"
                                    value="Discount"
                                    name="sorting"
                                    onClick={()=>setSortType("discount")}

                                />
                                Discount
                        </label>
                    </div>
                    )}
                </div>

                <div className="sorting">
                <h3 onClick={() => setShowCategories(!showCategories)} className="collapsible-heading">
                    <span>CATEGORIES</span>
                    <span>{showCategories ? "▲" : "▼"}</span>
                </h3>
                {showCategories && (
                        <div className="sorting_options">
                        <label>
                                <input
                                    type="radio"
                                    value="Male"
                                    name="Category"
                                    onClick={()=>setSortType("top_rated")}
                                />
                                Male
                        </label>
                        <label>
                                <input
                                    type="radio"
                                    value="Female"
                                    name="Category"
                                    onClick={()=>setSortType("price_desc")}

                                />
                                Female
                        </label>
                        <label>
                                <input
                                    type="radio"
                                    value="Kids"
                                    name="Category"
                                    onClick={()=>setSortType("price_asc")}

                                />
                                Kids
                        </label>
                    </div>
                )}
                </div>

                

            </div>
    )
}

export default LeftSideDisplayProducts;
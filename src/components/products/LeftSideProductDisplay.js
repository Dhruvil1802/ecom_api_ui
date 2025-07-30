import { Slider, Typography } from '@mui/material';
import './LeftSideProductDisplay.css';

function LeftSideDisplayProducts({priceRange, setPriceRange, setSortType, setFilterRating}){
    return(
        <div className="left_side">

                <div className="price_range">
                    <Typography variant="h5"><strong>Price</strong></Typography>
                        <Typography variant="h5"><strong>${priceRange[0]} - ${priceRange[1]}</strong></Typography>
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

                <div className="sorting">
                    <h1><b>SORT BY</b></h1>
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
                </div>

                <div className="star-filter">
                    <h1><b>FILTER</b></h1>
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
                    </div>

            </div>
    )
}

export default LeftSideDisplayProducts;
import { Slider, Typography } from '@mui/material';
import './LeftSideProductDisplay.css';

function LeftSideDisplayProducts({priceRange,setPriceRange}){
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
                                />
                                Top rated
                        </label>
                        <label>
                                <input
                                    type="radio"
                                    value="price (max - min)"
                                    name="sorting"
                                />
                                Price (max - min)
                        </label>
                        <label>
                                <input
                                    type="radio"
                                    value="price (min - max)"
                                    name="sorting"
                                />
                                Price (min - max)
                        </label>
                        <label>
                                <input
                                    type="radio"
                                    value="Popularity"
                                    name="sorting"
                                />
                                Popularity
                        </label>
                        <label>
                                <input
                                    type="radio"
                                    value="Discount"
                                    name="sorting"
                                />
                                Discount
                        </label>
                    </div>
                </div>

                <div className="star-filter">
                    <h1><b>FILTER</b></h1>
                    <label className="star-option">
                        <input type="checkbox" />
                        <span className="stars">★★★★★</span>
                    </label>
                    <label className="star-option">
                        <input type="checkbox" />
                        <span className="stars">★★★★</span>
                    </label>
                    <label className="star-option">
                        <input type="checkbox" />
                        <span className="stars">★★★</span>
                    </label>
                    <label className="star-option">
                        <input type="checkbox" />
                        <span className="stars">★★</span>
                    </label>
                    <label className="star-option">
                        <input type="checkbox" />
                        <span className="stars">★</span>
                    </label>
                    </div>

            </div>
    )
}

export default LeftSideDisplayProducts;
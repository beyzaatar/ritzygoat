import React from "react";
import { getColorsAsync } from "../../redux/filters/filtersSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Color() {
  const colors = useSelector((state) => state.filters.colors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getColorsAsync());
  }, [dispatch]);
  return (
    <div class="container">
      <div class="row g-3">
        {colors.map((color) => (
          <div class="col-4" key={color.id}>
            <div class="p-3 ">
              <div className=" form-check  mt-2 mb-2" >
                <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                <label className="h6 form-check-label d-flex align-items-center d-flex position-relative" for="flexCheckDefault">
                  {color.colorName}
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Color;

import React from "react";
import { getGendersAsync } from "../../redux/filters/filtersSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Gender() {
  const genders = useSelector((state) => state.filters.genders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGendersAsync());
  }, [dispatch]);

  return (
    <div class="container">
    <div class="row g-3">
      {genders.map((gender) => (
        <div class="col-4">
          <div class="p-3 ">
            <div className=" form-check  mt-2 mb-2" key={gender.id}>
              <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
              <label className="h6 form-check-label d-flex align-items-center d-flex position-relative" for="flexCheckDefault">
                {gender.genderName}
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Gender;

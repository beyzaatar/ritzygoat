import React, { useState } from "react";
import { changeCurrentSize, getSizesAsync } from "../../redux/filters/filtersSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { current } from "@reduxjs/toolkit";


//let selectedSizeId = [];
//let currentSizes = []
let activeFilter=[]
function Size() {
  const dispatch = useDispatch();
  const sizes = useSelector((state) => state.filters.sizes);

  //currentSizes = sizes
  //const [currentSizes, setCurrentSizes] = useState([]);


  // const currentSize= useSelector(
  //   (state) => state.filters.currentSize
  // );
  useEffect(() => {
    dispatch(getSizesAsync());
  }, [dispatch]);

  // const handleCheckboxChange = (e) => {

  //   selectedSizeId.push(Number(e.target.value))
  //   currentSizes = currentSizes.filter(item => item.id !== Number(e.target.value));

  //   console.log(currentSizes)
  // };
  


  const onFilterChange=(filter)=> {
    const { filterList, activeFilter } = {sizes,activeFilter};
    if (filter === "ALL") {
      if (activeFilter.length === filterList.length) {
        this.setState({ activeFilter: [] });
      } else {
        this.setState({ activeFilter: filterList.map(filter => filter.value) });
      }
    } else {
      if (activeFilter.includes(filter)) {
        const filterIndex = activeFilter.indexOf(filter);
        const newFilter = [...activeFilter];
        newFilter.splice(filterIndex, 1);
        this.setState({ activeFilter: newFilter });
      } else {
        this.setState({ activeFilter: [...activeFilter, filter] });
      }
    }
  }





    return (
      <div class="container">
        <div class="row g-3">
          {sizes.map((size) => (
            <div key={size.id} class="col-4">
              <div class="p-3 ">
                <div className=" form-check  mt-2 mb-2" >
                  <input className="form-check-input" value={size.id} type="checkbox" />
                  <label className="h6 form-check-label d-flex align-items-center d-flex position-relative">
                    {size.sizeName}
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    )
  }

  // <div>
  //   <div className="dropdown">
  //     <button
  //       className="btn btn-link dropdown-toggle text-black text-decoration-none"
  //       type="button"
  //       id="dropdownMenu2"
  //       data-bs-toggle="dropdown"
  //       aria-expanded="false"
  //     >
  //       Size
  //     </button>
  //     <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
  //       {sizes.map((size) => (
  //         <li className="dropdown-item" key={size.id}>
  //           <input
  //             className="form-check-input me-1"
  //             type="checkbox"
  //             value=""
  //             aria-label="..."
  //           />
  //           {size.sizeName}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // </div>

  export default Size;

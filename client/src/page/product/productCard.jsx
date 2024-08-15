import React from 'react'

export const productCard = () => {
  return (
    <div>    <div>
    <div className="text-center">



   <div className="dropdown text-center mb-8">
        <div
          tabIndex={0}
          role="button"
          className="p-4 text-xl font-bold m-1  text-white rounded-md bg-gradient-to-r from-cyan-200 to-cyan-400 text-gray-900 text-center "
        >
   DESENDING AVEREST COST
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
          
            <a href="" className="text-gray-400" value="1" >
              ASENDING
            </a>
          </li>
    
        </ul>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 justify-items-center  ">
      {item?.map((sp) => (
        <div className="max-w-xs rounded-md shadow-md bg-gradient-to-r from-sky-400 to-cyan-600 text-white p-5 mx-auto md:mx-auto lg:mx-0 w-[340px]">
          <img
            src={sp.photo}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-56 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8 ">
            <div className="space-y-2">
              <p className="text-white">
                {" "}
                Tourist_Spots:
                <span className="text-gray-600">{sp.ToureistName}</span>
              </p>
              <p className="text-white">
                {" "}
                Average_Cost:
                <span className="text-yellow-400 text-xl bold">{sp.average_cost}</span>
              </p>

              <h2>
                Total visitor:{" "}
                <span className="text-gray-600">
                  {sp.totaVisitorsPerYear}
                </span>
              </h2>

              <p>
                TravelTime:
                <span className="text-gray-600">{sp.travel_time}</span>
              </p>

              <p>
                Seastionality:
                <span className="text-gray-600">{sp.seasonality}</span>
              </p>
            </div>
            <Link to={`/viewDetail/${sp._id}`}>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  text-white rounded-md bg-gradient-to-r from-cyan-200 to-cyan-400 text-gray-900"
              >
                VIEW DETAILS
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div></div>
  )
}

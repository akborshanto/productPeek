import "./banner.css";
import { Button } from "./../shared/Button";
import useAxiosPublic from "../../hook/AxiosInstance";
const Banner = () => {
  const axiosSecure = useAxiosPublic();

  const pullItem = async () => {
    const item = 'item-to-remove';
    try {
      await axios.post('http://localhost:3001/pull-item', { userId, item });
      alert('Item pulled successfully');
    } catch (error) {
      alert('Error pulling item');
    }
  };
  const popItem = async () => {
    try {
    } catch (error) {
      const response = await axiosSecure.post("/pop-item");
      
    }
  };

  return (
    <div className="max-w-7xl m-auto mt-3 md:px-10 px-5 ">
{/*       <button onClick={pullItem}>Pull Item</button>
      <button onClick={popItem}>Pop Item</button>
 */}
      <div className="w-full bg-[#FEEAE9] rounded-lg">
        <div className="w-full grid md:grid-cols-3 grid-cols-1 md:p-10 p-5 ">
          <div className="md:col-span-2 ">
            <div className="flex flex-col space-y-4 ">
              <h1 className="md:text-5xl text-3xl font-bold ">
                Mi LED TV 4A PRO 32
              </h1>
              <p className="text-gray-600 text-sm md:text-base md:w-4/5 w-full">
                xiaomi TV offers high-end audio features to deliver a stunning
                experience. With support for Dolby AudioTM and DTS-HD , powered
                by 2 x 10W stereo speakers
              </p>
              <h2 className="md:text-3xl text-2xl text-[#FF2279]">$12334</h2>

              <div>
                <Button btnText={"BUY NOW"} path={"/"} />
              </div>
            </div>
          </div>
          <div className="md:col-span-1 flex items-center justify-center">
            <div>
              <img
                src="https://i.ibb.co/FYWMs44/Image-6-1.jpg"
                className="object-cover "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import {React, useState} from 'react'
import main from "../assets/Images/main.png";
import joy from "../assets/Images/herotext.png";

const DonationForm = () => {
    const [selectedAmount, setSelectedAmount] = useState("₹800");
  const [donationType, setDonationType] = useState("Give Monthly");
  const [customAmount, setCustomAmount] = useState("");
  const amounts = ["₹800", "₹1000", "₹1500", "OTHER"];

  return (
    <div className="flex flex-col md:flex-row pt-12">
    <div className="md:w-1/2 w-full">
      <img
        src={joy}
        alt="Hero Text"
        className="md:w-[60%] w-3/4 mx-auto md:mx-0 md:relative md:left-36 md:top-14"
      />
      <div className="border-2 border-[#feba14] rounded-bl-[50px] rounded-tr-[50px] w-11/12 md:w-fit px-4 py-4 md:px-2 md:py-4 mx-auto md:mx-0 mt-8 md:relative md:left-10 md:top-16">
        <form className="w-full">
          <ul className="flex gap-2 md:gap-7 justify-around md:justify-center">
            {["Give Monthly", "Give Once"].map((type) => (
              <li
                key={type}
                onClick={() => setDonationType(type)}
                className={`text-md font-bold md:text-xl shadow-xl px-10 md:px-20 py-2 md:py-4 cursor-pointer ${
                  donationType === type
                    ? "bg-[#feba14] text-white text-bold"
                    : "text-yellow-400"
                }`}
              >
                {type}
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap p-2 md:p-5 gap-2 md:gap-5 justify-start md:justify-start">
            {amounts.map((amount) => (
              <li key={amount}>
                <button
                  type="button"
                  onClick={() => setSelectedAmount(amount)}
                  className={`border border-yellow-500 px-4 py-2 md:px-12 md:py-3 ${
                    selectedAmount === amount
                      ? "bg-[#feba14] text-white font-bold"
                      : "font-bold"
                  }`}
                >
                  {amount}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center text-sm md:text-xl font-bold">
            {selectedAmount === "OTHER" ? (
              <div className="flex items-center gap-2">
                <span>₹</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="border border-yellow-400 px-2 py-1"
                  onChange={(e) => setCustomAmount(e.target.value)}
                  value={customAmount}
                />
              </div>
            ) : (
              <span>
                {donationType === "Give Once"
                  ? selectedAmount
                  : `${selectedAmount} Per MONTH`}
              </span>
            )}
          </div>
          <div className="border border-yellow-400 p-3 mt-5">
            <span className="block text-center mb-3 text-sm md:text-xl ">
              Mode of Donation
            </span>
            <div className="flex justify-around gap-5 md:gap-10">
              {["Bank Account", "UPI"].map((mode) => (
                <label key={mode} className="flex items-center gap-2">
                  <input type="radio" name="mode" value={mode} />
                  {mode}
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center w-full mt-4">
            <button className="bg-[#feba14] text-xl text-white px-40 md:px-60 py-2 rounded-md">
              NEXT
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className="md:w-1/2 w-full flex justify-center items-center mt-10 md:mt-0">
      <img src={main} alt="Main Image" className="w-[80%]" />
    </div>
  </div>

  )
}

export default DonationForm
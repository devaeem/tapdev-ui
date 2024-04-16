import React from "react";
import Button from "@mui/material/Button";
import "animate.css";
export default function Test() {
  const menuNav = [
    {
      text: "HOME",
      link: "home",
    },
    {
      text: "ABOUT",
      link: "about",
    },
    {
      text: "SERVICES",
      link: "services",
    },
    {
      text: "CONTACT",
      link: "contact",
    },
  ];
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#home" className="text-white text-2xl font-semibold">
            TapDevUI
          </a>
          <ul className="flex  space-x-4   invisible  md:visible">
            {menuNav.map((item, idx) => (
              <>
                <li key={idx}>
                  <a href={`#${item.text}`} className="text-white">
                    {item.text}
                  </a>
                </li>
              </>
            ))}
          </ul>
        </div>
      </nav>

      <section className=" bg-gray-900 text-white py-16 ">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold uppercase animate__bounceInUp">
            wellcome to tapdev
          </h1>
          <h1 className="text-5xl font-extrabold uppercase animate__bounceInUp">
            wellcome tov wdwdw tapdev
          </h1>
          <p className="text-lg mt-4"> Lorem ipsum dolor sit amet.</p>
          <Button className="mt-5" variant="contained">
            Login
          </Button>
        </div>
      </section>
      {/* <div className="bg-blue-600 p-4 container mx-auto">
        <div className="flex flex-col  justify-center items-center  ">
          <div>
            <div className="flex justify-center items-center   p-5">
              This is flexbox
            </div>
            <div className="flex gap-2 flex-row  p-5 bg-slate-700">
              <div className="bg-slate-50 p-5 w-[1rem] hover:w-full">1</div>
              <div className="bg-slate-50 p-5 grow">2</div>
              <div className="bg-slate-50 p-5 ">3</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 p-4">
          <div className="p-5 bg-slate-500">01</div>
          <div className="p-5 bg-slate-500">02</div>
          <div className="p-5 bg-slate-500">03</div>
          <div className="p-5 bg-slate-500">04</div>
          <div className="p-5 bg-slate-500">05</div>
          <div className="p-5 bg-slate-500">06</div>
        </div>
      </div> */}
    </>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Logo from "../public/revisly.png";
import Image from "next/image";
import users from "../public/Group 1.png";
import second from "../public/info.png"
import side from "../public/side2.png"

export default function Home() {
  const navigation = useRouter();

  return (
    <div className="px-15 py-4 bg-gray-50 h-[100%]">
      <div className="bg-gradient-to-r to-pink-50 from-gray-50  ">
        <header>
          <div className="flex items-center justify-between gap-2 rounded-full bg-white px-4 py-2 shadow-blue-200 shadow">
            <div className="flex items-center gap-2">
              <Image src={Logo} width={25} height={10} alt="logo"></Image>
              <p className="text-[1rem] font-semibold text-neutral-900">
                Revisly
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Button className="bg-white text-primary hover:cursor-pointer hover:bg-white">
                Login
              </Button>
              <Button className="hover:cursor-pointer ">Join</Button>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-2 mt-20 h-[100vh]   ">
          <div>
            <div>
              <p className="text-[3.5rem]  font-medium">
                Revise scientifically.
              </p>
              <p className="text-[3.5rem] -mt-2 font-medium">
                Remember longer{" "}
              </p>

              <p className="text-[3.5rem] -mt-2 font-medium">Master Time</p>
            </div>
            <div className="mt-5 w-[80%]">
              Automatic reminders are sent to your registered email and phone
              based on the date and time you set.
            </div>
            <div className="mt-12 flex items-center">
              <Button className=" bg-accent-foreground hover:cursor-pointer">
                Get started
              </Button>
              <Button className="ml-3 bg-gray-50 flex items-center text-primary hover:cursor-pointer  hover:bg-white hover:shadow">
                <img
                  width="20"
                  height="48"
                  src="https://img.icons8.com/fluency/48/google-play.png"
                  alt="google-play"
                />
                Download app
              </Button>
            </div>
            <div className="mt-18">
              <div className="flex items-start gap-4">
                <Image
                  src={users}
                  height={200}
                  quality={34}
                  width={120}
                  alt="user"
                  className="mt-3"
                />
                <div className="felx">
                  <p className="text-[2rem] font-light">Trusted by users</p>
                  <p className="text-sm w-[80%] ml-2 text-[0.9rem] font-normal  text-muted">
                    Revisly transforms how you study. Backed by science and
                    powered by an intelligent spaced repetition system.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-end text-end h-[100%] w-[100%]">
            <div className="bg-[url(../public/side2.png)] w-[80%]  h-[100%]  rounded-2xl bg-center bg-cover bg-no-repeat"></div>
            {/* <Image src={side} height={400} width={400} alt="secind"/> */}
          </div>
        </div>
      </div>

      <div className="mt-25">
        <div className="flex justify-center items-center flex-col">
          <p className="text-[2.2rem] font-normal">Revise, Review, Done</p>

          <div className="mt-7 bg-gray-200 rounded-xl p-4 w-[100%]">
            <div className="grid grid-cols-[70%_30%] gap-2">
              <div className="bg-white p-10 rounded-2xl shadow ">
                <div>
                  <p className="text-center text-[1.6rem] font-medium">
                    With Revisly, every test you take is scored and analyzed {" "}
                  </p>
                  <p className="text-center text-[1.6rem] font-medium">
                    to guide your future improvements
                  </p>
                </div>
                <div className="flex justify-center mt-13 h-100 w-full relative">
                  <div className="absolute bottom-10  right-30 rounded-full bg-indigo-600/20">
                  <Image width="55" height="64" src="https://img.icons8.com/external-becris-lineal-color-becris/64/external-maths-data-science-becris-lineal-color-becris.png" alt="external-maths-data-science-becris-lineal-color-becris"/>

                  </div>
                  <div className="absolute bottom-10 p-3 left-30 rounded-full bg-lime-600/20">
                  <img width="40" height="64" src="https://img.icons8.com/external-becris-lineal-color-becris/64/external-science-literary-genres-becris-lineal-color-becris.png" alt="external-science-literary-genres-becris-lineal-color-becris"/>

                  </div>
                  <div className="absolute bg-purple-600/50 top-10 right-40 rounded-full p-3">
                  <Image width="40" height="64" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/external-economics-university-courses-wanicon-lineal-color-wanicon.png" alt="external-economics-university-courses-wanicon-lineal-color-wanicon"/>

                  </div>
                  <div className="absolute top-10 left-40 p-3 rounded-full bg-accent/50">
                 <Image width="40" height="64" src="https://img.icons8.com/external-becris-lineal-color-becris/64/external-history-literary-genres-becris-lineal-color-becris.png" alt="external-history-literary-genres-becris-lineal-color-becris"/>

                  </div>
                  <Image src={second} height={100} width={280} alt="secon"/>
                
                </div>

              </div>

              <div className="bg-white p-10 rounded-2xl shadow ">
                fsdf
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

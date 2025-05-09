import React from 'react';
import { PinContainer } from '@/components/ui/3d-pin';
import { Card } from "@/components/ui/card";
import Logo from "@/assets/Component 1.svg";

const AddressCard: React.FC = () => {
    return (
        <div className="bg-[#F4A4C3] flex flex-col items-center justify-center lg:p-18">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white text-center mb-8 font-Ulm-Grotesk">
                Address and Opening Hours
            </h1>
            <Card className="bg-[#00966C] w-[95%] lg:w-[90%] h-[500px] text-white flex flex-col-reverse md:flex-row border-none rounded-4xl p-6 md:p-10 gap-6">
                {/* Left Section */}
                <div className="flex flex-col justify-between gap-6 w-full md:w-1/2">
                    <div>
                        <p className="text-xl sm:text-2xl font-extrabold">301, Dubai Street,</p>
                        <p className="text-xl sm:text-2xl font-extrabold">Connor Lane</p>
                        <p className="mt-2 text-base sm:text-lg font-normal">Open everyday</p>
                        <p className="text-base sm:text-lg font-normal">Monday to Sunday 9am - 5pm</p>
                    </div>
                    <div className="w-20 sm:w-24 mt-auto">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
                {/* Right Section with Pin */}
                <div className="rounded-4xl flex items-center justify-center -mt-8 ml-30">
                    <PinContainer
                        title="/Emiratea"
                        href="#"
                    >
                        <div className="flex basis-full flex-col p-4  rounded-4xl tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] md:w-[26rem] md:h-[26rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base  text-black">
                                Emiratea
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500 ">
                                    Emiratea
                                    Cafe
                                    with luv - from hyd
                                </span>
                            </div>
                            <div className="flex flex-1 w-full rounded-4xl mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                        </div>
                    </PinContainer>
                </div>
            </Card>
        </div>
    );
};

export default AddressCard;

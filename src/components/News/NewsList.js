/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import lg_video from "@/public/assets/images/lg-video2.png";
import NewsCard from "./NewsCard";
import { Constants } from "../../utils/constant";
import logo192 from "../../assets/images/logo192.png";

const NewsList = () => {
    return (
        <div className="bg-dark-clr sm:py-[46px] py-[20px]">
            <div className="container">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
                    {Constants.newsCardData.map((item, index) => {
                        return (
                            <NewsCard
                                key={index}
                                name={item.name}
                                image={logo192}
                                desc={item.desc}
                                time={item.time} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default NewsList;
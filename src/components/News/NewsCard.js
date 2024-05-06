import React from "react";
import { Link } from "react-router-dom";
import { Constants } from "../../utils/constant";

const NewsCard = ({ image, name, desc, time }) => {
    return (
        <div className="product-one mb-4 product-update card-p border-0 news-card">
            <div className="product-img relative">
                <image src={image} alt="stars-small" className="img-video" />
            </div>
            <div className="product-content">
                <h2 className="clamp-2">
                    {Constants.meet} '{name}' {desc}
                </h2>
                <h6 className="mt-1">{time}</h6>
                <Link href="#" className="conflict-resolve mt-3 btn-read">
                    {Constants.readMore}
                </Link>
            </div>
        </div>
    )
};

export default NewsCard;
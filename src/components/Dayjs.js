import React from "react";
import dayjs from "dayjs";

const Dayjs = () => {
    const dob = dayjs('2000-12-06').format('DD MMMM YYYY :hh:mm:ss Z A Do');
    console.log(dob);

    return (
        <div>
            <p> Date and Time Management with Dayjs</p>
        </div>
    )
}

export default Dayjs;
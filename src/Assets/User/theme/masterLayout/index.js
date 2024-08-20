import React, { memo } from "react";
import Header from "../header";
import Footer from "../footer";
import { useMediaQuery } from 'react-responsive';

const MasterLayout = ({ children, headerContent, ...props }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 990px)' }); // Check if the screen width is <= 990px

    return (
        <div {...props}>
            {!isMobile && <Header content={headerContent} />} {/* Only render Header in desktop view */}
            {children}
            <Footer />
        </div>
    );
};

export default memo(MasterLayout);



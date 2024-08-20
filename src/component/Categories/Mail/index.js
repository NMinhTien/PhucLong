import { memo, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from 'react-responsive';
import Header from '../../../Assets/User/theme/header';

const Mail = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const isMobile = useMediaQuery({ query: '(max-width: 990px)' }); // Check if the screen width is <= 990px

    return (
        <div className='mail'>
            {isMobile && <Header />} {/* Only render Header in mobile view */}

            <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    style={{ borderBottom: '1px solid #e0e0e0' }}
                >
                    <Tab label="TIN TỨC" />
                    <Tab label="ĐƠN HÀNG" />
                </Tabs>
                <div style={{ padding: '20px', overflowY: 'auto', height: 'calc(100vh - 200px)' }}>
                    {selectedTab === 0 && (
                        <Typography>
                            {/* Content for "TIN TỨC" tab */}
                        </Typography>
                    )}
                    {selectedTab === 1 && (
                        <Typography>
                            {/* Content for "ĐƠN HÀNG" tab */}
                        </Typography>
                    )}
                </div>
            </div>
        </div>
    );
};

export default memo(Mail);

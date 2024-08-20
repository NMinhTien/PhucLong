import { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import thanhtoan from "./img/thanhtoan.jpg";
import trungthu from "./img/trungthu.jpg";
import thucuong from "./img/icon/coffee-cup2x_b8990365-a372-4e3c-bd7d-5c7728588f72_cb6a7389-161d-4f0e-a447-24eb31b7ad11-og.png";
import cafe from "./img/icon/coffee-bean2x_9819b7f6-86e2-46a7-aec3-4ffdbb64db34_f3d86579-c37d-4094-8d95-3bd8fe24ca4a-og.png";
import tea from "./img/icon/tra.png";
import bakery from "./img/icon/pie.png";
import lunar from "./img/icon/trungthu.png";
import present from "./img/icon/qua.png";
import { BsCartPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { ItemData } from "../../../ItemData"; // Make sure this path is correct
import { FormControl, InputLabel, MenuItem, Select, Grid } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import delivery from "./delivery.png";
import Header from "../theme/header";
import { useMediaQuery } from 'react-responsive';
import { IoSearch } from "react-icons/io5";

// Moved LocationSelector outside HomePage to ensure it is properly used
const LocationSelector = () => {
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");

    const handleCityChange = (event) => {
        setCity(event.target.value);
        setDistrict("");
        setWard("");
    };

    const handleDistrictChange = (event) => {
        setDistrict(event.target.value);
        setWard("");
    };

    const handleWardChange = (event) => {
        setWard(event.target.value);
    };
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <InputLabel>Tỉnh thành</InputLabel>
                    <Select value={city} onChange={handleCityChange}>
                        <MenuItem value={"city1"}>City 1</MenuItem>
                        <MenuItem value={"city2"}>City 2</MenuItem>
                        <MenuItem value={"city3"}>City 3</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={4}>
                <FormControl fullWidth disabled={!city}>
                    <InputLabel>Quận huyện</InputLabel>
                    <Select value={district} onChange={handleDistrictChange}>
                        <MenuItem value={"district1"}>District 1</MenuItem>
                        <MenuItem value={"district2"}>District 2</MenuItem>
                        <MenuItem value={"district3"}>District 3</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={4}>
                <FormControl fullWidth disabled={!district}>
                    <InputLabel>Phường xã</InputLabel>
                    <Select value={ward} onChange={handleWardChange}>
                        <MenuItem value={"ward1"}>Ward 1</MenuItem>
                        <MenuItem value={"ward2"}>Ward 2</MenuItem>
                        <MenuItem value={"ward3"}>Ward 3</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

const HomePage = () => {
    const images = [thanhtoan, trungthu];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const isMobile = useMediaQuery({ query: '(max-width: 990px)' }); // Check if the screen width is <= 990px

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("GIAO HÀNG");

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
    return (
        <>
        
            <div className="main-wrapper">
                <div className="wrapper-section">
                    <img src={images[currentImageIndex]} alt="slider" style={{ width: "100%", height: "auto" }} />
                </div>
                {isMobile && <Header/>} {/* Only render Header in mobile view */}
                <main className="main-content">
                    <div className="main-page">
                    <div className="iAHbbJ">
                        <div className="jss5">
                            <div className="btn-menu1" onClick={handleOpen}>
                                <div className="delivery-menu__box1">
                                    <span
                                        style={{
                                            boxSizing: 'border-box',
                                            display: 'inline-block',
                                            overflow: 'hidden',
                                            width: 'initial',
                                            height: 'initial',
                                            background: 'none',
                                            opacity: 1,
                                            border: 0,
                                            margin: 0,
                                            padding: 0,
                                            position: 'relative',
                                            maxWidth: '100%',
                                        }}
                                    >
                                        <span
                                            style={{
                                                boxSizing: 'border-box',
                                                display: 'block',
                                                width: 'initial',
                                                height: 'initial',
                                                background: 'none',
                                                opacity: 1,
                                                border: 0,
                                                margin: 0,
                                                padding: 0,
                                                maxWidth: '100%',
                                            }}
                                        >
                                            <img
                                                alt=""
                                                aria-hidden="true"
                                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2736%27%20height=%2736%27/%3e"
                                                style={{
                                                    display: 'block',
                                                    maxWidth: '100%',
                                                    width: 'initial',
                                                    height: 'initial',
                                                    background: 'none',
                                                    opacity: 1,
                                                    border: 0,
                                                    margin: 0,
                                                    padding: 0,
                                                }}
                                            />
                                        </span>
                                        <img
                                            alt="delivery"
                                            src={delivery}
                                            decoding="async"
                                            style={{
                                                position: 'absolute',
                                                inset: '0px',
                                                boxSizing: 'border-box',
                                                padding: '0px',
                                                border: 'none',
                                                margin: 'auto',
                                                display: 'block',
                                                width: '0px',
                                                height: '0px',
                                                minWidth: '100%',
                                                maxWidth: '100%',
                                                minHeight: '100%',
                                                maxHeight: '100%',
                                            }}
                                        />
                                    </span>
                                </div>
                            <div className="delivery-menu__box2-1">
                            <div className="top1">Đến lấy</div>
                            <div className="bottom1" title="44 Nguyễn Đình Chiểu P. Phú Cường TP. Thủ Dầu Một T. Bình Dương">
                                44 Nguyễn Đình Chiểu P. Phú Cường TP. Thủ Dầu Một T. Bình Dương
                            </div>
                            </div>
                            {isModalOpen && (
                      <div className="modal-block">
                        <div className="overlay">
                        <div
                        className="form-block_1"
                        onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing the modal
                      >
                        <button
                          type="button"
                          className="button-close1"
                          onClick={handleClose}
                        >
                              <span className="button-close__icon">X</span>
                            </button>
                            <div className="form-content">
                              <div className="store-selectorstyle__Body-sc-1eekjls-1 dyrbkL">
                              <div className="form-header1">
                                <span
                                  className={`form-title ${
                                    activeTab === "GIAO HÀNG" ? "active-tab" : ""
                                  }`}
                                  onClick={() => handleTabChange("GIAO HÀNG")}
                                >
                                  GIAO HÀNG
                                </span>
                                <span
                                  className={`form-title ${
                                    activeTab === "ĐẾN LẤY" ? "active-tab" : ""
                                  }`}
                                  onClick={() => handleTabChange("ĐẾN LẤY")}
                                >
                                  ĐẾN LẤY
                                </span>
                              </div>
                              <div className="form-body">
                                {activeTab === "GIAO HÀNG" && (
                                  <div>
                                    <div className="store-selectorstyle__DeliveryChildContainer-sc-1eekjls-4 jCLJSj">
                                      <form className="search-boxstyle__StyledForm-sc-1qp53tw-0 fayiWD">
                                        <span className="iconSearch">
                                          <IoSearch className="icon"/>
                                        </span>
                                        <input
                                          autoComplete="off"
                                          name="search"
                                          placeholder="Vui lòng nhập địa chỉ"
                                          className="search-boxstyle__StyledInput-sc-1qp53tw-1 befxaR"
                                          value=""
                                          autoFocus
                                        />
                                      </form>
                                      <div
                                        data-overlayscrollbars-initialize=""
                                        data-overlayscrollbars="host"
                                        style={{ maxHeight: '400px', overflowY: 'auto' }}
                                      >
                                        <div className="os-size-observer">
                                          <div className="os-size-observer-listener ltr"></div>
                                        </div>
                                        <div
                                          data-overlayscrollbars-contents=""
                                          data-overlayscrollbars-viewport="scrollbarHidden"
                                          style={{
                                            marginRight: '0px',
                                            marginBottom: '0px',
                                            marginLeft: '0px',
                                            top: '0px',
                                            right: 'auto',
                                            left: '0px',
                                            width: 'calc(100% + 0px)',
                                            padding: '0px',
                                          }}
                                        ></div>
                                        <div className="os-scrollbar os-scrollbar-horizontal os-theme-dark os-scrollbar-auto-hide os-scrollbar-auto-hide-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                                          <div className="os-scrollbar-track">
                                            <div className="os-scrollbar-handle" style={{ width: '100%' }}></div>
                                          </div>
                                        </div>
                                        <div className="os-scrollbar os-scrollbar-vertical os-theme-dark os-scrollbar-auto-hide os-scrollbar-auto-hide-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                                          <div className="os-scrollbar-track">
                                            <div className="os-scrollbar-handle" style={{ height: '0%' }}></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="store-selectorstyle__DeliveryChildContainer-sc-1eekjls-4 jCLJSj">
                                      <div class="currentstyle__CurrentContainer-sc-bojxu8-0 ZcYQi">
                                        <div class="current-location">
                                          <div class="header"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MyLocationIcon"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>
                                            <h5>Vị trí hiện tại của quý khách</h5>
                                          </div>
                                          <div class="content">
                                            <div></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {activeTab === "ĐẾN LẤY" && (
                                  <div className="tab-content">
                                  <div className="store-selectorstyle__DeliveryChildContainer-sc-1eekjls-4 jCLJSj">
                                      <form className="search-boxstyle__StyledForm-sc-1qp53tw-0 fayiWD">
                                        <span className="iconSearch">
                                          <IoSearch className="icon"/>
                                        </span>
                                        <input
                                          autoComplete="off"
                                          name="search"
                                          placeholder="Vui lòng nhập địa điểm, tên cửa hàng"
                                          className="search-boxstyle__StyledInput-sc-1qp53tw-1 befxaR"
                                          value=""
                                          autoFocus
                                        />
                                      </form>
                                      <div
                                        data-overlayscrollbars-initialize=""
                                        data-overlayscrollbars="host"
                                        style={{ maxHeight: '400px', overflowY: 'auto' }}
                                      >
                                        <div className="os-size-observer">
                                          <div className="os-size-observer-listener ltr"></div>
                                        </div>
                                        <div
                                          data-overlayscrollbars-contents=""
                                          data-overlayscrollbars-viewport="scrollbarHidden"
                                          style={{
                                            marginRight: '0px',
                                            marginBottom: '0px',
                                            marginLeft: '0px',
                                            top: '0px',
                                            right: 'auto',
                                            left: '0px',
                                            width: 'calc(100% + 0px)',
                                            padding: '0px',
                                          }}
                                        ></div>
                                        <div className="os-scrollbar os-scrollbar-horizontal os-theme-dark os-scrollbar-auto-hide os-scrollbar-auto-hide-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                                          <div className="os-scrollbar-track">
                                            <div className="os-scrollbar-handle" style={{ width: '100%' }}></div>
                                          </div>
                                        </div>
                                        <div className="os-scrollbar os-scrollbar-vertical os-theme-dark os-scrollbar-auto-hide os-scrollbar-auto-hide-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                                          <div className="os-scrollbar-track">
                                            <div className="os-scrollbar-handle" style={{ height: '0%' }}></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <hr class="divider"></hr>
                                    <div className="store-list">
                                        <div class="header"><h5>Danh sách cửa hàng</h5></div>
                                        <div className="content-store1">
                                            <div className="overlay-scroll">
                                                <div class="os-size-observer"><div class="os-size-observer-listener ltr"></div></div>
                                                    <div className="store-block">
                                                    {/* 1 */}
                                                        <div className="store-navstyle__StoreWrapper-sc-18sakaf-0 iA-DMCe">
                                                            <div className="image">
                                                                <div
                                                                    className="image-box"
                                                                    style={{
                                                                        backgroundImage: `url('https://order.phuclong.com.vn/_next/static/images/phuclong-store-a0cba2f8c91fff15b6138d6d30982396.jpg')`,
                                                                        backgroundPosition: "center top",
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="store-info">
                                                                <div className="distance">Đang cập nhật</div>
                                                                <h5 className="title-store">BDG-CH AEON Binh Duong P.Bình Hòa</h5>
                                                                <div>
                                                                    <span className="underline">Địa chỉ: </span>AEON Bình Dương P. Bình Hòa TP. Thuận An T. Bình Dương
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Số điện thoại: </span>(028) 7100 1968 (Ext.20018)
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Giờ hoạt động: </span>08:00 - 21:30
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Trạng thái hoạt động: </span>Mở cửa
                                                                </div>
                                                                <div className="store-hotline">
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-hotline"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="CallIcon"
                                                                        >
                                                                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                                                                        </svg>
                                                                        <a href="tel:1900234518">
                                                                            <span>Gọi Hotline</span>
                                                                        </a>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-direction"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="DirectionsIcon"
                                                                        >
                                                                            <path d="m21.41 10.59-7.99-8c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l7.99-8c.79-.79.79-2.05 0-2.83zM13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11l-3.5 3.5z"></path>
                                                                        </svg>
                                                                        <a
                                                                            href="https://maps.google.com?saddr=undefined,undefined&amp;daddr=10.932335,106.70981"
                                                                            target="_blank"
                                                                            rel="noreferrer"
                                                                        >
                                                                            <span className="way">Chỉ đường</span>
                                                                        </a>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* 2 */}
                                                        <div className="store-navstyle__StoreWrapper-sc-18sakaf-0 iA-DMCe">
                                                            <div className="image">
                                                                <div
                                                                    className="image-box"
                                                                    style={{
                                                                        backgroundImage: `url('https://order.phuclong.com.vn/_next/static/images/phuclong-store-a0cba2f8c91fff15b6138d6d30982396.jpg')`,
                                                                        backgroundPosition: "center top",
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="store-info">
                                                                <div className="distance">Đang cập nhật</div>
                                                                <h5 className="title-store">BDG-CH AEON Binh Duong P.Bình Hòa</h5>
                                                                <div>
                                                                    <span className="underline">Địa chỉ: </span>AEON Bình Dương P. Bình Hòa TP. Thuận An T. Bình Dương
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Số điện thoại: </span>(028) 7100 1968 (Ext.20018)
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Giờ hoạt động: </span>08:00 - 21:30
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Trạng thái hoạt động: </span>Mở cửa
                                                                </div>
                                                                <div className="store-hotline">
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-hotline"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="CallIcon"
                                                                        >
                                                                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                                                                        </svg>
                                                                        <a href="tel:1900234518">
                                                                            <span>Gọi Hotline</span>
                                                                        </a>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-direction"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="DirectionsIcon"
                                                                        >
                                                                            <path d="m21.41 10.59-7.99-8c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l7.99-8c.79-.79.79-2.05 0-2.83zM13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11l-3.5 3.5z"></path>
                                                                        </svg>
                                                                        <a
                                                                            href="https://maps.google.com?saddr=undefined,undefined&amp;daddr=10.932335,106.70981"
                                                                            target="_blank"
                                                                            rel="noreferrer"
                                                                        >
                                                                            <span className="way">Chỉ đường</span>
                                                                        </a>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* 3 */}
                                                        <div className="store-navstyle__StoreWrapper-sc-18sakaf-0 iA-DMCe">
                                                            <div className="image">
                                                                <div
                                                                    className="image-box"
                                                                    style={{
                                                                        backgroundImage: `url('https://order.phuclong.com.vn/_next/static/images/phuclong-store-a0cba2f8c91fff15b6138d6d30982396.jpg')`,
                                                                        backgroundPosition: "center top",
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="store-info">
                                                                <div className="distance">Đang cập nhật</div>
                                                                <h5 className="title-store">BDG-CH AEON Binh Duong P.Bình Hòa</h5>
                                                                <div>
                                                                    <span className="underline">Địa chỉ: </span>AEON Bình Dương P. Bình Hòa TP. Thuận An T. Bình Dương
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Số điện thoại: </span>(028) 7100 1968 (Ext.20018)
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Giờ hoạt động: </span>08:00 - 21:30
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Trạng thái hoạt động: </span>Mở cửa
                                                                </div>
                                                                <div className="store-hotline">
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-hotline"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="CallIcon"
                                                                        >
                                                                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                                                                        </svg>
                                                                        <a href="tel:1900234518">
                                                                            <span>Gọi Hotline</span>
                                                                        </a>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-direction"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="DirectionsIcon"
                                                                        >
                                                                            <path d="m21.41 10.59-7.99-8c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l7.99-8c.79-.79.79-2.05 0-2.83zM13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11l-3.5 3.5z"></path>
                                                                        </svg>
                                                                        <a
                                                                            href="https://maps.google.com?saddr=undefined,undefined&amp;daddr=10.932335,106.70981"
                                                                            target="_blank"
                                                                            rel="noreferrer"
                                                                        >
                                                                            <span className="way">Chỉ đường</span>
                                                                        </a>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* 4 */}
                                                        <div className="store-navstyle__StoreWrapper-sc-18sakaf-0 iA-DMCe">
                                                            <div className="image">
                                                                <div
                                                                    className="image-box"
                                                                    style={{
                                                                        backgroundImage: `url('https://order.phuclong.com.vn/_next/static/images/phuclong-store-a0cba2f8c91fff15b6138d6d30982396.jpg')`,
                                                                        backgroundPosition: "center top",
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="store-info">
                                                                <div className="distance">Đang cập nhật</div>
                                                                <h5 className="title-store">BDG-CH AEON Binh Duong P.Bình Hòa</h5>
                                                                <div>
                                                                    <span className="underline">Địa chỉ: </span>AEON Bình Dương P. Bình Hòa TP. Thuận An T. Bình Dương
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Số điện thoại: </span>(028) 7100 1968 (Ext.20018)
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Giờ hoạt động: </span>08:00 - 21:30
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Trạng thái hoạt động: </span>Mở cửa
                                                                </div>
                                                                <div className="store-hotline">
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-hotline"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="CallIcon"
                                                                        >
                                                                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                                                                        </svg>
                                                                        <a href="tel:1900234518">
                                                                            <span>Gọi Hotline</span>
                                                                        </a>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-direction"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="DirectionsIcon"
                                                                        >
                                                                            <path d="m21.41 10.59-7.99-8c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l7.99-8c.79-.79.79-2.05 0-2.83zM13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11l-3.5 3.5z"></path>
                                                                        </svg>
                                                                        <a
                                                                            href="https://maps.google.com?saddr=undefined,undefined&amp;daddr=10.932335,106.70981"
                                                                            target="_blank"
                                                                            rel="noreferrer"
                                                                        >
                                                                            <span className="way">Chỉ đường</span>
                                                                        </a>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* 5 */}
                                                        <div className="store-navstyle__StoreWrapper-sc-18sakaf-0 iA-DMCe">
                                                            <div className="image">
                                                                <div
                                                                    className="image-box"
                                                                    style={{
                                                                        backgroundImage: `url('https://order.phuclong.com.vn/_next/static/images/phuclong-store-a0cba2f8c91fff15b6138d6d30982396.jpg')`,
                                                                        backgroundPosition: "center top",
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="store-info">
                                                                <div className="distance">Đang cập nhật</div>
                                                                <h5 className="title-store">BDG-CH AEON Binh Duong P.Bình Hòa</h5>
                                                                <div>
                                                                    <span className="underline">Địa chỉ: </span>AEON Bình Dương P. Bình Hòa TP. Thuận An T. Bình Dương
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Số điện thoại: </span>(028) 7100 1968 (Ext.20018)
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Giờ hoạt động: </span>08:00 - 21:30
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Trạng thái hoạt động: </span>Mở cửa
                                                                </div>
                                                                <div className="store-hotline">
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-hotline"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="CallIcon"
                                                                        >
                                                                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                                                                        </svg>
                                                                        <a href="tel:1900234518">
                                                                            <span>Gọi Hotline</span>
                                                                        </a>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-direction"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="DirectionsIcon"
                                                                        >
                                                                            <path d="m21.41 10.59-7.99-8c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l7.99-8c.79-.79.79-2.05 0-2.83zM13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11l-3.5 3.5z"></path>
                                                                        </svg>
                                                                        <a
                                                                            href="https://maps.google.com?saddr=undefined,undefined&amp;daddr=10.932335,106.70981"
                                                                            target="_blank"
                                                                            rel="noreferrer"
                                                                        >
                                                                            <span className="way">Chỉ đường</span>
                                                                        </a>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                        </div>
                    </div>
                  </div>
                    <div className="categories-container">
    {/* Repeatable Category Section */}
    {[
        { src: thucuong, alt: "Thức uống", title: "Thức uống", link: "Thức%20uống" },
        { src: cafe, alt: "Cà phê", title: "Cà phê", link: "Cà%20phê" },
        { src: tea, alt: "Trà", title: "trà", link:"Trà" },
        { src: bakery, alt: "Bakery", title: "bakery", link: "Bakery" },
        { src: lunar, alt: "Trung thu", title: "Trung thu", link: "Trung%20thu" },
        { src: present, alt: "Quà tặng", title: "Quà tặng", link: "Quà%20tặng" },
    ].map((item, index) => (
        <div className="home-item" key={index}>
            <div className="image">
                <Link to={`/drink/${item.link}`}>
                    <img src={item.src} alt={item.alt} />
                </Link>
            </div>
            <div className="name">
                <Link to={`/drink/${item.link}`} title={item.title}>
                    {item.title}
                </Link>
            </div>
        </div>
    ))}
</div>
                        <div className="product-container">
                            <div className="product-header">
                                <div className="title">Sản Phẩm Nổi Bật</div>
                                <div className="description">
                                    <div className="ql-editor">
                                        <p className="ql-align-center">
                                            <span>
                                                Trải qua hơn&nbsp;50 năm chắt chiu tinh hoa từ những búp trà xanh và hạt cà phê thượng hạng cùng mong
                                                muốn mang lại cho khách hàng những trải nghiệm giá trị nhất khi thưởng thức.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="product-mobile-carousel__HeaderSection-sc-145kxm0-1 ksSlpK">
                                <div class="title">Sản Phẩm Nổi Bật</div>
                                    <div class="view-more">
                                        <a href="/showmore"><span>Xem thêm</span></a>
                                        <IoIosArrowForward />
                                    </div>
                                </div>
                            <div className="product-component">
                                <div className="product-component__top">
                                    {ItemData.map((item) => (
                                        <ProductItem
                                            key={item.id}
                                            id={item.id}
                                            image={item.image}
                                            title={item.title}
                                            prices={item.prices}
                                            title1={item.title1}
                                        />
                                    ))}
                                </div>
                                <div className="product-component__bottom">
                                    <div className="view-more">
                                        <Link to="showmore">Xem thêm</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Location Selector Component Rendered Here */}
                        <div>
                            <div className="shop-dsc">
                                <h2 className="title">Danh sách cửa hàng</h2>
                                <div className="description">Danh sách cửa hàng Phúc Long</div>
                            </div>
                            <div className="shop-content">
                                <div className="shop-content__map">
                                    <div style={{ width: "100%", height: "100%" }}>
                                        <iframe
                                            src="https://maps.google.com/maps?hl=vi&amp;q=17,%20Ng%C3%B4%20quy%E1%BB%81n,%20Ho%C3%A0n%20Ki%E1%BA%BFm,%20H%C3%A0%20N%E1%BB%99i&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                            width="100%"
                                            height="841px"
                                            frameBorder="0"
                                            scrolling="no"
                                            marginHeight="0"
                                            marginWidth="0"
                                            title="Google Map"
                                        ></iframe>
                                    </div>
                                </div>
                                <div className="shop-content__block">
                                    <form className="search-boxstyle__StyledForm-sc-1qp53tw-0 fayiWD">
                                        <span className="iconSearch">
                                            <i className="icon vns-SEARCH">
                                                <CiSearch />
                                            </i>
                                        </span>
                                        <input
                                            autoComplete="off"
                                            name="search"
                                            type="text"
                                            placeholder="Tìm kiếm cửa hàng Phúc Long"
                                            className="search-boxstyle__StyledInput-sc-1qp53tw-1 befxaR"
                                        />
                                    </form>
                                    <div className="province-filter">
                                        <div className="header-filter">
                                            <h5>Tìm kiếm theo khu vực</h5>
                                        </div>
                                        <div className="content-filter">
                                            <div id="province-form">
                                                <form action="#" noValidate>
                                                    <div className="filter-block">
                                                        <div className="search-feild">
                                                            <LocationSelector />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="currentstyle__CurrentContainer-sc-bojxu8-0 ZcYQi">
                                        <div class="current-location">
                                            <div class="header">
                                                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MyLocationIcon"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>
                                                <h5>Vị trí hiện tại của quý khách</h5>
                                            </div>
                                        <div class="content">
                                            <div></div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="store-list">
                                        <div class="header"><h5>Danh sách cửa hàng</h5></div>
                                        <div className="content-store">
                                            <div className="overlay-scroll">
                                                <div class="os-size-observer"><div class="os-size-observer-listener ltr"></div></div>
                                                    <div className="store-block">
                                                    {/* 1 */}
                                                        <div className="store-navstyle__StoreWrapper-sc-18sakaf-0 iA-DMCe">
                                                            <div className="image">
                                                                <div
                                                                    className="image-box"
                                                                    style={{
                                                                        backgroundImage: `url('https://order.phuclong.com.vn/_next/static/images/phuclong-store-a0cba2f8c91fff15b6138d6d30982396.jpg')`,
                                                                        backgroundPosition: "center top",
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="store-info">
                                                                <div className="distance">Đang cập nhật</div>
                                                                <h5 className="title-store">BDG-CH AEON Binh Duong P.Bình Hòa</h5>
                                                                <div>
                                                                    <span className="underline">Địa chỉ: </span>AEON Bình Dương P. Bình Hòa TP. Thuận An T. Bình Dương
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Số điện thoại: </span>(028) 7100 1968 (Ext.20018)
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Giờ hoạt động: </span>08:00 - 21:30
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Trạng thái hoạt động: </span>Mở cửa
                                                                </div>
                                                                <div className="store-hotline">
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-hotline"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="CallIcon"
                                                                        >
                                                                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                                                                        </svg>
                                                                        <a href="tel:1900234518">
                                                                            <span>Gọi Hotline</span>
                                                                        </a>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-direction"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="DirectionsIcon"
                                                                        >
                                                                            <path d="m21.41 10.59-7.99-8c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l7.99-8c.79-.79.79-2.05 0-2.83zM13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11l-3.5 3.5z"></path>
                                                                        </svg>
                                                                        <a
                                                                            href="https://maps.google.com?saddr=undefined,undefined&amp;daddr=10.932335,106.70981"
                                                                            target="_blank"
                                                                            rel="noreferrer"
                                                                        >
                                                                            <span className="way">Chỉ đường</span>
                                                                        </a>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* 2 */}
                                                        <div className="store-navstyle__StoreWrapper-sc-18sakaf-0 iA-DMCe">
                                                            <div className="image">
                                                                <div
                                                                    className="image-box"
                                                                    style={{
                                                                        backgroundImage: `url('https://order.phuclong.com.vn/_next/static/images/phuclong-store-a0cba2f8c91fff15b6138d6d30982396.jpg')`,
                                                                        backgroundPosition: "center top",
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="store-info">
                                                                <div className="distance">Đang cập nhật</div>
                                                                <h5 className="title-store">BDG-CH AEON Binh Duong P.Bình Hòa</h5>
                                                                <div>
                                                                    <span className="underline">Địa chỉ: </span>AEON Bình Dương P. Bình Hòa TP. Thuận An T. Bình Dương
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Số điện thoại: </span>(028) 7100 1968 (Ext.20018)
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Giờ hoạt động: </span>08:00 - 21:30
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Trạng thái hoạt động: </span>Mở cửa
                                                                </div>
                                                                <div className="store-hotline">
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-hotline"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="CallIcon"
                                                                        >
                                                                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                                                                        </svg>
                                                                        <a href="tel:1900234518">
                                                                            <span>Gọi Hotline</span>
                                                                        </a>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-direction"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="DirectionsIcon"
                                                                        >
                                                                            <path d="m21.41 10.59-7.99-8c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l7.99-8c.79-.79.79-2.05 0-2.83zM13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11l-3.5 3.5z"></path>
                                                                        </svg>
                                                                        <a
                                                                            href="https://maps.google.com?saddr=undefined,undefined&amp;daddr=10.932335,106.70981"
                                                                            target="_blank"
                                                                            rel="noreferrer"
                                                                        >
                                                                            <span className="way">Chỉ đường</span>
                                                                        </a>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* 3 */}
                                                        <div className="store-navstyle__StoreWrapper-sc-18sakaf-0 iA-DMCe">
                                                            <div className="image">
                                                                <div
                                                                    className="image-box"
                                                                    style={{
                                                                        backgroundImage: `url('https://order.phuclong.com.vn/_next/static/images/phuclong-store-a0cba2f8c91fff15b6138d6d30982396.jpg')`,
                                                                        backgroundPosition: "center top",
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="store-info">
                                                                <div className="distance">Đang cập nhật</div>
                                                                <h5 className="title-store">BDG-CH AEON Binh Duong P.Bình Hòa</h5>
                                                                <div>
                                                                    <span className="underline">Địa chỉ: </span>AEON Bình Dương P. Bình Hòa TP. Thuận An T. Bình Dương
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Số điện thoại: </span>(028) 7100 1968 (Ext.20018)
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Giờ hoạt động: </span>08:00 - 21:30
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Trạng thái hoạt động: </span>Mở cửa
                                                                </div>
                                                                <div className="store-hotline">
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-hotline"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="CallIcon"
                                                                        >
                                                                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                                                                        </svg>
                                                                        <a href="tel:1900234518">
                                                                            <span>Gọi Hotline</span>
                                                                        </a>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-direction"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="DirectionsIcon"
                                                                        >
                                                                            <path d="m21.41 10.59-7.99-8c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l7.99-8c.79-.79.79-2.05 0-2.83zM13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11l-3.5 3.5z"></path>
                                                                        </svg>
                                                                        <a
                                                                            href="https://maps.google.com?saddr=undefined,undefined&amp;daddr=10.932335,106.70981"
                                                                            target="_blank"
                                                                            rel="noreferrer"
                                                                        >
                                                                            <span className="way">Chỉ đường</span>
                                                                        </a>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* 4 */}
                                                        <div className="store-navstyle__StoreWrapper-sc-18sakaf-0 iA-DMCe">
                                                            <div className="image">
                                                                <div
                                                                    className="image-box"
                                                                    style={{
                                                                        backgroundImage: `url('https://order.phuclong.com.vn/_next/static/images/phuclong-store-a0cba2f8c91fff15b6138d6d30982396.jpg')`,
                                                                        backgroundPosition: "center top",
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="store-info">
                                                                <div className="distance">Đang cập nhật</div>
                                                                <h5 className="title-store">BDG-CH AEON Binh Duong P.Bình Hòa</h5>
                                                                <div>
                                                                    <span className="underline">Địa chỉ: </span>AEON Bình Dương P. Bình Hòa TP. Thuận An T. Bình Dương
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Số điện thoại: </span>(028) 7100 1968 (Ext.20018)
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Giờ hoạt động: </span>08:00 - 21:30
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Trạng thái hoạt động: </span>Mở cửa
                                                                </div>
                                                                <div className="store-hotline">
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-hotline"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="CallIcon"
                                                                        >
                                                                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                                                                        </svg>
                                                                        <a href="tel:1900234518">
                                                                            <span>Gọi Hotline</span>
                                                                        </a>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-direction"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="DirectionsIcon"
                                                                        >
                                                                            <path d="m21.41 10.59-7.99-8c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l7.99-8c.79-.79.79-2.05 0-2.83zM13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11l-3.5 3.5z"></path>
                                                                        </svg>
                                                                        <a
                                                                            href="https://maps.google.com?saddr=undefined,undefined&amp;daddr=10.932335,106.70981"
                                                                            target="_blank"
                                                                            rel="noreferrer"
                                                                        >
                                                                            <span className="way">Chỉ đường</span>
                                                                        </a>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* 5 */}
                                                        <div className="store-navstyle__StoreWrapper-sc-18sakaf-0 iA-DMCe">
                                                            <div className="image">
                                                                <div
                                                                    className="image-box"
                                                                    style={{
                                                                        backgroundImage: `url('https://order.phuclong.com.vn/_next/static/images/phuclong-store-a0cba2f8c91fff15b6138d6d30982396.jpg')`,
                                                                        backgroundPosition: "center top",
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <div className="store-info">
                                                                <div className="distance">Đang cập nhật</div>
                                                                <h5 className="title-store">BDG-CH AEON Binh Duong P.Bình Hòa</h5>
                                                                <div>
                                                                    <span className="underline">Địa chỉ: </span>AEON Bình Dương P. Bình Hòa TP. Thuận An T. Bình Dương
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Số điện thoại: </span>(028) 7100 1968 (Ext.20018)
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Giờ hoạt động: </span>08:00 - 21:30
                                                                </div>
                                                                <div>
                                                                    <span className="underline">Trạng thái hoạt động: </span>Mở cửa
                                                                </div>
                                                                <div className="store-hotline">
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-hotline"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="CallIcon"
                                                                        >
                                                                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                                                                        </svg>
                                                                        <a href="tel:1900234518">
                                                                            <span>Gọi Hotline</span>
                                                                        </a>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="button__StyledButton-sc-pfryul-0 khIUsP btn-direction"
                                                                    >
                                                                        <svg
                                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv"
                                                                            focusable="false"
                                                                            aria-hidden="true"
                                                                            viewBox="0 0 24 24"
                                                                            data-testid="DirectionsIcon"
                                                                        >
                                                                            <path d="m21.41 10.59-7.99-8c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l7.99-8c.79-.79.79-2.05 0-2.83zM13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11l-3.5 3.5z"></path>
                                                                        </svg>
                                                                        <a
                                                                            href="https://maps.google.com?saddr=undefined,undefined&amp;daddr=10.932335,106.70981"
                                                                            target="_blank"
                                                                            rel="noreferrer"
                                                                        >
                                                                            <span className="way">Chỉ đường</span>
                                                                        </a>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

// Updated ProductItem to be a functional component
function ProductItem({ id, image, title, prices, title1 }) {
    return (
        <div className="product-card__Card">
            <div className="box-image">
                <div className="product-card__ImageWrapper">
                    <Link to={`/order/${id}`}>
                        <img className="product-card__Image-sc-1d4xujl-10 cMvIwq product-image" src={image} alt={title} />
                    </Link>
                    <div className="product-card__Promotion-sc-1d4xujl-3 byllVU">{title1}</div>
                </div>
            </div>
            <div className="box__Box-sc-11goexy-0 fMFueb box-padding">
                <Link to={`/order/${id}`}>
                    <div aria-label={title} className="product-card__Title">
                        {title}
                    </div>
                </Link>
                <Link to={`/order/${id}`}>
                    <div className="product-card__PriceWrapper">
                        <div className="product-card__Price">{prices}</div>
                    </div>
                </Link>
                <button aria-label="Chọn Size" className="add-item-to-cart__Button">
                    <div className="buttonText">
                        <BsCartPlus className="icon-cart" />
                        <div className="box__Box-sc-11goexy-0 iuaIFk"> Đặt mua</div>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default memo(HomePage);

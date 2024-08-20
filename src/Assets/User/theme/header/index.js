import React, { memo, useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { useLocation } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import delivery from './img/delivery.png';
import logo from './img/logo.png';
import { IoChevronBackOutline } from "react-icons/io5";
import Overlay from 'react-bootstrap/Overlay';
import { IoSearch } from "react-icons/io5";

const MailPopover = ({ anchorEl, handleClose }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const open = Boolean(anchorEl);
  const id = open ? 'mail-popover' : undefined;

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <div style={{ width: '260px', height: '400px' }}>
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
        <div style={{ padding: '20px', overflowY: 'auto' }}>
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
    </Popover>
  );
};

const Header = ({ content }) => {
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const [anchorElMail, setAnchorElMail] = useState(null);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 990);
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();
  const target = useRef(null);
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 990);
    };

    const handleScroll = () => {
      const offset = window.scrollY;
      setIsFixed(offset > 0);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCloseAccountModal = () => setShowAccountModal(false);
  const handleShowAccountModal = () => setShowAccountModal(true);

  const handleMailClick = (event) => {
    setAnchorElMail(anchorElMail ? null : event.currentTarget);
  };
  const handleMailPopoverClose = () => setAnchorElMail(null);

  const handleGoBack = () => {
    window.history.back();
  };

  if (isMobileView) {
    return (
      <div className="sticky-outer-wrapper bgheader">
        <div
          className={`sticky-inner-wrapper ${isFixed ? 'fixed' : ''}`}
          style={{
            position: isFixed ? 'fixed' : 'relative',
            zIndex: 2,
            transform: 'translate3d(0px, 0px, 0px)',
            top: isFixed ? '0px' : 'auto',
            width: isFixed ? '100%' : 'auto',
          }}
        >
          {content || (
            <div className="searchstyle__HeaderSearchInput-sc-131jio1-0 ZJdiH">
              <div className="headerSearchInput hideLeft fixPosition">
                {location.pathname !== '/' && (
                  <div
                    className="left"
                    onClick={handleGoBack}
                    style={{
                      cursor: 'pointer',
                      zIndex: 10,
                    }}
                  >
                    <IoChevronBackOutline />
                  </div>
                )}
                <div className="middle">
                  <i className="iconSearch icon vns-SEARCH"><CiSearch /></i>
                  <input
                    maxLength="256"
                    type="text"
                    placeholder="Bạn muốn mua gì hôm nay..."
                    value="" // Controlled input value (can be updated via state)
                  />
                </div>
                <div className="right province"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="header-nav">
        <div className="header-nav__wrapper">
          <header className="header-nav__wrapper-style">
            {content || (
              <>
                <div className="header-nav__wrapper-left">
                  <a href="/" className="header-img">
                    <div className="header-img__wrapper">
                      <img alt="Logo" src={logo} />
                    </div>
                  </a>
                  <div className="form-header">
                    <form className="search-box">
                      <span className="icon-search"><CiSearch /></span>
                      <input
                        autoComplete="off"
                        name="search"
                        placeholder="Bạn muốn mua gì..."
                        className="input-header"
                        ref={target}
                        onFocus={() => setShowSearchOverlay(true)}  // Show search overlay on input focus
                        onBlur={() => setShowSearchOverlay(false)}  // Hide search overlay when input loses focus
                      />
                    </form>
                    <Overlay target={target.current} show={showSearchOverlay} placement="bottom">
                      {({
                        placement,
                        arrowProps,
                        show: _show,
                        popper,
                        hasDoneInitialMeasure,
                        ...props
                      }) => (
                        <div
                          {...props}
                          style={{
                            position: 'absolute',
                            backgroundColor: 'white',
                            padding: '10px',
                            color: 'black',
                            borderRadius: 3,
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                            zIndex: 1000,
                            ...props.style,
                          }}
                          className="searchstyle__StyledDropdownContainer-sc-gmsi4v-1 bxYjyc"
                        >
                          <div className="searchstyle__SearchHistory-sc-gmsi4v-2 eXyUvB">
                            <div className="searchstyle__Title-sc-gmsi4v-3 gxNHlX">Tìm kiếm gần đây</div>
                          </div>
                          <div className="searchstyle__PopularKeyword-sc-gmsi4v-4 qDrRd">
                            <div className="searchstyle__Title-sc-gmsi4v-3 gxNHlX">Từ khóa phổ biến</div>
                            <div className="MuiButtonBase-root MuiChip-root MuiChip-default MuiChip-sizeSmall MuiChip-colorPrimary MuiChip-clickable MuiChip-clickableColorPrimary MuiChip-defaultPrimary chip-bg css-11rvi3a" tabIndex="0" role="button">
                              <span className="MuiChip-label MuiChip-labelSmall css-1pjtbja">Trà sữa phúc long</span>
                              <span className="MuiTouchRipple-root css-w0pj6f"></span>
                            </div>
                            <div class="MuiButtonBase-root MuiChip-root MuiChip-default MuiChip-sizeSmall MuiChip-colorPrimary MuiChip-clickable MuiChip-clickableColorPrimary MuiChip-defaultPrimary chip-bg css-11rvi3a" tabindex="0" role="button">
                              <span class="MuiChip-label MuiChip-labelSmall css-1pjtbja">Trà xanh thái nguyên</span>
                              <span class="MuiTouchRipple-root css-w0pj6f"></span>
                            </div>
                            <div class="MuiButtonBase-root MuiChip-root MuiChip-default MuiChip-sizeSmall MuiChip-colorPrimary MuiChip-clickable MuiChip-clickableColorPrimary MuiChip-defaultPrimary chip-bg css-11rvi3a" tabindex="0" role="button">
                              <span class="MuiChip-label MuiChip-labelSmall css-1pjtbja">Sinh tố xoài</span>
                              <span class="MuiTouchRipple-root css-w0pj6f"></span>
                            </div>
                            <div class="MuiButtonBase-root MuiChip-root MuiChip-default MuiChip-sizeSmall MuiChip-colorPrimary MuiChip-clickable MuiChip-clickableColorPrimary MuiChip-defaultPrimary chip-bg css-11rvi3a" tabindex="0" role="button">
                              <span class="MuiChip-label MuiChip-labelSmall css-1pjtbja">Cà phê culi</span>
                              <span class="MuiTouchRipple-root css-w0pj6f"></span>
                            </div>
                            <div class="MuiButtonBase-root MuiChip-root MuiChip-default MuiChip-sizeSmall MuiChip-colorPrimary MuiChip-clickable MuiChip-clickableColorPrimary MuiChip-defaultPrimary chip-bg css-11rvi3a" tabindex="0" role="button">
                              <span class="MuiChip-label MuiChip-labelSmall css-1pjtbja">Caramel đá xay</span>
                              <span class="MuiTouchRipple-root css-w0pj6f"></span>
                            </div>
                            <div class="MuiButtonBase-root MuiChip-root MuiChip-default MuiChip-sizeSmall MuiChip-colorPrimary MuiChip-clickable MuiChip-clickableColorPrimary MuiChip-defaultPrimary chip-bg css-11rvi3a" tabindex="0" role="button">
                              <span class="MuiChip-label MuiChip-labelSmall css-1pjtbja">Nước ép dâu</span>
                              <span class="MuiTouchRipple-root css-w0pj6f"></span>
                            </div>
                            <div class="MuiButtonBase-root MuiChip-root MuiChip-default MuiChip-sizeSmall MuiChip-colorPrimary MuiChip-clickable MuiChip-clickableColorPrimary MuiChip-defaultPrimary chip-bg css-11rvi3a" tabindex="0" role="button">
                              <span class="MuiChip-label MuiChip-labelSmall css-1pjtbja">Bánh choco trà xanh</span>
                              <span class="MuiTouchRipple-root css-w0pj6f"></span>
                            </div>
                          </div>
                        </div>
                      )}
                    </Overlay>
                  </div>
                </div>
                <div className="header-nav__wrapper-right">
                <div className="delivery-menu">
                  <div className="delivery-menu__block">
                    <div className="btn-menu" onClick={handleOpen}>
                      <div className="delivery-menu__box1">
                        <img
                          alt="Delivery"
                          src={delivery}
                          decoding="async"
                          className="img-delivery"
                        />
                      </div>
                      <div className="delivery-menu__box2">
                        <div className="top">Đến lấy</div>
                        <div className="bottom" title="44 Nguyễn Đình Chiểu P. Phú Cường TP. Thủ Dầu Một T. Bình Dương">
                          44 Nguyễn Đình Chiểu P. Phú Cường TP. Thủ Dầu Một T. Bình Dương
                        </div>
                      </div>
                    </div>

                    {isModalOpen && (
                      <div className="modal-block">
                        <div className="overlay">
                          <div className="form-block">
                            <button
                              type="button"
                              className="button-close"
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
                  <div className="mail-menu">
                    <div className="mail-icon" onClick={handleMailClick}><IoIosMail /></div>
                  </div>
                  <div className="acc-menu">
                    <div className="acc-icon" onClick={handleShowAccountModal}><VscAccount /></div>
                  </div>
                </div>
              </>
            )}
          </header>
        </div>
      </div>

      <MailPopover anchorEl={anchorElMail} handleClose={handleMailPopoverClose} />

      <Modal show={showAccountModal} onHide={handleCloseAccountModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-block" id="modal-popup">
          <div className="overlay">
            <div className="form-block">
              <button type="button" className="button-close" onClick={handleCloseAccountModal}>
                <span className="button-close__icon">X</span>
              </button>
              <div className="loginstyle__wrapper">
                <div className="logo">
                  <img src={logo} alt="PhucLong" className="loginstyle__logo-image" />
                </div>
                <div className="loginstyle__body">
                  <div className="loginstyle__header">
                    <div className="title-form">Phúc Long Xin Chào</div>
                    <div className="sub-title__form">Đăng nhập</div>
                  </div>
                  <div className="loginstyle__body">
                    <form action="#" noValidate>
                      <div className="row">
                        <div className="textfield-formik__container">
                          <div className="textfield-formik__block">
                            <div className="textfield-formik__block-content">
                              <input
                                aria-invalid="false"
                                id="phone"
                                name="phone"
                                placeholder="Số điện thoại*"
                                required
                                type="text"
                                className="mui-inputbase-input mui-outlinedinput-input"
                              />
                              <fieldset aria-hidden="true" className="mui-outlinedinput-notchedoutline">
                                <legend><span>&#8203;</span></legend>
                              </fieldset>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button type="submit" className="button__styledbutton btn-submit-no-margin">Đăng nhập</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default memo(Header);

import { memo, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Shop = () => {
    const [isFixed] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(false);

    const toggleContentVisibility = () => {
        setIsContentVisible(!isContentVisible);
    };
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to handle the back navigation
    const handleBackClick = () => {
        navigate(-1); // Navigates to the homepage
    };
    return (
        <>
    <div className="sticky-outer-wrapper bgheader">
            <div 
                className={`sticky-inner-wrapper ${isFixed ? 'fixed' : ''}`}
                style={{
                    position: isFixed ? 'fixed' : 'relative',
                    zIndex: 2,
                    transform: 'translate3d(0px, 0px, 0px)',
                    top: isFixed ? '3.7rem' : 'auto',
                    width: isFixed ? '100%' : 'auto',
                }}
            >
                <div className="searchstyle__HeaderSearchInput-sc-131jio1-0 ZJdiH">
                    <div className="headerSearchInput hideRight showLeft">
                        <div className="left" onClick={handleBackClick}>
                            <IoChevronBackOutline />
                        </div>
                        <div className="middle">
                            <h5>Danh sách cửa hàng</h5>
                        </div>
                        <div className="right province"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='layoutstyle__ContentWrapper-sc-1qgf77-1 cRRRVK'>
            <div className='find-storestyle__StoreWrapper-sc-10wt9ey-0 gLKBQk'>
                <div className='sticky-outer-wrapper'>
                    <div 
                        className={`sticky-inner-wrapper ${isFixed ? 'fixed' : ''}`}
                        style={{
                            position: isFixed ? 'fixed' : 'relative',
                            zIndex: 2,
                            transform: 'translate3d(0px, 0px, 0px)',
                            top: isFixed ? '3.7rem' : 'auto',
                            width: isFixed ? '100%' : 'auto',
                        }}
                    >
                    <div className='find-storestyle__StoreListContainer-sc-10wt9ey-2 flyJUL'>
                            <div className='store-block'>
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
                                <div className="currentstyle__CurrentContainer-sc-bojxu8-0 ZcYQi">
                                    <div className="current-location">
                                        <div className="header">
                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MyLocationIcon">
                                                <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
                                            </svg>
                                            <h5>Vị trí hiện tại của quý khách</h5>
                                        </div>
                                        <div className="content">
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="province-filter">
                                    <div className="header">
                                        <h5 onClick={toggleContentVisibility}>Tìm kiếm theo khu vực</h5>
                                    </div>
                                    <div className="content" style={{ display: isContentVisible ? 'block' : 'none' }}>
                                        <div id="province-form">
                                            <form action="#" noValidate="">
                                                <div className="province-filterstyle__ReviewWrapper-sc-1ka9i9s-0 HrATe">
                                                    <div className="search-field">
                                                        <div style={{ zIndex: 0 }}>
                                                            <div className="MuiAutocomplete-root MuiAutocomplete-hasClearIcon MuiAutocomplete-hasPopupIcon css-1lambp5">
                                                                <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root jss1 css-feqhe6">
                                                                    <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-colorPrimary MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined css-1csmjah" data-shrink="true" htmlFor="province" id="province-label">Tỉnh thành</label>
                                                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiAutocomplete-inputRoot css-5d4kn">
                                                                    <input 
                                                                        aria-invalid="false" 
                                                                        autoComplete="off" 
                                                                        id="province" 
                                                                        placeholder="" 
                                                                        type="text" 
                                                                        className="MuiInputBase-input MuiOutlinedInput-input big-size MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-am1kli" 
                                                                        aria-autocomplete="list" 
                                                                        aria-expanded="false" 
                                                                        aria-controls="province-listbox" 
                                                                        autoCapitalize="none" 
                                                                        spellCheck="false" 
                                                                        role="combobox" 
                                                                        value="" 
                                                                        />
                                                                        <div className="MuiAutocomplete-endAdornment css-2iz2x6">
                                                                            <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium MuiAutocomplete-clearIndicator css-edpqz1" tabIndex="-1" type="button" aria-label="Clear" title="Clear">
                                                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseIcon">
                                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                                                                </svg>
                                                                                <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                                                            </button>
                                                                            <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium MuiAutocomplete-popupIndicator css-uge3vf" tabIndex="-1" type="button" aria-label="Open" title="Open">
                                                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon">
                                                                                    <path d="M7 10l5 5 5-5z"></path>
                                                                                </svg>
                                                                                <span className="MuiTouchRipple-root css-w0pj6f"></span>
                                                                            </button>
                                                                        </div>
                                                                        <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline css-igs3ac">
                                                                            <legend className="css-14lo706"><span>Tỉnh thành</span></legend>
                                                                        </fieldset>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="search-field">
                                                        <div style={{ zIndex: 0 }}>
                                                            <div className="MuiAutocomplete-root MuiAutocomplete-hasPopupIcon css-1lambp5">
                                                                <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root jss1 css-feqhe6">
                                                                    <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-disabled MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined css-1csmjah" data-shrink="true" htmlFor="district" id="district-label">Quận huyện</label>
                                                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary Mui-disabled MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiAutocomplete-inputRoot css-5d4kn">
                                                                    <input 
                                                                        aria-invalid="false" 
                                                                        autoComplete="off" 
                                                                        disabled 
                                                                        id="district" 
                                                                        placeholder="" 
                                                                        type="text" 
                                                                        className="MuiInputBase-input MuiOutlinedInput-input big-size Mui-disabled MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-am1kli" 
                                                                        aria-autocomplete="list" 
                                                                        aria-expanded="false" 
                                                                        aria-controls="district-listbox"
                                                                        autoCapitalize="none" 
                                                                        spellCheck="false" 
                                                                        role="combobox" 
                                                                        value="" 
                                                                        />
                                                                        <div className="MuiAutocomplete-endAdornment css-2iz2x6">
                                                                            <button className="MuiButtonBase-root Mui-disabled MuiIconButton-root Mui-disabled MuiIconButton-sizeMedium MuiAutocomplete-popupIndicator css-uge3vf" tabIndex="-1" type="button" disabled="" aria-label="Open" title="Open">
                                                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon">
                                                                                    <path d="M7 10l5 5 5-5z"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                        <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline css-igs3ac">
                                                                            <legend className="css-14lo706"><span>Quận huyện</span></legend>
                                                                        </fieldset>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="search-field">
                                                        <div style={{ zIndex: 0 }}>
                                                            <div className="MuiAutocomplete-root MuiAutocomplete-hasPopupIcon css-1lambp5">
                                                                <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root jss1 css-feqhe6">
                                                                    <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-disabled MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined css-1csmjah" data-shrink="true" htmlFor="ward" id="ward-label">Phường xã</label>
                                                                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary Mui-disabled MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiAutocomplete-inputRoot css-5d4kn">
                                                                    <input 
                                                                        aria-invalid="false" 
                                                                        autoComplete="off" 
                                                                        disabled 
                                                                        id="ward" 
                                                                        placeholder="" 
                                                                        type="text" 
                                                                        className="MuiInputBase-input MuiOutlinedInput-input big-size Mui-disabled MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-am1kli" 
                                                                        aria-autocomplete="list" 
                                                                        aria-expanded="false" 
                                                                        aria-controls="ward-listbox" 
                                                                        autoCapitalize="none" 
                                                                        spellCheck="false" 
                                                                        role="combobox" 
                                                                        value="" 
                                                                        />
                                                                        <div className="MuiAutocomplete-endAdornment css-2iz2x6">
                                                                            <button className="MuiButtonBase-root Mui-disabled MuiIconButton-root Mui-disabled MuiIconButton-sizeMedium MuiAutocomplete-popupIndicator css-uge3vf" tabIndex="-1" type="button" disabled="" aria-label="Open" title="Open">
                                                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon">
                                                                                    <path d="M7 10l5 5 5-5z"></path>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                        <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline css-igs3ac">
                                                                            <legend className="css-14lo706"><span>Phường xã</span></legend>
                                                                        </fieldset>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <button type="button" className="button__StyledButton-sc-pfryul-0 cqhQDk btn-find-store">TÌM KIẾM</button>
                                    </div>
                                    <div class="find-storestyle__HrLine-sc-10wt9ey-3 oNEmB"></div>
                                    <div class="store-list"><div class="header"><div><span>Có 5 kết quả </span>tìm kiếm </div></div></div>
                                </div>
                            </div>
                    </div>
                    </div>
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
        </>
    );
};

export default memo(Shop);

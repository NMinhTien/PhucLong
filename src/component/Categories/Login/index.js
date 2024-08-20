import { memo } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../../../Assets/User/theme/header";
import { useMediaQuery } from 'react-responsive';

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to handle the close button click
    const handleClose = () => {
        navigate("/"); // Navigate to the homepage
    };
    const isMobile = useMediaQuery({ query: '(max-width: 990px)' }); // Check if the screen width is <= 990px
    return (
        <div>
        {isMobile && <Header />} {/* Only render Header in mobile view */}
            <div className="modal-block" id="modal-popup">
                <div className="overlay">
                    <div className="form-block">
                        <button type="button" className="button-close" onClick={handleClose}>
                            <span className="button-close__icon">X</span>
                        </button>
                        <div className="loginstyle__wrapper">
                            <div className="logo">
                                <img src="https://order.phuclong.com.vn/_next/static/images/logo-17b8a27b6bdcdee621bf9243476be817.png" alt="PhucLong" className="loginstyle__logo-image" />
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
        </div>
    );
};

export default memo(Login);

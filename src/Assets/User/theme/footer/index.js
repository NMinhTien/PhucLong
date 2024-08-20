import React, { memo, useState, useEffect } from "react"; // Import useState and useEffect
import infor from './logoSaleNoti.png';
import { FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";

const Footer = () => {
    const [isMobileView, setIsMobileView] = useState(false);

    // Handle screen resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 990);
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const isActive = (path) => currentPath === path;
    const currentPath = window.location.pathname;

    // Render the mobile footer when the screen width is <= 990px
    if (isMobileView) {
        return (
            <div className="mobile-footer">
                <div className="mobile-navbar">
                    <a className={`menu-item ${isActive('/') ? 'active' : ''}`} href="/"><div class="menu-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" style={{ fontSize: "22px" }}><path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"></path></svg></div><div class="text-menu">Trang chủ</div></a>
                    <a className={`menu-item ${isActive('/product') ? 'active' : ''}`} href="/product"><div class="menu-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"style={{ fontSize: "22px" }}><path fill-rule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899zM1.124 4l1.516 6.825A1.5 1.5 0 0 0 4.104 12h5.792a1.5 1.5 0 0 0 1.464-1.175L12.877 4H1.123Z"></path></svg></div><div class="text-menu">Sản phẩm</div></a>
                    <a className={`menu-item ${isActive('/shop') ? 'active' : ''}`} href="/shop"><div class="menu-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" style={{ fontSize: "22px" }}><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"></path><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path></svg></div><div class="text-menu">Cửa hàng</div></a>
                    <a className={`menu-item ${isActive('/mail') ? 'active' : ''}`} href="/mail"><div class="menu-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"style={{ fontSize: "22px" }}><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"></path></svg></div><div class="text-menu">Hộp thư</div></a>
                    <a className={`menu-item ${isActive('/login') ? 'active' : ''}`} href="/login"><div class="menu-icon" style={{ fontSize: "22px" }} ><RiAccountCircleLine /></div><div class="text-menu">Tài khoản </div></a>                
                </div>
            </div>
        );
    }

    // Render the default footer when the screen width is > 990px
    return (
        <React.Fragment>
            <div className="footer">
                <div className="footer-block">
                    <div className="block-content1">
                        <div className="head2">ĐỊA CHỈ</div>
                        <div><strong>Trụ sở chính:</strong> Công ty Cổ Phần Phúc Long Heritage - ĐKKD: 0316 871719 do sở KHĐT TPHCM cấp lần đầu ngày 21/05/2021</div>
                        <div><strong>Nhà máy:</strong> D_8D_CN Đường XE 1, Khu Công Nghiệp Mỹ Phước III, phường Mỹ Phước, thị xã Bến Cát, tỉnh Bình Dương, Việt Nam.</div>
                        <div><strong>Địa chỉ:</strong> Phòng 702, Tầng 7, Tòa nhà Central Plaza, số 17 Lê Duẩn, phường Bến Nghé, quận 1, Hồ Chí Minh.</div>
                        <div><strong>Hotline Đặt hàng:</strong> 1800 6779 </div>
                        <div><strong>Hotline Công ty:</strong> 1900 2345 18 (Bấm phím 0: Lễ Tân | phím 1: CSKH) </div>
                        <div><strong>Email:</strong> sales@phuclong.masangroup.com, info2@phuclong.masangroup.com</div>
                    </div>
                    <div className="block-content2">
                        <div className="col-1">
                            <div className="item">
                                <div className="head2">CÔNG TY</div>
                                <div className="body"><a href="/content/tam-nhin"><div>Tầm nhìn</div></a></div>
                                <div className="body"><a href="/content/su-menh"><div>Sứ mệnh</div></a></div>
                                <div className="body"><a href="/content/gia-tri-cot-loi"><div>Giá trị cốt lõi</div></a></div>
                                <div className="body"><a href="/content/linh-vuc-hoat-dong"><div>Lĩnh vực hoạt động</div></a></div>
                            </div>
                            <div className="item">
                                <div className="head2">TUYỂN DỤNG</div>
                                <div className="body"><a href="/content/htch"><div>HTCH</div></a></div>
                                <div className="body"><a href="/content/kiosk"><div>Kiosk</div></a></div>
                                <div className="body"><a href="/content/van-phong"><div>Văn phòng</div></a></div>
                                <div className="body"><a href="/content/nha-may"><div>Nhà máy</div></a></div>
                            </div>
                            <div className="item">
                                <div className="head2">THƯ VIỆN</div>
                                <div className="body"><a href="/content/hinh-anh"><div>Hình ảnh</div></a></div>
                                <div className="body"><a href="/content/video"><div>Video</div></a></div>
                                <div className="body"><a href="/content/ho-so-cong-bo"><div>Hồ sơ công bố</div></a></div>
                                <div className="body"><a href="/content/cong-van"><div>Công văn</div></a></div>
                            </div>
                            <div className="item">
                                <div className="head2">LIÊN HỆ</div>
                                <div className="body"><a href="/content/he-thong-cua-hang-phuc-long-coffee-tea"><div>Hệ thống cửa hàng Phúc Long Coffee &amp; Tea</div></a></div>
                                <div className="body"><a href="/content/he-thong-cua-hang-phuc-long-kiosk"><div>Hệ thống cửa hàng Phúc Long Kiosk</div></a></div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="item">
                                <div className="head2">KHUYẾN MÃI</div>
                                <div className="body"><a href="/content/tin-khuyen-mai"><div>Tin khuyến mãi</div></a></div>
                            </div>
                            <div className="item">
                                <div className="head2">THẺ</div>
                                <div className="body"><a href="/content/dieu-khoan-dieu-kien-thanh-vien"><div>Điều khoản &amp; Điều kiện thành viên</div></a></div>
                                <div className="body"><a href="/content/dieu-khoan-dieu-kien-the-tra-truoc"><div>Điều khoản &amp; Điều kiện Thẻ trả trước</div></a></div>
                                <div className="body"><a href="/content/faq"><div>FAQ</div></a></div>
                            </div>
                            <div className="item">
                                <div className="head2">ĐIỀU KHOẢN SỬ DỤNG</div>
                                <div className="body"><a href="/content/chinh-sach-bao-mat-thong-tin"><div>Chính sách bảo mật thông tin</div></a></div>
                                <div className="body"><a href="/content/chinh-sach-dat-hang"><div>Chính sách đặt hàng</div></a></div>
                            </div>
                            <div className="item">
                                <div className="logoSaleContainer">
                                    <a href="http://online.gov.vn/Home/WebDetails/96621" target="_blank" rel="noreferrer">
                                        <img src={infor} alt="Notice to Ministry of Industry and Trade" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-license">
                <div className="footer-license__block">
                    <div>© Công ty CP Phúc Long Heritage 2024</div>
                    <div className="license-icon">
                        <div className="instagram"><FaInstagram /></div>
                        <div className="facebook"><FaFacebookSquare /></div>
                        <div className="youtube"><FaYoutube /></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default memo(Footer);

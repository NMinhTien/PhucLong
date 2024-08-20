import { memo, useState, useEffect } from "react";
import Header from "../../../Assets/User/theme/header";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { ItemData, ItemData1, ItemData12, ItemData13, ItemData8, ItemData9} from "../../../ItemData";
import { IoIosArrowForward } from "react-icons/io";


const ProductMobile = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 990px)' }); // Check if the screen width is <= 990px
    const [isFixed, setIsFixed] = useState(false);
    const [activeTab, setActiveTab] = useState(window.location.pathname); // Set initial active tab based on URL

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsFixed(offset > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Listen for changes in the URL to update active tab
        const handleLocationChange = () => {
            setActiveTab(window.location.pathname);
        };

        window.addEventListener("popstate", handleLocationChange);

        return () => {
            window.removeEventListener("popstate", handleLocationChange);
        };
    }, []);

    return (
        <>
            {isMobile && <Header />}
          <div className="layoutstyle__ContentWrapper-sc-1qgf77-1 cRRRVK">
            <div className="category__StyledContainer-sc-1fo0ahk-0 fzPNJg">
                <div className="category__StyledContent-sc-1fo0ahk-1 bfUofu">
                    <div className="category__ProductListContent-sc-1fo0ahk-26 cBCRZN">
                        <div className="sticky-outer-wrapper">
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
                                <div className="top-filterstyle__TopFilterContainer-sc-193vnnw-0 ijOBf">
                                    <div className="list">
                                        <div className="item">
                                            <a 
                                                href="/product" 
                                                title="Tất cả" 
                                                className="top-filterstyle__CategoryLink-sc-193vnnw-1 dJlzHV"
                                            >
                                                Tất cả
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a 
                                                href="/drink/Thức%20uống" 
                                                title="Thức uống" 
                                                className={`top-filterstyle__CategoryLink-sc-193vnnw-1 dJlzHV ${activeTab === '/thuc-uong--c15' ? 'active' : ''}`}
                                            >
                                                Thức uống
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a 
                                                href="/drink/Cà%20phê" 
                                                title="Cà phê" 
                                                className={`top-filterstyle__CategoryLink-sc-193vnnw-1 dJlzHV ${activeTab === '/ca-phe--c16' ? 'active' : ''}`}
                                            >
                                                Cà phê
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a 
                                                href="/drink/Trà" 
                                                title="Trà" 
                                                className={`top-filterstyle__CategoryLink-sc-193vnnw-1 dJlzHV ${activeTab === '/tra--c17' ? 'active' : ''}`}
                                            >
                                                Trà
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a 
                                                href="/drink/Bakery" 
                                                title="Bakery" 
                                                className={`top-filterstyle__CategoryLink-sc-193vnnw-1 dJlzHV ${activeTab === '/bakery--c18' ? 'active' : ''}`}
                                            >
                                                Bakery
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a 
                                                href="/drink/Trung%20thu" 
                                                title="Trung thu" 
                                                className={`top-filterstyle__CategoryLink-sc-193vnnw-1 dJlzHV ${activeTab === '/trung-thu--c23' ? 'active' : ''}`}
                                            >
                                                Trung thu
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a 
                                                href="/drink/Quà%20tặng" 
                                                title="Quà tặng" 
                                                className={`top-filterstyle__CategoryLink-sc-193vnnw-1 dJlzHV ${activeTab === '/qua-tang--c46' ? 'active' : ''}`}
                                            >
                                                Quà tặng
                                            </a>
                                        </div>
                                    </div>
                                    <hr className="divider" />
                                </div>
                            </div>
                        </div>
                        <div className="product-mobile-carousel__RootContainer-sc-145kxm0-0 eRZtAs">
                        <div class="product-mobile-carousel__HeaderSection-sc-145kxm0-1 ksSlpK">
                            <div class="title">Sản Phẩm Nổi Bật</div>
                            <div class="view-more">
                                <a href="/showmore"><span>Xem thêm</span></a><IoIosArrowForward/>
                            </div>
                        </div>
                            <div className="product-mobile-carousel__WrapperSection-sc-145kxm0-3 cLrtNb">
                                <div className="product-mobile-carousel__SliderSection-sc-145kxm0-4 etBKXc">
                                {ItemData.slice(0, 4).map((item) => (
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
                            </div>
                        </div>
                        <div className="product-by-slugstyle__RootContainer-sc-q7xvgf-0 breknO">
                            <div className="product-by-slugstyle__HeaderSection-sc-q7xvgf-1 hfbjAo">
                                <div class="title">Thức Uống</div>
                                <div class="view-more">
                                    <a href="/drink/Thức%20uống"><span>Xem thêm </span></a>
                                    <IoIosArrowForward/>
                                </div>
                            </div>
                            <div className="product-by-slugstyle__SliderSection-sc-q7xvgf-4 dfXrUM">
                                {ItemData1.slice(0, 4).map((item) => (
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
                        </div>
                        <div className="product-by-slugstyle__RootContainer-sc-q7xvgf-0 breknO">
                            <div class="product-by-slugstyle__HeaderSection-sc-q7xvgf-1 hfbjAo">
                                <div class="title">Cà Phê</div>
                                <div class="view-more"><a href="/drink/Cà%20phê"><span>Xem thêm </span></a><IoIosArrowForward/></div>
                            </div>
                            <div className="product-by-slugstyle__WrapperSection-sc-q7xvgf-3 kprwkt">
                                <div className="product-by-slugstyle__SliderSection-sc-q7xvgf-4 dfXrUM">
                                    {ItemData8.slice(0, 4).map((item) => (
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
                            </div>
                        </div>
                        <div className="product-by-slugstyle__RootContainer-sc-q7xvgf-0 breknO">
                            <div class="product-by-slugstyle__HeaderSection-sc-q7xvgf-1 hfbjAo">
                                <div class="title">Trà</div>
                                <div class="view-more"><a href="/drink/Trà"><span>Xem thêm </span></a><IoIosArrowForward/></div>
                            </div>
                            <div className="product-by-slugstyle__WrapperSection-sc-q7xvgf-3 kprwkt">
                                <div className="product-by-slugstyle__SliderSection-sc-q7xvgf-4 dfXrUM">
                                    {ItemData9.slice(0, 4).map((item) => (
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
                            </div>
                        </div>
                        <div className="product-by-slugstyle__RootContainer-sc-q7xvgf-0 breknO">
                            <div class="product-by-slugstyle__HeaderSection-sc-q7xvgf-1 hfbjAo">
                                <div class="title">Bakery</div>
                                <div class="view-more"><a href="/drink/Bakery"><span>Xem thêm </span></a><IoIosArrowForward/></div>
                            </div>
                            <div className="product-by-slugstyle__WrapperSection-sc-q7xvgf-3 kprwkt">
                                <div className="product-by-slugstyle__SliderSection-sc-q7xvgf-4 dfXrUM">
                                    {ItemData12.map((item) => (
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
                            </div>
                        </div>
                        <div className="product-by-slugstyle__RootContainer-sc-q7xvgf-0 breknO">
                            <div class="product-by-slugstyle__HeaderSection-sc-q7xvgf-1 hfbjAo">
                                <div class="title">Trung Thu</div>
                                <div class="view-more"><a href="/drink/Trung%20thu"><span>Xem thêm </span></a><IoIosArrowForward/></div>
                            </div>
                            <div className="product-by-slugstyle__WrapperSection-sc-q7xvgf-3 kprwkt">
                                <div className="product-by-slugstyle__SliderSection-sc-q7xvgf-4 dfXrUM">
                                    {ItemData13.slice(0, 4).map((item) => (
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
                            </div>
                        </div>
                        <div className="product-by-slugstyle__RootContainer-sc-q7xvgf-0 breknO">
                            <div class="product-by-slugstyle__HeaderSection-sc-q7xvgf-1 hfbjAo">
                                <div class="title">Quà Tặng</div>
                                <div class="view-more"><a href="/drink/Quà%20tặng"><span>Xem thêm </span></a><IoIosArrowForward/></div>
                            </div>
                            <div className="product-by-slugstyle__WrapperSection-sc-q7xvgf-3 kprwkt">
                                <div className="product-by-slugstyle__SliderSection-sc-q7xvgf-4 dfXrUM">
                                    {}
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
function ProductItem({ id, image, title, prices, title1 }) {
    return (
        <div className="product-card__Card">
            <div className="box-image">
                <div className="product-card__ImageWrapper">
                    <Link to={`/order/${id}`}>
                        <img
                            className="product-card__Image-sc-1d4xujl-10 cMvIwq product-image"
                            src={image}
                            alt={title}
                        />
                    </Link>
                    <div className="product-card__Promotion-sc-1d4xujl-3 byllVU">{title1}</div>
                </div>
            </div>
            <div className="box__Box-sc-11goexy-0 fMFueb box-padding">
                <Link to={`/order/${id}`}>
                    <div aria-label={title} className="product-card__Title">{title}</div>
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
export default memo(ProductMobile);

import { memo } from "react";
import { ItemData, ItemData1 } from "../../ItemData";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import Header from "../../Assets/User/theme/header";
import { useMediaQuery } from 'react-responsive';

const ShowMore = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 990px)' }); // Check if the screen width is <= 990px
    return (
        <>
        {isMobile && <Header/>} {/* Only render Header in mobile view */}
            <div className="showMore-block">
                <div className="showMore-block__padding">
                    <ul className="showMore-block__section">
                        <li><Link to="/"><div>Trang chủ</div></Link></li>
                        <li>/</li>
                        <li>Sản phẩm</li>
                    </ul>
                    <div className="showMore-block__product">
                        <div className="showMore-block__product-padding">
                            <div className="product-count"><span>Có <strong> 27 </strong>sản phẩm</span></div>
                            <div className="product-block">
                                <div className="product-block__grid">
                                    {ItemData.concat(ItemData1).map((item) => (
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
                    <Link to={`/order/${id}`}><img className="product-card__Image-sc-1d4xujl-10 cMvIwq product-image" src={image} alt={title} /></Link>
                    <div className="product-card__Promotion-sc-1d4xujl-3 byllVU">{title1}</div>
                </div>
            </div>
            <div className="box__Box-sc-11goexy-0 fMFueb box-padding">
                <Link to={`/order/${id}`}><div aria-label={title} className="product-card__Title">{title}</div></Link>
                <Link to={`/order/${id}`}><div className="product-card__PriceWrapper"><div className="product-card__Price">{prices}</div></div></Link>
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

export default memo(ShowMore);

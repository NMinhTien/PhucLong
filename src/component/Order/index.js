import { memo } from "react";
import { useParams, Link } from "react-router-dom";
import { ItemData, ItemData1, ItemData10, ItemData11, ItemData12, ItemData13, ItemData2, ItemData3, ItemData4, ItemData5, ItemData6, ItemData7, ItemData8, ItemData9 } from "../../ItemData";
import { BsCartPlus } from "react-icons/bs";
import thumb from "./download.png"
import Header from "../../Assets/User/theme/header";
import { useMediaQuery } from 'react-responsive';

const Order = () => {
    const { id } = useParams();
    const combinedData = [...ItemData, ...ItemData1, ...ItemData2, ...ItemData3, ...ItemData4, ...ItemData5, ...ItemData6, ...ItemData7, ...ItemData8, ...ItemData9, ...ItemData10, ...ItemData11, ...ItemData12, ...ItemData13];
    const item = combinedData.find(item => item.id === parseInt(id));
    const isMobile = useMediaQuery({ query: '(max-width: 990px)' }); // Check if the screen width is <= 990px

    if (!item) {
        return <div>Product not found</div>;
    }

    return (
        <>
              {isMobile && <Header/>} {/* Only render Header in mobile view */}

        <div className="order-block">
            <div className="order-padding">
                <div className="order-container">
                    <div className="order-container__block">
                        <ul className="breadcrumbstyle__BreadCrumbContainer-sc-1u4g520-0 dZhUqB">
                            <li><Link to="/"><div>Trang chủ</div></Link></li>
                            <li>/</li>
                            <li>Sản phẩm</li>
                        </ul>
                        <OrderItem 
                            key={item.id} 
                            image={item.image} 
                            title={item.title} 
                            prices={item.prices} 
                            title1={item.title1} 
                            sub={item.sub} 
                            textdsc={item.textdsc}
                            textdsc1={item.textdsc1}
                            textli={item.textli}
                            textli1={item.textli1}
                            textli2={item.textli2}
                            textli3={item.textli3}
                            textli4={item.textli4}
                            textli5={item.textli5}
                            textli6={item.textli6}
                            textli7={item.textli7}
                            textli8={item.textli8}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div>
        </div>
        </>
    );
};

function OrderItem(props) {
    return (
        <div>
            <div className="order-item">
                <div className="order-item__img">
                    <div className="order-item__img-block order-item__img-block2">
                        <div className="img-block">
                            <div className="img-container">
                                <img className="img-order" src={props.image} alt={props.title} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-detailsstyle__ProductInfo-sc-cirbco-4 dWGAa">
                    <h5 className="title">{props.title}</h5>
                    <div className="sub-title">{props.sub}</div>
                    <div className="price-wrapper">
                        <div className="sale-price">{props.prices}</div>
                    </div>

                    {/* Hiển thị promotion-box chỉ khi title1 tồn tại */}
                    {props.title1 && (
                        <div className="promotion-box"><span>{props.title1}</span></div>
                    )}

                    <div className="add-to-cart">
                        <button aria-label="Chọn Size" className="add-item-to-cart__Button-sc-3sx4wx-1 jPZihG">
                            <div className="buttonText">
                                <BsCartPlus className="icon" />
                                <div className="box__Box-sc-11goexy-0 iuaIFk"> Đặt mua</div>
                            </div>
                        </button>
                    </div>
                    <div className="description">
                        <div className="content html-content">
                            <div>
                                <h3><span style={{ color: "rgb(12, 113, 61)",}}>{props.textdsc}</span></h3>
                                <ol>
                                    <li>{props.textli}</li>
                                    <li>{props.textli1}</li>
                                </ol>
                                <p><br></br></p>
                                <h3><span style={{ color: "rgb(12, 113, 61)",}}>{props.textdsc1}</span></h3>
                                <ol>
                                    <li>{props.textli2}</li>
                                    <li>{props.textli3}</li>
                                    <li>{props.textli4}</li>
                                    <li>{props.textli5}</li>
                                    <li>{props.textli6}</li>
                                    <li>{props.textli7}</li>
                                    <li>{props.textli8}</li>

                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="product-detailsstyle__ProductInfo-sc-cirbco-4 cWUSYZ">
                    <div className="fvbivc">
                        <h5 className="title">{props.title}</h5>
                        <div className="sub-title">{props.sub}</div>
                        <div className="price-wrapper">
                            <div className="sale-price">{props.prices}</div>
                        </div>
                    </div>

                    {/* Hiển thị promotion-box chỉ khi title1 tồn tại */}
                    {props.title1 && (
                        <div className="fvbivc">
                            <div className="promotion-box"><span>{props.title1}</span></div>
                        </div>
                    )}

                    <hr className="product-detailsstyle__HrLine-sc-she6zw-6 egmVZI"></hr>

                    <div className="fvbivc box-cart">
                        <div className="add-to-cart">
                            <button aria-label="Chọn Size" className="add-item-to-cart__Button-sc-3sx4wx-1 jPZihG">
                                <div className="buttonText">
                                    <BsCartPlus className="icon" />
                                    <div className="box__Box-sc-11goexy-0 iuaIFk"> Đặt mua</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <hr className="product-detailsstyle__HrLine-sc-she6zw-6 egmVZI"></hr>
                    
                    <div className="fvbivc">
                    <div className="description">
                        <div className="content html-content">
                            <div>
                                <h3><span style={{ color: "rgb(12, 113, 61)",}}>{props.textdsc}</span></h3>
                                <ol>
                                    <li>{props.textli}</li>
                                    <li>{props.textli1}</li>
                                </ol>
                                <p><br></br></p>
                                <h3><span style={{ color: "rgb(12, 113, 61)",}}>{props.textdsc1}</span></h3>
                                <ol>
                                    <li>{props.textli2}</li>
                                    <li>{props.textli3}</li>
                                    <li>{props.textli4}</li>
                                    <li>{props.textli5}</li>
                                    <li>{props.textli6}</li>
                                    <li>{props.textli7}</li>
                                    <li>{props.textli8}</li>
                                </ol>
                            </div>
                        </div>
                    
                    </div>
                    </div>
                    <hr class="product-detailsstyle__HrLine-sc-she6zw-6 egmVZI"></hr>
                    <div class="product-detailsstyle__ProductRow-sc-she6zw-5 fvbivc">
                        <div class="rating-content">
                            <h5 class="title-rating">Đánh giá sản phẩm</h5>
                            <img src={thumb} className="image-rating" alt="Rating" />
                                <div class="text-suggest-rating">Sản phẩm chưa được đánh giá. Hãy là khách hàng đánh giá sản phẩm đầu tiên nhé!</div>
                                <div class="text-add-rating">Thêm đánh giá</div>
                        </div>
                    </div>
                    <hr className="product-detailsstyle__HrLine-sc-she6zw-6 egmVZI"></hr>
                </div>
            </div>
        </div>
    );
}

export default memo(Order);


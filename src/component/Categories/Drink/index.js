import { memo, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { ItemData, ItemData1, ItemData10, ItemData11, ItemData12, ItemData13, ItemData2, ItemData3, ItemData4, ItemData5, ItemData6, ItemData7, ItemData8, ItemData9 } from "../../../ItemData";
import Header from "../../../Assets/User/theme/header";
import { useMediaQuery } from 'react-responsive';

// Define the categories and their respective tabs and content
const categoriesContent = {
        "Thức uống": {
            tabs: ["Trà osmanthus", "Trà nguyên bản", "Đá xay", "Cà phê", "Trà sữa nguyên bản", "Di sản phúc long"],
            content: {
                "default": { 
                    items: ItemData.concat(ItemData1), 
                    tabContentStrong: "Danh mục sản phẩm đồ uống", 
                    tabContentParagraph: "Chúng tôi tin rằng từng sản phẩm trà và cà phê sẽ càng thêm hảo hạng khi được tạo ra từ sự phấn đấu không ngừng cùng niềm đam mê. Và chính kết nối dựa trên niềm tin, sự trung thực và tin yêu sẽ góp phần mang đến những nét đẹp trong văn hóa thưởng trà và cà phê ngày càng bay cao, vươn xa." 
                }, 
                "Trà osmanthus": { 
                    items: ItemData2, 
                    tabContentStrong: "", 
                    tabContentParagraph: "Là tín đồ “sành” trà thì hẳn bạn từng nghe qua cái tên Oolong Osmanthus. Đây là Oolong được ướp cùng quế hoa hay còn gọi là hoa mộc, đặc trưng ở hương thơm ngọt, khi pha có sự tách hương rất đặc biệt, lai giữa mùi đào ngọt ngào và trái mơ mát dịu, đem lại cảm giác ấm áp và thơm lừng. Chính sự đặc biệt này đã đưa osmanthus trở thành 'ngôi sao' trong menu mới của Phúc Long." 
                },
                "Trà nguyên bản": { 
                    items: ItemData3, 
                    tabContentStrong: "Trà Nguyên Bản", 
                    tabContentParagraph: "Từ những lá trà tươi được chọn lọc kỹ càng, trải qua các công đoạn chế biến tỉ mỉ giúp trà vẫn giữ được hương vị tươi ngon và nguyên bản. Đậm vị truyền thống với Trà Vải Lài, Trà Nhãn Sen hay Trà Lài Đác Thơm kết hợp cùng những loại trái cây quen thuộc như vải, nhãn, đào, dâu... Phúc Long sáng tạo nên những thức uống thơm ngon - đậm vị mang đậm bản sắc thương hiệu, mang đến cảm giác khoan khoái, tươi mới cho bạn khi thưởng thức." 
                },
                "Đá xay": { 
                    items: ItemData4, 
                    tabContentStrong: "Đá Xay", 
                    tabContentParagraph: "Lớp kem béo tươi xốp hấp dẫn bao phủ bên trên lớp đá xay mịn nhuyễn gồm hỗn hợp trà xanh, sô-cô-la, cà phê kết hợp cùng bánh Oreo, sữa tươi... Thức uống Phúc Long Đá Xay mang đến cảm giác mát lạnh, thơm béo, quyến rũ, đánh thức mọi giác quan từ ngụm đầu tiên. Một ly đá xay bồng bềnh là món quà ngọt ngào cho tâm hồn vào những ngày trời đẹp nắng, sẵn sàng cùng bạn 'chinh chiến' với công việc đòi hỏi ý tưởng sáng tạo." 
                },
                "Cà phê": { 
                    items: ItemData5, 
                    tabContentStrong: "Cà Phê", 
                    tabContentParagraph: "Từ khát vọng 'Tôn trọng nguyên bản cà phê đậm vị', Phúc Long luôn tìm kiếm và chắt chiu những hạt cà phê hội đủ “mùi hương – thể chất – vị chua – hậu vị” trên những vùng cao nguyên bazan, được tưới bằng nguồn nước tinh khiết, được nuôi dưỡng từ hương của đất, trời, nắng, gió, được chăm sóc bởi tình yêu của người nông dân để làm nguyên liệu tốt nhất cho bộ đôi Phin Phúc Long: Phin Đen Đá & Phin Sữa Đá." 
                },
                "Trà sữa nguyên bản": { 
                    items: ItemData6, 
                    tabContentStrong: "Trà Sữa Nguyên Bản", 
                    tabContentParagraph: "Từ những lá trà tươi được chọn lọc kỹ càng, trải qua các công đoạn chế biến tỉ mỉ giúp trà vẫn giữ được hương vị tươi ngon và nguyên bản. Đậm vị truyền thống với Hồng Trà Sữa, Trà Sữa Phúc Long hay Trà Ô Long Sữa...Phúc Long sáng tạo nên những thức uống thơm ngon - đậm vị mang đậm bản sắc thương hiệu, mang đến cảm giác khoan khoái, tươi mới cho bạn khi thưởng thức." 
                },
                "Di sản phúc long": { 
                    items: ItemData7, 
                    tabContentStrong: "BST Di sản Phúc Long", 
                    tabContentParagraph: "Bộ sưu tập “Di Sản Phúc Long” với nền trà ô long cao cấp cho 02 phiên bản trà sữa và trà cùng lớp kem phô mai thơm béo và mềm mịn như “lụa”, Phúc Long mong muốn mang những nét “di sản” tinh hoa đã tồn tại cùng thương hiệu giới thiệu đến nhiều khách hàng hơn nữa." 
                },
            },
        },
    "Cà phê": {
        tabs: ["Cà phê mùi", "Cà phê phin nhôm", "Cà phê set", "Cà phê hạt không bơ", "Cà phê hạt có bơ"],
        content: {
            "default": { 
                    items: ItemData8, 
                    tabContentStrong: "Danh mục sản phẩm đồ uống", 
                    tabContentParagraph: "Chúng tôi tin rằng từng sản phẩm trà và cà phê sẽ càng thêm hảo hạng khi được tạo ra từ sự phấn đấu không ngừng cùng niềm đam mê. Và chính kết nối dựa trên niềm tin, sự trung thực và tin yêu sẽ góp phần mang đến những nét đẹp trong văn hóa thưởng trà và cà phê ngày càng bay cao, vươn xa." 
                }, 
                "Cà phê mùi": { 
                    items: [], 
                    tabContentStrong: "Cà phê Mùi", 
                    tabContentParagraph: "Cà phê mùi bắt nguồn từ đam mê sáng tạo ra những hương vị mới lạ cho việc thưởng thức cà phê ngày càng đa dạng và phong phú hơn. Lấy cảm hứng từ hương vị tự nhiên chiết xuất từ các loài thực vật thiên nhiên hòa quyện cùng những hạt cà phê thơm ngon của vùng đất Buôn Mê Thuột, cà phê mùi mang đến 6 hương vị mới lạ như hương Vanilla, Hazelnut, Chocolate, Cappuccino, Caramel, Smooth và Rich." 
                },
                "Cà phê phin nhôm": { 
                    items: [], 
                    tabContentStrong: "Cà phê Phin nhôm", 
                    tabContentParagraph: "Những dòng cà phê hảo hạng, đặc trưng của Phúc Long đi kèm với fin nhôm tiện lợi, giúp cho người thưởng thức trải nghiệm trọn vẹn hương vị thơm ngon, đậm đà của những giọt cà phê khi tự tay pha chế ngay tại nhà." 
                },
                "Cà phê set": { 
                    items: [], 
                    tabContentStrong: "Cà phê Set", 
                    tabContentParagraph: "Cà phê set thể hiện sự tinh tế và tiện lợi khi kết hợp giữa hương vị cà phê hảo hạng với những dụng cụ pha chế đi kèm để dễ dàng thưởng thức những ly cà phê thơm ngon đúng điệu. Đây cũng là gợi ý quà tặng lý tưởng dành cho bạn bè và người thân, đặc biệt là những người yêu thích hương vị cà phê thuần Việt." 
                },
                "Cà phê hạt không bơ": { 
                    items: ItemData8, 
                    tabContentStrong: "Cà phê hạt không bơ", 
                    tabContentParagraph: "Trên hành trình tìm kiếm những hạt cà phê ngon nhất, Phúc Long luôn chú trọng bốn đặc tính từ trái cà phê nhằm tôn trọng nguyên bản cho tách cà phê đậm vị: Hương thơm cà phê, Thể chất - độ đậm đà, Acid - vị chua thanh và Hậu vị - vị cà phê còn đọng lại sau khi thưởng thức." 
                },
                "Cà phê hạt có bơ": { 
                    items: [], 
                    tabContentStrong: "Cà phê hạt có bơ", 
                    tabContentParagraph: "Trên hành trình tìm kiếm những hạt cà phê ngon nhất, Phúc Long luôn chú trọng bốn đặc tính từ trái cà phê nhằm tôn trọng nguyên bản cho tách cà phê đậm vị: Hương thơm cà phê, Thể chất - độ đậm đà, Acid - vị chua thanh và Hậu vị - vị cà phê còn đọng lại sau khi thưởng thức." 
                },
        },
    },
    "Trà": {
        tabs: ["Trà ô long thượng hạng", "Trà lon thiếc", "Trà lon giấy cao cấp", "Trà lon giấy", "Trà hộp xám", "Trà hộp giấy", "Trà gói cao cấp", "Trà túi lọc", "Trà túi tam giác", "Trà lài", "Trà xanh", "Trà sen", "Trà đen", "Trà vạn lý hương", "Trà thái nguyên"],
        content: {
            "default": { 
                    items: ItemData9, 
                    tabContentStrong: "Danh mục sản phẩm về Trà", 
                    tabContentParagraph: "Chúng tôi tin rằng từng sản phẩm trà và cà phê sẽ càng thêm hảo hạng khi được tạo ra từ sự phấn đấu không ngừng cùng niềm đam mê. Và chính kết nối dựa trên niềm tin, sự trung thực và tin yêu sẽ góp phần mang đến những nét đẹp trong văn hóa thưởng trà và cà phê ngày càng bay cao, vươn xa." 
                }, 
                "Trà ô long thượng hạng": { 
                    items: ItemData10, 
                    tabContentStrong: "Trà Ô Long Thượng Hạng", 
                    tabContentParagraph: "Trà Ô Long Thượng Hạng Phúc Long được tạo nên từ những búp trà non thượng hạng, trải qua quá trình thu hái lá trà cho đến sao chế đều tuân thủ những nguyên tắc nghiêm ngặt. Cầm trên tay tách trà ngát hương, nhâm nhi trọn vị Trà Ô Long tinh tuý như là một cách thể hiện tâm tình đối với cuộc sống, cảm thụ hương vị tự nhiên toát ra từ lá trà, cảm thấy lòng an nhiên trước bao bộn bề" 
                },
                "Trà lon thiếc": { 
                    items: [], 
                    tabContentStrong: "Trà Lon Thiếc", 
                    tabContentParagraph: "Với thiết kế bao bì chắc chắn nhưng gọn nhẹ, trà lon thiếc không chỉ lưu giữ được hương vị tươi ngon của trà mà còn gửi gắm những giá trị truyền thống của văn hóa thưởng trà để gắn kết tình thân" 
                },
                "Trà lon giấy cao cấp": { 
                    items: [], 
                    tabContentStrong: "Trà Lon Giấy Cao Cấp", 
                    tabContentParagraph: "Trà lon giấy cao cấp tinh tế từ khâu lựa chọn trà, ướp hương và đóng gói. Khi được sử dụng làm quà biếu sẽ thể hiện trọn vẹn tấm chân tình của người tặng. Vị ngọt dịu cùng hương thơm đặc trưng đánh thức mọi giác quan và mang lại những phút giây thư giãn tuyệt vời." 
                },
                "Trà lon giấy": { 
                    items: ItemData8, 
                    tabContentStrong: "Trà Lon Giấy", 
                    tabContentParagraph: "Trà lon giấy có thiết kế bao bì hiện đại, sang trọng cùng hương vị đậm đà, thanh khiết thích hợp để làm quà biếu. Gửi trao vị ngọt đắng, thanh cao của trà là gửi trao những lời chúc tốt đẹp nhất dành cho những người thân yêu." 
                },
                "Trà hộp xám": { 
                    items: ItemData11, 
                    tabContentStrong: "Trà Hộp Xám", 
                    tabContentParagraph: "Trà hộp xám có thiết kế hình oval sang trọng và tiện lợi, với hương vị đặc trưng của những loại trà hảo hạng, thỏa mãn như cầu tinh tế của khách hàng" 
                },
                "Trà hộp giấy": { 
                    items: [], 
                    tabContentStrong: "Trà Hộp Giấy", 
                    tabContentParagraph: "Trà hộp giấy có bao bì hiện đại, gọn nhẹ và thuận tiện khi sử dụng. Trong mỗi hộp trà lưu giữ trọn vẹn hương vị đặc trưng của từng loại trà để từ đó pha chế nên những ly trà thơm ngon và đem lại nhiều lợi ích cho sức khỏe." 
                },
                "Trà túi lọc": { 
                    items: [], 
                    tabContentStrong: "Trà Túi Lọc", 
                    tabContentParagraph: "Trà túi lọc tiện dụng được sản xuất theo công thức độc đáo, đảm bảo tận dụng hết tính năng của trà; cả về hương lẫn vị. Không phải tốn nhiều thời gian pha chế, chỉ sau vài phút là có ngay tách trà nóng thơm ngon với nhiều mùi hương đa dạng. Trà túi lọc mở ra phong cách thưởng thức trà hiện đại trong cuộc sống không ngừng phát triển và vươn cao." 
                },
                "Trà túi tam giác": { 
                    items: [], 
                    tabContentStrong: "Trà Túi Tam Giác", 
                    tabContentParagraph: "Trà túi lọc tam giác (hay còn gọi là Trà túi lọc kim tự tháp) được xem là một bước tiến mới của dòng trà túi lọc khi được sản xuất và đóng gói theo công nghệ tiên tiến bậc nhất, tăng sự thẩm thấu của trà ra bên ngoài và gia tăng hương vị đậm đà, mang lại trải nghiệm trọn vẹn khi thưởng thức" 
                },
                "Trà lài": { 
                    items: [], 
                    tabContentStrong: "Trà Lài", 
                    tabContentParagraph: "Trà lài là sự kết hợp hoàn hảo giữa lá trà xanh chất lượng cao và hoa lài. Trà có mùi thơm tự nhiên của hoa lài, màu vàng đẹp, vị ngọt của hoa lài và vị đắng nhẹ của trà tạo nên cảm giác khoan khoái và thư giãn cho người dùng" 
                },
                "Trà xanh": { 
                    items: [], 
                    tabContentStrong: "Trà Xanh", 
                    tabContentParagraph: "Trà xanh được trồng tại nơi có khí hậu và thổ nhưỡng thích hợp để có được những cây trà phẩm chất tốt nhất, thông qua sàng lọc và lựa chọn ra những đọt trà non tươi ngon nhất để chế biến thành sản phẩm chính vì vậy nên chất lượng của trà luôn được đảm bảo tốt nhất. Trà được phơi khô không qua công đoạn lên men nhằm mang lại hương vị thiên nhiên khi dùng, trà có màu xanh vàng và vị đắng chát mạnh." 
                },
                "Trà sen": { 
                    items: [], 
                    tabContentStrong: "Trà Sen", 
                    tabContentParagraph: "Trà Sen là sự kết hợp tinh tế giữa trà xanh và hoa sen với quy trình ướp công phu và công nghệ sản xuất hiện đại tạo ra một sản phẩm mang hương vị và nét riêng cho trà Việt. Khi pha trà có mùi thoảng nhẹ hương sen, màu xanh vàng, vị đắng nhẹ của trà cùng vị ngọt dịu thanh mát." 
                },
                "Trà đen": { 
                    items: [], 
                    tabContentStrong: "Trà Đen", 
                    tabContentParagraph: "Trà đen là trà xanh khi thu hoạch và được ủ lên men sau khi phơi khô. Phản ứng lên men giúp trà đen có mùi thơm đặc biệt và lá trà có màu sậm, từ đỏ hung đến đen tuyền. Trà đen với hậu vị chát đậm, khi uống chất trà thấm vào cơ thể nhẹ nhàng đánh thức các giác quan, tạo tâm trạng sảng khoái." 
                },
                "Trà vạn lý hương": { 
                    items: [], 
                    tabContentStrong: "Trà Vạn Lý Hương", 
                    tabContentParagraph: "Vị ngọt thanh và hương thơm tự nhiên của Trà Vạn Lý Hương làm gợi nhớ tới những vùng đất xa xôi nơi những chén trà là đầu câu chuyện, là gợi mở tâm linh, là giao thoa văn hóa và kết nối lòng người." 
                },
                "Trà thái nguyên": { 
                    items: [], 
                    tabContentStrong: "Trà Thái Nguyên", 
                    tabContentParagraph: "Là một thức uống đặc sản trong nền văn hóa trà của Việt Nam. Thái Nguyên được thiên nhiên ưu ái về vị trí địa lý và khí hậu nhiệt đới rất thích hợp cho việc trồng và phát triển cây trà. Trà Thái Nguyên từ xưa đến nay vẫn được gọi với tên gọi “Đệ nhất danh trà” bởi hương vị ngọt hậu lắng đọng vị giác, mang lại sự tươi trẻ và thư thái khi thưởng thức." 
                },
                "Trà gói cao cấp": { 
                    items: [], 
                    tabContentStrong: "Trà Gói Cao Cấp", 
                    tabContentParagraph: "Trà gói lưu giữ hương vị tươi nguyên nhất của những lá trà hảo hạng, thích hợp để pha chế những ly trà đậm vị, thơm ngon và đem lại nhiều lợi ích cho sức khỏe khi cùng thưởng thức bên gia đình và người thân." 
                },
        },
    },
    "Bakery": {
        tabs: [],
        content: {
            "default": { 
                    items: ItemData12, 
                    tabContentStrong: "Danh mục những món bánh thơm ngon hảo hạng", 
                    tabContentParagraph: "Chúng tôi tin rằng từng sản phẩm trà và cà phê sẽ càng thêm hảo hạng khi được tạo ra từ sự phấn đấu không ngừng cùng niềm đam mê. Và chính kết nối dựa trên niềm tin, sự trung thực và tin yêu sẽ góp phần mang đến những nét đẹp trong văn hóa thưởng trà và cà phê ngày càng bay cao, vươn xa." 
                }, 
        },
    },
    "Trung thu": {
        tabs: ["Bánh Trung Thu", "Hộp 4 bánh trung thu tiêu chuẩn", "Hộp 4 bánh trung thu cao cấp", "Hộp 4 bánh 'thanh dạ thưởng nguyệt'", "Bánh trung thu" ],
        content: {
            "default": { 
                items: ItemData13, 
                tabContentStrong: "PHÚC LONG NIÊN - THƯỞNG MINH NGUYỆT", 
                tabContentParagraph: "Phúc Long trân trọng giới thiệu Bộ sưu tập Bánh Trung Thu 2024 'Phúc Long Niên, Thưởng Minh Nguyệt', mang đến tám hương vị Bánh Trung Thu được chứa đựng trong hộp quà thiết kế sang trọng" ,
                tabContentImage: "https://hcm.fstorage.vn/images/2024/07/hinh_btt_delivery_app_1200x1200-20240722074418.jpg"
            }, 
            "Bánh Trung Thu": { 
                items: ItemData13, 
                tabContentStrong: "Phúc Long Niên, Thưởng Minh Nguyệt", 
                tabContentParagraph: "Tám hương vị bánh Trung Thu của Phúc Long được tuyển chọn tinh tế và tỉ mỉ từ các hương vị truyền thống như Đậu Xanh Hạnh Nhân, Khoai Môn, Sữa Dừa, Gà Quay Jambon, Thập Cẩm Jambon đến hiện đại như Lava Choco tan chảy, Tuyết Trà Xanh và không kém phần cao cấp như Cua Bát Bửu, là sự kết hợp hài hòa giữa nét tinh túy ẩm thực xưa và nay. Mỗi chiếc bánh không chỉ là món quà ngon miệng mà còn là lời chúc phát đạt và trường tồn mà Phúc Long trân trọng gửi đến quý khách hàng.",
                tabContentImage:"https://hcm.fstorage.vn/images/2024/07/hinh_btt_delivery_app_1200x1200-20240722091951.jpg",
            },
            "Hộp 4 bánh trung thu tiêu chuẩn": { 
                items: [], 
                tabContentStrong: "HỘP 4 BÁNH TRUNG THU TIÊU CHUẨN", 
                tabContentImage:"https://hcm.fstorage.vn/images/2024/07/hinh-btt_delivery-app_combo-hop-4-banh-tieu-chuan-20240722091420.jpg",
                tabContentParagraph: "Hộp 4 Bánh Trung Thu Kèm Lễ hộp quà tặng & Trà Lài cao cấp (Bánh 1 trứng, 150g/bánh)", 
                tabContentParagraph1:"Bánh Gà Quay Jambon",
                tabContentParagraph2: "Bánh Thập Cẩm Jambon",
                tabContentParagraph3: "Bánh Khoai Môn",
                tabContentParagraph4:"Bánh Sữa Dừa",
                tabContentParagraph5:"Bánh Đậu Xanh Hạnh Nhân",
                tabContentParagraph6:"Bánh Lava Choco Tan Chảy",
                tabContentParagraph7:"Bánh Tuyết Trà Xanh",
                tabContentParagraph8:"(Lựa chọn tối đa 2 bánh mặn: Gà Quay Jambon, Thập Cẩm Jambon)"
            },
            "Hộp 4 bánh trung thu cao cấp": { 
                items: [], 
                tabContentStrong: "HỘP 4 BÁNH TRUNG THU CAO CẤP", 
                tabContentParagraph: "Hộp 4 Bánh Trung Thu Kèm Lễ hộp quà tặng & Trà Lài cao cấp (Bánh 1 trứng, 150g/bánh)",
                tabContentImage:"https://hcm.fstorage.vn/images/2024/07/hinh-btt_delivery-app_combo-hop-4-banh-cao-cap-20240722091626.jpg",
                tabContentParagraph1:"Bánh Cua Bát Bửu",
                tabContentParagraph2: "Bánh Gà Quay Jambon",
                tabContentParagraph3: "Bánh Thập Cẩm Jambon",
                tabContentParagraph4:"Bánh Khoai Môn",
                tabContentParagraph5:"Bánh Sữa Dừa",
                tabContentParagraph6:"Bánh Đậu Xanh Hạnh Nhân",
                tabContentParagraph7:"Bánh Lava Choco Tan Chảy",
                tabContentParagraph8:"(Lựa chọn tối đa 1 bánh Cua Bát Bửu)" 
            },
            "Hộp 4 bánh 'thanh dạ thưởng nguyệt'": { 
                items: [], 
                tabContentStrong: "COMBO HỘP 4 BÁNH 'THANH DẠ THƯỞNG NGUYỆT'", 
                tabContentParagraph: "Hộp 4 Bánh Trung Thu Kèm Lễ hộp quà tặng & Trà Ô Long cao cấp (Bánh 1 trứng, 150g/bánh)", 
                tabContentImage:"https://hcm.fstorage.vn/images/2024/07/hinh-btt_delivery-app_combo-hop-4-banh-20240722092059.jpg",
                tabContentParagraph1:"Bánh Cua Bát Bửu",
                tabContentParagraph2: "Bánh Gà Quay Jambon",
                tabContentParagraph3: "Bánh Thập Cẩm Jambon",
                tabContentParagraph4:"Bánh Khoai Môn",
                tabContentParagraph5:"Bánh Sữa Dừa",
                tabContentParagraph6:"Bánh Đậu Xanh Hạnh Nhân",
                tabContentParagraph7:"Bánh Lava Choco Tan Chảy", 
            },
            "Bánh trung thu": { 
                items: [], 
                tabContentStrong: "Phúc Long Niên, Thưởng Minh Nguyệt", 
                tabContentParagraph: "Tám hương vị bánh Trung Thu của Phúc Long được tuyển chọn tinh tế và tỉ mỉ từ các hương vị truyền thống như Đậu Xanh Hạnh Nhân, Khoai Môn, Sữa Dừa, Gà Quay Jambon, Thập Cẩm Jambon đến hiện đại như Lava Choco tan chảy, Tuyết Trà Xanh và không kém phần cao cấp như Cua Bát Bửu, là sự kết hợp hài hòa giữa nét tinh túy ẩm thực xưa và nay.", 
                tabContentParagraph1:"Mỗi chiếc bánh không chỉ là món quà ngon miệng mà còn là lời chúc phát đạt và trường tồn mà Phúc Long trân trọng gửi đến quý khách hàng.",
                tabContentImage:"https://hcm.fstorage.vn/images/2024/07/hinh_btt_delivery_app_1200x1200-20240723111813.jpg",
            },
        },
    },
    "Quà tặng": {
        tabs: [],
        content: {
            "default": { 
                items: [], 
                tabContentStrong: [], 
                tabContentParagraph: [] 
            }, 
        },
    },
};

const Drink = () => {
    const navigate = useNavigate();
    const { categoryName = "Thức uống", tabName } = useParams();

    const [selectedCategory, setSelectedCategory] = useState(categoryName);
    const [selectedTab, setSelectedTab] = useState(tabName || null);

    useEffect(() => {
        if (categoryName && Object.keys(categoriesContent).includes(categoryName)) {
            setSelectedCategory(categoryName);
        }
        if (tabName && categoriesContent[selectedCategory]?.tabs.includes(tabName)) {
            setSelectedTab(tabName);
        } else if (!tabName) {
            setSelectedTab(null); // Set default tab when no tab is provided
        }
    }, [categoryName, tabName, selectedCategory]);

    const categoryTabs = categoriesContent[selectedCategory].tabs;
    const categoryItems = selectedTab 
        ? categoriesContent[selectedCategory].content[selectedTab].items 
        : categoriesContent[selectedCategory].content["default"].items; // Default data when no tab is selected
    // texttab
    const tabContentImage = selectedTab 
        ? categoriesContent[selectedCategory].content[selectedTab].tabContentImage 
        : categoriesContent[selectedCategory].content["default"].tabContentImage;

    const tabContentStrong = selectedTab 
        ? categoriesContent[selectedCategory].content[selectedTab].tabContentStrong 
        : categoriesContent[selectedCategory].content["default"].tabContentStrong;

    const tabContentParagraph = selectedTab 
        ? categoriesContent[selectedCategory].content[selectedTab].tabContentParagraph 
        : categoriesContent[selectedCategory].content["default"].tabContentParagraph;
        // imagetab
    
        // texttab
    const {
        tabContentParagraph1,
        tabContentParagraph2,
        tabContentParagraph3,
        tabContentParagraph4,
        tabContentParagraph5,
        tabContentParagraph6,
        tabContentParagraph7,
        tabContentParagraph8
    } = categoriesContent[selectedCategory].content[selectedTab || "default"];  
    const categoryImages = {
        "Thức uống": "https://hcm.fstorage.vn/images/2022/coffee-cup2x_b8990365-a372-4e3c-bd7d-5c7728588f72_cb6a7389-161d-4f0e-a447-24eb31b7ad11-og.png",
        "Cà phê": "https://hcm.fstorage.vn/images/2022/coffee-bean2x_9819b7f6-86e2-46a7-aec3-4ffdbb64db34_f3d86579-c37d-4094-8d95-3bd8fe24ca4a-og.png",
        "Trà": "https://hcm.fstorage.vn/images/2022/ic-voucher2x_e4171001-4ceb-40fc-911b-80c65db95224_fdbe134b-ccf4-49be-a631-d3acb3cd0b48-og.png",
        "Bakery": "https://hcm.fstorage.vn/images/2022/bakery_64ca087b-ca66-4481-ada8-0d96f6a798c5-og.png",
        "Trung thu": "https://hcm.fstorage.vn/images/2022/banh-trung-thu_23915edf-3bb9-4475-a457-37e1a5a85dc0-og.png",
        "Quà tặng": "https://hcm.fstorage.vn/images/2022/doodle-freehand-sketch-drawing-of-a-gift-box-free-vector.png",
    };
    const isMobile = useMediaQuery({ query: '(max-width: 990px)' }); // Check if the screen width is <= 990px

    return (
        
        <>
     {isMobile && <Header/>} {/* Only render Header in mobile view */}
            <div className="content-wrapper">
                <div className="categories-block">
                    <ul className="breadcrumbstyle__BreadCrumbContainer-sc-1u4g520-0 dZhUqB">
                        <li><Link to="/">Trang chủ</Link></li>
                        <li>/</li><li>Sản phẩm</li>
                    </ul>
                    <div className="categories-content">
                        <div className="categories-content__left">
                            <div className="categories-content__left-inner">
                                <div className="categories-content__sticky">
                                    <div className="categories-content__sticky-inner">
                                        <div className="categories-content__sticky-wrapper">
                                            {/* Map through your categories */}
                                            {Object.keys(categoriesContent).map((category) => (
                                                <div
                                                    key={category}
                                                    className={`item-category ${selectedCategory === category ? 'active' : ''}`}
                                                    onClick={() => {
                                                        navigate(`/drink/${category}`);
                                                        setSelectedCategory(category);
                                                        setSelectedTab(null); // Reset the selected tab when changing category
                                                    }}
                                                >
                                                    <div className="image">
                                                        <Link to={`/drink/${category}`}>
                                                            <img src={categoryImages[category]} alt={category} />
                                                        </Link>
                                                    </div>
                                                    <div className="name">
                                                        <Link to={`/drink/${category}`}>
                                                            <div title={category}>{category}</div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="categories-content__right">
                            <div className="sticky-outer-wrapper">
                                <div className="sticky-inner-wrapper">
                                    <div className="category__TopRightFilterContainer-sc-1fo0ahk-22 hvQrlu">
                                        {/* Render Tabs */}
                                        <div className="list">
                                            {categoryTabs.map((tab) => (
                                                <div className="item" key={tab}>
                                                    <Link
                                                        to={`/drink/${selectedCategory}/${tab}`}
                                                        className={`category__CategoryLink-sc-1fo0ahk-25 jjvehi ${selectedTab === tab ? 'active' : ''}`}
                                                        onClick={() => setSelectedTab(tab)}
                                                    >
                                                        {tab}
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                        <hr className="divider" />
                                    </div>
                                </div>
                            </div>
                            {/* Content for the selected tab */}
                            <div className="category__CategoryDescriptionContainer-sc-1fo0ahk-23 jLJAcw">
                                <div className="description">
                                    <p>
                                        <strong style={{ color: 'rgb(230, 0, 0)' }}>
                                            {tabContentStrong} {/* Render specific content for the strong tag */}
                                        </strong>
                                    </p>
                                    <p>
                                        {tabContentParagraph} {/* Render specific content for the paragraph */}
                                    </p>
                                    <p><br></br></p>
                                    <p>
                                        {tabContentParagraph1} {/* Render specific content for the paragraph */}
                                    </p>
                                    <p>
                                        {tabContentParagraph2}{/* Render specific content for the paragraph */}
                                    </p>
                                    <p>
                                        {tabContentParagraph3}{/* Render specific content for the paragraph */}
                                    </p>
                                    <p>
                                        {tabContentParagraph4} {/* Render specific content for the paragraph */}
                                    </p>
                                    <p>
                                        {tabContentParagraph5} {/* Render specific content for the paragraph */}
                                    </p>
                                    <p>
                                        {tabContentParagraph6}  {/* Render specific content for the paragraph */}
                                    </p>
                                    <p>
                                        {tabContentParagraph7} {/* Render specific content for the paragraph */}
                                    </p>
                                    <p><br></br></p>
                                    <p><em>
                                    {tabContentParagraph8}
                                    </em></p>
                                </div>
                                <div
                                    className="image"
                                    style={{
                                        backgroundImage: `url(${tabContentImage})`,
                                        backgroundPosition: 'center center',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'contain',
                                    }}
                                />
                            </div>
                            <div className="category__ProductCountContainer-sc-1fo0ahk-24 haFcjs">
                                <span>Có <strong>{categoryItems.length}</strong> sản phẩm</span>
                            </div>
                            <div className="product-block">
                                <div className="product-block__grid">
                                    {/* Render products based on the selected tab */}
                                    {categoryItems.map((item) => (
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
// Reusable component for each product item
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
export default memo(Drink);

import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'Nguyen Hoang',
            email: 'nguyenhoangkk99@gmail.com',
            password: bcrypt.hashSync('hoangkk99', 8),
            isAdmin: false,
        },
        {
            name: 'Admin',
            email: 'unitop-admin@gmail.com',
            password: bcrypt.hashSync('admin', 8),
            isAdmin: true,
        },
    ],
    products: [
        {

            image: '/images/img-product.jpg',
            name: "iPhone 12 Pro Max I Chính hãng VN/A",
            price: 29800000,
            description: 'Cứ mỗi năm, đến dạo cuối tháng 8 và gần đầu tháng 9 thì mọi thông tin sôi sục mới về chiếc iPhone mới lại xuất hiện. Apple năm nay lại ra thêm một chiếc iPhone mới với tên gọi mới là iPhone 12 Pro Max, đây là một dòng điện thoại mới và mạnh mẽ nhất của nhà Apple năm nay. Mời bạn tham khảo thêm một số mô tả sản phẩm bên dưới để bạn có thể ra quyết định mua sắm.',
            countInStock: 5,
            type: 'Phone',

        },
        {

            image: '/images/img-product-2.jpg',
            name: "Samsung Galaxy S21 Ultra 5G",
            price: 29300000,
            description: 'Galaxy S21 Ultra với những cải tiến đáng kể về hiệu năng của máy cực kỳ mạnh mẽ cùng với thiết kế sang trọng cao cấp. Samsung đã mang đến cho người dùng một trải nghiệm hoàn toàn mới, đây hứa hẹn sẽ là chiếc smartphone đi đầu trên thế giới về các xu hướng công nghệ lẫn hiệu năng vượt trội đáng sở hữu nhất vào thời điểm ra mắt. ',
            countInStock: 5,
            type: 'Phone',
        },
        {

            image: '/images/img-product-3.jpg',
            name: "Samsung Galaxy Note 20 Ultra 5G",
            price: 22990000,
            description: 'Bên cạnh biên bản Galaxy Note 20 thường, Samsung còn cho ra mắt Note 20 Ultra 5G cho khả năng kết nối dữ liệu cao cùng thiết kế nguyên khối sang trọng, bắt mắt. Đây sẽ là sự lựa chọn hoàn hảo dành cho bạn để sử dụng mà không bị lỗi thời sau thời gian dài ra mắt.',
            countInStock: 5,
            type: 'Phone',
        },
        {

            image: '/images/img-product-4.jpg',
            name: "Xiaomi Redmi Note 10",
            price: 5490000,
            description: 'Đến hẹn lại lên, trong năm nay Xiaomi tiếp tục làm mới bộ sưu tập thiết bị tầm trung của mình với chiếc smartphone mới trong dòng Redmi Note, thiết bị mang tên Redmi Note 10. Những chiếc điện thoại Xiaomi Redmi Note đã quá hot, liệu chiếc smartphone mới này có đủ sức làm lu mờ đi những sản phẩm tiền nhiệm không. ',
            countInStock: 5,
            type: 'Phone',
        },
        {

            image: '/images/img-product-5.jpg',
            name: "Laptop Lenovo Yoga 6 13ARE05 82FN0052VN",
            price: 18900000,
            description: 'Nếu bạn đang tìm kiếm một chiếc laptop làm việc đa chức năng với hiệu suất vượt trội, sản phẩm laptop Lenovo Yoga 6 13ARE05 82FN0052VN với bộ vi xử lý Ryzen 5 PRO 4650U sẽ đáp ứng trọn vẹn tất cả nhu cầu làm việc của bạn.',
            countInStock: 5,
            type: 'Laptop',
        },
        {

            image: '/images/img-product-6.jpg',
            name: "Laptop Acer Nitro 5 AN515-55-5923 ",
            price: 19590000,
            description: 'Ngày nay, khi người dùng lựa chọn cho mình một chiếc laptop để sử dụng luôn quan tâm đến nhu cầu sử dụng vừa để làm việc vừa để giải trí chơi game. Vì vậy lựa chọn cho mình một chiếc laptop gaming là một giải pháp phù hợp cho mọi nhu cầu sử dụng của bạn. Acer Nitro 5 là chiếc laptop đến từ thương hiệu Acer sẽ mang đến một cách nhìn hoàn toàn mới về các nhu cầu sử dụng trên dòng laptop gaming có thể mang lại cho người dùng.',
            countInStock: 5,
            type: 'Laptop',
        },
        {

            image: '/images/img-product-7.jpg',
            name: "Laptop ASUS Gaming ROG Zephyrus GA401",
            price: 18900000,
            description: 'Không chỉ dừng lại ở các thế hệ laptop gaming đa dạng ở tầm trung, Asus còn cho ra mắt một thế hệ laptop cực kỳ mạnh mẽ đại diện cho phân khúc cao cấp. Laptop ASUS Gaming ROG Zephyrus GA401II là một trong những cái tên đáng được bạn cân nhắc trong quá trình sử dụng.',
            countInStock: 5,
            type: 'Laptop',
        },
        {

            image: '/images/img-product-8.jpg',
            name: "Laptop ASUS ZenBook UX325EA",
            price: 20290000,
            description: 'ASUS ZenBook UX325EA là chiếc laptop đầu tiên trang bị bộ vi xử lý Tiger Lake thế hệ 11 mới nhất mang đến hiệu suất vượt trội. Bên cạnh đó, lối thiết kế đặc trưng sang trọng dành cho doanh nhân khiến người dùng không thể rời nửa mắt.',
            countInStock: 5,
            type: 'Laptop',
        },
        {

            image: '/images/img-product-9.jpg',
            name: "Samsung Galaxy Tab S7 Plus",
            price: 19990000,
            description: 'Máy tính bảng giờ đây đã trở thành một sản phẩm công nghệ quen thuộc và quan trọng đối với rất nhiều người. Ngày qua ngày, người dùng đều mong muốn nhu cầu sử dụng của họ sẽ tốt hơn và đòi hỏi cao hơn về một chiếc tablet Samsung. Thấu hiểu điều đó, tập đoàn Samsung đã cho ra mắt máy tính bảng Samsung Galaxy Tab S7 và Tab S7 Plus. Đây được xem là chiếc tablet được trang bị những tính năng hiện đại bậc nhất cùng thời lượng pin cực khủng, giúp giải quyết nỗi lo hụt pin cho cả ngày sử dụng.',
            countInStock: 5,
            type: 'Tablet',
        },
        {

            image: '/images/img-product-10.jpg',
            name: "iPad 10.2 2020 WiFi 32GB",
            price: 8600000,
            description: 'iPad đang là một trong những thương hiệu tablet hàng đầu trên thị trường, nhờ uy tín và cam kết chất lượng sản phẩm mà tập đoàn Apple mang lại cho khách hàng của mình trên toàn cầu. Nếu bạn mong muốn có được một chiếc iPad cho bạn trải nghiệm sử dụng thú vị, với vi xử lí mạnh mẽ và sự hỗ trợ đắc lực từ Apple Pencil, cùng mức giá chưa đến 10 triệu đồng thì iPad Gen 8 vừa được ra mắt trong năm nay chính là một gợi ý ấn tượng với bạn và phù hợp cho bạn.',
            countInStock: 5,
            type: 'Tablet',
        },
        {

            image: '/images/img-product-11.jpg',
            name: "iPad Air 10.9 2020 WiFi 64GB",
            price: 14900000,
            description: 'Apple luôn khiến cho cộng đồng công nghệ đứng ngồi không yên mỗi khi cho giới thiệu sản phẩm mới. iPad Air 4 được ra mắt tại sự kiện mà các tín đồ công nghệ nghĩ rằng Apple sẽ trình làng dòng điện thoại iPhone 12 2020, nhưng chiếc tablet này mới chính là nhân vật chính. iPad Air thế hệ 2020 mang những thay đổi về mặt thiết kế cũng như những tính năng mới được tích hợp để tối ưu hóa về hiệu năng, mang đến cho người dùng những trải nghiệm tốt hơn. ',
            countInStock: 5,
            type: 'Tablet',
        },
        {

            image: '/images/img-product-12.jpg',
            name: "iPad Pro 11 2020 WiFi 128GB",
            price: 21200000,
            description: 'Bắt đầu được giới thiệu từ lần đầu vào năm 2015, iPad Pro là dòng tablet cao cấp nhất của Apple. Ở phiên bản 2018, iPad Pro đã sở hữu màn hình viền mỏng cùng hệ thống nhận diện khuôn mặt Face ID. Cho đến hai năm sau, Apple cho ra mắt iPad Pro 11 WiFi 2020 128gb được nâng cấp mạnh mẽ hơn về hiệu năng và camera. Và mới đây, Apple đã cho ra mắt iPad Pro 11 inch 2021 với chip M1 cực mạnh sắp được bán tại CellphoneS với mức giá ưu đãi.',
            countInStock: 5,
            type: 'Tablet',
        },
    ],
}

export default data;
// Câu 1
function sendData(){
    var frm = document.forms['regForm']; // Lấy nội dung của form có tên regForm
    if(frm.timkiem.value.length == 0){ // Lấy nọi dung nút input kiểm tra giá trị đồ dài
        alert("Vui lòng nhập nội dung !");
       frm.timkiem.focus(); // Sự kiện focus()
        return false;
    }
    return true;
}
// Câu 2. Cách 1
function frmValidate5(frm){ 
    return frm.checkValidity(); 
}
// Câu 2. Cách 1

function xacThucForm_DN(){
    var email = document.forms['form_DN'].email; // Lấy dữ liệu của id "email" trong form có tên là "form_DN"
    var password = document.forms['form_DN'].psw;
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(emailReg.test(email.value) == false){
        alert("Email không hợp lệ !");
        return false;
    }
    else if(password.value.length<8){
        alert("Mật khẩu phải trên 8 ký tự !");
        return false;
    }
        alert("Đã gửi dữ liệu");
        return true;
}

function xacThucForm_LH(){
    
    var email = document.forms['form_LH'].email; 
    var hoten = document.forms['form_LH'].hoten;
    var ndung =  document.forms['form_LH'].ndung;
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


    if(hoten.value.length <4){
        alert("Họ tên phải trên 4 ký tự !");
        return false;
    }
    else if(emailReg.test(email.value) == false){
        alert("Email không hợp lệ !");
        return false;
    }
    else if(ndung.value.length<10){
        alert("Nội dung liên hệ trên 10 ký tự !");
        return false;
    }
        alert("Đã gửi dữ liệu");
        return true;
}

function xacThucForm_DK(){
    
    var email = document.forms['form_DK'].email;
    var password = document.forms['form_DK'].psw;
    var repassword = document.forms['form_DK'].psw2;
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(emailReg.test(email.value) == false){
        alert("Email không hợp lệ !");
        return false;
    }
    else if(password.value.length<8 || repassword.value.length<8){
        alert("Mật khẩu phải trên 8 ký tự !");
        return false;
    }
    // Kiểm tra 2 mật khẩu phải trùng nhau
    else if(password.value != repassword.value){
        alert("Mật khẩu không giống nhau !")
        return false;
    }
        alert("Đã gửi dữ liệu");
        return true;
}


// Câu 3. Thêm sản phẩm vào đơn hàng
var itemList={
    "sp001":{ "name":"Sữa Chua Vị Kiwi", 
    "price":21000, 
    "photo":"images/sanpham/kiwi.jpg"}, 
    "sp002":{ "name":"Sữa Chua Vị Xoài", 
    "price":22000, 
    "photo":"images/sanpham/mango.jpg"}, 
    "sp003":{ "name":"Sữa Chua Vị Dưa lưới", 
    "price":23000, 
    "photo":"images/sanpham/cantaloupe.jpg"}, 
    "sp004":{ "name":"Sữa Chua Vị Mâm Xôi", 
    "price":24000, 
    "photo":"images/sanpham/blackberry.jpg"}, 
    "sp005":{ "name":"Sữa Chua Vị Dâu Tây", 
    "price":25000, 
    "photo":"images/sanpham/strawberry.jpg"}, 
    "sp006":{ "name":"Sữa Chua Vị Việt Quất", 
    "price":26000, 
    "photo":"images/sanpham/blueberry.jpg"}, 
    "sp007":{ "name":"Sữa Chua Vị Bưởi", 
    "price":27000, 
    "photo":"images/sanpham/grapes.jpg"}, 
    "sp008":{ "name":"Sữa Chua Vị Táo Xanh", 
    "price":28000, 
    "photo":"images/sanpham/green-apple.jpg"}, 
    "sp009":{ "name":"Sữa Chua Vị Dứa", 
    "price":29000, 
    "photo":"images/sanpham/pineapple.jpg"} 
    };
    
    var itemList={
        "sp001":{ "name":"Sữa Chua Vị Kiwi", 
        "price":21000, 
        "photo":"images/sanpham/kiwi.jpg"}, 
        "sp002":{ "name":"Sữa Chua Vị Xoài", 
        "price":22000, 
        "photo":"images/sanpham/mango.jpg"}, 
        "sp003":{ "name":"Sữa Chua Vị Dưa lưới", 
        "price":23000, 
        "photo":"images/sanpham/cantaloupe.jpg"}, 
        "sp004":{ "name":"Sữa Chua Vị Mâm Xôi", 
        "price":24000, 
        "photo":"images/sanpham/blackberry.jpg"}, 
        "sp005":{ "name":"Sữa Chua Vị Dâu Tây", 
        "price":25000, 
        "photo":"images/sanpham/strawberry.jpg"}, 
        "sp006":{ "name":"Sữa Chua Vị Việt Quất", 
        "price":26000, 
        "photo":"images/sanpham/blueberry.jpg"}, 
        "sp007":{ "name":"Sữa Chua Vị Bưởi", 
        "price":27000, 
        "photo":"images/sanpham/grapes.jpg"}, 
        "sp008":{ "name":"Sữa Chua Vị Táo Xanh", 
        "price":28000, 
        "photo":"images/sanpham/green-apple.jpg"}, 
        "sp009":{ "name":"Sữa Chua Vị Dứa", 
        "price":29000, 
        "photo":"images/sanpham/pineapple.jpg"} 
        };
 /* Phải đổi  Số lượng 
            <input type="number" min="0" max="100" size="3"/>
            <button> Đặt hàng </button>
    Thành    Số lượng 
            <input id="sp001" name="quantity" type="number" min="0" max="100" size="3"/>
            <input type="submit" onclick="addCart('sp001')" value="Đặt hàng">
  */        

function addCart(code){
    let number = parseInt(document.querySelector('#' + code).value); // Lấy số lượng đã thêm của msp ở nít "Đặt hàng"
    // console.log(number);
    if(number < 1 || number > 100 )
        alert("Số lượng có thể đặt từ 1 - 100 !");
    else{
        if(typeof localStorage[code] === "undefined"){ // Kiểm tra sp đã được thêm lần nào chưa ?. Nếu chưa thì thêm mSP vào localStorage !
            window.localStorage.setItem(code,number);
            alert("Đặt "+number+" sản phẩm thành công !");
     //       console.log(window.localStorage);
        }
        else{
            var currentNumber = parseInt(window.localStorage.getItem(code)); // Lấy số lượng hiện tại có trong localstorage.
            if (currentNumber + number < 100){ // Nếu số lượng hiện tại + số lượng đã thêm trước đây < 100 thì tính tổng
                window.localStorage.setItem(code, currentNumber + number);
                var total=currentNumber + number;
                alert("Bạn vừa thên "+number+" sản phẩm vào đơn hàng !. Tổng là "+total+" đơn !");
              //  console.log(window.localStorage);
            }
            else{
                window.localStorage.setItem(code, 100); 
                alert("Bạn đã đặt quá 100 đơn hàng !");
               // console.log(window.localStorage);
            }
        }
    }
}

// Câu 4.
/*
function sendDonHang(){
    //  window.location.href = "donhang.html"; // Truy cập đến trang "donhang.html"
    window.open("donhang.html",'_blank'); // chuyển link ở tab mới
}

function showCart(){
    var TotalPreTax = 0 //Tổng Trước Thuế
    for(key in localStorage){
        var item = itemList[key] //Thông tin sản phẩm
        var photo = item.photo //Hình sản phẩm
        var name = item.name //Tên
        var price = item.price //Giá 
        var orderNumber= localStorage.getItem(key) //Số lượng đặt hàng

        //Tạo các ô dữ liệu hiển thị thông tin sản phẩm
        //Tạo ô dữ liệu chứa hình sản phẩm
        item = document.createElement("td");
        photo = document.createElement("td");
        photo.innerHTML ="<img scr='" + photo + "'class='round-figure' width='100px'/>";
        name = document.createElement("td");
        price = document.createElement("td");
        orderNumber = document.createElement("td");

        let total = document.createElement("td");
        total = numberFormat.format(item.price * window.localStorage.getItem(key));

        let rm = document.createElement("td"); // Nút xóa đơn hàng
        rm.innerHTML = "<i class= 'fa fa-trash icon-pink'";

        // Tạo hàng
        let tr = document.createElement('tr');
        tr.appendChild(photo);
        tr.appendChild(name);
        tr.appendChild(price);
        tr.appendChild(name);
        tr.appendChild(total);
        tr.appendChild(rm);

        let tbody = document.getElementsByTagName("tbody");
        tbody.appendChild(tr);

        TotalPreTax = TotalPreTax + (item.price * window.localStorage.getItem(key));
    }
    var TotalPreTax = document.getElementById('TotalPreTax');
    TotalPreTax = numberFormat.format(TotalPreTax);

    var discountRate = document.getElementById('discountRate');
    discountRate = getDiscountRate();

    var discount = document.getElementById('discount');
    discount = numberFormat.format(discountRate * TotalPreTax);

    var Tax = document.getElementById('Tax');
    discount = numberFormat.format(0.1 * (TotalPreTax - discount));

    var Total = document.getElementById('Total');
    discount = numberFormat.format(TotalPreTax - discount + tax);
}

function getDiscountRate() {
    var d = new Date();
    var weekday = d.getDay();
    var totalMins = d.getHours() * 60 + d.getMinutes();
    if (weekday >= 1 && weekday <= 3 && ((totalMins >= 420 && totalMins <= 660) || (totalMins >= 780 && totalMins <= 1020)))
        return 0.1;
    return 0;
}

function removeCart(code) {
    if (typeof window.localStorage[code] !== "undefined") {
        window.localStorage.removeItem(code);
        document.getElementById("cartDetail").getElementsByTagName('tbody')[0].innerHTML = "";
        showCart();
    }
}

window.onstorage = () => {
    showCart();
}
*/


// Câu 4

function sendDonHang(){
    //  window.location.href = "donhang.html"; // Truy cập đến trang "donhang.html"
    window.open("donhang.html",'_blank'); // chuyển link ở tab mới
}

function showCart() {
    let TotalPreTax = 0;
    let donhang = document.querySelector('table#donhang tbody');

    for (e in window.localStorage) {
        if (itemList[e]) {
            let tr = document.createElement('tr');
            tr.id=e;

            let photo = document.createElement('td');
            let prdimg = new Image();
            prdimg.src = itemList[e].photo;
            prdimg.style.width = '100px';
            photo.appendChild(prdimg);
            tr.appendChild(photo);
            

            let name = document.createElement('td');
            name.innerHTML = itemList[e].name;
            tr.appendChild(name);

            let number = document.createElement('td');
            number.innerHTML = window.localStorage.getItem(e);
            tr.appendChild(number);

            let price = document.createElement('td');
            price.innerHTML = VNDFomat(itemList[e].price);
            tr.appendChild(price);

            let total = document.createElement('td');
            total.innerHTML = VNDFomat(itemList[e].price * window.localStorage.getItem(e));
            tr.appendChild(total);

            let removeProduct = document.createElement('td');
            removeProduct.innerHTML = `<button onclick="removeCart('${e}')" data-key=${e} class="cartNav removeprd-btn"> <i class="fa fa-trash icon-pink"></i></button>`
            tr.appendChild(removeProduct);

            donhang.appendChild(tr)

            TotalPreTax += itemList[e].price * window.localStorage.getItem(e);
        }
    }

    let TotalPreTaxSpan=document.getElementById('TotalPreTax');
    let discountRateSpan=document.getElementById('discountrate');
    let discountSpan=document.getElementById('discount');
    let taxSpan=document.getElementById('tax');
    let TotalSpan=document.getElementById('Total');

    TotalPreTaxSpan.innerHTML = VNDFomat(TotalPreTax);

    let discountrate = getDiscountRate();
    discountRateSpan.innerHTML = discountrate;

    let discount = discountrate*TotalPreTax;
    discountSpan.innerHTML = VNDFomat(discount);

    let tax = 0.1*(TotalPreTax - discount);
    taxSpan.innerHTML = VNDFomat(tax);

    let total = TotalPreTax - discount + tax;
    TotalSpan.innerHTML = VNDFomat(total);

}

function removeCart(code) {
    if (typeof window.localStorage[code] !== "undefined") {
        window.localStorage.removeItem(code);
        document.querySelector('tr#'+code).outerHTML='';
        window.location.reload();
        // showCart();
    }
}

function getDiscountRate() {
    var d = new Date();
    var weekday = d.getDay();
    var totalMins = d.getHours() * 60 + d.getMinutes(); 
    if (weekday >= 1 && weekday <= 3 && ((totalMins >= 420 && totalMins <= 660) || (totalMins >= 780 && totalMins <= 1020)))
        return 0.1;
    return 0;
}

function VNDFomat(number) {
    return new Intl.NumberFormat('vi-VI', {
        style: 'currency', currency: 'VND'
    }).format(number);
}

window.onstorage =()=>{
    window.location.reload();
    showCart();
}

if(window.location.pathname=='/donhang.html') showCart();


var uberX = document.getElementById("uberX").value;
var uberSUV = document.getElementById("uberSUV").value;
var uberBlack = document.getElementById("uberBlack").value;
var loaiXe = "";
var btnTinhTien = document.getElementById("btnTinhTien");
var btnInHoaDon = document.getElementById("btnInHoaDon");
var tienBac1 = 0;
var tienBac2 = 0;
var tienBac3 = 0;
var tienCho = 0;
var kmBac1 = 0;
var kmBac2 = 0;
var kmBac3 = 0;
var gioCho = 0;

btnTinhTien.onclick = function () {

    var a = document.getElementsByName("selector");
    var KM = document.getElementById("txtKM").value * 1;
    var TgCho = document.getElementById("txtTgCho").value * 1;
    a.forEach(item => {
        // console.log(item.id); console.log(item.checked);
        if (item.checked) loaiXe = item.id;
    });
    if ((loaiXe === "") || txtKM === "" || txtTgCho === "") {
        alert("Vui long chon loai xe");
        console.log("txtKM: " + txtKM);
        console.log("txtTgCho: " + txtTgCho);
        console.log("loaiXe: " + loaiXe);
    } else if (loaiXe === "uberX") {
        console.log("uberX");
        tienBac1 = 8000;
        tienBac2 = 12000;
        tienBac3 = 10000;
        tienCho = 2000;
    } else if (loaiXe === "uberSUV") {
        console.log("uberSUV");
        tienBac1 = 9000;
        tienBac2 = 14000;
        tienBac3 = 12000;
        tienCho = 3000;
    } else if (loaiXe === "uberBlack") {
        console.log("uberBlack");
        tienBac1 = 10000;
        tienBac2 = 16000;
        tienBac3 = 14000;
        tienCho = 4000;
    }



    var kmBac3 = (KM - 21 < 0 ? 0 : (KM - 21));
    
    console.log("kmBac3: " + kmBac3);


    var kmBac2 = ((KM - kmBac3 - 1) < 0 ? 0 : (KM - kmBac3 - 1));
    // kmBac2<0?0:kmBac2;
    console.log("kmBac2: " + kmBac2);

    var kmBac1 = ((KM - kmBac2 - kmBac3) < 0 ? 0 : (KM - kmBac2 - kmBac3));
    // kmBac1<0?0:kmBac1;
    console.log("kmBac1: " + kmBac1);
    // var gioCho = 0;
    var tienTra = tienBac1 * kmBac1 + tienBac2 * kmBac2 + tienBac3 * kmBac3 + TgCho * tienCho;
    console.log("tienTra: " + tienTra);
    document.getElementById("giaBac1").innerHTML = "<td>" + loaiXe + "</td>" +
        "<td>" + kmBac1 + " km</td>" +
        "<td>" + tienBac1 + "</td>" +
        "<td>" + tienBac1 * kmBac1 + "</td>";
    kmBac1 == 0 ? "" : document.getElementById("giaBac1").className = "hien";

    document.getElementById("giaBac2").innerHTML = "<td>" + loaiXe + "</td>" +
        "<td>" + kmBac2 + " km</td>" +
        "<td>" + tienBac2 + "</td>" +
        "<td>" + tienBac2 * kmBac2 + "</td>";
    kmBac2 == 0 ? "" : document.getElementById("giaBac2").className = "hien";

    document.getElementById("giaBac3").innerHTML = "<td>" + loaiXe + "</td>" +
        "<td>" + kmBac3 + " km</td>" +
        "<td>" + tienBac3 + "</td>" +
        "<td>" + tienBac3 * kmBac3 + "</td>";
    kmBac3 == 0 ? "" : document.getElementById("giaBac3").className = "hien";

    document.getElementById("timeCho").innerHTML = "<td> Thời gian chờ </td>" +
        "<td>" + TgCho + " phút</td>" +
        "<td>" + tienCho + "</td>" +
        "<td>" + TgCho * tienCho + "</td>";
    TgCho == 0 ? "" : document.getElementById("timeCho").className = "hien";

    document.getElementById("thanhTien").innerHTML = "<th colspan='3'> Total </td>" +

        "<td>" + tienTra + "</td>";
    document.getElementById("thanhTien").classList = "hien highlight";
    var cot = document.querySelectorAll("#hoadon th,#hoadon tr td");
    console.log(cot);
    cot.forEach(item => { console.log(item); item.className = "pl-3"; });
    console.log(document.getElementsByTagName("td"));
   alert("thành tiền: "+tienTra +" - bấm in hóa đơn để xem chi tiết.");

}


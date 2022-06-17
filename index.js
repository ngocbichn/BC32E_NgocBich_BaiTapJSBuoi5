// BAI 1 //
document.getElementById('btnKetQuaB1').onclick = function () {
    //input
    var diemChuan = Number(document.getElementById('diemChuan').value);
    var khuVuc = Number(document.getElementById('khuVuc').value);
    var doiTuong = Number(document.getElementById('doiTuong').value);
    var diemMon1 = Number(document.getElementById('diemMon1').value);
    var diemMon2 = Number(document.getElementById('diemMon2').value);
    var diemMon3 = Number(document.getElementById('diemMon3').value);
    //output
    var tongDiem = 0;
    var ketQua = '';
    //progress

    tongDiem = diemMon1 + diemMon2 + diemMon3;

    //diem cong khu vuc
    if(khuVuc === 2) {
        tongDiem = tongDiem + 2;
    }else if(khuVuc === 1) {
        tongDiem = tongDiem + 1;
    }else if(khuVuc === 0.5) {
        tongDiem = tongDiem + 0.5;
    }else {
        tongDiem = tongDiem + 0;
    }

    //diem cong doi tuong
    if(doiTuong === 1) {
        tongDiem = tongDiem + 2.5;
    }else if(doiTuong === 2) {
        tongDiem = tongDiem + 1.5;
    }else if(doiTuong === 3) {
        tongDiem = tongDiem + 1;
    }else {
        tongDiem = tongDiem + 0;
    }

    //xet diem
    if(tongDiem >= diemChuan && diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
        ketQua = "Đậu, tổng điểm là " + tongDiem;
    }else {
        ketQua = "Rớt, tổng điểm là " + tongDiem;
    }

    //in ra giao dien
    document.getElementById('ketQuaB1').innerHTML = ketQua;
}

// BAI 2 //
document.getElementById('btnTinhTienDien').onclick = function () {
    //input
    var ten = document.getElementById('tenChuHo').value;
    var soKW = Number(document.getElementById('soKW').value);
    //output
    var tongTien = 0;
    //progress
    if(soKW > 0 && soKW <= 50) {
        tongTien = soKW * 500;
    }else if(soKW > 50 && soKW <= 100) {
        tongTien = (50 * 500) + (soKW - 50)*650;
    }else if(soKW > 100 && soKW <= 200) {
        tongTien = (50 * 500) + (50 * 650) + (soKW - 100)*850;
    }else if(soKW > 200 && soKW <= 350) {
        tongTien = (50 * 500) + (50 * 650) + (100 * 850) + (soKW - 200)*1100;
    }else if(soKW > 350) {
        tongTien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (soKW - 350)*1300;
    }else {
        tongTien = 'Không xác định!';
    }

    document.getElementById('ketQuaB2').innerHTML = 'Họ tên: ' + ten + ', phải trả tổng tiền điện là ' + tongTien.toLocaleString() + 'VND';
}
var dssv = [];

var dataJson = localStorage.getItem("DSSV_LOCAL");
if(dataJson != null) {
  result = JSON.parse(dataJson);
  dssv = result.map(function(item) {
    return new SinhVien(
      item.ma,
      item.ten,
      item.email,
      item.matKhau,
      item.toan,
      item.van
      );
    });
    renderDssv(dssv);
  }

function themSv() {
  var _ma = document.getElementById("txtMaSV").value;
  var _ten = document.getElementById("txtTenSV").value;
  var _email = document.getElementById("txtEmail").value;
  var _matKhau = document.getElementById("txtPass").value;
  var _toan = document.getElementById("txtDiemToan").value * 1;
  var _van = document.getElementById("txtDiemVan").value * 1;

  var sv = new SinhVien(_ma, _ten, _email, _matKhau, _toan, _van);
  dssv.push(sv);
  var dataJson = JSON.stringify(dssv);
  localStorage.setItem("DSSV_LOCAL", dataJson);

  renderDssv(dssv);
};

function xoaSv(id) {
  var viTri = dssv.findIndex(function(item) {
    return item.ma == id;
  });
  dssv.splice(viTri, 1);
  renderDssv(dssv);
}

function suaSv(id) {
  var viTri = dssv.findIndex(function(item) {
    return item.ma == id;
  });
  var sv = dssv[viTri];
  console.log(sv);
  document.getElementById("txtMaSV").readOnly = true;
  document.getElementById("txtMaSV").value = sv.ma;
  document.getElementById("txtTenSV").value = sv.ten;
  document.getElementById("txtPass").value = sv.matKhau;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtDiemToan").value = sv.toan;
  document.getElementById("txtDiemVan").value = sv.van;
}
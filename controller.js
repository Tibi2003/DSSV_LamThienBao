function renderDssv(dssv) {
    var contentHTML = "";
    for(var i = 0; i < dssv.length; i++) {
      var sv = dssv[i];
      var trString = `<tr>
                        <td>${sv.ma}</td>
                        <td>${sv.ten}</td>
                        <td>${sv.email}</td>
                        <td>${sv.tinhDTB()}</td>
                        <td>
                          <button onclick="xoaSv('${sv.ma}')" class="btn btn-danger">Xóa</button>
                          <button onclick="suaSv('${sv.ma}')" class="btn btn-warning">Sửa</button>
                        </td>
                      </tr>`;
      contentHTML += trString;
    };
    document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
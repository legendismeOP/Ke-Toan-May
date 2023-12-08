function  replaceslash(inputstring){
    const replacestring =inputstring.replace(/\//g, '-')
    return replacestring;
}
$(document).ready(function () {
    load_data();
    function load_data() {
        $.ajax({
            method: "GET",
            dataType: "json",
            url: "http://localhost:3000/phieuxuathangtralai",
            success: function (data){
                var html = '';
                if(data.length > 0)
                {
                    data.forEach(item => {
                        html += `
                            <tr>
                                <td>`+item.cMaChungTu+`</td>
                                <td>`+item.cLoaiChungTu+`$</td>
                                <td>`+item.dNgayChungTu+`</td>
                                <td>`+item.cSoChungTu+`</td>
                                <td>`+item.cDienGiai+`</td>
                                <td>`+item.cMaKhachHang+`</td>
                                <td>`+item.cTenKhachHang+`</td>
                                <td>`+item.cMaSoThue+`$</td>
                                <td>`+item.cTaiKhoanNoGiaVon+`</td>
                                <td>`+item.cTaiKhoanCoGiaVon+`</td>
                                <td>`+item.cTaiKhoanNoGiaMua+`</td>
                                <td>`+item.cTaiKhoanCoGiaMua+`</td>
                                <td>`+item.cTaiKhoanCoGTGT+`</td>
                                <td>`+item.cBieuThue+`</td>
                                <td>`+item.cSoSeRi+`$</td>
                                <td>`+item.cSoHoaDon+`</td>
                                <td>`+item.dNgayHoaDon+`</td>
                                <td>`+item.nThueSuat+`</td>
                                <td>`+item.nThueGTGT+`</td>
                                <td>`+item.cMatHang+`</td>

                                <td>
                                    <button type="button" class="btn btn-warning btn-sm edit" data-id="`+item._id+`">Edit</button>
                                    <button type="button" class="btn btn-danger btn-sm delete" data-id="`+item.cMaChungTu+`">Delete</button>
                                </td>
                            </tr>
                        `;
                    });
                }
                $('#phieuxuathangtralai tbody').html(html);
                //console.log(html)
            }
        });
    };
    $(document).on('click', '#btnAdd',function(e) {
        e.preventDefault();
        $('#exampleModalLongTitle').text('Tạo Chứng Từ Ghi Sổ');
        $('#modalProduct').modal('show');
    });
    $(document).on('click', '.delete', function(){
                
        var machungtu = $(this).data('id');
        const cMaChungTu = replaceslash(machungtu);
        
      
       
        if(confirm("Are you sure you want to delete this data?"))
        {
            $.ajax({
                url:"http://localhost:3000/phieuxuathangtralai/deletephieuxuathangtralai/"+cMaChungTu,
                method:"DELETE",
                success:function()
                {
                    alert("Delete Successfully!");
                    load_data();
                }
            });
        }
    });
})
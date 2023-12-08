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
            url: "http://localhost:3000/danhmuctaikhoan",
            success: function (data){
                var html = '';
                if(data.length > 0)
                {
                    data.forEach(item => {
                        html += `
                            <tr>
                                <td>`+item.cTaiKhoan+`</td>
                                <td>`+item.cTenTaiKhoan+`$</td>
                                <td>`+item.nSoDuNoDau+`</td>
                                <td>`+item.nSoDuCoDau+`</td>
                                <td>`+item.bCoDinhKhoan+`</td>
                                <td>`+item.cCap+`</td>
                                <td>`+item.dNgaySoDu+`</td>

                                <td>
                                    <button type="button" class="btn btn-warning btn-sm edit" data-id="`+item._id+`">Edit</button>
                                    <button type="button" class="btn btn-danger btn-sm delete" data-id="`+item.cTaiKhoan+`">Delete</button>
                                </td>
                            </tr>
                        `;
                    });
                }
                $('#danhmuctaikhoan tbody').html(html);
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
                
        var cTaiKhoan = $(this).data('id');
     
       
        if(confirm("Are you sure you want to delete this data?"))
        {
            $.ajax({
                url:"http://localhost:3000/danhmuctaikhoan/deleteTaiKhoan/"+cTaiKhoan,
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
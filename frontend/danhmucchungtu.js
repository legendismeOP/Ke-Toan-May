
$(document).ready(function () {
    load_data();
    function load_data() {
        $.ajax({
            method: "GET",
            dataType: "json",
            url: "http://localhost:3000/danhmucchungtu",
            success: function (data){
                var html = '';
                if(data.length > 0)
                {
                    data.forEach(item => {
                        html += `
                            <tr>
                                <td>`+item.cMaLoaiChungTu+`</td>
                                <td>`+item.cTenLoaiChungTu+`$</td>
                                <td>`+item.cTenBang+`</td>
                            </tr>
                        `;
                    });
                }
                $('#danhmucchungtu tbody').html(html);
                //console.log(html)
            }
        });
    };
    
})
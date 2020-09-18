'use strict';

let ser_url = 'http://127.0.0.1:5000'
let token

$(function () {
    $(".form-signin").submit(function () {
        // if (form[0].checkValidity() === false) {
        event.preventDefault();
        // event.stopPropagation();
        // }
        var form = $(this);
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: ser_url + "/login",
            data: JSON.stringify({
                "username": $("#inputUser").val(),
                "password": $("#inputPassword").val()
            }),
            success: function (data, status) {
                if (status == 'success') {
                    token = data.access_token
                    console.log("数据: \n" + token + "\n状态: " + status)
                    form.addClass('was-validated');
                }
            },
            error: function (e) {
                alert(e.status + ' ' + e.responseText)
            },
            dataType: "json"
        });

        // $(location).attr('href', 'dashboard.html');
        return false;

    });
});
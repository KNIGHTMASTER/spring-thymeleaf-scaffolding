/**
 * Created by fauzi on 1/21/19.
 */
$('#btLogin').on('click', function(e) {
    e.preventDefault();
    var payload = {};
    payload.userName = $('#inputUsername').val();
    payload.password = $('#inputPassword').val();
    var loginUrl = 'http://localhost:8080/login/perform';
    var adminUrl = 'http://localhost:8080/secured/dashboard';

    $('#btLogin').html('Please Wait ..');

    payload = JSON.stringify(payload);
    $.ajax({
        type : 'POST',
        url : loginUrl,
        data: payload,
        contentType : 'application/json',
        success: function( data, textStatus, jQxhr ){
            console.log(JSON.stringify(data));
            if (data.responseCode == "200") {
                //alert(data.responseMsg);

                gotoLoginPage(adminUrl);
            }else {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                });
                $('#btLogin').html('Try Again...');
            }
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log(JSON.stringify(jqXhr))
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            });
            $('#btLogin').html('Try Again...');
        }
    });
});

function gotoLoginPage(adminUrl) {
    Swal.fire({
        type: 'success',
        title: 'Success Login',
        showConfirmButton: false,
        timer: 1500,
        onClose: () => {
        window.location.href = adminUrl;
        }
    });
}

function deleteCrud(e, id) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value){
        callAjaxDelete(id, e.getAttribute('entity-name'));
    }
});
}


function callAjaxDelete(id, entityName) {
    var url='';
    if (entityName=== "department") {
        url = 'http://localhost:8080/ajax/department/delete?id='+id;
    }
    if (entityName === "employee") {
        url = 'http://localhost:8080/ajax/employee/delete?id='+id;
    }
    $.ajax({
        context : this,
        type : 'GET',
        url : url,
        contentType : 'application/json',
        success: function( data, textStatus, jQxhr ){
            console.log(JSON.stringify(data));
            if (data.responseCode == "200") {
                $('.contentTable').load(document.URL +  ' .contentTable');
                $.notify('Entity '+id+' has been deleted', "success");
            }else {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                });
                $('#btLogin').html('Try Again...');
            }
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log(jqXhr)
            alert(JSON.stringify(jqXhr));
            alert('gagal'+jqXhr.responseText);
            $('#btLogin').html('Try Again...');
        }
    });
}


$('.btnCreate').on('click', function(e) {
    e.preventDefault();
    var linkText = $(this).attr('href');
    $('.content').load(linkText + ' .content');
});

function showViewForm(e, id) {
    var linkText;
    if (e.getAttribute('entity-name') == 'department') {
        linkText = '/secured/department/viewForm?id=';
    }
    if (e.getAttribute('entity-name') == 'employee') {
        linkText = '/secured/employee/viewForm?id=';
    }
    linkText+=id;

    $('.content').load(linkText + ' .content');
}


function showUpdateForm(e, id) {
    var linkText;
    if (e.getAttribute('entity-name') == 'department') {
        linkText = '/secured/department/updateForm?id=' + id;
    }
    if (e.getAttribute('entity-name') == 'employee') {
        linkText = '/secured/employee/updateForm?id=' + id;
    }

    $('.content').load(linkText + ' .content');
}

$('.btnBack').on('click', function(e) {
    e.preventDefault();
    var linkText = $(this).attr('href');
    $('.content').load(linkText + ' .content');
});

function resetForm() {
    $(".formInsert").trigger('reset');
}

$('.btnReset').on('click', function () {
    alert('oke');
});

$('.btnSave').on('click', function(e){
    e.preventDefault();
    var formInsert = $('.formInsert');
    alert(formInsert.attr('action'));
    $.ajax({
        type: 'POST',
        url: formInsert.attr('action'),                           // Any URL
        data: formInsert.serialize(),                 // Serialize the form data
        success: function (data) {                        // If 200 OK
            alert('Success response: ' + data);
        },
        error: function (xhr, text, error) {              // If 40x or 50x; errors
            alert('Error: ' + error);
        }
    });
});

$('.content').ready(function () {
    var alertInsertInfo = $('#alertInsertInfo');
    if (alertInsertInfo.text() != null && alertInsertInfo.text().length > 0) {
        $.notify(alertInsertInfo.text(), "success");
    }
});

$(function(){


    $('#full-name').bind('keydown',function(e){
        if (e.keyCode >= 48 && e.keyCode <= 57) {
            return false
        }
        else {

            validation($(this).val().trim().length != 0, $(this));
            return true;
        }
    });


    $('#message').bind('keydown', function(){
        validation($(this).val().trim().length != 0, $(this));
        return true;
    });

    $('#e-mail').bind('keydown', function(e){

        validation(validateEmail($(this).val()), $(this));

        return true;
    });


    $('#feedback-form').submit(checkData);


    function checkData(e){
        e.preventDefault();

        var $fullname   = $('#full-name');
        var $email      = $('#e-mail');
        var $message    = $('#message');


        if ($fullname.val() && $email.val() && $message.val() && validateEmail($email.val())) {

            alert("OK");
            $fullname.val('').removeClass('valid');
            $email.val('').removeClass('valid');
            $message.val('').removeClass('valid');

        }
        else {
            if ($fullname.val().length == 0) {
                alert('Full name is required!');
            }
            else if ($email.val().length == 0) {
                alert('Email required!');
            }
            else if (!validateEmail($email.val())) {
                alert('Email is invalid!');
            }
            else {
                alert('Message required!');
            }
        }

    }

    function validateEmail(email){
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validation(condition, self){
        if (condition) {
            self.removeClass('invalid');
            self.addClass('valid');
        }
        else {
            self.addClass('invalid');
            self.removeClass('valid');
        }
    }


});
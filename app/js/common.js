$(function () {
    ///////////////////////////////////////////
    //// LANG BTN
    setTimeout(function () {
        $('#langBtn').animate({
            'right': '-40vw'
        }, 800);
    }, 2500);

    var isOpen = false;
    $('#langBtn').click(function () {
        if (isOpen) {
            $('#langBtn').animate({
                'right': '-40vw'
            }, 300);
            isOpen = false;
        } else {
            $('#langBtn').animate({
                'right': '-15vw'
            }, 300);
            isOpen = true;
        }
    });
    ////////////////////////////////////////
    //// LOTTIE CONFIG //////

    var hello = bodymovin.loadAnimation({
        container: document.getElementById('helloCharacter'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        // path: '../img/_src/lottie/character/hello.json'
        path: 'https://assets4.lottiefiles.com/packages/lf20_Op3Uat.json'
    });

    setTimeout(function () { hello.play(); }, 2000);

    var oneStar = bodymovin.loadAnimation({
        container: document.getElementById('oneStarCharacter'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '../img/_src/lottie/character/1star.json'
        // path: 'https://assets4.lottiefiles.com/packages/lf20_Op3Uat.json'
    });

    var threeStar = bodymovin.loadAnimation({
        container: document.getElementById('threeStarCharacter'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '../img/_src/lottie/character/3star.json'
        // path: 'https://assets4.lottiefiles.com/packages/lf20_Op3Uat.json'
    });

    var fiveStar = bodymovin.loadAnimation({
        container: document.getElementById('fiveStarCharacter'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '../img/_src/lottie/character/5star.json'
        // path: 'https://assets4.lottiefiles.com/packages/lf20_Op3Uat.json'
    });

    var checkedCharacter = bodymovin.loadAnimation({
        container: document.getElementById('unchecked'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '../img/_src/lottie/character/unchecked.json'
        // path: 'https://assets4.lottiefiles.com/packages/lf20_Op3Uat.json'
    });

    var comment = bodymovin.loadAnimation({
        container: document.getElementById('comment'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '../img/_src/lottie/character/comment-4-stars.json'
        // path: 'https://assets4.lottiefiles.com/packages/lf20_Op3Uat.json'
    });

    var phoneCharacter = bodymovin.loadAnimation({
        container: document.getElementById('phone'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '../img/_src/lottie/character/phone.json'
        // path: 'https://assets4.lottiefiles.com/packages/lf20_Op3Uat.json'
    });

    var success = bodymovin.loadAnimation({
        container: document.getElementById('success'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '../img/_src/lottie/character/success.json'
        // path: 'https://assets4.lottiefiles.com/packages/lf20_Op3Uat.json'
    });

    $('#oneStarCharacter').css({ 'display': 'none' });
    $('#twoStarCharacter').css({ 'display': 'none' });
    $('#threeStarCharacter').css({ 'display': 'none' });
    $('#fourStarCharacter').css({ 'display': 'none' });
    $('#fiveStarCharacter').css({ 'display': 'none' });

    $('#unchecked').css({ 'display': 'none' });
    $('#comment').css({ 'display': 'none' });

    var starsRating = 0;
    var isChecked = true;
    /////////////////////////////////////
    //// STARS ANIMATION /////


    $('#star1').click(function () {
        if (!$('#checkbox').is(":checked")) {
            $('#unchecked').css({ 'display': 'none' });
        }
        // if (!isStarOneClicked) {
        $('#star1').animate({
            'opacity': '1',
        }, 200);

        $('#star2').animate({
            'opacity': '.3',
        }, 200);

        $('#star3').animate({
            'opacity': '.3',
        }, 200);

        $('#star4').animate({
            'opacity': '.3',
        }, 200);

        $('#star5').animate({
            'opacity': '.3',
        }, 200);

        $('#star1').css("background-image", "url(../img/_src/1star.svg");
        $('#star2').css("background-image", "url(../img/_src/star.svg");
        $('#star3').css("background-image", "url(../img/_src/star.svg");
        $('#star4').css("background-image", "url(../img/_src/star.svg");
        $('#star5').css("background-image", "url(../img/_src/star.svg");

        /////////
        // Display characters

        $('#helloCharacter').css({ 'display': 'none' });
        $('#oneStarCharacter').css({ 'display': 'flex' });
        $('#twoStarCharacter').css({ 'display': 'none' });
        $('#threeStarCharacter').css({ 'display': 'none' });
        $('#fourStarCharacter').css({ 'display': 'none' });
        $('#fiveStarCharacter').css({ 'display': 'none' });
        $('#comment').css({ 'display': 'none' });

        oneStar.setSpeed(5);
        oneStar.play();

        threeStar.stop();
        fiveStar.stop();
        comment.stop();

        starsRating = 1;
        // }
    });

    //////////
    // 2 STAR

    $('#star2').click(function () {
        if (!$('#checkbox').is(":checked")) {
            $('#unchecked').css({ 'display': 'none' });
        }
        $('#star1').animate({
            'opacity': '1',
        }, 200);

        $('#star2').animate({
            'opacity': '1',
        }, 200);

        $('#star3').animate({
            'opacity': '.3',
        }, 200);

        $('#star4').animate({
            'opacity': '.3',
        }, 200);

        $('#star5').animate({
            'opacity': '.3',
        }, 200);

        $('#star1').css("background-image", "url(../img/_src/2star.svg");
        $('#star2').css("background-image", "url(../img/_src/2star.svg");

        $('#helloCharacter').css({ 'display': 'none' });
        $('#oneStarCharacter').css({ 'display': 'none' });
        $('#twoStarCharacter').css({ 'display': 'flex' });
        $('#threeStarCharacter').css({ 'display': 'none' });
        $('#fourStarCharacter').css({ 'display': 'none' });
        $('#fiveStarCharacter').css({ 'display': 'none' });
        $('#comment').css({ 'display': 'none' });

        oneStar.stop();
        threeStar.stop();
        fiveStar.stop();
        comment.stop();

        starsRating = 2;
        // }
    });

    $('#star3').click(function () {
        if (!$('#checkbox').is(":checked")) {
            $('#unchecked').css({ 'display': 'none' });
        }
        $('#star1').animate({
            'opacity': '1',
        }, 200);

        $('#star2').animate({
            'opacity': '1',
        }, 200);

        $('#star3').animate({
            'opacity': '1',
        }, 200);

        $('#star4').animate({
            'opacity': '.3',
        }, 200);

        $('#star5').animate({
            'opacity': '.3',
        }, 200);

        $('#star1').css("background-image", "url(../img/_src/star.svg");
        $('#star2').css("background-image", "url(../img/_src/star.svg");
        $('#star3').css("background-image", "url(../img/_src/star.svg");
        $('#star4').css("background-image", "url(../img/_src/star.svg");
        $('#star5').css("background-image", "url(../img/_src/star.svg");

        /////////
        // Display characters

        $('#helloCharacter').css({ 'display': 'none' });
        $('#oneStarCharacter').css({ 'display': 'none' });
        $('#twoStarCharacter').css({ 'display': 'none' });
        $('#threeStarCharacter').css({ 'display': 'flex' });
        $('#fourStarCharacter').css({ 'display': 'none' });
        $('#fiveStarCharacter').css({ 'display': 'none' });
        $('#comment').css({ 'display': 'none' });

        threeStar.setSpeed(5);
        threeStar.play();

        oneStar.stop();
        fiveStar.stop();
        comment.stop();

        starsRating = 3;
        // }
    });

    $('#star4').click(function () {
        if (!$('#checkbox').is(":checked")) {
            $('#unchecked').css({ 'display': 'none' });
        }
        $('#star1').animate({
            'opacity': '1',
        }, 200);

        $('#star2').animate({
            'opacity': '1',
        }, 200);

        $('#star3').animate({
            'opacity': '1',
        }, 200);

        $('#star4').animate({
            'opacity': '1',
        }, 200);

        $('#star5').animate({
            'opacity': '.3',
        }, 200);

        $('#star1').css("background-image", "url(../img/_src/star.svg");
        $('#star2').css("background-image", "url(../img/_src/star.svg");
        $('#star3').css("background-image", "url(../img/_src/star.svg");
        $('#star4').css("background-image", "url(../img/_src/star.svg");
        $('#star5').css("background-image", "url(../img/_src/star.svg");

        /////////
        // Display characters

        $('#helloCharacter').css({ 'display': 'none' });
        $('#oneStarCharacter').css({ 'display': 'none' });
        $('#twoStarCharacter').css({ 'display': 'none' });
        $('#threeStarCharacter').css({ 'display': 'none' });
        $('#fourStarCharacter').css({ 'display': 'flex' });
        $('#fiveStarCharacter').css({ 'display': 'none' });
        $('#comment').css({ 'display': 'none' });

        oneStar.stop();
        threeStar.stop();
        fiveStar.stop();
        comment.stop();

        starsRating = 4;
        // }
    });

    $('#star5').click(function () {
        if (!$('#checkbox').is(":checked")) {
            $('#unchecked').css({ 'display': 'none' });
        }
        $('#star1').animate({
            'opacity': '1',
        }, 200);

        $('#star2').animate({
            'opacity': '1',
        }, 200);

        $('#star3').animate({
            'opacity': '1',
        }, 200);

        $('#star4').animate({
            'opacity': '1',
        }, 200);

        $('#star5').animate({
            'opacity': '1',
        }, 200);

        $('#star1').css("background-image", "url(../img/_src/5star.svg");
        $('#star2').css("background-image", "url(../img/_src/5star.svg");
        $('#star3').css("background-image", "url(../img/_src/5star.svg");
        $('#star4').css("background-image", "url(../img/_src/5star.svg");
        $('#star5').css("background-image", "url(../img/_src/5star.svg");

        /////////
        // Display characters

        $('#helloCharacter').css({ 'display': 'none' });
        $('#oneStarCharacter').css({ 'display': 'none' });
        $('#twoStarCharacter').css({ 'display': 'none' });
        $('#threeStarCharacter').css({ 'display': 'none' });
        $('#fourStarCharacter').css({ 'display': 'none' });
        $('#fiveStarCharacter').css({ 'display': 'flex' });
        $('#comment').css({ 'display': 'none' });

        fiveStar.setSpeed(5);
        fiveStar.play();

        oneStar.stop();
        threeStar.stop();
        comment.stop();

        starsRating = 5;
        // }

    });

    //////////////////////////////
    // unchecked


    $('#checkbox').click(function () {
        if (isChecked) {

            isChecked = false;
            $('#helloCharacter').css({ 'display': 'none' });
            $('#oneStarCharacter').css({ 'display': 'none' });
            $('#twoStarCharacter').css({ 'display': 'none' });
            $('#threeStarCharacter').css({ 'display': 'none' });
            $('#fourStarCharacter').css({ 'display': 'none' });
            $('#fiveStarCharacter').css({ 'display': 'none' });
            $('#comment').css({ 'display': 'none' });

            $('#unchecked').css({ 'display': 'flex' });

            checkedCharacter.setSpeed(5);
            checkedCharacter.play();

            oneStar.stop();
            threeStar.stop();
            fiveStar.stop();
            comment.stop();
        } else {
            if (starsRating == 0) {
                hello.stop();

                $('#helloCharacter').css({ 'display': 'flex' });
                $('#oneStarCharacter').css({ 'display': 'none' });
                $('#twoStarCharacter').css({ 'display': 'none' });
                $('#threeStarCharacter').css({ 'display': 'none' });
                $('#fourStarCharacter').css({ 'display': 'none' });
                $('#fiveStarCharacter').css({ 'display': 'none' });
                $('#unchecked').css({ 'display': 'none' });
                $('#comment').css({ 'display': 'none' });

                checkedCharacter.stop();
            }

            if (starsRating == 1) {
                oneStar.goToAndPlay(1);

                $('#helloCharacter').css({ 'display': 'none' });
                $('#oneStarCharacter').css({ 'display': 'flex' });
                $('#twoStarCharacter').css({ 'display': 'none' });
                $('#threeStarCharacter').css({ 'display': 'none' });
                $('#fourStarCharacter').css({ 'display': 'none' });
                $('#fiveStarCharacter').css({ 'display': 'none' });
                $('#unchecked').css({ 'display': 'none' });

                checkedCharacter.stop();
            }

            if (starsRating == 2) {
                $('#helloCharacter').css({ 'display': 'none' });
                $('#oneStarCharacter').css({ 'display': 'none' });
                $('#twoStarCharacter').css({ 'display': 'flex' });
                $('#threeStarCharacter').css({ 'display': 'none' });
                $('#fourStarCharacter').css({ 'display': 'none' });
                $('#fiveStarCharacter').css({ 'display': 'none' });
                $('#unchecked').css({ 'display': 'none' });

                checkedCharacter.stop();
            }

            if (starsRating == 3) {
                threeStar.goToAndPlay(1);

                $('#helloCharacter').css({ 'display': 'none' });
                $('#oneStarCharacter').css({ 'display': 'none' });
                $('#twoStarCharacter').css({ 'display': 'none' });
                $('#threeStarCharacter').css({ 'display': 'flex' });
                $('#fourStarCharacter').css({ 'display': 'none' });
                $('#fiveStarCharacter').css({ 'display': 'none' });
                $('#unchecked').css({ 'display': 'none' });

                checkedCharacter.stop();
            }

            if (starsRating == 4) {
                $('#helloCharacter').css({ 'display': 'none' });
                $('#oneStarCharacter').css({ 'display': 'none' });
                $('#twoStarCharacter').css({ 'display': 'none' });
                $('#threeStarCharacter').css({ 'display': 'none' });
                $('#fourStarCharacter').css({ 'display': 'flex' });
                $('#fiveStarCharacter').css({ 'display': 'none' });
                $('#unchecked').css({ 'display': 'none' });

                checkedCharacter.stop();
            }

            if (starsRating == 5) {
                fiveStar.goToAndPlay(1);

                $('#helloCharacter').css({ 'display': 'none' });
                $('#oneStarCharacter').css({ 'display': 'none' });
                $('#twoStarCharacter').css({ 'display': 'none' });
                $('#threeStarCharacter').css({ 'display': 'none' });
                $('#fourStarCharacter').css({ 'display': 'none' });
                $('#fiveStarCharacter').css({ 'display': 'flex' });
                $('#unchecked').css({ 'display': 'none' });

                checkedCharacter.stop();
            }
            isChecked = true;
        }

    });

    //////////////////////////////
    // comment

    $('#commentInput').click(function () {
        if ($('#checkbox').is(":checked")) {
            $('#helloCharacter').css({ 'display': 'none' });
            $('#oneStarCharacter').css({ 'display': 'none' });
            $('#twoStarCharacter').css({ 'display': 'none' });
            $('#threeStarCharacter').css({ 'display': 'none' });
            $('#fourStarCharacter').css({ 'display': 'none' });
            $('#fiveStarCharacter').css({ 'display': 'none' });
            $('#unchecked').css({ 'display': 'none' });
            $('#comment').css({ 'display': 'flex' });

            comment.setSpeed(3);
            comment.play();
        }
    });

    ///////////////////////////
    // leave Phone Input

    $('#leavePhoneInput').click(function () {
        $('#startCharacter').css({ 'display': 'none' });
        $('#phone').css({ 'display': 'flex' });

        phoneCharacter.setSpeed(3);
        phoneCharacter.play();
    });

    $('#leavePhoneInputTwo').click(function () {
        $('#startCharacter').css({ 'display': 'none' });
        $('#phone').css({ 'display': 'flex' });

        phoneCharacter.setSpeed(3);
        phoneCharacter.play();
    });

    //////////////////////////////
    // Share to maps

    $('#shareToMaps').click(function () {
        // alert('dfgdf');
        // window.location.href = "http://stackoverflow.com";
        $('#emailShareDesc').css('display', 'flex');

        $('#emailShareDesc').animate({
            'opacity': '1'
        }, 300);
    });

    /////////////////////////////
    /// Change panels content
    $('#panelContentTwo').css('display', 'none');
    $('#panelContentTwo').css('opacity', 0);
    $('#panelContentThree').css('display', 'none');
    $('#panelContentThree').css('opacity', 0);

    ////////////////////////////////////////////////////////////
    // Сбор, проверка и отправка данных с формы

    $('#panelOneBtn').click(function () {
        // получаем данные с формы в виде обьекта
        var feedbackFormData = $('#feedbackForm').serializeArray();

        // УКАЗАТЬ УРЛУ для отправки полученных данных СЮДА
        var urlForFeedbackData = '/';

        if (dataIsValid(feedbackFormData)) {
            sendRatingData(feedbackFormData, urlForFeedbackData);
            redirectToScreenTwo();
            // redirectToScreenThree(success);
        }

    });


    $('#panelTwoBtn').click(function () {
        var userContactData = $('#getPhoneForm').serializeArray();

        // УКАЗАТЬ УРЛУ СЮДА
        var urlForUserContactData = '/';


        if (userContactData[1].value != '' && userContactData[1].value.length == 10) {
            $.post(urlForUserContactData, userContactData, function (returnedData) {
            });

            $('#panelContentTwo > *').animate({
                'opacity': 0
            }, 300);

            setTimeout(function () {
                $('#panelContentTwo').remove();

                $('#panelContentThree').css({
                    'display': 'flex'
                });

                $('#panelContentThree').animate({
                    'opacity': 1
                }, 300);

                setTimeout(function () {
                    success.play();
                    setTimeout(function () { success.goToAndStop(1000); }, 1000);
                    setTimeout(function () { success.play(); }, 1400);
                }, 500);
            }, 300);
        } else {
            $('#leavePhone').text("веедите корректный номер.").css('opacity', '1');
        }

    });


});

function dataIsValid(feedbackFormData) {

    if (feedbackFormData[0].name == 'rating' && feedbackFormData[0].value != '') {
        if (feedbackFormData[1].name == 'comment' && parseInt(feedbackFormData[0].value) > 3) {
            if (Object.keys(feedbackFormData).length == 3) {
                if (feedbackFormData[2].name == 'checkbox') {
                    return true;
                } else {
                    console.log('согласитесь с условиями использования!');
                    $('#rateUs').text("согласитесь с условиями использования.").css('opacity', '1');
                    return false;
                }
            } else {
                $('#rateUs').text("согласитесь с условиями использования.").css('opacity', '1');
            }
        } else {
            if(feedbackFormData[1].value != '') {
                if (Object.keys(feedbackFormData).length == 3) {
                    if (feedbackFormData[2].name == 'checkbox') {
                        return true;
                    } else {
                        console.log('согласитесь с условиями использования!');
                        $('#rateUs').text("согласитесь с условиями использования.").css('opacity', '1');
                        return false;
                    }
                } else {
                    $('#rateUs').text("согласитесь с условиями использования.").css('opacity', '1');
                }
            } else {
                $('#rateUs').text("введите комментарий.").css('opacity', '1');
            }
            
            return false;
        }
    } else {
        $('#rateUs').text("оцените заведение.").css('opacity', '1');
        return false;
    }
}

function sendRatingData(feedbackFormData, urlForFeedbackData) {
    $.post(urlForFeedbackData, feedbackFormData, function (returnedData) {
    });
}

function redirectToScreenTwo() {
    $('#panelContentOne').animate({
        'opacity': 0
    }, 300);

    setTimeout(function () {
        $('#panelContentOne').remove();

        $('#panelContentTwo').css({
            'display': 'flex'
        });

        $('#panelContentTwo').animate({
            'opacity': 1
        }, 300);
    }, 300);
}

function redirectToScreenThree(animation) {
    $('#panelContentTwo > *').animate({
        'opacity': 0
    }, 300);

    setTimeout(function () {
        $('#panelContentTwo').remove();
        $('#panelContentOne').remove();

        $('#panelContentThree').css({
            'display': 'flex'
        });

        $('#panelContentThree').animate({
            'opacity': 1
        }, 300);

        setTimeout(function () {
            animation.play();
            setTimeout(function () { animation.goToAndStop(1000); }, 1000);
            setTimeout(function () { animation.play(); }, 1400);
        }, 500);
    }, 300);
}

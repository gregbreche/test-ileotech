$(function(){

    var num_img = 1;

    function counter(next){
        switch (num_img) {
            case 1:
                next ? num_img++ : num_img = 3;
                break;
            case 2:
                next ? num_img++ : num_img--;
                break;
            case 3:
                next ? num_img = 1 : num_img--;
                break;
        }

        $('#cpt_img').text(num_img + '/3');
    }

    $('#previous').on('click', function() {
        counter(false);
        $('body').css({ 'background-image': 'url(Resources/slide-image-' + num_img + '.jpg)' });
    });

    $('#next').on('click', function() {
        counter(true);
        $('body').css({ 'background-image': 'url(Resources/slide-image-' + num_img + '.jpg)' });
    });

});
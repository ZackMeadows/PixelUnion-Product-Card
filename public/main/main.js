
// ------------------------------
// Variables
// ------------------------------

var shirtId = 0;
var shirts = [
    {
        name: 'Ultrafine Merino T-Shirt',
        price: '$80.00',
        src: '../../assets/shirt-1.jpg',
        rating: 4
    },
    {
        name: 'Ultraslick Merino T-Shirt',
        price: '$120.00',
        src: '../../assets/shirt-2.jpg',
        rating: 5
    },
    {
        name: 'Ultraruffled Merino T-Shirt',
        price: '$1.00',
        src: '../../assets/shirt-3.jpg',
        rating: 2
    }
]

// ------------------------------
// View
// ------------------------------


// ------------------------------
// Data
// ------------------------------

function clickTemp() {
}

// ------------------------------

$( document ).ready(function() {
    $('#addToCartButton').click(function() {
        $(this).parent().parent().addClass('sold-out');
    });

    $('.product-swatches .swatch').click(function() {
        $('.product-swatches .swatch.active').removeClass('active');
        $(this).addClass('active');

        shirtId = $(this).attr('id');
        $('.product-image img').attr('src', shirts[shirtId].src);
        $('.product-name').text(shirts[shirtId].name);
        $('.product-price').text(shirts[shirtId].price);

        var tempRating = shirts[shirtId].rating;
        $('.product-rating').children().each(function() {
            console.log(tempRating);
            if(tempRating > 0) {
                $(this).addClass('filled');
                tempRating--;
            } else {
                $(this).removeClass('filled');
            }
        });
    });
});
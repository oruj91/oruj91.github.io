var prices = mapFromServer();
var $formGroupSize = $('.orderLine__size').hide();
var $price = $('.orderLine__price').hide();
var $btn = $('.orderLine__button').hide();
var $selectColor = $('#selectColor');
var $selectSize = $('#selectSize');

for (var color_id in prices) {
    let markup = $('<option>').val(color_id).html(prices[color_id].name);
    $selectColor.append(markup);
}

$selectColor.on('change', function() {
    var color = $(this).val();

    $selectSize.find('option:gt(0)').remove();

    if (prices[color] !== undefined) {
        var sizes = prices[color].sizes;
        
        for (var size_id in sizes) {
            let markup = $('<option>').val(size_id).html(sizes[size_id].name);
            $selectSize.append(markup);
        }
        $formGroupSize.show();
        $price.hide();
        $btn.hide();
    } else {
        $formGroupSize.hide();
        $price.hide();
        $btn.hide();
    }
})

$selectSize.on('change', function() {
    var color = $selectColor.val();
    var size = $(this).val();

    if (prices[color], prices[color].sizes[size]  !== undefined) {
        $price.html(prices[color].sizes[size].price).show();
        $btn.show();
    } else {
        $price.hide();
        $btn.hide();
    }
})

function mapFromServer() {
    return {
        red: {
            name: "Red",
            sizes: {
                s: {
                    name: 'Small',
                    price: 299
                },
                m: {
                    name: 'Middle',
                    price: 319
                },
                l: {
                    name: 'Large',
                    price: 349
                }
            }
        },
        green: {
            name: "Green",
            sizes: {
                s: {
                    name: "Small",
                    price: 199
                },
                m: {
                    name: 'Middle',
                    price: 219
                },
                l: {
                    name: 'Large',
                    price: 239
                }
            }
        },
        blue: {
            name: "Blue",
            sizes: {
                s: {
                    name: "Small",
                    price: 999
                },
                m: {
                    name: 'Middle',
                    price: 1299
                },
                l: {
                    name: 'Large',
                    price: 1499
                }
            }
        },
    }
}
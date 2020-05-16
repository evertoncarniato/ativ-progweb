var json = [{}]
for (var count = 0; count < $(".product-card__link").length; count++) {
    var name = $(".product-card__title")[count].innerText;
    var value = $(".promotion__tag-discount")[count].innerText;
    var discount = $(".promotion-price")[count].innerText;

  json.push({name,value,discount});
}

console.log(json);
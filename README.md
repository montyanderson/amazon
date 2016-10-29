# amazon

A WIP Amazon product parser.

``` javascript
amazon.search("ipad")
	.then(results => console.log(results));
```

```
[ { title: 'Apple iPad 2 MC769LL/A 9.7-Inch 16GB (Black) 1395 - Certified Refurbished',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41juzl-6v0L._AC_US160_.jpg',
    price: '$159.00',
    definitons:
     { 'Display Size:': '9.7 inches',
       'Operating System:': 'Apple iOS 4',
       'Display Technology:': 'led' },
    stars: 4 },
  { title: 'Apple iPad Air MD785LL/B 9.7-Inch 16GB Wi-Fi Tablet (Black with Space Gray)',
    image: 'https://images-na.ssl-images-amazon.com/images/I/517yTZWi4uL._AC_US160_.jpg',
    price: '$297.82',
    definitons:
     { 'Display Size:': '9.7 inches',
       'Operating System:': 'Apple iOS 7',
       'Flash Memory Installed Size:': '16',
       'Native Resolution:': '2048 x 1536',
       'Display Technology:': 'LCD' },
    stars: 4.5 },
  { title: 'Apple iPad Air 2 MH0W2LL/A 9.7-Inch 16GB HDD Tablet, Gold',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41Yel8ffbaL._AC_US160_.jpg',
    price: '$341.05',
    definitons:
     { 'Display Size:': '9.7 inches',
       'Operating System:': 'Apple IOS 8',

```

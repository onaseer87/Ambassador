var firebaseConfig = {
    apiKey: "AIzaSyDfOLY2GIPMrkeAs-6GPTRjIneIX7U3NLQ",
    authDomain: "ambassador-86c40.firebaseapp.com",
    databaseURL: "https://ambassador-86c40.firebaseio.com",
    projectId: "ambassador-86c40",
    storageBucket: "ambassador-86c40.appspot.com",
    messagingSenderId: "35169197020",
    appId: "1:35169197020:web:8647c0b34f58bd414e8d19",
    measurementId: "G-QZY2GC8JLE"
};


var generateProducts = function (selector, style, name, ) {
    $(selector).append(`
    <div class="col-md-6 bg-white p-2">
        <h2 class="text-left">${style}</h2>
        <h3 class="text-left">${name}</h3>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <a href='${style}.html'>
                        <img class="img-fluid" src="assets/images/products/${style}.jpg" 
                        alt="${style}-${name}">
                    </a>
                </div>
                <div class="col-md-6" id="${style}-features>
                </div>
            </div>
        </div>
    </div>
`)
};

var searchStyle = function (e) {
    e.preventDefault();
    let input = $('#search').val().trim();
    for (let i = 0; i < styles.length; i++) {
        if (styles[i].style.toString() == input) {
            window.location.replace(`${styles[i].style}.html`)
        } else {
            console.log('no style found')
        }
    }
}


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log('render the page')
        var $emailLabel = $('#email-label');
        $emailLabel.text(user.email);
        for (var i = 0; i < styles.length; i++) {
            if (styles[i].kind === 'touch') {
                generateProducts('.touch', styles[i].style, styles[i].name)
            }
            if (styles[i].kind === 'energy') {
                generateProducts('.energy', styles[i].style, styles[i].name)
            }
        }

    } else {
        window.location.replace('index.html')
    }
})

$('#signout').on('click', signOutUser)

function signOutUser(e) {
    e.preventDefault();
    firebase.auth().signOut()
        .then(function () {
            window.location.replace('index.html')
        }).catch(function (err) {
            console.log(err);
        })
}

var url = window.location.pathname;
var path = url.split('/');

var fileIndex = path.length - 1;
var file = path[fileIndex];

var styleIndex = file.split('.');
var style = styleIndex[0];
console.log(style);

//COLLECTIONS
var styles = [
    {
        style: 7479,
        name: 'HENLEY TOP',
        description: 'Med Couture truly channeled up awesomeness with this henley scrub top. You’ll rock this relaxed fit style in comfort all day long. You can tuck it in or leave it out!',
        kind: 'touch',
        features: ['Henley neck', 'Chest patch pocket', 'Back yoke with box pleat', 'Inside contrast neckband', 'R: XS-2X (26”)'],
        fit: ['R: XS-2X (26”)'],
        swatches: ['BLAC', 'BLUH', 'NAVY', 'SLAT'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
        listCartData: function () {
            let swatches = this.swatches.join('|');
            $('.snipcart-add-item').attr('data-item-custom1-options', swatches);

            let fit = this.fit.join('|');
            $('.snipcart-add-item').attr('data-item-custom2-options', fit);

            let sizes = this.sizes.join('|');
            $('.snipcart-add-item').attr('data-item-custom3-options', sizes);
        },
        appendSwatches: function () {
            for (let i = 0; i < this.swatches.length; i++) {
                let swatches = this.swatches[i];
                $('#swatches').append(`
                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                `)
            }
        },
        listFeatures: function () {
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++) {
                let feature = this.features[i];
                $('#features').append(
                    `<li>${feature}</li>`
                )
            }
        }
    },
    {
        style: 7789,
        name: 'YOGA 1 CARGO POCKET PANT',
        description: 'Simple in design, this strait leg scrub pant has rib-knit accents at the waistband and pockets. The fabric and fit are unbelievably comfortable.',
        kind: 'touch',
        features: ['Straight leg with side vents', 'Rib knit waist and pocket lining', '1 cargo pocket', 'Two back patch pockets', 'R: XS-3X (31”) P XS-XL (29”) T XS-XL (33”)'],
        fit: ['R: XS-3X (31”)', 'P: XS-XL (29”)', 'T: XS-XL (33”)'],
        swatches: ['BLAC', 'BLUH', 'NAVY', 'ROYL', 'SLAT'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', '2X', '3X'],
        listCartData: function () {
            let swatches = this.swatches.join('|');
            $('.snipcart-add-item').attr('data-item-custom1-options', swatches);

            let fit = this.fit.join('|');
            $('.snipcart-add-item').attr('data-item-custom2-options', fit);

            let sizes = this.sizes.join('|');
            $('.snipcart-add-item').attr('data-item-custom3-options', sizes);
        },
        appendSwatches: function () {
            for (let i = 0; i < this.swatches.length; i++) {
                let swatches = this.swatches[i];
                $('#swatches').append(`
                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                `)
            }
        },
        listFeatures: function () {
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++) {
                let feature = this.features[i];
                $('#features').append(
                    `<li>${feature}</li>`
                )
            }
        }
    },
    {
        style: 7472,
        name: 'MOCK WRAP TOP',
        description: "You'll love this mock wrap scrub top. With a relaxed silhouette, this v-neck top has large pockets, an accessory loop, and princess seams in the back.",
        kind: 'touch',
        features: ['Mock wrap v-neckline', 'Double-layered angled pockets', 'Accessory loop', 'Inside contrast neckband', 'Back princess seams', 'R: XS-3X (26”)'],
        fit: ['R: XS-3X (26”)'],
        swatches: ['BLAC', 'BLUH', 'CEIL', 'GLXY', 'GRAP', 'NAVY', 'OLIV', 'PKPH', 'PWTR', 'ROYL', 'SLAT', 'WINE'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', '2X', '3X'],
        listCartData: function () {
            let swatches = this.swatches.join('|');
            $('.snipcart-add-item').attr('data-item-custom1-options', swatches);

            let fit = this.fit.join('|');
            $('.snipcart-add-item').attr('data-item-custom2-options', fit);

            let sizes = this.sizes.join('|');
            $('.snipcart-add-item').attr('data-item-custom3-options', sizes);
        },
        appendSwatches: function () {
            for (let i = 0; i < this.swatches.length; i++) {
                let swatches = this.swatches[i];
                $('#swatches').append(`
                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                `)
            }
        },
        listFeatures: function () {
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++) {
                let feature = this.features[i];
                $('#features').append(
                    `<li>${feature}</li>`
                )
            }
        }
    },
    {
        style: 7710,
        name: 'JOGGER YOGA PANT',
        description: "Med Couture jogger pants elevate a closet staple with an extra comfortable feel. Made from a poly blend that feels like cotton, they feature rib knit waistband and ankle cuffs.",
        kind: 'touch',
        features: ['Single cargo pocket', 'Rib knit waistband and ankle cuffs', 'Adjustable front waist ties', 'Accessory loop', 'Two back patch pockets', 'R: XS-3X (28 1/2”) P XS-XL (26 1/2”) T XS-XL (31”)'],
        fit: ['R: XS-3X (28 1/2”)', 'P XS-XL (26 1/2”)', 'T XS-XL (31”)'],
        swatches: ['BLAC', 'BLUH', 'CEIL', 'GLXY', 'GRAP', 'NAVY', 'OLIV', 'PKPH', 'PWTR', 'ROYL', 'SLAT', 'WINE', 'WHIT'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3X'],
        listCartData: function () {
            let swatches = this.swatches.join('|');
            $('.snipcart-add-item').attr('data-item-custom1-options', swatches);

            let fit = this.fit.join('|');
            $('.snipcart-add-item').attr('data-item-custom2-options', fit);

            let sizes = this.sizes.join('|');
            $('.snipcart-add-item').attr('data-item-custom3-options', sizes);
        },
        appendSwatches: function () {
            for (let i = 0; i < this.swatches.length; i++) {
                let swatches = this.swatches[i];
                $('#swatches').append(`
                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                `)
            }
        },
        listFeatures: function () {
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++) {
                let feature = this.features[i];
                $('#features').append(
                    `<li>${feature}</li>`
                )
            }
        }
    },
    {
        style: 7459,
        name: 'V-NECK SHIRTTAIL TOP',
        description: "This classic is an industry favorite. It’s practical v-neck design and perfectly proportioned knit side panels bring style to your everyday wardrobe.",
        kind: 'touch',
        features: ['Overlapping rib knit side panels', 'Accessory loop', 'Extra accessory pocket and pen slot', 'Two large patch pockets', 'Two back patch pockets', ' Inside contrast neckband', 'R: XS-5X (27”)'],
        fit: ['R: XS-5X (27”)'],
        swatches: ['BLAC', 'BLUH', 'CEIL', 'GLXY', 'GRAP', 'NAVY', 'OLIV', 'PKPH', 'PWTR', 'ROYL', 'SLAT', 'WINE', 'WHIT'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3X', '4X', '5X'],
        listCartData: function () {
            let swatches = this.swatches.join('|');
            $('.snipcart-add-item').attr('data-item-custom1-options', swatches);
            let fit = this.fit.join('|');
            $('.snipcart-add-item').attr('data-item-custom2-options', fit);

            let sizes = this.sizes.join('|');
            $('.snipcart-add-item').attr('data-item-custom3-options', sizes);
        },
        appendSwatches: function () {
            for (let i = 0; i < this.swatches.length; i++) {
                let swatches = this.swatches[i];
                $('#swatches').append(`
                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                `)
            }
        },
        listFeatures: function () {
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++) {
                let feature = this.features[i];
                $('#features').append(
                    `<li>${feature}</li>`
                )
            }
        }
    },
    {
        style: 7739,
        name: 'YOGA 2 CARGO POCKET PANT',
        description: "These lightweight strait leg scrub pants have a comfy wide waistband with internal ties. Designed for a clean, smooth fit with exceptional comfort.",
        kind: 'touch',
        features: ['Straight leg with side vents', 'Jacquard elastic and rib knit waistband', 'Internal waist ties', 'Two cargo, two back patch ', 'Two back patch pockets', 'Extra accessory pocket', 'Accessory loop', 'R: XS-5X (31”) P XS-2X (29”) T XS-XL (33”)'],
        fit: ['R: XS-5X (31”)', 'P XS-2X (29”)', 'T XS-XL (33”)'],
        swatches: ['BLAC', 'BLUH', 'CEIL', 'GLXY', 'GRAP', 'NAVY', 'OLIV', 'PKPH', 'PWTR', 'ROYL', 'SLAT', 'WINE'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3X', '4X', '5X'],
        listCartData: function () {
            let swatches = this.swatches.join('|');
            $('.snipcart-add-item').attr('data-item-custom1-options', swatches);

            let fit = this.fit.join('|');
            $('.snipcart-add-item').attr('data-item-custom2-options', fit);

            let sizes = this.sizes.join('|');
            $('.snipcart-add-item').attr('data-item-custom3-options', sizes);
        },
        appendSwatches: function () {
            for (let i = 0; i < this.swatches.length; i++) {
                let swatches = this.swatches[i];
                $('#swatches').append(`
                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                `)
            }
        },
        listFeatures: function () {
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++) {
                let feature = this.features[i];
                $('#features').append(
                    `<li>${feature}</li>`
                )
            }
        }
    },

    //ACTIVATE COLLECTION
    // {
    //     style: 8416,
    //     name: 'V-NECK RACERBACK TOP',
    //     description: 'This v-neck scrub top gives you the lightweight, breathable coverage you want. A classic silhouette and ample pocket space makes this piece a staple!',
    //     kind: 'activate',
    //     features: ['Back knit racerback panel', 'Shoulder yokes', 'Two large patch pockets', 'Extra accessory pockets', 'Hidden side seam pockets', 'R: XS-3X (26”)'],
    //     swatches: ['BLAC', 'CARI', 'CEIL', 'CHOC', 'GLXY', 'HNTR', 'NAVY', 'OLIV', 'PKPH', 'PLUM', 'PWTR', 'REDD', 'RLTL', 'ROYL', 'SKYB', 'SPMN', 'WINE'],
    //     sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    //     listCartData: function () {
    //         $('.snipcart-add-item').attr('data-item-custom1-options', `
    //         ${this.swatches[0]}|${this.swatches[1]}|${this.swatches[2]}|${this.swatches[3]}|${this.swatches[4]}|${this.swatches[5]}|${this.swatches[6]}|${this.swatches[7]}|${this.swatches[8]}|${this.swatches[9]}|${this.swatches[10]}|${this.swatches[11]}|${this.swatches[12]}|${this.swatches[13]}|${this.swatches[14]}|${this.swatches[15]}|${this.swatches[16]}
    //         `);
    //         $('.snipcart-add-item').attr('data-item-custom2-options', this.features[this.features.length - 1]);
    //         let sizes = this.sizes.join('|');
    //         $('.snipcart-add-item').attr('data-item-custom3-options', sizes);
    //     },
    //     appendSwatches: function () {
    //         for (let i = 0; i < this.swatches.length; i++) {
    //             let swatches = this.swatches[i];
    //             $('#swatches').append(`

    //                 <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

    //             `)
    //         }
    //     },
    //     listFeatures: function () {
    //         console.log(this.features)
    //         for (let i = 0; i < this.features.length; i++) {
    //             let feature = this.features[i];
    //             $('#features').append(
    //                 `<li>${feature}</li>`
    //             )
    //         }
    //     }
    // },
    // {
    //     style: 8408,
    //     name: 'V-NECK PRINCESS SEAM TOP',
    //     description: 'This v-neck scrub top gives you the lightweight, breathable coverage you want. A classic silhouette and ample pocket space makes this piece a staple!',
    //     kind: 'activate',
    //     features: ['Shoulder princess seams', 'Two large patch pockets', 'Extra accessory pockets', 'Snap closure', 'R: XS-3X (26”)'],
    //     swatches: ['BLAC', 'CARI', 'CEIL', 'GLXY', 'NAVY', 'OLIV', 'PKPH', 'PLUM', 'PWTR', 'REDD', 'ROYL', 'TEAL', 'SKYB', 'SPMN', 'WINE'],
    //     sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    //     listCartData: function () {
    //         $('.snipcart-add-item').attr('data-item-custom1-options', `
    //         ${this.swatches[0]}|${this.swatches[1]}|${this.swatches[2]}|${this.swatches[3]}${this.swatches[4]}|${this.swatches[5]}|${this.swatches[6]}|${this.swatches[7]}${this.swatches[8]}|${this.swatches[9]}|${this.swatches[10]}|${this.swatches[11]}${this.swatches[12]}|${this.swatches[13]}|${this.swatches[14]}
    //         `);
    //         $('.snipcart-add-item').attr('data-item-custom2-options', this.features[this.features.length - 1]);
    //         let sizes = this.sizes.join('|');
    //         $('.snipcart-add-item').attr('data-item-custom3-options', sizes);
    //     },
    //     appendSwatches: function () {
    //         for (let i = 0; i < this.swatches.length; i++) {
    //             let swatches = this.swatches[i];
    //             $('#swatches').append(`

    //                 <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

    //             `)
    //         }
    //     },
    //     listFeatures: function () {
    //         console.log(this.features)
    //         for (let i = 0; i < this.features.length; i++) {
    //             let feature = this.features[i];
    //             $('#features').append(
    //                 `<li>${feature}</li>`
    //             )
    //         }
    //     }
    // },
    // {
    //     style: 8758,
    //     name: 'YOGA 2 CARGO POCKET PANT',
    //     description: 'Take your daily adventure in stride in these sporty scrub pants, ideal for work and leisure. These pants have a comfortable jacquard elastic and knit waistband.',
    //     kind: 'activate',
    //     features: ['Boot cut leg with side vents', 'Jacquard elastic and knit waistband', 'Two cargo pockets', 'Single back patch pocket', 'R: XS-3X (31”) | P: XS-XL (29”) | T: XS-XL (33”)'],
    //     swatches: ['BLAC', 'CARI', 'CEIL', 'CHOC', 'GLXY', 'HNTR', 'NAVY', 'OLIV', 'PKPH', 'PLUM', 'PWTR', 'REDD', 'RLTL', 'ROYL', 'SKYB', 'SPMN', 'WINE'],
    //     sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    //     listCartData: function () {
    //         $('.snipcart-add-item').attr('data-item-custom1-options', `
    //         ${this.swatches[0]}|${this.swatches[1]}|${this.swatches[2]}|${this.swatches[3]}${this.swatches[4]}|${this.swatches[5]}|${this.swatches[6]}|${this.swatches[7]}${this.swatches[8]}|${this.swatches[9]}|${this.swatches[10]}|${this.swatches[11]}${this.swatches[12]}|${this.swatches[13]}|${this.swatches[14]}|${this.swatches[15]}|${this.swatches[16]}
    //         `);
    //         $('.snipcart-add-item').attr('data-item-custom2-options', this.features[this.features.length - 1]);
    //         let sizes = this.sizes.join('|');
    //         $('.snipcart-add-item').attr('data-item-custom3-options', sizes);
    //     },
    //     appendSwatches: function () {
    //         for (let i = 0; i < this.swatches.length; i++) {
    //             let swatches = this.swatches[i];
    //             $('#swatches').append(`

    //                 <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

    //             `)
    //         }
    //     },
    //     listFeatures: function () {
    //         console.log(this.features)
    //         for (let i = 0; i < this.features.length; i++) {
    //             let feature = this.features[i];
    //             $('#features').append(
    //                 `<li>${feature}</li>`
    //             )
    //         }
    //     }
    // },
    // {
    //     style: 8747,
    //     name: 'YOGA 1 CARGO POCKET PANT',
    //     description: 'This simple scrub pant feels extremely durable and has great shape retention. A stretchy knit waistband and an external drawstring adjusts perfectly flatter any figure.',
    //     kind: 'activate',
    //     features: ['Roomy straight leg', 'Stretchy knit waistband', 'Single cargo zipper pocket', 'Single back patch pocket', 'R: XS-3X (31”) | P: XS-XL (29”) | T: XS-XL (33”)'],
    //     swatches: ['BLAC', 'CARI', 'CEIL', 'CHOC', 'GLXY', 'HNTR', 'NAVY', 'OLIV', 'PKPH', 'PLUM', 'PWTR', 'REDD', 'RLTL', 'ROYL', 'SKYB', 'SPMN', 'WINE'],
    //     sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    //     listCartData: function () {
    //         $('.snipcart-add-item').attr('data-item-custom1-options', `
    //         ${this.swatches[0]}|${this.swatches[1]}|${this.swatches[2]}|${this.swatches[3]}${this.swatches[4]}|${this.swatches[5]}|${this.swatches[6]}|${this.swatches[7]}${this.swatches[8]}|${this.swatches[9]}|${this.swatches[10]}|${this.swatches[11]}${this.swatches[12]}|${this.swatches[13]}|${this.swatches[14]}|${this.swatches[15]}|${this.swatches[16]}
    //         `);
    //         $('.snipcart-add-item').attr('data-item-custom2-options', this.features[this.features.length - 1]);
    //         let sizes = this.sizes.join('|');
    //         $('.snipcart-add-item').attr('data-item-custom3-options', sizes);
    //     },
    //     appendSwatches: function () {
    //         for (let i = 0; i < this.swatches.length; i++) {
    //             let swatches = this.swatches[i];
    //             $('#swatches').append(`

    //                 <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

    //             `)
    //         }
    //     },
    //     listFeatures: function () {
    //         console.log(this.features)
    //         for (let i = 0; i < this.features.length; i++) {
    //             let feature = this.features[i];
    //             $('#features').append(
    //                 `<li>${feature}</li>`
    //             )
    //         }
    //     }
    // },
    // {
    //     style: 8459,
    //     name: 'MATERNITY TOP',
    //     description: 'You must experience our maternity scrub top. Crafted from smooth, stretchy fabric, it retains its shape wash after wash. The versatile style ensures a perfect fit.',
    //     kind: 'activate',
    //     features: ['Comfortable side knit panels', 'Adjustable bungee with toggle', 'Two large patch pockets', 'Classic v-neckline', 'R: XS-3X (27”)'],
    //     swatches: ['BLAC', 'NAVY', 'PWTR', 'ROYL', 'WINE'],
    //     sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    //     listCartData: function () {
    //         $('.snipcart-add-item').attr('data-item-custom1-options', `
    //         ${this.swatches[0]}|${this.swatches[1]}|${this.swatches[2]}|${this.swatches[3]}|${this.swatches[4]}
    //         `);
    //         $('.snipcart-add-item').attr('data-item-custom2-options', this.features[this.features.length - 1]);
    //         let sizes = this.sizes.join('|');
    //         $('.snipcart-add-item').attr('data-item-custom3-options', sizes);
    //     },
    //     appendSwatches: function () {
    //         for (let i = 0; i < this.swatches.length; i++) {
    //             let swatches = this.swatches[i];
    //             $('#swatches').append(`

    //                 <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

    //             `)
    //         }
    //     },
    //     listFeatures: function () {
    //         console.log(this.features)
    //         for (let i = 0; i < this.features.length; i++) {
    //             let feature = this.features[i];
    //             $('#features').append(
    //                 `<li>${feature}</li>`
    //             )
    //         }
    //     }
    // },
    // {
    //     style: 8727,
    //     name: 'MATERNITY PANT',
    //     description: 'These athletic inspired scrub pants are sporty and stretchy. You’ll want to live in these 24/7 with the comfortable knit waist panel.',
    //     kind: 'activate',
    //     features: ['Boot cut leg with side vents', 'Comfortable knit waist pane', 'Single cargo pocket', 'Single back welt pocket', 'R: XS-3X (30”) | P: XS-XL (29”)'],
    //     swatches: ['BLAC', 'NAVY', 'PWTR', 'ROYL', 'WINE'],
    //     sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    //     listCartData: function () {
    //         $('.snipcart-add-item').attr('data-item-custom1-options', `
    //         ${this.swatches[0]}|${this.swatches[1]}|${this.swatches[2]}|${this.swatches[3]}|${this.swatches[4]}
    //         `);
    //         $('.snipcart-add-item').attr('data-item-custom2-options', this.features[this.features.length - 1]);
    //         let sizes = this.sizes.join('|');
    //         $('.snipcart-add-item').attr('data-item-custom3-options', sizes);
    //     },
    //     appendSwatches: function () {
    //         for (let i = 0; i < this.swatches.length; i++) {
    //             let swatches = this.swatches[i];
    //             $('#swatches').append(`

    //                 <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

    //             `)
    //         }
    //     },
    //     listFeatures: function () {
    //         console.log(this.features)
    //         for (let i = 0; i < this.features.length; i++) {
    //             let feature = this.features[i];
    //             $('#features').append(
    //                 `<li>${feature}</li>`
    //             )
    //         }
    //     }
    // },

    //ENERGY COLLECTION
    {
        style: 8579,
        name: 'RACERBACK SHIRTTAIL TOP',
        description: "This scrub top offers you a comfy and breathable fit. A v-neckline and a fun racerback design make for a classic sporty look.",
        kind: 'energy',
        features: ['Racerback knit panel', 'Front and back princess seams', 'Two large patch pockets', 'Welt accessory pocket', 'R: XS-5X (front 27” back 26”)'],
        fit: ['R: XS-5X (front 27” back 26”)'],
        swatches: ['BLAC', 'CARI', 'CEIL', 'CHOC', 'CRAL', 'EGPL', 'GLXY', 'HNTR', 'NAVY', 'PLUM', 'PWTR', 'REDD', 'ROYL', 'TEAL', 'TURQ', 'WINE', 'WHIT'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3X', '4X', '5X'],
        listCartData: function () {
            let swatches = this.swatches.join('|');
            $('.snipcart-add-item').attr('data-item-custom1-options', swatches);

            let fit = this.fit.join('|');
            $('.snipcart-add-item').attr('data-item-custom2-options', fit);

            let sizes = this.sizes.join('|');
            $('.snipcart-add-item').attr('data-item-custom3-options', sizes);
        },
        appendSwatches: function () {
            for (let i = 0; i < this.swatches.length; i++) {
                let swatches = this.swatches[i];
                $('#swatches').append(`

                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                `)
            }
        },
        listFeatures: function () {
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++) {
                let feature = this.features[i];
                $('#features').append(
                    `<li>${feature}</li>`
                )
            }
        }
    },
    {
        style: 8744,
        name: 'YOGA 2 CARGO POCKET PANT',
        description: "Designed for comfort and built to perform on the job and beyond! This yoga style scrub pant offers a comfortable drawstring waistband and two cargo pockets.",
        kind: 'energy',
        features: ['Boot cut leg with side vents', 'Sporty yoga knit waistband', 'Internal waist ties', 'Two welt cargo pockets', 'Two back patch pockets', 'R: XS-5X (31”) | P: XS-2X (29”) | T: XS-2X (33”)'],
        fit: ['R: XS-5X (31”)', 'P: XS-2X (29”)', 'T: XS-2X (33”)'],
        swatches: ['BLAC', 'CARI', 'CEIL', 'CHOC', 'CRAL', 'EGPL', 'GLXY', 'HNTR', 'NAVY', 'PLUM', 'PWTR', 'REDD', 'ROYL', 'TEAL', 'TURQ', 'WINE', 'WHIT'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', '2X', '3X', '4X', '5X'],
        listCartData: function () {
            let swatches = this.swatches.join('|');
            $('.snipcart-add-item').attr('data-item-custom1-options', swatches);

            let fit = this.fit.join('|');
            $('.snipcart-add-item').attr('data-item-custom2-options', fit);

            let sizes = this.sizes.join('|');
            $('.snipcart-add-item').attr('data-item-custom3-options', sizes);
        },
        appendSwatches: function () {
            for (let i = 0; i < this.swatches.length; i++) {
                let swatches = this.swatches[i];
                $('#swatches').append(`

                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                `)
            }
        },
        listFeatures: function () {
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++) {
                let feature = this.features[i];
                $('#features').append(
                    `<li>${feature}</li>`
                )
            }
        }
    },
    {
        style: 8587,
        name: 'V-NECK 3 POCKET TOP',
        description: "This v-neck scrub top feels sporty while exhibiting a traditional appeal. Crafted from a sleek and lightweight fabric, includes a chest pocket for expanded storage.",
        kind: 'energy',
        features: ['Chest patch pocket', 'Two large welt pockets', 'R: XS-3X ( 26”)'],
        fit: ['R: XS-3X ( 26”)'],
        swatches: ['BLAC', 'CARI', 'CEIL', 'CHOC', 'CRAL', 'EGPL', 'GLXY', 'HNTR', 'NAVY', 'PLUM', 'PWTR', 'REDD', 'ROYL', 'TEAL', 'TURQ', 'WINE', 'WHIT'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3X'],
        listCartData: function () {
            let swatches = this.swatches.join('|');
            $('.snipcart-add-item').attr('data-item-custom1-options', swatches);

            let fit = this.fit.join('|');
            $('.snipcart-add-item').attr('data-item-custom2-options', fit);

            let sizes = this.sizes.join('|');
            $('.snipcart-add-item').attr('data-item-custom3-options', sizes);
        },
        appendSwatches: function () {
            for (let i = 0; i < this.swatches.length; i++) {
                let swatches = this.swatches[i];
                $('#swatches').append(`

                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                `)
            }
        },
        listFeatures: function () {
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++) {
                let feature = this.features[i];
                $('#features').append(
                    `<li>${feature}</li>`
                )
            }
        }
    },
    {
        style: 8719,
        name: '1 CARGO POCKET PANT',
        description: 'From fulfilling all your heroic duties to enjoying a relaxing cup of coffee, these straight leg scrub pants are essential for keeping you comfortable during any activity.',
        kind: 'energy',
        features: ['Straight leg with side vents', 'Back elastic waistband', 'Adjustable front waist ties', 'Single cargo pocket', 'Single back patch pocket', 'R: XS-3X ( 31”) | P: XS-XL (29”) | T: XS-XL (33”)'],
        fit: ['R: XS-3X ( 31”)', 'P: XS-XL (29”)', 'T: XS-XL (33”)'],
        swatches: ['BLAC', 'CARI', 'CEIL', 'CHOC', 'CRAL', 'EGPL', 'GLXY', 'HNTR', 'NAVY', 'PLUM', 'PWTR', 'REDD', 'ROYL', 'TEAL', 'TURQ', 'WINE', 'WHIT'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3X'],
        listCartData: function () {
            let swatches = this.swatches.join('|');
            $('.snipcart-add-item').attr('data-item-custom1-options', swatches);

            let fit = this.fit.join('|');
            $('.snipcart-add-item').attr('data-item-custom2-options', fit);

            let sizes = this.sizes.join('|');
            $('.snipcart-add-item').attr('data-item-custom3-options', sizes);
        },
        appendSwatches: function () {
            for (let i = 0; i < this.swatches.length; i++) {
                let swatches = this.swatches[i];
                $('#swatches').append(`

                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                `)
            }
        },
        listFeatures: function () {
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++) {
                let feature = this.features[i];
                $('#features').append(
                    `<li>${feature}</li>`
                )
            }
        }
    },
];

var generateItemsHtml = function () {
    for (let i = 0; i < styles.length; i++) {
        if (style == styles[i].style) {
                $('#view').html(`
                <div class="container p-md-5 mb-5 text-sofia">
                    <div class="row">
                        <div class="col-sm-12">
                            <div>
                                <h1 class='hidden-lg text-uppercase text-sofia'>${styles[i].style}<br><small class='text-uppercase text-sofia'>${styles[i].name}</small></h1>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div id="style-showcase">
                                <img src="./assets/images/products/${styles[i].style}.jpg" alt="${styles[i].style}" class="img-fluid mb-2" onError=this.src="./assets/images/products/blank.jpg">
                                <div class="container-fluid hidden-sm">
                                <div class="row">
                                <div class="col-sm-4"><img src="./assets/images/products/${styles[i].style}.jpg"
                                    alt="${styles[i].style}" class="img-fluid img-thumbnail thumbnails" data-orientation="front" onError=this.src="./assets/images/products/blank.jpg"></div>
                                <div class="col-sm-4"><img src="./assets/images/products/${styles[i].style}_back.jpg"
                                alt="${styles[i].style}" class="img-fluid img-thumbnail thumbnails" data-orientation="back" onError=this.src="./assets/images/products/blank.jpg"></div>
                                <div class="col-sm-4"><img src="./assets/images/products/${style}_sketch.jpg"
                                alt="${style}_sketch" class="img-fluid img-thumbnail thumbnails" data-orientation="sketch" onError=this.src="./assets/images/products/blank.jpg"></div>
                            </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div>
                                            <h1 class='hidden-sm text-uppercase'>${styles[i].style}<br><small class='text-uppercase'>${styles[i].name}</small></h1>
                                        </div>
                                        <br>
                                        <br>
                                        ${styles[i].description}<br><br>
                                        <ul id="features">
                                        </ul>
                                    </div>
                                    <div id="swatches" class="col-sm-12">
                                    <br>
                                    </div>
                                    <div class="col-md-12 my-3 d-flex justify-content-center">
                                        <button class="snipcart-add-item"
                                        data-item-max-quantity="1"
                                        data-item-id="${styles[i].style}"
                                        data-item-name="${styles[i].name}"
                                        data-item-price="20.00"
                                        data-item-url="https://onaseer87.github.io/Ambassador/prices.html"
                                        data-item-description="${styles[i].description}"
                                        data-item-image="./assets/images/products/${styles[i].style}.jpg"
                                        data-item-custom1-name="Select Color" 
                                        data-item-custom2-name="Select Fit"
                                        data-item-custom3-name="Select Size"       
                                        >Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `)
                styles[i].listFeatures();
                styles[i].appendSwatches();
                styles[i].listCartData();
        }

    }
}
generateItemsHtml();

let imageStyleColorChange = function () {
    $('.swatches').on('click', function () {
        let color = $(this).data('color');
        console.log(color)
        $('#style-showcase').html(`
        <img src="./assets/images/products/${style}_${color}.jpg" alt="${style}_${color}" class="img-fluid showcased-style mb-2" data-style="${style}_${color}" onError=this.src="./assets/images/products/blank.jpg">
        <div class="container-fluid hidden-sm">
        <div class="row">
            <div class="col-sm-4"><img src="./assets/images/products/${style}.jpg"
                alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="front" onError=this.src="./assets/images/products/blank.jpg"></div>
            <div class="col-sm-4"><img src="./assets/images/products/${style}_back.jpg"
            alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="back" onError=this.src="./assets/images/products/blank.jpg"></div>
            <div class="col-sm-4"><img src="./assets/images/products/${style}_sketch.jpg"
            alt="${style}_sketch" class="img-fluid img-thumbnail thumbnails" data-orientation="sketch" onError=this.src="./assets/images/products/blank.jpg"></div>
        </div>
        `)
    })

}

imageStyleColorChange();

let thumbnailImageChange = function () {
    $('body').on('click', '.thumbnails', function () {

        let orientation = $(this).data('orientation');
        console.log(orientation);
        if (orientation === "front") {
            $('#style-showcase').html(`
            <img src="./assets/images/products/${style}.jpg" alt="${style}" class="img-fluid mb-2" onError=this.src="./assets/images/products/blank.jpg">
            <div class="container-fluid hidden-sm">
            <div class="row">
                <div class="col-sm-4"><img src="./assets/images/products/${style}.jpg"
                    alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="front" onError=this.src="./assets/images/products/blank.jpg"></div>
                <div class="col-sm-4"><img src="./assets/images/products/${style}_back.jpg"
                alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="back" onError=this.src="./assets/images/products/blank.jpg"></div>
                <div class="col-sm-4"><img src="./assets/images/products/${style}_sketch.jpg"
                alt="${style}_sketch" class="img-fluid img-thumbnail thumbnails" data-orientation="sketch" onError=this.src="./assets/images/products/blank.jpg"></div>
            </div>
        `)
        } else if (orientation === "back") {
            $('#style-showcase').html(`
            <img src="./assets/images/products/${style}_back.jpg" alt="${style}_back" class="img-fluid mb-2" onError=this.src="./assets/images/products/blank.jpg">
            <div class="container-fluid hidden-sm">
            <div class="row">
                <div class="col-sm-4"><img src="./assets/images/products/${style}.jpg"
                    alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="front" onError=this.src="./assets/images/products/blank.jpg"></div>
                <div class="col-sm-4"><img src="./assets/images/products/${style}_back.jpg"
                alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="back" onError=this.src="./assets/images/products/blank.jpg"></div>
                <div class="col-sm-4"><img src="./assets/images/products/${style}_sketch.jpg"
                alt="${style}_sketch" class="img-fluid img-thumbnail thumbnails" data-orientation="sketch" onError=this.src="./assets/images/products/blank.jpg"></div>
            </div>
        `)
        } else if (orientation === "sketch") {
            $('#style-showcase').html(`
            <img src="./assets/images/products/${style}_sketch.jpg" alt="${style}_sketch" class="img-fluid mb-2" onError=this.src="./assets/images/products/blank.jpg">
            <div class="container-fluid hidden-sm">
            <div class="row">
                <div class="col-sm-4"><img src="./assets/images/products/${style}.jpg"
                    alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="front" onError=this.src="./assets/images/products/blank.jpg"></div>
                <div class="col-sm-4"><img src="./assets/images/products/${style}_back.jpg"
                alt="${style}" class="img-fluid img-thumbnail thumbnails" data-orientation="back" onError=this.src="./assets/images/products/blank.jpg"></div>
                <div class="col-sm-4"><img src="./assets/images/products/${style}_sketch.jpg"
                alt="${style}_sketch" class="img-fluid img-thumbnail thumbnails" data-orientation="sketch" onError=this.src="./assets/images/products/blank.jpg"></div>
            </div>
        `)
        }

    })

}

thumbnailImageChange();

$('#search-button').on('click', searchStyle);

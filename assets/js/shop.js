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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth().onAuthStateChanged(function(user){
      if(user){
          console.log('render the page')
          var $emailLabel = $('#email-label');
          $emailLabel.text(user.email);
        for (var i = 0; i < styles.length; i++){
            if (styles[i].kind === 'touch') {
                $('.touch').append(`
                    <div class="col-md-6 bg-white p-2">
                        <h2 class="text-left">${styles[i].style}</h2>
                        <h3 class="text-left">${styles[i].name}</h3>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <button class="bg-transparent snipcart-add-item"
                                        data-item-id='${styles[i].style}'
                                        data-item-name='${styles[i].name}'
                                        data-item-price='20'
                                        data-item-url='https://onaseer87.github.io/Ambassador/prices.html'
                                        data-item-description='${styles[i].description}'
                                    >
                                        <img class="img-fluid" src="assets/images/products/${styles[i].style}.jpg" 
                                        alt="${styles[i].style}-${styles[i].name}">
                                    </button>
                                </div>
                                <div class="col-md-6" id="${styles[i].style}-features>
                                </div>
                            </div>
                        </div>
                    </div>
              `)
            }
            if (styles[i].kind === 'activate') {
                $('.activate').append(`
                <div class="col-md-6 bg-white p-2">
                    <h2 class="text-left">${styles[i].style}</h2>
                    <h3 class="text-left">${styles[i].name}</h3>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <img class="img-fluid" src="assets/images/products/${styles[i].style}.jpg">
                            </div>
                        </div>
                    </div>  
                </div>
          `)
            }
        }

      } else {
          window.location.replace('index.html')
      }
  })

  $('#signout').on('click',signOutUser)

    function signOutUser(e) {
    e.preventDefault();
    firebase.auth().signOut()
    .then(function() {
      window.location.replace('index.html')
    }).catch(function(err){
      console.log(err);
    })
  }


  //COLLECTIONS
 var styles = [
    {
        style: 7479,
        name: 'HENLEY TOP',
        description:'Med Couture truly channeled up awesomeness with this henley scrub top. You’ll rock this relaxed fit style in comfort all day long. You can tuck it in or leave it out!',
        kind: 'touch',
        features:['Henley neck','Chest patch pocket','Back yoke with box pleat','Inside contrast neckband','R: XS-2X (26”)'],
        swatches:['BLAC','BLUH','NAVY','SLAT'],
        appendSwatches: function(){
            for (let i = 0; i < this.swatches.length; i++){
                let swatches = this.swatches[i];
                $('#swatches').append(`
                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                `)
            }
        },
        listFeatures: function(){
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++){
                let feature = this.features[i];
                $('#7479-features').append(
                    `<li>${feature}</li>`
                )
            }
        }
    },
    {
        style: 7789,
        name: 'YOGA 1 CARGO POCKET PANT',
        description:'Simple in design, this strait leg scrub pant has rib-knit accents at the waistband and pockets. The fabric and fit are unbelievably comfortable.',
        kind: 'touch',
        features:['Straight leg with side vents','Rib knit waist and pocket lining','1 cargo pocket','Two back patch pockets','R: XS-3X (31”) P XS-XL (29”) T XS-XL (33”)'],
        swatches:['BLAC','BLUH','NAVY','ROYL','SLAT'],
        appendSwatches: function(){
            for (let i = 0; i < this.swatches.length; i++){
                let swatches = this.swatches[i];
                $('#swatches').append(`
                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                `)
            }
        },
        listFeatures: function(){
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++){
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
        description:"You'll love this mock wrap scrub top. With a relaxed silhouette, this v-neck top has large pockets, an accessory loop, and princess seams in the back.",
        kind: 'touch',
        features:['Mock wrap v-neckline','Double-layered angled pockets','Accessory loop','Inside contrast neckband','Back princess seams','R: XS-3X (26”)'],
        swatches:['BLAC','BLUH','CEIL','GLXY','GRAP','NAVY','OLIV','PKPH','PWTR','ROYL','SLAT','WINE'],
        appendSwatches: function(){
            for (let i = 0; i < this.swatches.length; i++){
                let swatches = this.swatches[i];
                $('#swatches').append(`
                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                `)
            }
        },
        listFeatures: function(){
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++){
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
        description:"Med Couture jogger pants elevate a closet staple with an extra comfortable feel. Made from a poly blend that feels like cotton, they feature rib knit waistband and ankle cuffs.",
        kind: 'touch',
        features:['Single cargo pocket','Rib knit waistband and ankle cuffs','Adjustable front waist ties','Accessory loop','Two back patch pockets','R: XS-3X (28 1/2”) P XS-XL (26 1/2”) T XS-XL (31”)'],
        swatches:['BLAC','BLUH','CEIL','GLXY','GRAP','NAVY','OLIV','PKPH','PWTR','ROYL','SLAT','WINE','WHIT'],
        appendSwatches: function(){
            for (let i = 0; i < this.swatches.length; i++){
                let swatches = this.swatches[i];
                $('#swatches').append(`
                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                `)
            }
        },
        listFeatures: function(){
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++){
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
        description:"This classic is an industry favorite. It’s practical v-neck design and perfectly proportioned knit side panels bring style to your everyday wardrobe.",
        kind: 'touch',
        features:['Overlapping rib knit side panels','Accessory loop','Extra accessory pocket and pen slot','Two large patch pockets','Two back patch pockets',' Inside contrast neckband','R: XS-5X (27”)'],
        swatches:['BLAC','BLUH','CEIL','GLXY','GRAP','NAVY','OLIV','PKPH','PWTR','ROYL','SLAT','WINE','WHIT'],
        appendSwatches: function(){
            for (let i = 0; i < this.swatches.length; i++){
                let swatches = this.swatches[i];
                $('#swatches').append(`
                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                `)
            }
        },
        listFeatures: function(){
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++){
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
        description:"These lightweight strait leg scrub pants have a comfy wide waistband with internal ties. Designed for a clean, smooth fit with exceptional comfort.",
        kind: 'touch',
        features:['Straight leg with side vents','Jacquard elastic and rib knit waistband','Internal waist ties','Two cargo, two back patch ','Two back patch pockets','Extra accessory pocket','Accessory loop','R: XS-5X (31”) P XS-2X (29”) T XS-XL (33”)'],
        swatches:['BLAC','BLUH','CEIL','GLXY','GRAP','NAVY','OLIV','PKPH','PWTR','ROYL','SLAT','WINE'],
        appendSwatches: function(){
            for (let i = 0; i < this.swatches.length; i++){
                let swatches = this.swatches[i];
                $('#swatches').append(`
                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>
                `)
            }
        }
    },
    {
        style: 8416,
        name: 'V-NECK RACERBACK TOP',
        description:'This v-neck scrub top gives you the lightweight, breathable coverage you want. A classic silhouette and ample pocket space makes this piece a staple!',
        kind: 'activate',
        features:['Back knit racerback panel','Shoulder yokes','Two large patch pockets','Extra accessory pockets','Hidden side seam pockets','R: XS-3X (26”)'],
        swatches:['BLAC','CARI','CEIL','CHOC','GLXY','HNTR','NAVY','OLIV','PKPH','PLUM','PWTR','REDD','RLTL','ROYL','SKYB','SPMN','WINE'],
        appendSwatches: function(){
            for (let i = 0; i < this.swatches.length; i++){
                let swatches = this.swatches[i];
                $('#swatches').append(`

                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                `)
            }
        },
        listFeatures: function(){
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++){
                let feature = this.features[i];
                $('#features').append(
                    `<li>${feature}</li>`
                )
            }
        }
    },
    {
        style: 8408,
        name: 'V-NECK PRINCESS SEAM TOP',
        description:'This v-neck scrub top gives you the lightweight, breathable coverage you want. A classic silhouette and ample pocket space makes this piece a staple!',
        kind: 'activate',
        features:['Shoulder princess seams','Two large patch pockets','Extra accessory pockets','Snap closure','R: XS-3X (26”)'],
        swatches:['BLAC','CARI','CEIL','GLXY','NAVY','OLIV','PKPH','PLUM','PWTR','REDD','ROYL','TEAL','SKYB','SPMN','WINE'],
        appendSwatches: function(){
            for (let i = 0; i < this.swatches.length; i++){
                let swatches = this.swatches[i];
                $('#swatches').append(`

                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                `)
            }
        },
        listFeatures: function(){
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++){
                let feature = this.features[i];
                $('#features').append(
                    `<li>${feature}</li>`
                )
            }
        }
    },
    {
        style: 8758,
        name: 'YOGA 2 CARGO POCKET PANT',
        description:'Take your daily adventure in stride in these sporty scrub pants, ideal for work and leisure. These pants have a comfortable jacquard elastic and knit waistband.',
        kind: 'activate',
        features:['Boot cut leg with side vents','Jacquard elastic and knit waistband','Two cargo pockets','Single back patch pocket','R: XS-3X (31”) | P: XS-XL (29”) | T: XS-XL (33”)'],
        swatches:['BLAC','CARI','CEIL','CHOC','GLXY','HNTR','NAVY','OLIV','PKPH','PLUM','PWTR','REDD','RLTL','ROYL','SKYB','SPMN','WINE'],
        appendSwatches: function(){
            for (let i = 0; i < this.swatches.length; i++){
                let swatches = this.swatches[i];
                $('#swatches').append(`

                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                `)
            }
        },
        listFeatures: function(){
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++){
                let feature = this.features[i];
                $('#features').append(
                    `<li>${feature}</li>`
                )
            }
        }
    },
    {
        style: 8747,
        name: 'YOGA 1 CARGO POCKET PANT',
        description:'This simple scrub pant feels extremely durable and has great shape retention. A stretchy knit waistband and an external drawstring adjusts perfectly flatter any figure.',
        kind: 'activate',
        features:['Roomy straight leg','Stretchy knit waistband','Single cargo zipper pocket','Single back patch pocket','R: XS-3X (31”) | P: XS-XL (29”) | T: XS-XL (33”)'],
        swatches:['BLAC','CARI','CEIL','CHOC','GLXY','HNTR','NAVY','OLIV','PKPH','PLUM','PWTR','REDD','RLTL','ROYL','SKYB','SPMN','WINE'],
        appendSwatches: function(){
            for (let i = 0; i < this.swatches.length; i++){
                let swatches = this.swatches[i];
                $('#swatches').append(`

                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                `)
            }
        },
        listFeatures: function(){
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++){
                let feature = this.features[i];
                $('#features').append(
                    `<li>${feature}</li>`
                )
            }
        }
    },
    {
        style: 8459,
        name: 'MATERNITY TOP',
        description:'You must experience our maternity scrub top. Crafted from smooth, stretchy fabric, it retains its shape wash after wash. The versatile style ensures a perfect fit.',
        kind: 'activate',
        features:['Comfortable side knit panels','Adjustable bungee with toggle','Two large patch pockets','Classic v-neckline','R: XS-3X (27”)'],
        swatches:['BLAC','NAVY','PWTR','ROYL','WINE'],
        appendSwatches: function(){
            for (let i = 0; i < this.swatches.length; i++){
                let swatches = this.swatches[i];
                $('#swatches').append(`

                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                `)
            }
        },
        listFeatures: function(){
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++){
                let feature = this.features[i];
                $('#features').append(
                    `<li>${feature}</li>`
                )
            }
        }
    },
    {
        style: 8727,
        name: 'MATERNITY PANT',
        description:'These athletic inspired scrub pants are sporty and stretchy. You’ll want to live in these 24/7 with the comfortable knit waist panel.',
        kind: 'activate',
        features:['Boot cut leg with side vents','Comfortable knit waist pane','Single cargo pocket','Single back welt pocket','R: XS-3X (30”) | P: XS-XL (29”)'],
        swatches:['BLAC','NAVY','PWTR','ROYL','WINE'],
        appendSwatches: function(){
            for (let i = 0; i < this.swatches.length; i++){
                let swatches = this.swatches[i];
                $('#swatches').append(`

                    <button class='${swatches} ml-2 swatches' data-color='${swatches}'></button>

                `)
            }
        },
        listFeatures: function(){
            console.log(this.features)
            for (let i = 0; i < this.features.length; i++){
                let feature = this.features[i];
                $('#features').append(
                    `<li>${feature}</li>`
                )
            }
        }
    }
];


const data=[
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2524025-fotojet.jpg",
        headline:"Cheteshwar Pujara slams a double century for Sussex on his captaincy debut",
    },


 {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2524015-suresh-raina.jpg",
        headline:"Can Suresh Raina play in foreign T20 leagues? Aakash Chopra makes HUGE revelation",
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523953-odi-rankings.jpg",
        headline:"Rohit Sharma-Virat Kohli drop places, massive gains for Pant, Hardik in ODI rankings",
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523919-kl-rahul.jpg",
        headline:"IND vs WI: KL Rahul 'hustling' for Team India comeback, watch video of his training routine",
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523943-man-city-vs-america.jpg",
        headline:"Man City vs Club America highlights: Kevin de Bruyne brace ensures commanding 2-1 win",
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523936-sourav-ganguly-jay-shah.jpg",
        headline:"DNA Explainer: What is the BCCI constitution amendment plea? How it affects Sourav Ganguly, Jay Shah?",
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523853-fotojet-20.jpg",
        headline:"Harbhajan Singh trolls Yuvraj Singh in Rohit Sharma's Instagram post about his 'Long lost friend'",
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523910-dk.jpg",
        headline:"Dinesh Karthik breaks silence over his ODI World Cup 2023 plans, says 'I have been informed...'",
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523837-fotojet-19.jpg",
        headline:"Shane Watson, Matt Prior, Kaluwitharna to feature in season 2 of Legends League Cricket",
    },

    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523894-2426047-sl.jpg",
        headline:"Sri Lanka Cricket Board informs Asian Cricket Council about unable to host Asia Cup T20I amid political crisis",
    },
    
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2524059-fotojet-4.jpg",
        headline:"Sumit Nagal returns to Indian Davis Cup team, Divij Sharan dropped"
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/24/2524656-eldhose-paul-anurag-thakur-twitter.jpg",
        headline:" World Athletics Championships 2022: Triple jumper Eldhose Paul comes 9th in final event"
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524653-ars-vs-che.jpg",
        headline:"Arsenal vs Chelsea, pre-season friendlies 2022: Live streaming, ARS vs CHE dream11, where to watch"
    },
    {
       
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524647-rma-vs-bar.jpg",
        headline:"Real Madrid vs Barcelona, El Clasico 2022: Live streaming, RMA vs BAR dream11, where to watch"
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524630-vince.jpg",
        headline:"WWE supremo Vince McMahon retires amid sexual misconduct allegations, see how wrestlers reacted"
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524590-bcci.jpg",
        headline:"18 crore spent on Tokyo Olympics: Details of BCCI's non-cricketing expenses for past 2 years"
    },
    {
        img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524606-fotojet.jpg",
        headline:"IND vs WI 2nd ODI Dream11 prediction: Fantasy cricket tips for India vs West Indies in Trinidad"
    }

    ];

    
      function append(data) {
    
        let container = document.getElementById("container");
    
        data.forEach(function (ele) {
    
            let div = document.createElement("div");
            let a = document.createElement("a")
            a.href="details.html"
            let img = document.createElement("img");
            img.src = ele.img;
            let headline = document.createElement("p");
            headline.innerText = ele.headline;
           
            a.append(img ,headline)
             div.append(a);
             container.append(div);
    })  
    };
    append(data);
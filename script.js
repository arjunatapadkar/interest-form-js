

// 
const formDetails = {

    Name : "",
    Nickname : "",
    contact : "",

    shared : {
        
        walk : "not interested",
        Running : "not interested",
        Bicycling : "not interested",
        Dogwalking : "not interested",
        Gardening : "not interested",
        swimmming : "not interested",
        tea_coffee : "not interested",
        place : "not interested",
        time : "not interested",
        art : "not interested",
        blockParty : "not interested",
        cook : "not interested",
        dinnerParty : "not interested",
        videoGames : "not interested",
        sports : "not interested",
        movies : "not interested",
        shopping : "not interested",
        restaurants : "not interested",
        reading : "not interested",
        happyHour : "not interested"
        
        
    },

    favors : {

        errands : "no",
        rides : "no",
        childcare : "no",
        eldercare : "no",
        petcare : "no",

        subject : "",
        
        repair_advice : "no",
        advice : "no",

    }

}





// onclick submit 

document.getElementById('interestForm').addEventListener('submit', function(event){

    // Prevent form submission to avoid page reload
    event.preventDefault();

    // name
    const fname = document.getElementById('fname');
    formDetails.Name = fname.value;

    // nickname
    const nickName = document.getElementById('nickName');
    formDetails.Nickname = nickName.value;

    // contact
    const contact_options = document.getElementsByName('contact');
    for(const opt of contact_options){
        if(opt.checked){
            formDetails.contact = opt.value;
            break;
        }
        
    }

    // walk
    const walk_opt = document.getElementsByName('walk');
    for(const opt of walk_opt){
        if(opt.checked == true){
            formDetails.walk = opt.value;
            break;
        }
      
    }

    // run
    const run_opt = document.getElementsByName('run');
    for(const opt of run_opt){
        if(opt.checked){
            formDetails.shared.Running  = opt.value;
            break;
        }   
    }

    // bicycle
    const cycle = document.getElementById('cycle');
    if(cycle.checked){
        formDetails.shared.Bicycling = "Interested";
    }

    // dog
    const dog = document.getElementById('dog');
    if(dog.checked){
        formDetails.shared.Dogwalking = "inteested";
    }

    // garden
    const garden = document.getElementsByName('gdn');
    for(const opt of garden){
        if(opt.checked){
            formDetails.shared.Gardening = opt.value;
            break;
        }
    }

    // swim
    const swim = document.getElementsByName('swim');
    for(const opt of swim){
        if(opt.checked){
            formDetails.shared.swimmming = opt.value;
            break;
        }
    }

    // meetup chai coffeee
    if(document.getElementById('drink').checked){
        formDetails.shared.tea_coffee = "interested";
    }
    const chai = document.getElementsByName('place');
    for( const opt of chai){
        if(opt.checked){
            formDetails.shared.place = opt.value;
        }
    }
    const timing = document.getElementsByName('time');
    for( const opt of timing){
        if(opt.checked){
            formDetails.shared.time = opt.value;
        }
    }


    // art
    const art = document.getElementById('art');
    if(art.checked){
        formDetails.shared.art = "Interested";
    }

    // cook
    const cook = document.getElementById('cook');
    if(cook.checked){
        formDetails.shared.cook = "interested";
    }

    // block
    const block = document.getElementById('block');
    if(block.checked){
        formDetails.shared.blockParty = "interested";
    }

    // dinner
    const dinner = document.getElementById('dinner');
    if(dinner.checked){
        formDetails.shared.dinnerParty = "interested";
    }

    // video games
    const games = document.getElementById('game');
    if(games.checked){
        formDetails.shared.videoGames = "interested";
    }

    // sports
    const sport = document.getElementsByName('sports');
    for(const opt of sport){
        if(opt.checked){
            formDetails.shared.sports = opt.value;
            break;
        }
    }
    
    // movies
    const movies = document.getElementsByName('movie');
    for(const opt of movies){
        if(opt.checked){
            formDetails.shared.movies = opt.value;
            break;
        }
    }


    // shopping
    const items = document.getElementsByName('shop');
    for(const opt of items){
        if(opt.checked){
            formDetails.shared.shopping = opt.value;
            break;
        }
    }


    // restaurant
    const rest = document.getElementById('rest');
    if(rest.checked){
        formDetails.restaurants = "interested";
    }

    // reading
    const read = document.getElementById('read');
    if(read.checked){
        formDetails.reading = "interested";
    }

    
    // happy hour
    const happy = document.getElementsByName('hour');
    for(const opt of happy){
        if(opt.checked){
            formDetails.shared.happyHour = opt.value;
            break;
        }
    }

    // Favors


    // errands
    const errands = document.getElementsByName('err');
    for(const opt of errands){
        if(opt.checked){
            formDetails.favors.errands = opt.value;
            break;
        }
    }


    // rides
    const rides = document.getElementsByName('ride');
    for(const opt of rides){
        if(opt.checked){
            formDetails.favors.rides = opt.value;
            break;
        }
    }


    // childcare
    const childcares = document.getElementsByName('c-care');
    for(const opt of childcares){
        if(opt.checked){
            formDetails.favors.childcare = opt.value;
            break;
        }
    }

    // eldercare
    const eldercares = document.getElementsByName('e-care');
    for(const opt of eldercares){
        if(opt.checked){
            formDetails.favors.eldercare = opt.value;
            break;
        }
    }

    // pet care
    const pets = document.getElementsByName('p-care');
    for(const opt of pets){
        if(opt.checked){
            formDetails.favors.petcare = opt.value;
            break;
        }
    }


    // subjects
    const subs = document.getElementById('sub');
    formDetails.favors.subject = subs.value;


    // repair
    const repairs = document.getElementsByName('repair');
    for(const opt of repairs){
        if(opt.checked){
            formDetails.favors.repair_advice = opt.value;
            break;
        }
    }

    // advice
    const advs = document.getElementsByName('advice');
    for(const opt of advs){
        if(opt.checked){
            formDetails.favors.advice = opt.value;
            break;
        }
    }




    console.log(formDetails);


});























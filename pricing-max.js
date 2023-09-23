

// change card content in linux shared hosting page
// change card cotnent start
//document.querySelector('#card_global').style.display = 'none'; //global content display none by defatult

//document.getElementsByClassName('mint_linux_navbar')[0].style.border = '1px solid green'; //active nav by default


function openLinuxPricingCard(card_content, e) {
    let sharedPricingNav = document.getElementsByClassName('mint_linux_navbar');
    let activeNav = document.getElementsByClassName("mint_linux_navbar_nav_active")[0];

    for (let index = 0; index < sharedPricingNav.length; index++) {
        sharedPricingNav[index].style.border = 'none';
    }

    if (card_content == "bd") {
        document.getElementById('card_bd').style.display = 'block';
        document.getElementById('card_global').style.display = 'none';
        activeNav.style.left = "29px";
        e.style.border = '1px solid  #53B14A';
        e.style.transition = "all linear .3s"
    }
    if (card_content == 'global') {
        document.getElementById('card_global').style.display = 'block';
        document.getElementById('card_bd').style.display = 'none';
        activeNav.style.left = "82px";
        e.style.border = '1px solid  #53B14A';
        e.style.transition = "all linear .3s"
    }

}

//for BDIX VPS
if(document.getElementsByClassName('mint_linux_navbar')[0]){
    document.getElementsByClassName('mint_linux_navbar')[0].style.fontWeight = 'bold';
}

// function openPricingCard(card_content) {
//     if(card_content == "uk") {
//         document.getElementById('card_bd').style.display = 'block';
//         document.getElementById('card_global').style.display = 'none';
//         document.getElementsByClassName('mint_linux_navbar')[0].style.backgroundColor = 'white';
//         document.getElementsByClassName('mint_linux_navbar')[0].style.fontWeight = 'bold';
        
//         document.getElementsByClassName('mint_linux_navbar')[1].style.fontWeight = 'normal';
//         document.getElementsByClassName('mint_linux_navbar')[1].style.backgroundColor = 'transparent';
//     }
//     if(card_content == "us"){
//         document.getElementById('card_bd').style.display = 'none';
//         document.getElementById('card_global').style.display = 'block';
//         document.getElementsByClassName('mint_linux_navbar')[1].style.backgroundColor = 'white';
//         document.getElementsByClassName('mint_linux_navbar')[0].style.fontWeight = 'normal';
        
//         document.getElementsByClassName('mint_linux_navbar')[1].style.fontWeight = 'bold';
//         document.getElementsByClassName('mint_linux_navbar')[0].style.backgroundColor = 'transparent';
//     }
                        
// }
//chnage card content end 

// pricing plan call to action button start 

//get all select form by classname
        
let pricingPlan = document.getElementsByClassName('pricing_plan');

//loop throungt all select
for (let plan = 0; plan < pricingPlan.length; plan++) {
    //get the action button 
    let pricingPlanCallToAction = document.getElementsByClassName('mint_linux_btn');
        
    //add default button link
    pricingPlanCallToAction[plan].setAttribute('href', pricingPlan[plan].value);
    
    //default discount value
    let discount = document.getElementsByClassName("discount");
    //discount[plan].innerHTML = "40% Discount";
    
    
    // deffault discount begain
    //get selectd input data-id to change discount
    let selected = pricingPlan[plan].options[pricingPlan[plan].selectedIndex];
    let targetData = selected.getAttribute('data-id');
    console.log(targetData);
    
    //change discount value while change on select element
    if (targetData == '1') {
        discount[plan].innerHTML = "0% Discount";
    }
    if (targetData == '2') {
        discount[plan].innerHTML = "5% Discount";
    }
    if (targetData == '3') {
        discount[plan].innerHTML = "10% Discount";
    }
    if (targetData == '4') {
        discount[plan].innerHTML = "15% Discount";
    }
    if (targetData == '5') {
        discount[plan].innerHTML = "25% Discount";
    }
    
    //default discount end
    
    //add onchange event listener
    pricingPlan[plan].addEventListener('change', (e) => { 
        //get the select element when select an option
        
        //console.log(e.target.value);
        
        //change discount 
        //get selectd input data-id to change discount
        let selected = pricingPlan[plan].options[pricingPlan[plan].selectedIndex];
        let targetData = selected.getAttribute('data-id');
        //console.log(targetData);
        
        //change discount value while change on select element
        if (targetData == 1) {
            discount[plan].innerHTML = "0% Discount";
        }
        if (targetData == 2) {
            discount[plan].innerHTML = "5% Discount";
        }
        if (targetData == 3) {
            discount[plan].innerHTML = "10% Discount";
        }
        if (targetData == 4) {
            discount[plan].innerHTML = "15% Discount";
        }
        if (targetData == 5) {
            discount[plan].innerHTML = "25% Discount";
        }
    
        //set action button href
        pricingPlanCallToAction[plan].setAttribute('href', e.target.value);
        
    })

}

// pricing plan call to action button end 


//for technical specification section
let techAccordionButton = document.getElementsByClassName('tech-spac-accordion-button');
let acHeader = document.getElementsByClassName("tech-spac-accordion-header");
let acImage = document.getElementsByClassName("tech-spac-image");
let aItem = document.getElementsByClassName("tech-spac-accordion-item");

for (let ac = 0; ac < techAccordionButton.length; ac++) {
    
    
    techAccordionButton[ac].addEventListener("click", (e)=>{
        
        //default open image
        acImage[0].style.display = 'block';
        
        //default collapse open
        aItem[0].style.maxHeight = "100%";
        
        for (let i = 0; i < acImage.length; i++) {
            //display block all image by default
            acImage[i].style.display = 'none';
            //button default style
            techAccordionButton[i].style.color = "black";
            techAccordionButton[i].style.fontWeight = 'normal';
            
            //accodtion item style default
            aItem[i].style.maxHeight = '58px';
        }

        //accordion button style when click on accondion button
        e.target.style.color = '#eca940';
        e.target.style.transition = "all linear .1s";
        e.target.style.fontWeight = '600';

        //console.log(e.target.dataset.image);
        //accordion height
        aItem[ac].style.maxHeight = "100%";
        aItem[ac].style.transition = "all linear .5s";
        
        //show specific image
        document.getElementById(e.target.dataset.image).style.display = 'block';

    })
    
}



// domain registration pricing domain search begain
// search 



// dynamic element create for mobile version
let card = document.querySelectorAll('.mint_dp_pricing_card');
let reg = document.querySelectorAll(".price-register");
let renew = document.querySelectorAll(".price-renew");
let tranf = document.querySelectorAll(".price-transfer");
let dp_limit = 0;
let dp_ofset = 0;


for (let c = 0; c < card.length; c++) {
    // let reg = document.querySelectorAll(".price-register")[0];

    let rg = document.createElement("div");
    rg.innerHTML = "Register";
    rg.classList.add("pr-option");

    let rew = document.createElement("div");
    rew.innerHTML = "Renew";
    rew.classList.add("pr-option");

    let trf = document.createElement("div");
    trf.innerHTML = "Transfer";
    trf.classList.add("pr-option");

    reg[c].prepend(rg);
    renew[c].prepend(rew);
    tranf[c].prepend(trf);
}


//domain search
document.getElementById('domain_search').addEventListener("keyup", (e) => {
    let card = document.getElementsByClassName('mint_dp_pricing_card');

    //get input value
    let Ivalue = e.target.value;
    if (Ivalue != '') {
        document.getElementsByClassName('mint_dp_more_btn')[0].style.display = 'none';
    } else {
        document.getElementsByClassName('mint_dp_more_btn')[0].style.display = 'block';
    }
    // console.log(card[0].dataset.name.includes('m'));

    //console.log("not empty");
    // console.log(get);
    // console.log(card[i].dataset.name);

    //loop throungt all card
    for (let i = 0; i < card.length; i++) {
        card[i].style.display = "none";

        //if anything  match
        if (card[i].dataset.name.includes(Ivalue)) {
            card[i].style.display = "block";
            // console.log(i);
        }
    }


})


//pagination
function dp_paginate(limit) {

    //get all pricing card.
    let card = document.getElementsByClassName('mint_dp_pricing_card');
    dp_limit += limit;

    //if input over the card lenght this set card lenght to limit variable.
    if (dp_limit > card.length) {
        dp_limit = card.length
        document.getElementsByClassName('mint_dp_more_btn')[0].style.display = 'none';
        console.log("its ok now");

    }

    //first display none all card
    for (let pg = 0; pg < card.length; pg++) {
        card[pg].style.display = "none";
    }

    //then,display block targeted limit card
    for (let pg = dp_ofset; pg < dp_limit; pg++) {
        card[pg].style.display = 'block';

    }
    console.log(dp_limit);


}
//first time paginate only 10 card
// dp_paginate(8);

// domain registration pricing end


// ssl certificate start
        // get all class name mint-ssl-navbar-nav 
    let mint_ssl_nav = document.getElementsByClassName("mint-ssl-navbar-nav");
    //get all pricing card by class name 
    let mint_ssl_pricing_card = document.getElementsByClassName('mint-ssl-pricing-card');
   
    // loop throught all classes 
    for (let a = 0; a < mint_ssl_nav.length; a++) {
        
    mint_ssl_pricing_card[a].style.display = "none";
    
    //display block 5 years pricing card by defautl
    mint_ssl_pricing_card[2].style.display = "block";

    //add click event listerner. when click any navbar nav
    mint_ssl_nav[a].addEventListener("click", (e) => {
        console.log(e.target.dataset.billingcycle);
        
        //get billingCycle name from clicked nav
        let billingCycle = e.target.dataset.billingcycle;
        //console.log(billingCycle);
        //display none all
        for (let a = 0; a < mint_ssl_pricing_card.length; a++) {
            mint_ssl_pricing_card[a].style.display = "none";

            //remone active class nav from all navbar nav
            mint_ssl_nav[a].classList.remove('mint-ssl-active-nav');
        }

        //active navbar class
        e.target.classList.add("mint-ssl-active-nav");

        //display block the targeted pricing card
        mint_ssl_pricing_card[billingCycle].style.display = 'block';

    })
}

// small navbar 
function openNavSm(e) {
    let nav_sm = document.getElementById('mint-ssl-nav-sm');
    // nav_sm.style.maxHeight = '45px';

    if (nav_sm.style.maxHeight == "45px" || nav_sm.style.maxHeight == '') {
        nav_sm.style.maxHeight = "100%";
        nav_sm.style.transition = "all linear .3s";
    } else {
        nav_sm.style.maxHeight = "45px";
        nav_sm.style.transition = "all linear .3s";
    }

}

function navSmPricingCard(billingcycle) {
    let nav_sm_pricing_card = document.getElementsByClassName('nav_sm');

    let mint_ssl_pricing_card = document.getElementsByClassName('mint-ssl-pricing-card');
    for (let sm = 0; sm < mint_ssl_pricing_card.length; sm++) {
        //display none all pricing card
        mint_ssl_pricing_card[sm].style.display = 'none';
        
        //remove active class from all navbar nav
        nav_sm_pricing_card
    }
    //console.log(billingcycle);
    mint_ssl_pricing_card[billingcycle].style.display = "block";
    // nav_sm_pricing_card[billingcycle].style.display = 'block';
}
// ssl certificate end

{/* <div class="jumbotron p-md-1 text-white rounded bg-dark">
<div class="col-md-1">
    <h1 class="display-5 font-italic menu-header">contact</h1>
</div>
</div>
<div class="row d-flex justify-content-around align-items-center">
<div class="col-md-5">
  <h2>We are located at the heart of the Philippines.</h2>
  <p class="lead">987 Gen. Shin Street Makati City</p>
</div>
<img class='philippines' src='assets/flag.png' alt="philippine flag">
</div>
<hr>
<div class="row d-flex justify-content-around align-items-center">
<div class="col-md-5">
  <h2>Hotline Number is available weekdays 9AM - 5PM</h2>
  <p class="lead">765-0432</p>
</div>
<img class='philippines' src='assets/phone.png' alt="image of the philippine islands">
</div>
<hr>
<div class="row d-flex justify-content-around align-items-center">
<div class="col-md-5">
  <h2>Customer Service for your product and service inquiries</h2>
  <p class="lead">help@gradeacoffee.com.ph</p>
</div>
<img class='philippines' src='assets/customer-service.png' alt="image of the philippine islands">
</div> */}
import appendElements from './helpers';

const contact = (function () {
    const main = document.querySelector('main');
    let details = [
        ['We are located at the heart of the Philippines', '987 Gen. Shin Street Makati City', 'flag'],
        ['Hotline Number is available weekdays 9AM - 5PM', '765-0432', 'phone'],
        ['Customer Service for your product and service inquiries', 'help@gradeacoffee.com.ph', 'customer-service']
    ]

    function heading () {
        let heading = document.createElement('div');
        heading.classList.add(
            'jumbotron', 
            'p-md-1', 
            'text-white', 
            'rounded', 
            'bg-dark', 
            'd-flex', 
            'justify-content-between', 
            'align-items-center');
        
        let headingText = document.createElement('div');
        headingText.classList.add('col-md-1');
        let text = document.createElement('h1');
        text.classList.add(
            'display-5',
            'font-italic',
            'menu-header'
        )
        text.innerHTML = 'contact';

        headingText.appendChild(text);
        heading.appendChild(headingText);
        return heading;
    }

    function createList () {
        details.forEach(detail => {
            let listContainer = document.createElement('div');
            listContainer.classList.add(
                'row',
                'd-flex', 
                'justify-content-around', 
                'align-items-center'
            )

            let detailContainer = document.createElement('div');
            detailContainer.classList.add('col-md-6');

            let detailHead = document.createElement('h2');
            detailHead.innerHTML = detail[0];

            let detailP = document.createElement('p');
            detailP.classList.add('lead');
            detailP.innerHTML = detail[1];
            
            let detailIMG = document.createElement('img');
            detailIMG.classList.add('contact-img')
            detailIMG.src = `assets/${detail[2]}.png`
            
            appendElements(detailContainer, [detailHead, detailP]);
            appendElements(listContainer, [detailContainer, detailIMG])
            appendElements(main, [listContainer, createHR()])
        })
    }

    function createHR () {
        return document.createElement('hr');
    }
    function render () {
        main.appendChild(heading());
        createList();
    }
    return {
        render
    }
})();

export default contact;
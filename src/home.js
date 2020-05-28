import appendElements from './helpers';

const home = (function () {
    const main = document.querySelector('main');
    function createHeading () {
        let heading = document.createElement('div');
        heading.classList.add(
            'jumbotron', 
            'p-4', 
            'p-md-5', 
            'text-white', 
            'rounded', 
            'bg-dark', 
            'd-flex', 
            'justify-content-around'
            );
        appendElements(heading, [createIntroText(), createIntroImg()])
        return heading;
    }

    function createIntroText () {
        let introduction = document.createElement('div');
        introduction.classList.add(
            'col-md-6',
            'px-0'
        );

        let introHeader = document.createElement('h1');
        introHeader.classList.add(
            'display-4', 
            'font-italic', 
            'home-header'
        )
        introHeader.innerHTML = "Serving the best grade coffee";

        let introPara = document.createElement('p');
        introPara.classList.add(
            'lead', 
            'my-3'
        )
        introPara.innerHTML = "Started on 2020, Grade A coffee aims to provide the best quality coffee. Grade A is currently the best cafe in Manila noted by experts.";
        
        appendElements(introduction, [introHeader, introPara])
        return introduction;
    }

    function createIntroImg () {
        let imgContainer = document.createElement('div');
        imgContainer.classList.add(
            'd-flex', 
            'align-items-center'
        );

        let introImg = document.createElement('img');
        introImg.classList.add("home-img");
        introImg.src = "assets/cafe.png";

        appendElements(imgContainer, [introImg])
        return imgContainer;
    }

    function render () {
        main.appendChild(createHeading());
    }

    return {
        render
    }
})();

export default home;
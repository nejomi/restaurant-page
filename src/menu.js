/* <div class="jumbotron p-md-1 text-white rounded bg-dark d-flex justify-content-between align-items-center">
<div class="col-md-1">
    <h1 class="display-5 font-italic menu-header">MENU</h1>
</div>
<div class="menu-right">
    <h4 class="menu-header">grade a</h1>
</div>
</div>
*/
import appendElements from './helpers';

const menu = (function () {
    const main = document.querySelector('main');
    let products = [];

    class Product {
        constructor(name, type, price) {
            this.name = name;
            this.type = type;
            this.price = price;
        }
    }
    
    function loadProducts () {
        let items = [
            ["Java Chip Deluxe", "Frappe", 150],
            ["Mocha Cookie Crumble", "Frappe", 120],
            ["Double Chocolatey Chip", "Frappe", 120],
            ["Caffe Americano", "Hot", 80],
            ["Cappucino", "Hot", 80],
            ["Espresso", "Hot", 80],
            ["Dragon Drink", "Cold", 120],
            ["Blended Strawberry", "Cold", 120],
        ]

        for (let i = 0; i < items.length; i++) {
            products[i] = new Product(items[i][0], items[i][1], items[i][2]);
        }
    }

    function createHeading () {
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
        
        appendElements(heading, [createHeaderText()])
        return heading;
    }

    function createHeaderText () {
        let headerContainer = document.createElement('div');
        headerContainer.classList.add("col-md-1");

        let headerText = document.createElement('h1');
        headerText.classList.add(
            'display-5',
            'font-italic',
            'menu-header'
        );
        headerText.innerHTML = "menu";

        headerContainer.appendChild(headerText);
        return headerContainer;
    }

    function createMenu () {
        let menu = document.createElement('table');
        menu.classList.add('table', 'table-hover');

        let tHead = document.createElement('thead');
        tHead.classList.add('thead-dark');
        let tHeadRow = document.createElement('tr');
        
        let headerRow = ["drink", "type", "price"];
        headerRow.forEach(header => {
            let th = document.createElement('th');
            th.classList.add('table-h');
            th.scope = "col";
            th.innerHTML = header;
            tHeadRow.appendChild(th);
        })

        tHead.appendChild(tHeadRow);
        
        let tBody = document.createElement('tbody');

        products.forEach(product => {
            let menuItem = document.createElement('tr');
            for (let key in product) {
                let column = document.createElement('td');
                column.innerHTML = product[key];
                menuItem.appendChild(column);
            }

            tBody.appendChild(menuItem);
        })
        
        menu.appendChild(tHead);
        menu.appendChild(tBody);
        return menu;
    }

    function render () {
        loadProducts();
        appendElements(main, [createHeading(), createMenu()])
    }

    return {
        render
    }
})()

export default menu;
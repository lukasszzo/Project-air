fetch('http://api.gios.gov.pl/pjp-api/rest/station/findAll')
.then(r => r.json())
.then(data => {
    var newArray = data.filter(function(el) {
        return el.city;
    });

    const namesArray = newArray.map(item => {
        return item.city.name
    });
    const unique = namesArray.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    })
    const sortedList=unique.sort();

    const cityLi = unique.map(item => {
        const list = document.querySelector('#listComponents');
        const newListItem = document.createElement('li');
        newListItem.innerText = item;
        list.appendChild(newListItem);
    });

    const inputCity=document.getElementById('inputCity');

    


});

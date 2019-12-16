// console.log('--js loaded--')

const filters = document.getElementById('filters').getElementsByTagName('a')
const images = document.getElementById('images').getElementsByTagName('li')

for (let i = 0; i < filters.length; i++){
    const filter = filters [i];
    filter.addEventListener('click', function(event){
        console.log('click', event.target.getAttribute('data-filter')
        event.preventDefault();
        filterImages(event.target.getAttribute('data-filter'));
    }

    );
};

filterImages = function(filterClass){
    for (let i =0; i<images.length; i++){
        if(!images[i].classList.contains(filterClass)){
            images[i].classList.add('hide');
        } else{
            images[i].classList.remove('hide');
        }
    }
}
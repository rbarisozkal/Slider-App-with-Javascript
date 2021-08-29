var models =[
    {
        name:'Bmw 116d',
        image:'img/bmw.jpg',
        link:'https://www.bmw.com/en/index.html'
    },
    {
        name:'Mazda CX-8',
        image:'img/mazda.jpg',
        link:'https://www.mazda.com/'
    },
    {
        name:'Honda Civic',
        image:'img/honda.jpg',
        link:'https://www.honda.co.uk/'
    },
    {
        name:'Volvo S60',
        image:'img/volvo.jpg',
        link:'https://www.volvocars.com/intl'
    },
    {
        name:'Skoda Superb',
        image:'img/skoda.jpg',
        link:'https://www.skoda-auto.com/'
    }
];

var interval;
var index = 0;
var slideCount=models.length;
var settings={
    duration:'3000',
    random:false
};

init(settings);


document.querySelector('.fa-arrow-circle-left').addEventListener('click',function () {
    index--;
    showSlide(index);
    console.log(index);
});
document.querySelectorAll('.fas').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});
document.querySelectorAll('.fas').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings) {
    var previous;
    interval=setInterval(function () {
        if(settings.random){
            //random index
            do{
                index=Math.floor(Math.random()*slideCount);
            }while(index==previous)
            previous=index;
            
        }
        else{
            if(slideCount==index+1){
                index=-1;
            }
            showSlide(index);
            index++;
        }
        console.log(index);
        showSlide(index);
    },settings.duration)
}


document.querySelector('.fa-arrow-circle-right').addEventListener('click',function () {
    index++;
    showSlide(index);
    console.log(index);
});

function showSlide(i) {
    index=i;
    if(i<0){
        index =slideCount-1;
    }
    if(i>=slideCount){
        index=0;
    }
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

    document.querySelector('.card-title').textContent=models[index].name;

    document.querySelector('.card-link').setAttribute('href',models[index].link);
}























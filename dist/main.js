// calsses init 
class Main{
    constructor(){
        this.model = new Model()
        this.view = new View()
    }

    updatePlayers(teamName){
        this.model.getPlayers(teamName).then((value => this.view.render(value)))
    }
}


const main = new Main() 
// events 

$(`.btn`).on('click',function(){
    const text = $('#inpuut').val()
    if(!text)
        return
    main.updatePlayers(text.toLowerCase().split(' ').join('')) 
})



const imageError = function(object){
    $(object).attr("src","https://www.otakutale.com/wp-content/uploads/2014/07/Kurokos-Basketball-Season-3-to-Air-2015.jpg")
}
class View{
    constructor(){
        this.sourcePlayer = $(`#entry-template`).html()
        this.template = Handlebars.compile(this.sourcePlayer)
    }
    render(newdata){//method : function inside a class called method 
        $(`#playerContainer`).empty()
        const newHtml = this.template({players : newdata})
        $(`#playerContainer`).append(newHtml)
    }
}


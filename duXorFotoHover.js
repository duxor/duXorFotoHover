/*#
 ### Name: duXorFotoEfect
 ### Autor: Dusan Perisci
 ### Home: dusanperisic.com
 ###
 ### Napomena:
 ### ------------------------------------------------------------------
 ### Uputstvo:
 ###            Podaci koji mogu da mijenjaju su promjenjive:
 ###                fotoClass           - 
 ###                animationUpSpeed    - 
 ###                animationDownSpeed  - 
 ### ------------------------------------------------------------------
#*/ 
var duXorFotoHover = {
    fotoClass:'naslov',
    animationUpSpeed:100,
    animationDownSpeed:this.animationUpSpeed,
    showTitle:function(el){
        if($(el).is(':hover')){
            if($(el).children('.'+this.fotoClass).length)
                if(!$(el).children('.'+this.fotoClass).is(':visible'))
                    $(el).children('.'+this.fotoClass).stop().slideDown(this.animationDownSpeed);
            else 
                if(!$(el).is(':visible'))
                    $(el).stop().slideDown(this.animationDownSpeed);
        }else{
            if($(el).children('.'+this.fotoClass).length)
                if($(el).children('.'+this.fotoClass).is(':hover')) return;
                else $(el).children('.'+this.fotoClass).stop().slideUp(this.animationUpSpeed);
            else
                if($(el).is(':hover')) return;
                else $(el).stop().slideUp(this.animationUpSpeed);
        }
    }
}
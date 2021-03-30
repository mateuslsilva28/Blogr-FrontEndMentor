window.addEventListener("load", ()=>{
    var width = window.innerWidth;
    var itens_menu = document.getElementsByClassName("item-header-menu");
    var itens_sub_menu = document.getElementsByClassName("header-sub-menu");
    var seta = document.getElementsByClassName("arrow");
    var hero = document.getElementsByClassName("header-hero")[0];
    var toggle = document.getElementsByClassName("toggle")[0];
    var menu_mobile = document.getElementsByClassName("header-menu-mobile")[0];
    var bool = [false, false, false, false, false, false]
    var verifica = false;
    window.addEventListener("resize", ()=>resize());
    toggle.addEventListener("click", ()=>{
        if(verifica == false){
            toggle.setAttribute("class", "toggle fas fa-times")
            hero.classList.add("hide")
            menu_mobile.classList.add("show-top")
            verifica = true;
            window.addEventListener("resize", ()=>resize());            
        }
        else{
            mode_default()
            window.addEventListener("resize", ()=>resize());
        }
    })

    for (const iterator of itens_menu) {
        iterator.addEventListener("click", ()=>{
            switch (iterator) {
                case itens_menu[0]:
                    verificar(0)
                    break;
                case itens_menu[1]:
                    verificar(1)
                    break;
                case itens_menu[2]:
                    verificar(2)
                    break;
                case itens_menu[3]:
                    verificar(3)
                    break;
                case itens_menu[4]:
                    verificar(4)
                    break;
                case itens_menu[5]:
                    verificar(5)
                    break;
            }
        })
    }
    function resize (){
        width = window.innerWidth;
        if(width >=1024){
            mode_default();
        }
    }
    function mode_default (){
        toggle.setAttribute("class", "toggle fas fa-bars")
        hero.classList.remove("hide")
        menu_mobile.classList.remove("show-top")
        verifica = false;
    }
    function verificar (id){
        var header = document.getElementsByTagName("header")[0]
        
        if (bool[id] == false){
            itens_sub_menu[id].classList.add("active")
            seta[id].classList.add("transform")
            bool[id] = true
            if(id >= 3){
                header.style = "height: auto!important;"
            }
        }
        else{
            itens_sub_menu[id].classList.remove("active")
            seta[id].classList.remove("transform")
            bool[id] = false
            if((id>=3)&&(bool[3]==false)&&(bool[4]==false)&&(bool[5] == false)){
                header.style = "height: 600px!important;"
            }
        }

    }
})
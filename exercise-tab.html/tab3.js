(()=>{

    const $doc = document;
    const $tab = $doc.getElementById("js-tab");
    const $nav = $tab.querySelectorAll("[data-nav]");
    const $content = $tab.querySelectorAll("[data-content]");

    $content[0].style.display="block";


    //クリックイベントを定義
    const handleClick = (e)=>{
        e.preventDefault();

        const targetVal = e.target.dataset.nav;
        
        let index =0;
        while(index < $nav.length){
            $nav[index].classList.remove("is-active");
            $content[index].style.display="none";
            index++;
        }


        $nav[targetVal].classList.add("is-active");
        $content[targetVal].style.display="block";

    }

    let index = 0;
    while(index < $nav.length){
        $nav[index].addEventListener("click",(e)=>{
            handleClick(e);
        })
        index++;
    }
    


})();
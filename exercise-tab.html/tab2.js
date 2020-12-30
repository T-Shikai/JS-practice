(()=>{
    const $doc =document;
    const $tab =$doc.getElementById("js-tab");
    const $nav =$tab.querySelectorAll("[data-nav]");
    const $content=$tab.querySelectorAll("[data-content]");
    


    //初期化
    $content[0].style.display="block";

    //クリックしたら起こるイベント
    const handleClick = (e)=>{
        e.preventDefault();

        //クリックしたnavに応じてtargetValを取得
        const targetVal = e.target.dataset.nav;

        //対象外を非アクティブ化
        let index =0;
        while(index<$nav.length){
            $nav[index].classList.remove("is-active");
            $content[index].style.display="none";
            index++;
        }

        //クリックしたnavを黒くする、クリックしたnavに応じたcontentを見せる
        $nav[targetVal].classList.add("is-active");
        $content[targetVal].style.display="block";

    }

    //navをクリックしたらイベントを起こす
    let index = 0;
    while(index < $nav.length){
        $nav[index].addEventListener("click",(e)=>{
            handleClick(e);
        });
        index++;
    }



})();
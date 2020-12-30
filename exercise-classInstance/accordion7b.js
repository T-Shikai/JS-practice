(()=>{

    class Accordion {
        constructor(obj){
            
            
            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);
            
            const triggerLen = $trigger.length;
            let index =0;
            while(index < triggerLen){
                $trigger[index].addEventListener("click",(e)=>{
                    this.handleClicker(e);
                });
                index++;
            }
        } 
        
        
        
         handleClicker(e){
            e.preventDefault();
            
            const $content=e.target.nextElementSibling;
            if($content.style.display === "none"){
                $content.style.display = "block";
            } else{
                $content.style.display ="none";
            }
            
        }
        
    }
    const fuckinAccordion = new Accordion({
        hookName:"#js-faq",
        tagName:"p"
    });
})();
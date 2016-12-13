
document.addEventListener("DOMContentLoaded",function(ev){
    ;(function () {
        var oKinds=document.querySelector('.kinds');
        var oOther=document.querySelector('.other');
        var oShou=document.querySelector('.shou');
        oKinds.addEventListener('touchstart', function () {
            oOther.style.display='block';
        },false);
        oShou.addEventListener('touchstart', function () {
            oOther.style.display='none';
        },false);
    })()
},false);






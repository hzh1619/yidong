$(function(){
    let section=$('section')[0]
    let sanj=$('.sanj')[0]
    let shengf1=$('.shengf1')[0]
    let sha=$('a',shengf1)[0]
    let shengf2=$('.shengq')[0]

    section.onclick=function(e){
        let obj=e.target;
        if(obj.className == 'sanj'){
            shengf1.style['visibility']='visible';
        }else{
            shengf1.style['visibility']='hidden';
        }

        if(obj.className == 'fanhui'){
            shengf2.style['visibility'] = 'visible';
        }else{
            shengf2.style['visibility']='hidden';
        }

    }







    //初始页面一
    let purple1=document.querySelector('.purple1')
    let none1=purple1.querySelector('.none')
    let purple2=document.querySelector('.purple2')
    let none2=purple2.querySelector('.none')


    none1.onclick=function () {
        purple1.style.display='none'
        purple2.style.display='block'
    }

    setTimeout(function () {
        purple1.style.display='none'
        purple2.style.display='block'
    },5000)


    //初始页面二
    none2.onclick=function () {
        purple2.style.display='none'
    }














    //首页下拉
    let yi=$('.yi')[0]
    let li1=$('li',yi);
    let yiD=$('.yiD')
    let flag11=true;
    let sanjiao=yi.querySelectorAll('.sanjiao')
    // console.log(sanjiao)
    for(let i=0;i<4;i++){
        li1[i].onmouseover=function(){
           yiD[i].style['display']='block'
           sanjiao[i].style['display']='block'
        }
        li1[i].onmouseout=function(){
           yiD[i].style['display'] = 'none'
           sanjiao[i].style['display']='none'
        }
    }










    //banner轮播
    let banner=$('.banner')[0];
    let banneryu=$('.bannerY')[0];
    let last1=$('.last1')[0];
    let next1=$('.next1')[0];

    //轮播
    move(banner,banneryu,'#D3076F',last1,next1);
    function move(banner,banneryu,color,last1,next1){
        let bannerli=$('li',banner);
        let banneryuli=$('li',banneryu);
        let lefts=bannerli[0].offsetWidth;

        //banner暂停效果
        let t=setInterval(left,4000)
        stop(banner);
        function stop(banner){
            banner.onmouseenter=function(){
                clearInterval(t);
            }
            banneryu.onmouseenter=function(){
                clearInterval(t);
            }
            last1.onmouseenter=function(){
                clearInterval(t);
            }
            next1.onmouseenter=function(){
                clearInterval(t);
            }
            banner.onmouseleave=function(){
                t=setInterval(left,2000)
            }
        }


        let now=0,next=0,flag=true;
        //向右移动
        function right() {
            for(let i=0;i<bannerli.length;i++){
                bannerli[i].style.left=lefts+'px'
                banneryuli[i].style.background='';
            }
            flag=false;
            next=now-1;
            if(next<0){
                next=bannerli.length-1;
            }
            right1()
        }
        function right1(){
            bannerli[now].style.left=0;
            bannerli[next].style.left=-lefts+'px';
            banneryuli[now].style.background='';
            let aa=banneryuli.length-1-next;
            if(aa<0){
                aa=banneryuli.length-1;
            }else if(aa>banneryuli.length-1){
                aa=0;
            }
            banneryuli[aa].style.background=color;
            animate(bannerli[now],{left:lefts});
            animate(bannerli[next],{left:0},function () {
                flag=true;
            });
            now=next;
        }



            //向左移动
         function left() {
                for(let i=0;i<bannerli.length;i++){
                    bannerli[i].style.left=lefts+'px'
                    banneryuli[i].style.background='';
                }

                flag=false;
                next=now+1;
                if(next>bannerli.length-1){
                    next=0;
                }
                left1()
            }
         function left1(){
                bannerli[now].style.left=0;
                bannerli[next].style.left=lefts+'px';
                banneryuli[now].style.background=''
                let aa=banneryuli.length-1-next;
                if(aa<0){
                    aa=banneryuli.length-1;
                }else if(aa>banneryuli.length-1){
                    aa=0;
                }
                banneryuli[aa].style.background=color;
                animate(bannerli[now],{left:-lefts});
                animate(bannerli[next],{left:0},function () {
                    flag=true;
                });
                now=next;
            }

        //小圆点击效果
        click(banneryuli)
        function click(banneryuli){
            if(flag){
            for(let i=0;i<banneryuli.length;i++){
                banneryuli[i].onclick=function () {
                    let bb=banneryuli.length-1-i;
                    if(bb<0){
                        bb=banneryuli.length-1;
                    }else if(bb>banneryuli.length-1){
                        bb=0;
                    }

                    if(bb<now){
                        next=bb;
                        flag=false;
                        for(let i=0;i<bannerli.length;i++){
                            bannerli[i].style.left=lefts+'px'
                            banneryuli[i].style.background='';
                        }
                        right1()
                    }else if(bb>now){
                        next=bb;
                        flag=false;
                        for(let i=0;i<bannerli.length;i++){
                            bannerli[i].style.left=lefts+'px'
                            banneryuli[i].style.background='';
                        }
                        left1()
                    }
                }
            }
            }
        }

        //左右点击效果
        last1.onclick=function () {
            if(flag){
            right()
            }
        }
        next1.onclick=function () {
            if(flag){
                left()
            }
        }

        }//banner方法结束




//交费模块点击效果
let int2=$('.int2')[0]
let kuai=$('.kuai')
let flaa1=true;

for(let i=0;i<kuai.length;i++){
    kuai[i].onclick=function () {
       // flaa1=false;
        for(let i=0;i<kuai.length;i++){
            kuai[i].style.background='white'
            kuai[i].style.color='#666666'
        }
        kuai[i].style.background='#E40077'
        kuai[i].style.color='white'

        mouse(i)
    }

}


    function mouse(n){
        for(let j=0;j<kuai.length;j++){
            kuai[j].onmouseenter=function(){
                kuai[j].style.background='#E40077'
                kuai[j].style.color='white'
            }
            kuai[j].onmouseleave=function(){
                if(j!=n){
                    kuai[j].style.background = 'white'
                    kuai[j].style.color = '#666666'
                }else{return}
            }
        }
    }
















//图片轮播
    let bo=$('.bo')[0]
    let lis=$('li',bo);
    let last2=$('.last2')[0]
    let next2=$('.next2')[0]
    let flag2=true,flag3=true,flag4=true,flag5=true;
    let fla1=true,fla2=false;
    // console.log(last2,next2)
    let widths=parseInt(getStyle(lis[0],'width'))+parseInt(getStyle(lis[0],'margin-right'))
    let s,ss,a,b;

    s=setInterval(movel,2000);

    l()
    function l(){
        if(fla1){
            // console.log(1)
            for(let i=0;i<lis.length;i++){
                lis[i].onmouseenter=function(){
                    clearInterval(s)
                }
                lis[i].onmouseleave=function(){
                    s=setInterval(movel,2000);
                }
            }
        }
    }

    r()
    function r() {
        if(fla2) {
            for (let i = 0; i < lis.length; i++) {
                lis[i].onmouseenter = function () {
                    clearInterval(ss)
                }
                lis[i].onmouseleave = function () {
                    ss = setInterval(mover, 2000);
                }
            }
        }
    }


    last2.onclick=function () {
        clearInterval(ss)
        fla2=false;
        fla1=true;
        s=setInterval(movel,2000);
        l()
    }
    next2.onclick=function () {
        clearInterval(s)
        fla1=false;
        fla2=true;
        ss=setInterval(mover,2000);
        r()
    }

    // movel()
    //左右轮播函数模块
    function movel(num=1){
        if(flag2){
            flag2=false;
            animate(bo,{left:-num*widths},2000,function(){
                let first=getFirst(bo);
                bo.appendChild(first);
                bo.style.left='0';
                flag2=true;
            })
        }
    }
    function mover(num=1){
        if(flag3){
        flag3=false;
        let first=getFirst(bo);
        let last=getLast(bo);
        bo.insertBefore(last,first);
        bo.style.left=-num*widths+'px'
        animate(bo,{left:0},2000,function(){
            flag3=true;
        })
        }
    }







     //字幕左右轮播
let inf=$('.inf')[0];
let infli=$('li',inf);
let last3=$('.last3')[0]
let next3=$('.next3')[0]
let width2s=parseInt(getStyle(infli[0],'width'))
// console.log(last3,next3)




    let z,zz;
    z=setInterval(movell,2000)
    last3.onclick=function () {
        clearInterval(z)
        movell()
        z=setInterval(movell,2000)
    }
    next3.onclick=function () {
        clearInterval(z)
        moverr()
        z=setInterval(movell,2000)
    }

    //左右轮播函数
    function movell(num=1){
        clearInterval(zz)
        if(flag4){
            flag4=false;
            inf.style.left=-num*width2s
            let first=getFirst(inf);
            inf.appendChild(first);
            inf.style.left='0';
            flag4=true;
        }
    }
    function moverr(num=1){
        clearInterval(z)
        if(flag5){
        flag5=false;
        let first=getFirst(inf);
        let last=getLast(inf);
        inf.insertBefore(last,first);
        inf.style.left=-num*width2s+'px'
        inf.style.left=0
        flag5=true;
        }
    }































})
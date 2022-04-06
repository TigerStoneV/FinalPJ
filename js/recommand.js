
let count_middle_tag = 0;
let count_small_tag = 0;



$(document).ready(()=>{
    $("#count_tag").html(count_small_tag);
})
// m_s Select
$(document).ready(function(){        
    $("#middle_select").click(function(){
        $(this).addClass('tag_checked')
        $('#small_select').removeClass('tag_checked')
        $('.middle_box').css('display','block')
        $('.small_box').css('display','none')
    })
    $("#small_select").click(function(){
        if(count_middle_tag == 0) {
            alert("중분류를 한개 선택하셔야 합니다.")
            return ;
        } else { // middle 태그가 한개 선택되었을떼
        $(this).addClass('tag_checked')
        $('#middle_select').removeClass('tag_checked')
        $('.small_box').css('display','block')
        $('.middle_box').css('display','none') 
                    
        }        
    }) 
})

// midlle_tag_click
$(document).ready(function(){
    $(".middle_box .tag_content").click(function(){        
        if( count_middle_tag == 0  &&  $(this).hasClass('tag_checked') == false ) {                              
                count_middle_tag += 1 ;
                $("#small_select").attr('class', 'tag_select');
                $(this).addClass('tag_checked');
                console.log("on")
        }        
        else if( count_middle_tag == 1 && $(this).hasClass('tag_checked') == true){            
                count_middle_tag -= 1 ;
                $("#small_select").attr('class', 'tag_not_select');
                $(this).removeClass('tag_checked');
                console.log("off")   
                //소분류 전체 초기화
                $('.small_box .tag_checked').removeClass('tag_checked');
                count_small_tag = 0 ;
                $("#count_tag").html(count_small_tag);                                            
        }else {
            console.log("don't click ")
            return ;
        }
    })
})
// small_tag_click
    $(document).ready(function(){    
        $(".small_box .tag_content").click(function(){        
        if(count_small_tag < 3){
            if($(this).hasClass("tag_checked") === false){
                // tag_checked 가 안들어가 있으면
                $(this).addClass('tag_checked');
                //추가
                count_small_tag += 1;   
                console.log(count_small_tag)
            }else{ 
                count_small_tag -= 1;                   
                $(this).removeClass('tag_checked');
                console.log(count_small_tag)
            }        
        }
        else{
            if($(this).hasClass("tag_checked") === false){
                alert("3개 이상 입력하실 수 없습니다.")                               
            }else{
                count_small_tag -= 1;   
                console.log(count_small_tag)
                $(this).removeClass('tag_checked');
            }
        }
        $("#count_tag").html(count_small_tag);
        if(count_middle_tag == 1 && count_small_tag > 0 ){
            $('.form__confirm').addClass('confirm_okay');                                               
        }else {
            $('.form__confirm').removeClass('confirm_okay');
        }
    });
})

//confirm
$(document).ready(()=>{    
    $(".form__confirm").click(()=>{
        if(count_small_tag == 0){
            alert("태그를 1개이상 선택하셔야합니다.")
        }else{
            if(confirm("👻 입력하신 정보로 추천을 불러오겠습니까?") == true ){                
                $("#recommand_second").css('display','block') 
                $("#recommand_third").css('display','block')
                $("#recommand_fourth").css('display','block')
                $('html, body').animate({
                    scrollTop:900
                },1000)            
            }else {
                return ;
            }
        }            
    })    
})
//clear
$(document).ready(function(){
    $(".form__clear").click(()=>{
        if(confirm("👻 정보를 재입력 하시겠어요 ?") == true ){
            location.replace('MainPage.html')
            // 세션 초기화 후 전화면으로 이동시킴
        }else {
            return ;
        }        
    })
})
$(function() {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
        spaceBetween : 15, // 슬라이드간 간격
        slidesPerGroup : 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음

        // 그룹수가 맞지 않을 경우 빈칸으로 메우기
        // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
        loopFillGroupWithBlank : true,
    
        loop : false, // 무한 반복
        
        pagination : { // 페이징
            el : '.swiper-pagination',
            clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
        },
        navigation : { // 네비게이션
            nextEl : '.swiper-button-next', // 다음 버튼 클래스명
            prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
        },
        breakpoints: {
            1919:{
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1280: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            720: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },            
        }
    });
})
function btn_reload(){
    if(confirm("👻 재추천을 진행하겠습니까?") === true ){            
        location.reload();             
  }else {
      return ;
  }
}
//setion 유지해야함?

// Scroll To Top
$(document).ready(function(){
    $('.scroll_top').click(()=>{
        $('html,body').animate({
          scrollTop:0
        },1000)
    })
  })
//word_cloud
//food
anychart.onDocumentReady(function () {
    var data = [ 
        { x : "food", value : 1111},  
        { x : "JAVA", value : 52}, 
        { x : "C++", value : 45 }, 
        { x : "HTML", value : 61},
        { x : "1", value : 14}, 
        { x : "Python", value : 23}, 
        { x : "소프트웨어", value : 54}, 
        { x : "JAVA", value : 52}, 
        { x : "C++", value : 45 }, 
        { x : "HTML", value : 61},
        ]; 
        var chart = anychart.tagCloud(data);
        
        chart.selected().fill("#ff865d"); //클릭했을 때 글씨 색 지정 
        chart.textSpacing(15); //글자간격
       //  chart.colorRange().enabled(true); //범위
        chart.angles([90,0]); //각도
        chart.container("food_container");               
        chart.draw();
         }); 
//play
    anychart.onDocumentReady(function () {
    var data = [ 
        { x : "play", value : 1111},         
        { x : "1", value : 14}, 
        { x : "Python", value : 23}, 
        { x : "소프트웨어", value : 54}, 
        { x : "JAVA", value : 52}, 
        { x : "C++", value : 45 }, 
        { x : "HTML", value : 61},
        { x : "1", value : 14}, 
        { x : "Python", value : 23}, 
        { x : "소프트웨어", value : 54}, 
        { x : "JAVA", value : 52}, 
        { x : "C++", value : 45 }, 
        { x : "HTML", value : 61},
        ]; 
        var chart = anychart.tagCloud(data);
        
        chart.selected().fill("#ff865d");  //클릭했을 때 글씨 색 지정 
        chart.textSpacing(15); //글자간격
        //  chart.colorRange().enabled(true); //범위
        chart.angles([90,0]); //각도
        chart.container("play_container");               
        chart.draw();
            }); 
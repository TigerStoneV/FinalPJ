
let count_middle_tag = 0;
let count_small_tag = 0;
// let select_m_value = #{}
$(document).ready(()=>{
    $("#count_tag").html(count_small_tag);
})
//big Radio Select
$(document).ready(function(){
    $("#box__food").click(function(){
        $('.middle_box .tag_box_3').css('visibility','hidden')
        $('.middle_box #m_tag_a').html('한식')        
        $('.middle_box #m_tag_b').html('중식')        
        $('.middle_box #m_tag_c').html('일식')        
        $('.middle_box #m_tag_d').html('양식')        
        $('.middle_box #m_tag_e').html('카페')
        $('.middle_box #m_tag_f').html('술집')        
       // 먹거리 놀거리 버튼 초기화
        $('.middle_box .tag_checked').removeClass('tag_checked')
        count_middle_tag = 0 ;
        $("#small_select").attr('class', 'tag_not_select');
        $("#middle_select").click()
        //소분류 전체 초기화
        $('.small_box .tag_checked').removeClass('tag_checked');
        count_small_tag = 0 ;
        $("#count_tag").html(count_small_tag); 
        // 선택 checked 추가        
        $(this).addClass('tag_checked');
        $('#box__play').removeClass('tag_checked');
    })
    $('#box__play').click(function(){
        $('.middle_box .tag_box_3').css('visibility','visible')        
        $('.middle_box #m_tag_a').html('노래방')        
        $('.middle_box #m_tag_b').html('영화관')        
        $('.middle_box #m_tag_c').html('카페/놀거리')        
        $('.middle_box #m_tag_d').html('당구장')        
        $('.middle_box #m_tag_e').html('PC방')
        $('.middle_box #m_tag_f').html('스포츠/오락')
        $('.middle_box #m_tag_g').html('오락실')
        $('.middle_box #m_tag_h').html('찜질방')
        $('.middle_box #m_tag_i').html('놀이공원')
        // 먹거리 놀거리 버튼 초기화
        $('.middle_box .tag_checked').removeClass('tag_checked')
        count_middle_tag = 0 ;
        $("#small_select").attr('class', 'tag_not_select');
        $("#middle_select").click()
        //소분류 전체 초기화
        $('.small_box .tag_checked').removeClass('tag_checked');
        count_small_tag = 0 ;
        $("#count_tag").html(count_small_tag); 
        // 선택 checked 추가        
        $(this).addClass('tag_checked');
        $('#box__food').removeClass('tag_checked');
    })
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
                let tag_val = $(this).text();
                console.log(tag_val)
                switch(tag_val){
                    //Food
                    case '한식' :  
                        console.log("한식 클릭 9 ")
                         $('.small_box #s_tag_a').html('국밥')
                         $('.small_box #s_tag_b').html('죽')
                         $('.small_box #s_tag_c').css('visibility','visible').html('해물,생선요리')
                         $('.small_box #s_tag_d').css('visibility','visible').html('찌개,전골')
                         $('.small_box #s_tag_e').css('visibility','visible').html('면요리')
                         $('.small_box #s_tag_f').css('visibility','visible').html('닭요리')
                         $('.small_box #s_tag_g').css('visibility','visible').html('육류,고기 요리')
                         $('.small_box #s_tag_h').css('visibility','visible').html('백반,가정식')
                         $('.small_box #s_tag_i').css('visibility','visible').html('기타')
                        break;
                    case '중식' : 
                        console.log("중식 클릭 6")
                         $('.small_box #s_tag_a').html('중식당')
                         $('.small_box #s_tag_b').html('꼬치류')
                         $('.small_box #s_tag_c').css('visibility','visible').html('만두')
                         $('.small_box #s_tag_d').css('visibility','visible').html('튀김류')
                         $('.small_box #s_tag_e').css('visibility','visible').html('사천 요리')
                         $('.small_box #s_tag_f').css('visibility', 'visible').html('기타')
                         $('.small_box #s_tag_g').css('visibility', 'hidden')
                         $('.small_box #s_tag_h').css('visibility', 'hidden')
                         $('.small_box #s_tag_i').css('visibility', 'hidden')
                        break;
                    case '일식' :
                         console.log("일식 클릭 8") //5
                         $('.small_box #s_tag_a').html('일식당')
                         $('.small_box #s_tag_b').html('구이,튀김')
                         $('.small_box #s_tag_c').css('visibility','visible').html('쌀요리')
                         $('.small_box #s_tag_d').css('visibility','visible').html('술집')
                         $('.small_box #s_tag_e').css('visibility','visible').html('면요리')
                         $('.small_box #s_tag_f').css('visibility','visible').html('생선요리')
                         $('.small_box #s_tag_g').css('visibility','visible').html('전골')
                         $('.small_box #s_tag_h').css('visibility','visible').html('기타')
                         $('.small_box #s_tag_i').css('visibility', 'hidden')
                        break;
                    case '양식' : 
                        console.log("양식 클릭 5")
                         $('.small_box #s_tag_a').html('브런치')
                         $('.small_box #s_tag_b').html('이탈리아 음식')
                         $('.small_box #s_tag_c').css('visibility','visible').html('멕시코,남미음식')
                         $('.small_box #s_tag_d').css('visibility','visible').html('서양 음식')
                         $('.small_box #s_tag_e').css('visibility','visible').html('기타')
                         $('.small_box #s_tag_f').css('visibility', 'hidden')
                         $('.small_box #s_tag_g').css('visibility', 'hidden')
                         $('.small_box #s_tag_h').css('visibility', 'hidden')
                         $('.small_box #s_tag_i').css('visibility', 'hidden')
                        break;
                    case '카페' : 
                        console.log("카페 클릭 6")
                         $('.small_box #s_tag_a').html('브런치')
                         $('.small_box #s_tag_b').html('디저트 카페')
                         $('.small_box #s_tag_c').css('visibility','visible').html('베이커리 카페')
                         $('.small_box #s_tag_d').css('visibility','visible').html('스터디 카페')
                         $('.small_box #s_tag_e').css('visibility','visible').html('이색 카페')
                         $('.small_box #s_tag_f').css('visibility','visible').html('기타')
                         $('.small_box #s_tag_g').css('visibility', 'hidden')
                         $('.small_box #s_tag_h').css('visibility', 'hidden')
                         $('.small_box #s_tag_i').css('visibility', 'hidden')
                        break;
                    case '술집' : 
                        console.log("술집 클릭 8")
                        $('.small_box #s_tag_a').html('맥주 , 호프')
                        $('.small_box #s_tag_b').html('전통 , 민속주점')
                        $('.small_box #s_tag_c').css('visibility','visible').html('포장마차')
                        $('.small_box #s_tag_d').css('visibility','visible').html('이자카야')
                        $('.small_box #s_tag_e').css('visibility','visible').html('바(BAR)')
                        $('.small_box #s_tag_f').css('visibility','visible').html('유흥 주점')
                        $('.small_box #s_tag_g').css('visibility','visible').html('요리 주점')
                        $('.small_box #s_tag_h').css('visibility','visible').html('기타')
                        $('.small_box #s_tag_i').css('visibility', 'hidden')
                         break;
                    //Play
                    case '노래방' :
                        console.log("노래방 5")
                        $('.small_box #s_tag_a').html('스포츠,오락')
                        $('.small_box #s_tag_b').html('오락시설')
                        $('.small_box #s_tag_c').css('visibility','visible').html('영상,음향가전')
                        $('.small_box #s_tag_d').css('visibility','visible').html('단란주점')
                        $('.small_box #s_tag_e').css('visibility', 'visible').html('기타')
                        $('.small_box #s_tag_f').css('visibility', 'hidden')
                        $('.small_box #s_tag_g').css('visibility', 'hidden')
                        $('.small_box #s_tag_h').css('visibility', 'hidden')
                        $('.small_box #s_tag_i').css('visibility', 'hidden')                         
                         break;
                    case '영화관' :            
                        console.log("영화관 4")             
                        $('.small_box #s_tag_a').html('문화,예술')
                        $('.small_box #s_tag_b').html('DVD방')
                        $('.small_box #s_tag_c').css('visibility','visible').html('장소대여')
                        $('.small_box #s_tag_d').css('visibility','visible').html('기타')
                        $('.small_box #s_tag_e').css('visibility', 'hidden')
                        $('.small_box #s_tag_f').css('visibility', 'hidden')
                        $('.small_box #s_tag_g').css('visibility', 'hidden')
                        $('.small_box #s_tag_h').css('visibility', 'hidden')
                        $('.small_box #s_tag_i').css('visibility', 'hidden')
                         break;
                    case '당구장' :                         
                        console.log("당구장 3")             
                        $('.small_box #s_tag_a').html('스포츠,오락')
                        $('.small_box #s_tag_b').html('당구용품')
                        $('.small_box #s_tag_c').css('visibility','visible').html('기타')
                        $('.small_box #s_tag_d').css('visibility', 'hidden')
                        $('.small_box #s_tag_e').css('visibility', 'hidden')
                        $('.small_box #s_tag_f').css('visibility', 'hidden')
                        $('.small_box #s_tag_g').css('visibility', 'hidden')
                        $('.small_box #s_tag_h').css('visibility', 'hidden')
                        $('.small_box #s_tag_i').css('visibility', 'hidden')
                         break;
                    case 'PC방' :                         
                        console.log("pc방 3")             
                        $('.small_box #s_tag_a').html('오락시설')
                        $('.small_box #s_tag_b').html('장소대여')
                        $('.small_box #s_tag_c').css('visibility','visible').html('기타')
                        $('.small_box #s_tag_d').css('visibility', 'hidden')
                        $('.small_box #s_tag_e').css('visibility', 'hidden')
                        $('.small_box #s_tag_f').css('visibility', 'hidden')
                        $('.small_box #s_tag_g').css('visibility', 'hidden')
                        $('.small_box #s_tag_h').css('visibility', 'hidden')
                        $('.small_box #s_tag_i').css('visibility', 'hidden')
                         break;
                    case '오락실' :
                        console.log("오락실 3")             
                        $('.small_box #s_tag_a').html('스포츠,오락')
                        $('.small_box #s_tag_b').html('노래방')
                        $('.small_box #s_tag_c').css('visibility','visible').html('기타')
                        $('.small_box #s_tag_d').css('visibility', 'hidden')
                        $('.small_box #s_tag_e').css('visibility', 'hidden')
                        $('.small_box #s_tag_f').css('visibility', 'hidden')
                        $('.small_box #s_tag_g').css('visibility', 'hidden')
                        $('.small_box #s_tag_h').css('visibility', 'hidden')
                        $('.small_box #s_tag_i').css('visibility', 'hidden')                         
                         break;
                    case '놀이공원' :
                        console.log("놀이공원 3")             
                        $('.small_box #s_tag_a').html('테마파크')
                        $('.small_box #s_tag_b').html('레저,테마')
                        $('.small_box #s_tag_c').css('visibility','visible').html('기타')
                        $('.small_box #s_tag_d').css('visibility', 'hidden')
                        $('.small_box #s_tag_e').css('visibility', 'hidden')
                        $('.small_box #s_tag_f').css('visibility', 'hidden')
                        $('.small_box #s_tag_g').css('visibility', 'hidden')
                        $('.small_box #s_tag_h').css('visibility', 'hidden')
                        $('.small_box #s_tag_i').css('visibility', 'hidden')                             
                         break;
                    case '찜질방' :                         
                        console.log("찜질방 3")             
                        $('.small_box #s_tag_a').html('목욕탕,사우나')
                        $('.small_box #s_tag_b').html('레저,테마')
                        $('.small_box #s_tag_c').css('visibility','visible').html('기타')
                        $('.small_box #s_tag_d').css('visibility', 'hidden')
                        $('.small_box #s_tag_e').css('visibility', 'hidden')
                        $('.small_box #s_tag_f').css('visibility', 'hidden')
                        $('.small_box #s_tag_g').css('visibility', 'hidden')
                        $('.small_box #s_tag_h').css('visibility', 'hidden')
                        $('.small_box #s_tag_i').css('visibility', 'hidden')           
                         break;
                    case '카페/놀거리' :                         
                        console.log("카페 4")             
                        $('.small_box #s_tag_a').html('보드카페')
                        $('.small_box #s_tag_b').html('방탈출')
                        $('.small_box #s_tag_c').css('visibility','visible').html('만화카페')
                        $('.small_box #s_tag_d').css('visibility','visible').html('애견카페')
                        $('.small_box #s_tag_e').css('visibility', 'hidden')
                        $('.small_box #s_tag_f').css('visibility', 'hidden')
                        $('.small_box #s_tag_g').css('visibility', 'hidden')
                        $('.small_box #s_tag_h').css('visibility', 'hidden')
                        $('.small_box #s_tag_i').css('visibility', 'hidden')           
                         break;
                    case '스포츠/오락' :                      
                       console.log("스포츠, 오락 2")             
                        $('.small_box #s_tag_a').html('볼링')
                        $('.small_box #s_tag_b').html('스크린 야구')
                        $('.small_box #s_tag_c').css('visibility','hidden')
                        $('.small_box #s_tag_d').css('visibility','hidden')
                        $('.small_box #s_tag_e').css('visibility', 'hidden')
                        $('.small_box #s_tag_f').css('visibility', 'hidden')
                        $('.small_box #s_tag_g').css('visibility', 'hidden')
                        $('.small_box #s_tag_h').css('visibility', 'hidden')
                        $('.small_box #s_tag_i').css('visibility', 'hidden')                          
                         break;
                }
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
                console.log($(this).text())
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
                console.log($('.middle_box .tag_content.tag_checked').text())
                console.log($('.small_box .tag_content.tag_checked').text())
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
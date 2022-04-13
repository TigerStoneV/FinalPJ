let m_boxes = [
  {'class': 'm_tag_a'},
  {'class': 'm_tag_b'},
  {'class': 'm_tag_c'},
  {'class': 'm_tag_d'},
  {'class': 'm_tag_e'},
  {'class': 'm_tag_f'},
];
let s_boxes = [
  {'class': 's_tag_a'},
  {'class': 's_tag_b'},
  {'class': 's_tag_c'},
  {'class': 's_tag_d'},
  {'class': 's_tag_e'},
  {'class': 's_tag_f'},
  {'class': 's_tag_g'},
  {'class': 's_tag_h'},
  {'class': 's_tag_i'},
];
let recommand_card = [
	{'id' : 'myBtn1'},
	{'id' : 'myBtn2'},
	{'id' : 'myBtn3'},
	{'id' : 'myBtn4'},
	{'id' : 'myBtn5'}
]
let remainder_card = [
	{'id' : 'myBtn6'},
]

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
                //console.log("on")
        }        
        else if( count_middle_tag == 1 && $(this).hasClass('tag_checked') == true){            
                count_middle_tag -= 1 ;
                $("#small_select").attr('class', 'tag_not_select');
                $(this).removeClass('tag_checked');
                //console.log("off")   
                //소분류 전체 초기화
                $('.small_box .tag_checked').removeClass('tag_checked');
                count_small_tag = 0 ;
                $("#count_tag").html(count_small_tag);                                            
        }else {
            //console.log("don't click ")
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
                //console.log(count_small_tag)
            }else{ 
                count_small_tag -= 1;                   
                $(this).removeClass('tag_checked');
                //console.log(count_small_tag)
            }        
        }
        else{
            if($(this).hasClass("tag_checked") === false){
                alert("3개 이상 입력하실 수 없습니다.")                               
            }else{
                count_small_tag -= 1;   
                //console.log(count_small_tag)
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
				getRankingData();            
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
            
// 비동기 데이터 관련 함수
function getRankingData(){
	let chkMitemArr = [];
	let chkSitemArr = [];
	let station = $(".midPoint_value").text();
	
	for(let i = 0; i < m_boxes.length; i++){
		$(document).ready(function(){
			if($(`#${m_boxes[i]['class']}.tag_content.tag_checked`).attr("value") != null){
				chkMitemArr.push($(`#${m_boxes[i]['class']}.tag_content.tag_checked`).attr("value"));
			}	
		});
	}
		for(let i = 0; i < s_boxes.length; i++){
		$(document).ready(function(){
			if($(`#${s_boxes[i]['class']}.tag_content.tag_checked`).attr("value") != null){
				chkSitemArr.push($(`#${s_boxes[i]['class']}.tag_content.tag_checked`).attr("value"));
			}	
		});
	}
	//console.log(station);
	//console.log(chkMitemArr);
	//console.log(chkSitemArr.toString());
	$(document).ready(function(){
		const xhttp = new XMLHttpRequest(); 
		xhttp.onload = function() {
			let data = this.responseText;
			//console.log(data);
			data = JSON.parse(data);
			console.log(data);
			
			// 상위 랭킹 5위까지 가게 데이터 입력 함수
			setInformationTop5(data);
			setInformationSlider(data);
		}
		xhttp.open("GET", "get-rankingdata?station="+station+"&middleLV="+chkMitemArr[0]+"&minorLV="+chkSitemArr.toString(), true); 
		xhttp.send();
	})

}

function setInformationTop5(shopData) {
	let addHtml = "";
	let count = shopData.length;
	
	// 검색된 가게 숫자가 5개 미만일 경우
	if(count < 5){
		for(let i = 0; i < count; i++){	
		addHtml += "<img src='"+ shopData[i].thumbnail +"' class='card__thumnail'>";
		addHtml += "<div class='card__info'>";
		addHtml += 	    "<span id='info_title'>"+ shopData[i].name +"</span>";
		addHtml += 	    "<div class='star_category'>";
		addHtml += 	        "<span id='info_star'>"+ shopData[i].ranking +"</span><br>";
		addHtml += 	        "<span id='info_category'>"+ shopData[i].category_1 +"</span>";
		addHtml += 	    "</div>";
		addHtml += 	    "<span id='info_address'>"+ shopData[i].addr +"</span>";
		addHtml += 	"</div>";
		$(`#${recommand_card[i]['id']}`).html(addHtml);
		addHtml = "";
		}
	} else {	//	검색된 가게가 5개 이상일 경우
		for(let i = 0; i < 5; i++){	
		addHtml += "<img src='"+ shopData[i].thumbnail +"' class='card__thumnail'>";
		addHtml += "<div class='card__info'>";
		addHtml += 	    "<span id='info_title'>"+ shopData[i].name +"</span>";
		addHtml += 	    "<div class='star_category'>";
		addHtml += 	        "<span id='info_star'>"+ shopData[i].ranking +"</span><br>";
		addHtml += 	        "<span id='info_category'>"+ shopData[i].category_1 +"</span>";
		addHtml += 	    "</div>";
		addHtml += 	    "<span id='info_address'>"+ shopData[i].addr +"</span>";
		addHtml += 	"</div>";
		$(`#${recommand_card[i]['id']}`).html(addHtml);
		addHtml = "";
		}
	}
	
}

function setInformationSlider(shopData) {
	
	let dataLength = shopData.length;
	let addHtml = "";
	
	// 반올림 꼭 해야됨
	let count = Math.ceil((dataLength - 5) / 2);
	//console.log(count);
	for(let i = 0; i < count; i++) {
		btnCount1 = 2*i+6;
		btnCount2 = 2*i+7;
		arrCount1 = btnCount1 - 1;
		arrCount2 = btnCount2 - 1;
		if(btnCount1 <= dataLength){
			addHtml += '<div class="swiper-slide">';
			addHtml +=	'<div class="remain_group_'+ i +'">';
		    addHtml +=	'<div class="remainder_card" id="myBtn'+ btnCount1 +'" onclick="Action_Slide('+btnCount1+')">';
		    addHtml +=  	  '<img class= "remainder_thumnail"src="'+ shopData[arrCount1].thumbnail +'" alt="">';
		    addHtml +=   	  '<div class="remainder_info">';
		    addHtml +=       	 '<div class="remain_info_title">'+shopData[arrCount1].name+'</div>';
		    addHtml +=       	 '<div class="remain_info_star">'+ shopData[arrCount1].ranking +'</div>';
		    addHtml +=        	 '<div class="remain_info_category">'+ shopData[arrCount1].category_1 +'</div>';
		    addHtml +=       	 '<div class="remain_info_address">'+ shopData[arrCount1].addr +'</div>';
		    addHtml +=   	  '</div>';
		    addHtml +=	'</div>';
		    if(btnCount2 <= dataLength){
				addHtml +=	'<div class="remainder_card" id="myBtn'+ btnCount2 +'" onclick="Action_Slide('+btnCount2+')">';
			    addHtml +=    	'<img class= "remainder_thumnail"src="'+ shopData[arrCount2].thumbnail +'" alt="">';
			    addHtml +=    	'<div class="remainder_info">';
			    addHtml +=      	 '<div class="remain_info_title">'+ shopData[arrCount2].name +'</div>';
			    addHtml +=       	 '<div class="remain_info_star">'+ shopData[arrCount2].ranking +'</div>';
			    addHtml +=       	 '<div class="remain_info_category">'+ shopData[arrCount2].category_1 +'</div>';
			    addHtml +=       	 '<div class="remain_info_address">'+ shopData[arrCount2].addr +'</div>';
			    addHtml +=   	'</div>';
			    addHtml +=	'</div>';
				addHtml +=	'</div>';
			}
			else{
				// 빈값 넣기
			}
			addHtml += '</div>';
		}
	} 
	$('.swiper-wrapper').html(addHtml);
}

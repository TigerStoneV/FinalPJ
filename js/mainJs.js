let boxes = [
  {'class': 'sample_a', 'hidden': false , 'location':''},
  {'class': 'sample_b', 'hidden': false , 'location':''},
  {'class': 'sample_c', 'hidden': false , 'location':''},
  {'class': 'sample_d', 'hidden': false , 'location':''},
  {'class': 'sample_e', 'hidden': false , 'location':''},
  {'class': 'sample_f', 'hidden': false , 'location':''},
  {'class': 'sample_g', 'hidden': false , 'location':''},
  {'class': 'sample_h', 'hidden': false , 'location':''},
];

let count_delete = 0;
let count_people = 8;
let count_value = 0;
let currentIndex = 0;
let needWord = "서울"

// 사용자 대기 명수
$(document).ready(function(){
  $("#countValue").html(count_value); 
  // Value 초기값
})

// plus function
$(document).ready(function() {
  $(".address_plus").click($.debounce(350, function() {
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i]["hidden"] === true) {
        //숨겨져있으면 작동        
        // console.log(`.${boxes[i]['class']}`);
        $(`.${boxes[i]['class']}`).fadeIn();         
        $(`#${boxes[i]['class']}`).val(''); // 벨류 지움
        boxes[i]["hidden"] = false; // 히든상태 false 로 변경
        boxes[i]["location"] = '' ; // location 빈값으로 변경
        count_delete -= 1;
        count_people += 1; 
        console.log("주소 들어온 값:" + count_value)      
        console.log("전체 인풋 박스 값" +count_people)      
        console.log("딜리트 버튼 클릭 값:" +count_delete)   
        break;
      } else if (i == boxes.length - 1 && boxes[i]["hidden"] === false) {
        alert("8명까지 가능합니다");
      }
    }
  }));
});

// delete function 
$(document).ready(function(){
  $('.box__close').on('click', function(e){
    var $link = $(e.target);
    e.preventDefault();
    if(!$link.data('lockedAt') || +new Date() - $link.data('lockedAt') > 300) {
      if (count_delete >= 6) {
        //delete count >= 6 Alert
        alert("최소 2명 이상 있어야 합니다.")
      }else {                              
        const className = $(this).parent().attr('class').split(" ")[1]            
        boxes.forEach(box => {
          if (box["class"] == className) {
            $(this).parent().fadeOut(); //fadeOut 시킴                         
            box["hidden"] = true; // 상태 hidden으로 변경              
            count_delete += 1;               
            count_people -= 1;
            if (box['location'] !== '') {
              box['location'] = '' // location 값 무조건 초기화              
              //location 에 값이 있다면
              count_value -= 1;                
              $("#countValue").html(count_value); 
            }                           
          }
        });                            
          console.log("사람 입력: "+ count_value)
          console.log("전체 인풋 박스 값 :" +count_people)      
          console.log("딜리트 버튼 클릭 값:" +count_delete)           
        }   
    }
    $link.data('lockedAt', +new Date());
  });
})
  //init fuction
  
  $(document).ready(function(){
    $(".set__init").click(function() {
      if(confirm("👻 모든 지역을 초기화 하시겠어요?") == true) {
        for(let i = 0; i <  boxes.length ; i++){
          if(boxes[i]["hidden"] === true){
            //숨겨져있으면
            $(`.${boxes[i]['class']}`).fadeIn();
            $(`#${boxes[i]['class']}`).val('');
            boxes[i]["hidden"] = false;            
            boxes[i]['location'] = '';
          }else{
            // 숨겨져있지않으면
            $(`#${boxes[i]['class']}`).val('');
            boxes[i]['location'] = '';
          }
        }
        count_delete = 0;
        count_value = 0;
        count_people = 8;
        //초기 카운트 설정 

        $("#countValue").html(count_value);       
        console.log("초기화시킴")
        console.log("주소 들어온 값:" + count_value)      
        console.log("전체 인풋 박스 값" +count_people)      
        console.log("딜리트 버튼 클릭 값:" +count_delete)   
      }else {
        return ;
      }
    })
  })


//address
    function openAddress(id) {
        new daum.Postcode({
            oncomplete: function(data) { 
                var roadAddr = data.roadAddress; // 도로명 주소 변수
                var jibunAddress = data.jibunAddress; //지번 주소 변수
                console.log(roadAddr);                
                if (roadAddr.includes(needWord)) { // 도로명에 서울 포함
                  if (jibunAddress === '' || jibunAddress.includes(needWord)) { //지번에 서울포함되고 빈값인 경우
                    for (let i = 0; i < boxes.length; i++) {
                      if (boxes[i]['class'] == id) {
                        currentIndex = i;
                      }
                    }
                    for (let i = 1; i < boxes.length; i++) {
                      if (boxes[i - 1]['location'] === roadAddr) {
                        alert("중복된 값이 존재합니다.")
                        break;
                      } else if ((i !== boxes.length - 1) && (boxes[i + 1]['location'] === roadAddr)) {
                        alert("중복된 값이 존재합니다.")
                        break;
                      } else if ((i === boxes.length - 1) && (boxes[i]['location'] !== roadAddr)) {
                        boxes[currentIndex]['location'] = roadAddr;                 
                        document.getElementById(id).value = roadAddr;
                        count_value += 1;             
                        console.log("사람 입력 :" + count_value)                       
                        $("#countValue").html(count_value);                        
                      }
                    }
                  }
                } else {
                  alert("서울 시내만 가능합니다");
                }                            
            }
        }).open();
    }
    
// confirm navigation
    $(document).ready(()=>{
      $(".set__confirm").click(()=>{
        if(count_value < 2){
          alert('2명이상 주소를 입력 하셔야 합니다');
          console.log("주소 들어온 값:" + count_value)      
          console.log("전체 인풋 박스 값" +count_people)      
          console.log("딜리트 버튼 클릭 값:" +count_delete)         
          return;
        }else{       
          if(confirm("👻 이 주소를 토대로 추천을 진행하시겠습니까 ?") === true) {
            // let val_arr = []
            // for(let i = 0; i < boxes.length; i ++){
            //   console.log(boxes[i]['class']+ ":"  + boxes[i]['location'])
            //   val_arr = boxes[i]['location']
            //   console.log(val_arr[i])
            // }            
            location.href = 'Recommand.html'      
          }else {
            return ;
          }
          
        }     
      })
    })
  
    $(document).ready(function(){
      $('.scroll_top').click(()=>{
          $('html,body').animate({
            scrollTop:0
          },1000)
      })
    })
    


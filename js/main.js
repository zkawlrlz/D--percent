(function() {

  // 타이틀 
  let titles = [
    'CoinUs',
    'KB E-HRD',
    'SBDC',
    'D/',
    'M-Lounge',
    'W Bakery',
    'Carousel Gallery',
    'Panorama View'
  ];
  
  // 내용
  let descs = [
    '첫번째 외주작업인 코인어스 웹에서는 웹 퍼포먼스와 반응형 인터페이스에 주력했으며,<br>효과적인 팀 커뮤니케이션으로 작업을 원활히 진행하려고 노력했습니다. <br>팀워크와 커뮤니케이션의 중요성에 대해 깨달은 프로젝트였습니다.&nbsp;&nbsp;<span style="color: lightblue;">[기여도 50%]</span>',
    '두 번째 외주작업 KB E-HRD 프로젝트는 편안한 사용자 경험에 중요한 가치를 두고 작업했습니다.<br>프로젝트의 목적성과 경험을 최대한 해치지 않으면서, 빠른 시일내에 완성도 높은 결과물을<br> 제작해야 했기 때문에, 역량 발휘와 성장에 큰 도움이 되었던 작업이었습니다.&nbsp;&nbsp;<span style="color: lightblue;">[기여도 50%]</span>',
    '가치삽시다는 라이브커머스 사이트로 웹과 모바일에서 동일한 경험을<br>제공하는 것이 필요했습니다. 그래서 반응형 개발에 초점을 맞추어서<br> 같은 사용자 경험을 주는 것을 목표로 작업한 프로젝트 였습니다 &nbsp;&nbsp;<span style="color: lightblue;">[기여도 50%]</span>',
    'D/는 javascript의 베이직한 기능들을 효과적으로 활용하여, 동적이고 상호작용적인 <br>사용자 경험을 위해 노력했던 첫 번째 개인 프로젝트입니다. DOM을 적극적으로 활용하면서,<br>퍼블리싱의 과정에 입체적이고 창의적인 시각이 필요함을 깨달은 프로젝트입니다 ',
    '두 번째 개인 프로젝트 M-Lounge는 심미성과 애니메이션 완성도에 주요한 중점을 두었습니다.<br>전체적인 시각적 플로우를 부드럽게 연결하고, 기능과 디자인의 일체감을 만드는 과정을 통해<br>기술과 디자인의 융합이 사용자에게 기분좋은 경험을 제공한다는 것을 배웠습니다.',
    '리디자인 개인 프로젝트 W Bakery 입니다. 기존 웹페이지가 다양한 기능들과 라이브러리,<br>많은 양의 요소와 복잡한 배치형태를 가지고 있어 계획 단계부터 명확하고 구조적인 짜임새를<br>만드는 것이 완성도 높은 결과물을 위해 가장 중요한 것임을 깨달은 프로젝트였습니다.',
    '개인 프로젝트 carousel gallery는 슬라이드 라이브러리를 영역에 단순 배치하는 것에<br>국한하지 않고, 디테일한 기능 조정과 과감한 스타일링으로 전체 콘텐츠로써 활용 가능하게<br>구현하고 싶었습니다. 라이브러리에 관한 좀 더 심도깊은 이해를 얻을 수 있는 작업이었습니다. ',
    '개인 프로젝트 Panorama View는 javascript를 사용하지 않고 keyframe만을 이용해<br>생동감있는 인터페이스와 애니메이션을 구축했습니다. scss로 작업을 진행하며 코드의 가독성과<br>효율을 높였고, 웹 환경에서의 3d 구조를 심층적으로 탐구할 수 있는 작업이었습니다.'
  ]

  let descs_m = [
    '#반응형 인터페이스<br>#팀 커뮤니케이션<br>#외주작업',
    'PC에서 최적화된 화면으로 확인하세요',
    '#반응형 인터페이스<br>#라이브커머스<br>#외주작업',
    'PC에서 최적화된 화면으로 확인하세요',
    'PC에서 최적화된 화면으로 확인하세요',
    'PC에서 최적화된 화면으로 확인하세요',
    'PC에서 최적화된 화면으로 확인하세요',
    'PC에서 최적화된 화면으로 확인하세요',
  ]

  
  // 링크 : 링크 넣기
  let links = [
    'https://zkawlrlz.github.io/CoinUs/',
    'https://zkawlrlz.github.io/KB-e-hrd/',
    'https://zkawlrlz.github.io/SBDC/',
    'https://zkawlrlz.github.io/D/',
    'https://zkawlrlz.github.io/M-Lounge/',
    'https://zkawlrlz.github.io/W-Bakery/',
    'https://zkawlrlz.github.io/Carousel-Gallery/',
    'https://zkawlrlz.github.io/Panorama-View/'
  ]
  
  
  
  const bgContainer = document.querySelector('.background-image');
  
  let totalNumber = titles.length;
  
    const sliderContainer = document.querySelector('.sliders-container');
  
  
    // 타이틀 표기
    const msTitles = new MomentumSlider({
      el: sliderContainer,
      cssClass: 'ms--titles',
      range: [0, totalNumber-1],
      rangeContent: function (i) {
        return '<h3>'+ titles[i] +'</h3><!--<span><img src="./assets/link_arrow.svg"></span>-->';
      },
      vertical: true,
      reverse: true,
      style: {
        opacity: [0, 1]
      },
      interactive: false
    });
  
    
    // 링크 표기
    const msLinks = new MomentumSlider({
      el: sliderContainer,
      cssClass: 'ms--links',
      range: [0, totalNumber-1],
      rangeContent: function (i) {
        return '<div class="desc-slider"><a href="'+ links[i] +'" target="_blank" class="ms-slide__link">Click</a><p class="ms__desc_p">'+ descs[i] +'</p><p class="ms__desc_p_m">' + descs_m[i]+ '</p></div>';
      },
      vertical: true,
      interactive: false
    })
  
  
    // 페이지네이션 기본 설정
    const pagination = document.querySelector('.pagination');
    const paginationItems = [].slice.call(pagination.children);
  
    paginationItems.forEach(item => {
      item.addEventListener('click', event => {
  
        event.preventDefault(); 
      });
    });
  
  
    // 이미지 설정
    const msImages = new MomentumSlider({
        el: sliderContainer,
        cssClass: 'ms--images',
        range: [0, totalNumber-1],
        rangeContent: function () {
          return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
        },
        sync: [msTitles, msLinks],
        style: {
          '.ms-slide__image': {
            transform: [{scale: [1.2, 1]}],
            opacity: [0.6, 1]
          }
        },
        change: function(newIndex, oldIndex) {
          if (typeof oldIndex !== 'undefined') {
            paginationItems[oldIndex].classList.remove('pagination__item--active');
            console.log("oldIndex"+oldIndex)
  
            const liElements = bgContainer.querySelectorAll('li');
            liElements[oldIndex].style.opacity = 0;
  
          }
          const liElements = bgContainer.querySelectorAll('li');
          paginationItems[newIndex].classList.add('pagination__item--active');
          console.log("newIndex"+newIndex)
          liElements[newIndex].style.opacity = 1;
        }
    });
    
  
    pagination.addEventListener('click', function(e) {
      if (e.target.matches('.pagination__button')) {
          let index = paginationItems.indexOf(e.target.parentNode);
          msImages.select(index);
      }
    });

  })();   
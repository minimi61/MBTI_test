const url = 'https://twelve-style.netlify.app';

function setShare() {
    let resultImg = document.querySelector('#resultImg');
    let resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '십이간지 연애유형 결과';
    const shareDesc = infoList[resultAlt].name;
    const shaerImage = url + 'img/image-' + resultAlt + '.png';
    const shareURL = url + 'page/result' + resultAlt + '.html'

        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: shareTitle,
                description: shareDesc,
                imageUrl:
                    shaerImage,
                link: {
                    mobileWebUrl: shareURL,
                    webUrl: shareURL,
                },
            },
      
            buttons: [
                {
                    title: '결과확인하기',
                    link: {
                        mobileWebUrl: shareURL,
                        webUrl: shareURL
                    },
                }
            ]
        });
    }

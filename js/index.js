const API_KEY = "AIzaSyAX-tGWu3FR2Ft9mumiE2igdRcza1efEiI";
const CLIENT_ID = "1046555662796-uomlt946rsedm9voq60cpedq0qq9dsi7.apps.googleusercontent.com";

const gloAcademyList = document.querySelector('.glo-academy-list');

const createCard = (dataVideo) =>{ 
    const card = document.createElement('div');
    card.classList.add('video-card');
    const imgUrl = dataVideo.snippet.thumbnails.high.url;
    const videoId = dataVideo.id.videoId;
    const titleVideo = dataVideo.snippet.title;
    const dateVideo = dataVideo.snippet.publishedAt;
    const channelTitle = dataVideo.snippet.channelTitle; 

    card.innerHTML = `<div class="video-thumb">
      <a class="link-video youtube-modal" href="https://youtu.be/${videoId}">
        <img src="${imgUrl}" alt="" class="thumbnail">
      </a>
        </div>
    <!-- /.video-thumb -->
    <h3 class="video-title">${titleVideo}</h3>
    <div class="video-info">
      <span class="video-counter">
        <span class="video-date">${dateVideo}</span>
      </span>
      <span class="video-channel"${channelTitle}</span>
    </div>
    <!-- /.video-info -->`

    console.log(dataVideo);
    return card;
}

const createList = (wrapper, listVideo) => {
    wrapper.textContent = '';
   
    listVideo.forEach(item => {
        const card = createCard(item);
         wrapper.append(card);
        });
}

createList(gloAcademyList, gloAcademy);
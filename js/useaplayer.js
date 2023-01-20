const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: false, //自动播放
	theme: '#181c27',
    audio: [
	{
        name: '【FREE】lucky',
        artist: 'Salder4cash',
        url: 'https://m10.music.126.net/20230121020058/4ef94ba71247e1096f85361d3bbbe363/yyaac/535d/035b/5409/d74072cbd44155d8fdd5cc4b2d6fbf7c.m4a',
        cover: 'http://p1.music.126.net/QJoBtToXBScsEnWfZZa6fw==/109951164380775587.jpg?param=130y130',
    }, 
	]
});
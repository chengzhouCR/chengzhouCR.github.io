var reg = /^(localhost)/;
    if(window.location.hostname !== 'localhost' && !reg.test(window.location.hostname)) {
      // 判断非本地server时 http强制转换成https
	  var targetProtocol = "https:";
      if (window.location.protocol != targetProtocol)
      window.location.href = targetProtocol +
      window.location.href.substring(window.location.protocol.length);
    }
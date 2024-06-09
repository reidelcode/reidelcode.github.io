  const version = '1.1';
  const urlCDN = 'https://cdn.jsdelivr.net/gh/reidelcode/reidelcode.github.io/drobec/v/'+version+'.min.js';
  const userdrobec = 'https://t.me/reidelcode';

  const urls = [urlCDN,'assets/getapp.js'];
  let cargas = 0

  const firstpage = `<div class="drobec box center" ><div class="drobec box" ></div><img loading="lazy" src="https://i.ibb.co/0YW5tL2/formy.png" class="drobec drobec-edite open"  ><h1 class="drobec drobec-edite" >ReidelCode </h1><a href="" class="drobec drobec-edite"  >Visitar mi página web</a><p class="drobec drobec-edite" >Sea bienvenido a Drobec-app, ésta es su primera página en drobec-app, ahora puede editar su contenido.</p></div><div class="drobec box" ><div class="drobec box gale" ><h2 class="drobec drobec-edite" >Con la app puede:</h2><p class="drobec drobec-edite" >Añadir textos, imágenes, link y un poco más sin programar nada.</p></div><div class="drobec box" ><div class="drobec tuser" ><img src="https://i.ibb.co/ThsnptX/formy.png" class="drobec lock drobec-edite"  ><h3 class="drobec lock drobec-edite" >Crea increíbles artículos</h3></div><img loading="lazy" src="https://i.ibb.co/6B6yyy5/formy.png" class="drobec drobec-edite static"  ><h2 class="drobec drobec-edite" >Su sueño realidad!</h2><p class="drobec drobec-edite" >Publique sus proyectos en algún servicio de confianza o comprta su archivo resultante con familiares, amigos o clientes.</p></div><p class="drobec cite drobec-edite" >Todo está en su mente hágalo realidad😄!</p></div>`;
  const defaultmedia = ["6B6yyy5","tZZ4XbL","sb8gpxZ","G2J0mVx","ThsnptX","jhZB6t7","645bYvx","9H6X99m","WW9ZjLL","khTg2QG","bHT4vgY","fr0M3P9","ft1WhvY","fDJThMq"]

  const loadScript = (src) => {
    let script = document.createElement('script')
    script.src = src+'?1'
    script.defer = true
    script.onload = function(){
      cargas++
      cargas <= urls.length-1 ?loadScript(urls[cargas]):true
    }
    script.onerror = errorScript
    document.head.append(script)
  };

  loadScript(urls[cargas])

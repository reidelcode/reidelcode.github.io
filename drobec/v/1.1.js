var colr = ["0auto", "lavender", "white", "plum", "deepskyblue", "magenta", "palegreen", "skyblue", "springgreen", "teal", "midnightblue", "lightsteelblue", "khaki", "gainsboro", "deeppink", "whitesmoke", "turquoise", "tan", "slategray", "salmon", "moccasin", "lawngreen", "honeydew", "goldenrod", "fuchsia", "darkseagreen", "tomato", "steelblue", "seashell", "saddlebrown", "peru", "paleturquoise", "orangered", "oldlace", "mistyrose", "mediumturquoise", "mediumpurple", "maroon", "lightskyblue", "lightgrey", "lightcoral", "lavenderblush", "indigo", "greenyellow", "dimgray", "darkturquoise", "darksalmon", "darkolivegreen", "blanchedalmond", "silver", "gray", "darkgray", "purple", "lime", "lightgreen", "green", "darkgreen", "violet", "pink", "darkred", "red", "darkorange", "orange", "yellow", "gold", "cornflowerblue", "chartreuse", "brown", "blanchedalmond", "beige", "aqua", "coral", "cadetblue", "blueviolet", "black", "azure", "antiquewhite", "chocolate", "burlywood", "dodgerblue", "darkblue", "blue", "bisque", "aquamarine", "aliceblue"],
	href = window.location.href;
maker = (a, t) => {
	(b = document.createElement("a")).href = t || "https://reidelcode.github.io/drobec", b.innerHTML = a || "&#77;ake &#119;ith &#68;robec", b.className = "drobec mkr bg-azure", document.body.append(b)
}, oI = a => {
	(e = document.createElement("dialog")).classList.add("wh-full", "blur", "pd"), e.innerHTML = `<img src="${a.src?a.src:a}" class="block oI">`, document.body.append(e), e.addEventListener("click", function() {
		this.remove()
	}), e.showModal()
}, uid = a => (d = (new Date).getTime(), id = a.replace(/[xy]/g, function(a) {
	return r = (d + 16 * Math.random()) % 16 | 0, d = Math.floor(d / 16), ("x" == a ? r : 3 & r | 8).toString(16)
})), mdl = async (a, t) => {
	nid = uid("mdxxxxx"), x = await new Promise(o => {
		(e = document.createElement("dialog")).classList.add("mdl"), e.id = nid, e.innerHTML = `<h2>${"function"==typeof t?"Confirma?":"Alerta!"}</h2><div class="w-full bd">${a}</div><div class="w-full bt"><button onclick="${nid}.remove()" id="bta${nid}">Aceptar</button>${"function"==typeof t?`<button onclick="${nid}.remove()" id="btc${nid}">Cancelar</button>`:""}</div>`, document.body.append(e), setTimeout('document.getElementById("' + nid + '").showModal()', 10), "function" == typeof t && (document.getElementById("bta" + nid).addEventListener("click", function() {
			o(!0)
		}), document.getElementById("btc" + nid).addEventListener("click", function() {
			o(!1)
		}))
	}), "function" == typeof t && 1 == x && t()
}, css = document.createElement("style"), cssc = `
@import url('https://fonts.googleapis.com/css2?family=Alef&family=Quicksand:wght@400;900&family=Lato:wght@400;500;900&family=Roboto+Condensed:ital@0;1&display=swap');
*{outline:0;margin:0;padding:0;box-sizing:border-box;user-select:none;line-HG:1.4em}
:root {
  --cl:#334f6b;
  --bg:#f6f8fa;
  --br:#d8e0e9;
  --bi:1;
  --ft:#011;
  --cd:#eee;
  --lk:dodgerblue;
  --bt:aliceblue;
  --md:#e1ecf4;
  ${colr.map(a=>`--c-${a}:${a};`).join("")}
}
.dark {
  --cl:#dcdcdc;
  --bg:#031722;
  --br:#444;
  --bi:.8;
  --ft:#111;
  --cd:#333;
  --lk:dodgerblue;
  --bt:azure;
  --md:#2e3c4f;
}
.card a,BTN,body,.mdl,.sticky{
  bgd:var(--bg)
}
body,.mdl{
  CLR:var(--cl);
  font-size:12pt !important
}
.copy,pre{user-select:auto}
.copy-all{user-select:all}
.o-auto,pre,mark,.flex,footer,nav,.bd,.root{
  overflow:auto
}
.o-hidden,p,h1,h2,footer,.card,body{
  text-overflow:ellipsis;
  overflow:hidden
}
.drobec{
  margin:0 auto;
  max-wd:96%;
  min-HG:1rem
}
img.drobec{max-width:98%}
.center>img.drobec{
  wd:30rem;
  border-radius:30rem
}
p.cite{
  border-left:solid 4px var(--cl);
  margin-top:.3rem
}
p.drobec{
  line-HG:1.2em;
  margin-bottom:.6rem
}
img{
  filter:brightness(var(--bi));
  padding:1px
}
details,nav.drobec{
  border-bottom:solid 1px var(--br)
}
.gale{
  flex-wrap:wrap
}
.art11,.gale>img,.center>img.drobec{
  aspect-ratio:1/1
}
.art31{
  aspect-ratio:5/3
}
.art32,.card>img{
  aspect-ratio:3/2
}
.sticky{
  position:sticky;
  z-index:1
}
.relative{
  position:relative
}
.absolute{
  position:absolute
}
.absolute,.mkr{
  position:fixed
}
.top{
  top:0
}
.bottom,.mkr{
  bottom:0
}
.right,.mkr{
  right:0
}
.left{
  right:0
}
dialog,nav{
  max-HG:P%;
  border:0
}
.btn-s,a,.gale>img,.switch,.gale>p.cite{
  margin:.1rem
}
.flex>img,.flex>.card,.mkr,.mgn2{
  margin:.2rem
}
.flex>img{
  HG:55vh;
  max-wd:90%;
  max-HG:45rem
}
.gale>img{
  wd:calc(33.33% - .2rem)
}
.gale>p.cite{
  wd:calc(66.66% - .2rem)
}
.flex>.card{
  min-wd:285px
}
.drobec.card{
  wd:610px;
  bgd:var(--cd)
}
.gale>p::before{content:"● "}
.gale>p.cite::before{content:" "}
.bs,.center>img.drobec,input,a.drobec[href="${href}"],BTN,.btn-s span,.card,a,.flex>img,.mdl{
  border:solid 1px var(--br)
}
.br,input,p,.card,mark,.mkr,.card>img,BTN,a,.btn-s span,.flex>img,details,.mdl{
  border-radius:.2rem
}
.w-sm,.drobec{
  wd:600px
}
.w-md{
  wd:780px
}
footer.drobec,nav.drobec,.tuser{
  wd:850px
}
.tuser>img.drobec{
  wd:2em;
  HG:2em;
  border-radius:7em;
}
.w-lg,.flex{
  wd:920px
}
.w-full,.gale>a.drobec,.tuser>h3,body,.switch div,html,.wh-full,.oI,input{
  wd:P%
}
.mxw,mark,.gale>a.drobec,.tuser>h3,.tuser,dialog,.w-lg,.flex,footer.drobec{
  max-wd:P%
}
img{
  wd:600px
}
.h-full,body,html,.wh-full,.oI,.switch div{
  HG:P%
}
.pd,pre,footer a.drobec,.mkr,nav.drobec,.banner>h1,BTN,footer,.card a,input,p,p.drobec.cite,details,summary,.mdl,mdl .bd,.bt{
  padding:.38rem
}
.tuser,.gale>a.drobec,.padd5,nav a{
  padding:.5rem
}
div>p.drobec,a{
  padding:.1rem
}
.box{
  padding-bottom:.9rem;
  min-HG:1.7rem
}
.sticky,.root{
  padding:0
}
.root{
  margin:0
}
.card{
  padding:.3rem .1rem .9rem
}
.hidden,.switch input,.btn-s input{
  display:none
}
.flex,.gale,footer,.tuser,p.cite{
  display:flex
}
.block,img.drobec{
  display:block
}
.gradient,.gale>a{
  background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.1),rgba(0,0,0,0.2),rgba(0,0,0,0.3),rgba(0,0,0,0.4)) !important
}
.shadow,.mdl,.mkr,.gale>a.drobec{
  box-shadow:0 0 10px #222
}
.inblock,label,mark,nav img.drobec,a.drobec,BTN,body{
  display:inline-block
}
.t-shadow,.banner h1{
  text-shadow:0 0 2px #000
}
.alef,h1,h2,h3,.card,.gale>a.drobec{
  font-family:'alef'
}
.monospace,.pre{
  font-family:'monospace'
}
.lato,details>p{
  font-family:'lato'
}
.roboto,p.cite,summary,a{
  font-family:'Roboto Condensed'
}
.quicksand,body{
  font-family:'Quicksand'
}
h1{
  font-size:1.8rem;
  line-HG:1.5em
}
h2{
  font-size:1.45em
}
h3,summary{
  font-size:1.2em
}
.v-hidd,details *{
  visibility:hidden
}
details[open] *,details summary{
  visibility:visible
}
summary{list-style:none;font-weight:800}
.mdl{bgd:var(--md);animation:mod .5s;margin:auto;wd:90%;max-wd:25rem}
.flex.center,p.cite,footer{
  align-items:center
}
.ta-left,nav a,nav,.tuser{
  text-align:left
}
.ta-center,.center,.switch div,.gale>a.drobec{
  text-align:center
}
.ta-right,.mdl .bt{
  text-align:right
}
.mdl .bd{
  max-HG:20rem;
  min-HG:6rem
}
@keyframes mod{0{wd:1%;margin-top:P%;display:none}20%{display:inline-block}50%{wd:10%;margin-top:P%}P%{wd:90%;margin-top:P%}}
a.drobec,BTN{margin-left:.5rem;font-weight:900;CLR:var(--lk);text-decoration:none;wd:auto}
a.drobec,BTN,nav img.drobec,mark,h1,h2,h3{
  vertical-align:middle
}
.nwrap,a,BTN,label,mark{
  white-space:nowrap
}
a,.switch,BTN{
  bgd:var(--bt)
}
.gale>a.drobec{
  font-size:1.6em;
  margin:1rem auto
}
.switch{wd:2.2em;HG:1.4em;border-radius:5em;box-shadow:inset 0 0 2px #444}
.switch div::before{content:"Off"}
.switch input:checked~div::before{content:"On"}
.switch div{font-size:.8em;float:left;CLR:#000;bgd:#fff;border-radius:30px;box-shadow:0 0 2px}
.switch div{
  wd:80%
}
${colr.map(a=>`
.bg.bg-${a}{bgd:${a}}
.bg.cl-${a}{CLR:${a}}`).join("")}
a.drobec[href="${href}"],.switch input:checked~div,.btn-s input:checked~span{
  bgd:dodgerblue
}
footer.drobec,a.drobec[href="${href}"],.switch input:checked~div,.btn-s input:checked~span{
  CLR:#fff
}
footer.drobec>img{
  HG:4rem
}
nav a.drobec,footer a.drobec{border:0;font-weight:600;background:none;color:inherit}
.switch input:checked~div{
  float:right;
  box-shadow:0 0 5px #000
}
.root,body{
  float:left;
  margin:0;
  padding:0
}
.fit-contain,.oI{
  object-fit:contain
}
.fit-cover,img{
  object-fit:cover
}
.blur,dialog::backdrop{
  backdrop-filter:blur(5px);
  bgd-color:transparent
}
p.cite{
  background:rgba(0,0,0,0.2)
}
footer.drobec{
  bgd:var(--ft);
  margin:0 auto
}
.mkr{z-index:99;font-size:.7rem}
@media(max-wd:500px){
  footer{
    flex-direction:column
  }
  .center>img.drobec{
    wd:15rem;
  }
}
`, css.innerHTML = cssc.replace(/(P%)|(bgd)|(BTN)|(wd)|(HG)|(CLR)/g, a => {
	switch (a) {
		case "P%":
			r = "100%";
			break;
		case "bgd":
			r = "background";
			break;
		case "wd":
			r = "width";
			break;
		case "CLR":
			r = "color";
			break;
		case "HG":
			r = "height";
			break;
		case "BTN":
			r = "button"
	}
	return r
}), document.head.append(css), renderapp = (a, t) => {
	try {
		p = document.getElementById("app" + a).content.cloneNode(!0), t.innerHTML = "", t.append(p), t.scrollTop = 0, initDrobec()
	} catch (o) {
		mdl("404 Page Not Found!")
	}
};
var autoinit = !0;
initDrobec = () => {
	autoinit && (document.querySelectorAll("img").forEach(a => {
		"lazy" != a.loading && (a.loading = "lazy"), !a.dataset.act && (a.dataset.act = !0, a.classList.contains("open") && a.addEventListener("click", function() {
			oI(this)
		}))
	}), document.querySelectorAll("a").forEach(a => {
		a.classList.contains("drobec") || a.remove(), a.dataset.act || (a.dataset.act = !0, a.addEventListener("click", function(a) {
			if ((hf = this.getAttribute("href")) > 0 && hf < 7) try {
				renderapp(hf, rootapp)
			} catch (t) {
				mdl("micro-app no configurada!")
			} else mdl("Abandonar la p\xe1gina?", () => {
				try {
					window.location.href = this.href
				} catch (a) {}
			});
			a.preventDefault()
		}))
	}))
}, window.addEventListener("load", () => {
	window.alert = mdl, initDrobec();
	try {
		!1 != forrender[0] && renderapp(forrender[0], forrender[1])
	} catch (a) {}
	hr = (new Date).getHours(), document.documentElement.classList.toggle(hr > 17 || hr < 7 ? "dark" : "c"), document.body.classList.contains("dc-maker") && maker()
});

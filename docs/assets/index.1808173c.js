var e=Object.defineProperty,a=(a,n,i)=>(((a,n,i)=>{n in a?e(a,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[n]=i})(a,"symbol"!=typeof n?n+"":n,i),i);import{r as n,j as i,s as l,R as r,a as o}from"./vendor.05244417.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&a(e)})).observe(document,{childList:!0,subtree:!0})}function a(e){if(e.ep)return;e.ep=!0;const a=function(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?a.credentials="include":"anonymous"===e.crossorigin?a.credentials="omit":a.credentials="same-origin",a}(e);fetch(e.href,a)}}();const s=e=>`(min-width:${e}px)`,t=e=>{switch(e){case"xs":return c(`(max-width:${576}px)`);case"sm":return c(s(576));case"md":return c(s(768));case"lg":return c(s(992));case"xl":return c(s(1200));case"xxl":return c(s(1400))}},c=e=>{const a=window.matchMedia(e),[i,l]=n.exports.useState(!!a.matches);return n.exports.useEffect((()=>{const e=()=>l(!!a.matches);return a.addEventListener("change",e),()=>a.removeEventListener("change",e)}),[]),i};const d=i.exports.jsx,m=i.exports.jsxs,p=i.exports.Fragment,h=({size:e,ancho:a,alto:n,style:i,offsetX:l=-1,offsetY:r,color:o})=>{if(!(e||n&&a))throw new Error("Must provide a size or height and width");return d(f,{style:i,className:"responsive-icon",offsetX:l,offsetY:r,ancho:null!=a?a:e,alto:null!=n?n:e,color:o})},f=l.i`
  font-size: 1px;
  background-image: url(${"./assets/sprites.cdbe11e2.svg"});
  background-repeat: no-repeat;
  display: inline-block;
  vertical-align: middle;
  background-position: ${e=>e.offsetX}px ${e=>e.offsetY}px;
  width: ${e=>e.ancho}px;
  height: ${e=>e.alto}px;
`,u=[{title:"España",sections:[{name:"LaLiga Santander",links:["Calendario","Clasificación","Equipos"]},{name:"Primera iberdrola",links:["Calendario","Clasificación"]},{name:"LaLiga SmartBank",links:["Calendario","Clasificación","Equipos"]},{name:"Primera RFEF Footters",links:[]},{name:"Segunda RFEF",links:[]},{name:"Tercera RFEF",links:[]},{name:"Copa del Rey",links:["Calendario"]},{name:"Supercopa de España",links:["Calendario"]},{name:"Selección Española",links:["EURO 2020","Mundial 2022","UEFA Nations League"]},{name:"Selección Española Femenina",links:["EURO 2022","Mundial 2023"]},{name:"Fútbol Sala",links:[]},{name:"Premios MARCA",links:[]}]},{title:"Internacional",sections:[{name:"Premier League",links:["Calendario","Clasificación","Equipos"]},{name:"Bundesliga",links:["Calendario","Clasificación","Equipos"]},{name:"Serie A",links:["Calendario","Clasificación","Equipos"]},{name:"Ligue 1",links:["Calendario","Clasificación","Equipos"]},{name:"Primeira Liga de Portugal",links:["Calendario","Clasificación","Equipos"]},{name:"Eredivisie",links:[]},{name:"Liga 1 de Rumania",links:[]},{name:"Primera División de Bélgica",links:[]},{name:"Premier League de Rusia",links:[]},{name:"Superliga de Grecia",links:[]},{name:"Superliga de Turquía",links:[]}]},{title:" ",sections:[{name:"Champions League",links:["Calendario","Clasificación","Equipos"]},{name:"Champions League Femenina",links:["Calendario","Clasificación"]},{name:"Europa League",links:["Calendario","Clasificación","Equipos"]},{name:"Conference League",links:["Calendario","Clasificación","Equipos"]},{name:"Supercopa de Europa",links:[]},{name:"Mundial de clubes",links:["Calendario"]},{name:"Mundial 2022",links:[]},{name:"Mundial Femenino 2023",links:[]},{name:"EURO 2020",links:["Calendario","Clasificación"]},{name:"EURO Femenina 2022",links:[]},{name:"UEFA Nations League",links:[]},{name:"Copa  África",links:["Calendario"]}]},{title:"América",sections:[{name:"Argentina",links:["Calendario","Clasificación"]},{name:"Chile",links:["Calendario","Clasificación"]},{name:"Colombia",links:["Calendario","Clasificación"]},{name:"Estados Unidos",links:["Calendario","Clasificación"]},{name:"México",links:["Calendario","Clasificación"]},{name:"Venezuela",links:["Calendario","Clasificación"]},{name:"CONMEBOL Libertadores",links:["Calendario","Clasificación"]},{name:"Copa América",links:["Calendario"]},{name:"Más América",links:["Campeonato Brasileiro","Liba Boliviana","Paragyan Primera División","Primera División del Perú","Serie A de Ecuador"]}]}],k=[{title:"España",sections:[{name:"Liga Endesa",links:["Calendario","Clasificación"]},{name:"Basket FEB",links:["LEV Oro","LEB Plata","Liga Femenina"]},{name:"Copa del Rey",links:["Cuadro y resultados"]},{name:"Selección",links:[]},{name:"Eurobasket 2021",links:[]}]},{title:"Europa",sections:[{name:"Euroliga",links:["Clasificación","Calendario"]},{name:"Eurocup",links:["Resultados y Clasificación"]},{name:"FIBA Champions League",links:["Resultados y Clasificación"]}]},{title:"Internacional",sections:[{name:"NBA",links:["Playoffs","Calendario","Clasificaciones","Equipos"]}]}],g=[{title:"Coches",sections:[{name:"Fórmula",links:["Calendario","Clasificación de pilotos","Clasificación de constructores"]},{name:"Grandes Premios de Fórmula 1",links:["Bahrein","Emilia Romagna","Portugal","España","Mónaco","Azerbaiyán","Francia","Estiria","Austria","Gran Bretaña","Hungría","Bélgica","Países Bajos","Italia","Rusia","Turquía","Estados Unidos","México","Brasil","Arabia Saudí","Emiratos Árabes"]}]},{title:" ",sections:[{name:"Railies",links:["Calendario","Clasificación de Pilotos","Clasificación de equipos"]},{name:"Dakar",links:[]},{name:"WEC",links:[]},{name:"Indycar",links:[]},{name:"24 Horas de Daytona",links:[]},{name:"24 Horas de Le Mans",links:[]}]},{title:"Motos",sections:[{name:"Moto GP",links:["Calendario","Clasificación de pilotos"]},{name:"Grandes Premios de Moto GP",links:["Qatar","Doha","Portugal","España","Francia","Italia","Cataluña","Alemania","Países Bajos","Estiria","Austria","Gran Bretaña","Aragón","San Marino","Las Américas","Emilia Romagna","Algarve","Comunidad Valenciana"]}]},{title:"Modelos de coches",sections:[{name:"Modelos",links:[]},{name:"Comprador de coches",links:[]},{name:"Pruebas de coches",links:[]},{name:"Ocio",links:[]},{name:"Videos",links:[]}]}],A=[{title:"Destacamos",sections:[{name:"Atletismo",links:[]},{name:"Balonmano",links:[]},{name:"Ciclismo",links:[]},{name:"Deportes Invierno",links:[]},{name:"eSports",links:[]},{name:"Golf",links:[]}]},{title:" ",sections:[{name:"Natación",links:[]},{name:"Pádel",links:[]},{name:"Tenis",links:[]},{name:"Turf",links:[]}]},{title:"Y además",sections:[{name:"Ajedrez",links:[]},{name:"Boxeo",links:[]},{name:"Deportes Aventura",links:[]},{name:"Juegos Olímpicos",links:[]},{name:"MMA",links:[]},{name:"NFL",links:[]}]},{title:" ",sections:[{name:"Olimpismo",links:[]},{name:"Otros deportes",links:[]},{name:"Paralímpicos",links:[]},{name:"Rugby",links:[]},{name:"Toros",links:[]},{name:"Triatlón",links:[]}]}],C=[{title:"Coches y motos",sections:[{name:"Coches",links:[]},{name:"Motos",links:[]},{name:"Tráfico",links:[]},{name:"Tecnología",links:[]},{name:"Industria",links:[]}]},{title:"Salones del Automóvil",sections:[{name:"Frankfurt",links:[]},{name:"Shanghái",links:[]},{name:"Ginebra",links:[]},{name:"Los Ángeles",links:[]},{name:"París",links:[]}]},{title:"Y además",sections:[{name:"Accesorios",links:[]},{name:"Recomendador/Comparador",links:[]}]}];class v{}a(v,"blackLight","#232326"),a(v,"black","#060407"),a(v,"blueBlackTransparent","rgba(20,29,37,0.97)"),a(v,"blue","#3a95d4"),a(v,"blueBlack","#19242D"),a(v,"grayDark","#474747"),a(v,"grayLight","#DDDBDD"),a(v,"gray","#8a898a"),a(v,"green","#27a75e"),a(v,"orange","#cb830e"),a(v,"purpleDark","#330234"),a(v,"purple","#a10cb4"),a(v,"redDark","#b3090a"),a(v,"red","#ce090a"),a(v,"white","#F8F5F8"),a(v,"whiteDark","#F2F1F3");class x{}a(x,"primaryColor",v.red),a(x,"primaryColorDark",v.redDark),a(x,"textColorOnPrimary",v.white),a(x,"textColor",v.black),a(x,"textColorSecondary",v.grayDark),a(x,"textColorOff",v.gray),a(x,"iconColor",v.gray),a(x,"iconColorActive",v.redDark),a(x,"linkColor",v.blue),a(x,"bodyColor",v.white),a(x,"headerColorTop",v.whiteDark),a(x,"hoverButtonBG",v.blueBlack),a(x,"navMenuDropDownColor",v.blueBlackTransparent);const b=x.primaryColor,E=x.hoverButtonBG,y=x.primaryColorDark,w=x.navMenuDropDownColor,N=x.textColorOnPrimary,B=x.textColorOff,P=l.nav`
  background-color: ${b} !important;
  padding-top: 0;
  padding-bottom: 0;

  a {
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  .dropdown-toggle {
    :hover {
      background-color: ${E};
    }
  }
`,D=l.li`
  background-color: ${y} !important;
  font-size: 1rem;

  * {
    color: ${N} !important;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`,L=l.li`
  .nav-link {
    color: ${N} !important;
  }

  a {
    color: ${N};

    :hover {
      color: ${b};
      text-decoration: none;
    }
  }

  .dropdown-menu {
    background-color: ${w};
    color: ${N};
    top: 50%;
    left: 50%;

    /* bring your own prefixes */
    transform: translate(-50%, -50%);
    width: 80vw;
    max-width: 300rem;
    max-height: 90vh;
    overflow-y: scroll;

    h4 {
      color: ${B};
    }

    .section-links {
      font-size: 0.9rem;

      a {
        font-weight: 300;
      }
    }
  }
`,F=x.hoverButtonBG,Q=x.textColorOnPrimary,q=l.button`
  outline: none;
  border: 0.1rem ${e=>"filled"==e.variant?x.primaryColorDark:x.textColorOff} solid;
  background-color: ${e=>"filled"==e.variant?x.primaryColor:x.textColorOnPrimary};
  color: ${e=>"filled"==e.variant?x.textColorOnPrimary:x.primaryColor};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: background-color 0.25s, color 0.25s, border 0.25s;

  :hover {
    color: ${Q};
    border: 0.1rem ${F} solid;
    background-color: ${F};
  }
`,S=({children:e,variant:a,className:n})=>d(q,{className:`py-1 px-2 ${n}`,variant:a,children:e}),X=e=>e?x.textColorOnPrimary:x.textColorSecondary,H=e=>e?x.linkColor:v.grayLight,U=l.li`
  background-color: ${e=>e.active?x.linkColor:x.bodyColor};
  font-weight: 400;
  transition: background-color 0.25s, color 0.25s;
  border-bottom: 0.1rem solid ${e=>H(e.active)};

  a {
    background-color: transparent;
    color: ${e=>X(e.active)} !important;

    :hover {
      color: ${e=>X(e.active)} !important;
      background-color: transparent;
    }
  }

  &:hover {
    background-color: ${e=>H(e.active)};
  }
`,M=l(S)`
  .dropdown-menu {
    min-width: 20rem !important;
  }
`,R=({active:e=!1,children:a,title:n})=>d(U,{active:e,children:m("a",{href:"#",className:"dropdown-item py-3",children:[a," ",n]})}),O=[{name:"ES (España)",y:-577},{name:"EN (English)",y:-525},{name:"MX (México)",y:-629},{name:"CO (Colombia)",y:-473},{name:"AR (Argentina)",y:-369}],T=["ES (España)","EN (English)","MX (México)","CO (Colombia)","AR (Argentina)","US (USA)"],j=()=>m(M,{className:"dropdown",variant:"outlined",children:[m("span",{className:"dropdown-toggle d-flex align-items-center",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:[d(h,{alto:24,ancho:24,offsetX:-1,offsetY:-577}),d("span",{className:"px-1",children:"ES"})]}),m("ul",{className:"dropdown-menu position-absolute","aria-labelledby":"navbarDropdown",children:[O.map(((e,a)=>d(R,{active:0==a,title:e.name,children:d(h,{size:24,offsetX:-1,offsetY:e.y,style:{margin:"-3px 3px 0 0"}})},e.name))),d(R,{title:"US (USA)",children:d(h,{style:{margin:"-3px 3px 0 0"},ancho:24,alto:14,offsetX:-1,offsetY:-681})}),d("li",{children:d("div",{className:"m-3",children:d("strong",{children:"Escoge tu edición de Marca.com favorita"})})}),d("li",{children:m("div",{className:"m-3",children:[d(h,{offsetY:-839,size:16})," Siempre que entres en Marca.com se cargará esta edición"]})}),d("li",{children:d("div",{className:"m-3 row",children:T.map(((e,a)=>m("div",{className:"form-check col-6",children:[d("input",{type:"radio",className:"form-check-input",value:e,name:"country selection",id:`country selection ${e}`},e),d("label",{className:"form-check-label",htmlFor:`country selection ${e}`,children:e})]},e)))})})]})]}),W=({className:e,position:a})=>d("div",{className:e,children:m("div",{className:`d-flex flex-row justify-content-${a}`,children:[d(j,{}),d(S,{variant:"filled",className:"mx-2",children:"Suscríbete"}),d(S,{variant:"outlined",children:"Iniciar sesión"})]})}),G=({className:e,content:a,children:n})=>m(L,{className:`nav-item dropdown ${e}`,children:[d("span",{className:"nav-link dropdown-toggle py-3",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:n}),d("div",{className:"dropdown-menu position-fixed p-4","aria-labelledby":"navbarDropdown",children:d("div",{className:"row",children:a.map(((e,a)=>m("div",{className:"col-6 col-lg-3",children:[d("h4",{children:e.title}),e.sections.map(((e,a)=>m("div",{className:"section p-2",children:[d("h5",{children:d("a",{href:"#",children:e.name})}),d("div",{className:"section-links d-flex flex-row flex-wrap",children:e.links.map(((a,n)=>d("a",{className:"mx-1",href:"#",children:a},`${e} - ${a} - ${n}`)))})]},`${e} - ${a}`)))]},`${e.title} - ${a}`)))})})]}),Y=({className:e})=>{const a=t("md"),n=t("xl");return d(D,{className:`navbar-brand pr-4 py-2 ${e}`,children:m("ul",{className:"d-flex flex-row align-items-center",children:[d("li",{className:"px-3",children:d(h,{offsetY:-731,size:34})}),d("li",{className:"px-3",children:d("a",{href:"#",children:"Última hora"})}),a&&d("li",{className:"px-3",children:d("a",{href:"#",children:"Programación TV"})}),n&&d("li",{className:"px-3",children:d("a",{href:"#",children:"FANTASY"})})]})})},z=()=>d(P,{className:"navbar navbar-expand-xl navbar-dark bg-dark",children:m("div",{className:"container",children:[d(Y,{className:"d-xl-none d-block"}),d("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:d("span",{className:"navbar-toggler-icon"})}),m("div",{className:"collapse navbar-collapse py-2 p-xl-0",id:"navbarSupportedContent",children:[m("ul",{className:"navbar-nav me-auto mb-2 mb-xl-0",children:[d(G,{content:u,children:"Fútbol"}),d(G,{content:k,children:"Baloncesto"}),d(G,{content:g,children:"Motor"}),d(G,{content:A,children:"Polideportivo"}),d(G,{className:"d-none d-xxl-block",content:C,children:"Coches"}),d("li",{className:"nav-item d-block d-lg-none",children:d(W,{position:"start"})})]}),d(Y,{className:"d-none d-xl-block"}),d("form",{className:"d-flex",children:d("input",{className:"form-control me-2",type:"search",placeholder:"Buscar en marca.com","aria-label":"Search"})})]})]})});class V{}a(V,"caption","0.75rem");const K=l.ul`
  font-size: ${V.caption};
  display: flex;
  overflow-x: hidden;
  list-style-type: none;
  padding: 0.2rem;
  margin: 0;

  li {
    flex: 0 0 auto;
    padding-right: 6px;
    position: relative;
  }

  .bold {
    font-weight: 700;
  }
`,Z=l.li`
  a {
    font-weight: 400;
    margin: 0 0.5rem;
    color: ${x.textColorOff} !important;
    text-decoration: none !important;
    cursor: pointer;

    &:hover {
      color: ${x.textColorOff};
      border-bottom: 0.1rem ${x.textColor} solid;
    }
  }

  ::after {
    content: '/';
    display: inline-block;
    padding-left: 6px;
    color: ${x.textColorOff};
  }
`,I=l.header`
  display: flex;
  flex-direction: column;
`;const $=l.a`
  text-decoration: none;
  color: ${x.textColor};
  font-size: 0.75rem;

  strong {
    margin-left: 0.2rem;
    max-width: 4rem;
  }

  :hover {
    color: ${x.primaryColor};
  }
`,J=({children:e,title:a})=>m($,{className:"d-flex flex-row align-items-center",children:[e,d("strong",{className:"d-none d-md-block",children:a})]}),_=()=>d("div",{className:"container",children:m("div",{className:"row align-items-center py-2",children:[m("div",{className:"col-6 col-lg-4 d-flex flex-row justify-content-evenly ",children:[d(J,{title:"La portada de hoy",children:d("img",{className:"responsive-icon",src:"data:image/jpeg;base64,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",alt:"La portada de hoy",width:"32px",height:"44px"})}),d(J,{title:"Radio Marca",children:d(h,{offsetX:-1,offsetY:-1637,ancho:46,alto:41})}),d(J,{title:"Cuídate Plus",children:d("img",{src:"./assets/cuidateplus.d6fe256e.svg",alt:"CuídatePlus",width:"40px",className:"responsive-icon"})})]}),d("div",{className:"col-6 col-lg-4",children:d("div",{className:"d-flex flex-row justify-content-end justify-content-lg-center",children:d(h,{offsetX:-1,offsetY:-975,ancho:137.206,alto:38})})}),d(W,{className:"d-none d-lg-block col-lg-4",position:"center"})]})}),ee=["Libres F1","Volcán La Palma","Ryder Cup 2021","Horarios F1 Rusia","Chelsea vs Manchester City","Barcelona - Real Madrid","Puigdemont","Secret Story","Azufre La Palma","Calendario Liga","Clasificacion La Liga","Calendario F1","Calendario"],ae=()=>d("div",{style:{backgroundColor:`${x.headerColorTop}`},children:d("div",{className:"container",children:m(K,{children:[d("li",{children:d("span",{className:"bold",children:"En noticia:"})}),ee.map((e=>d(Z,{children:d("a",{children:e})},e)))]})})}),ne=()=>{const e=t("lg");return m(I,{children:[e&&d(ae,{}),d(_,{}),d(z,{})]})};function ie(){return m(p,{children:[d(ne,{}),Array(32).fill(1).map(((e,a)=>d("h3",{children:e},a)))]})}r.render(d(o.StrictMode,{children:d(ie,{})}),document.getElementById("root"));

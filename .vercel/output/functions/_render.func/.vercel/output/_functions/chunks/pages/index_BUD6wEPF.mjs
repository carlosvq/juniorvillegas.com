/* empty css                          */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, i as renderComponent, j as renderSlot, k as renderHead, h as createAstro, s as spreadAttributes } from '../astro_DRroYlyH.mjs';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="contact"> <a${addAttribute(cn([
    "block w-screen p-8 italic !text-white font-semibold text-center",
    "bg-primary border-0",
    "hover:bg-secondary"
  ]), "class")} href="#">¡Iniciemos tu cambio ahora! <i${addAttribute(cn(["gdlr-icon-muscle", "text-white"]), "class")}></i> </a> </div>`;
}, "/Users/carlosvq/Development/work/coachesproject/juniorvillegas.com/src/sections/index/contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(cn(["bg-background"]), "class")}> <div${addAttribute(cn([
    "container mx-auto flex flex-col items-center text-center w-full justify-center p-8",
    "lg:min-h-80"
  ]), "class")}> <img alt="logo"${addAttribute(cn(["w-20"]), "class")} src="/cp.svg"> <div${addAttribute(cn(["mt-2"]), "class")}>Copyright © 2024 Coaches Project.</div> </div> </footer>`;
}, "/Users/carlosvq/Development/work/coachesproject/juniorvillegas.com/src/components/footer.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="about"> <header${addAttribute(cn("bg-background"), "class")}> <div${addAttribute(cn("container flex justify-between mx-auto py-12 px-8"), "class")}> <img${addAttribute(cn("h-12"), "class")} src="/jr-logo.svg" title="logo-trainer"> <div${addAttribute(cn(["flex items-center space-x-6", "text-white"]), "class")}> <div${addAttribute(cn("items-center text-sm hidden", "lg:flex"), "class")}> <a href="tel:18495900297"> <i${addAttribute(cn("fa fa-phone"), "class")}></i>
+1 849 590 0297
</a> </div> <div${addAttribute(cn("items-center text-sm hidden", "lg:flex"), "class")}> <a href="mailto:coach@juniorvillegas.com"> <i${addAttribute(cn("fa fa-envelope"), "class")}></i>
coach@juniorvillegas.com
</a> </div> <div> <div${addAttribute(cn(["zyth-modern-menu"]), "class")} id="zyth-right-menu" data-back-text="Back"> <a${addAttribute(cn(["flex items-center zyth-modern-menu-icon text-2xl"]), "class")} href="#"> <i${addAttribute(cn(["fa fa-bars"]), "class")}></i> </a> <div${addAttribute(cn(["zyth-modern-menu-nav-base"]), "class")}> <ul id="menu-one-page-menu-1"${addAttribute(cn(["menu"]), "class")}> <li${addAttribute(cn(["menu-item"]), "class")}> <a href="#about">Acerca de mí</a> </li> <li${addAttribute(cn(["menu-item"]), "class")}> <a href="#coaching">Coaching</a> </li> <li${addAttribute(cn(["menu-item"]), "class")}> <a href="#testimonial">Testimonios</a> </li> <li${addAttribute(cn(["menu-item"]), "class")}> <a href="#contact">Contacto</a> </li> </ul> </div> <div${addAttribute(cn([
    "zyth-modern-menu-content zyth-navigation-font zyth-full"
  ]), "class")}> <div${addAttribute(cn(["zyth-modern-menu-display"]), "class")}> <div${addAttribute(cn(["zyth-modern-menu-close"]), "class")}></div> <div${addAttribute(cn(["zyth-modern-menu-nav"]), "class")}></div> <div${addAttribute(cn(["zyth-modern-menu-info clearfix"]), "class")}> <div${addAttribute(cn(["zyth-left-text"]), "class")}> <a href="#"> coach@juniorvillegas.com</a> <br>
+1 849 590 0297
</div> </div> </div> </div> </div> </div> </div> </div> </header> </div>`;
}, "/Users/carlosvq/Development/work/coachesproject/juniorvillegas.com/src/components/nav.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="Astro description"><meta name="generator"', "><title>", '</title><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="https://storage.googleapis.com/vq_static/assets/scripts/plugins/goodlayers-core/plugins/fontawesome/font-awesome.css" type="text/css" media="all"><link rel="stylesheet" href="https://storage.googleapis.com/vq_static/assets/scripts/plugins/goodlayers-core/plugins/fa5/fa5.css" type="text/css" media="all"><link rel="stylesheet" href="https://storage.googleapis.com/vq_static/assets/scripts/plugins/goodlayers-core/plugins/elegant/elegant-font.css" type="text/css" media="all"><link rel="stylesheet" href="https://storage.googleapis.com/vq_static/assets/scripts/plugins/goodlayers-core/plugins/ionicons/ionicons.css" type="text/css" media="all"><link rel="stylesheet" href="https://storage.googleapis.com/vq_static/assets/scripts/plugins/goodlayers-core/plugins/simpleline/simpleline.css" type="text/css" media="all"><link rel="stylesheet" href="https://storage.googleapis.com/vq_static/assets/scripts/plugins/goodlayers-core/plugins/gdlr-custom-icon/gdlr-custom-icon.css" type="text/css" media="all"><link rel="stylesheet" href="https://storage.googleapis.com/vq_static/assets/scripts/plugins/goodlayers-core/plugins/style.css" type="text/css" media="all"><link rel="stylesheet" href="https://storage.googleapis.com/vq_static/assets/scripts/plugins/goodlayers-core/include/css/page-builder.css" type="text/css" media="all"><link rel="stylesheet" href="https://storage.googleapis.com/vq_static/assets/scripts/plugins/mp-timetable/media/css/style.css?ver=2.4.2" type="text/css" media="all"><link rel="stylesheet" href="https://storage.googleapis.com/vq_static/assets/scripts/plugins/revslider/public/assets/css/rs6.css?ver=6.5.8" type="text/css" media="all"><link rel="stylesheet" href="/assets/styles/style-core.css" type="text/css" media="all"><link rel="stylesheet" href="/assets/styles/zyth-style-custom.css" type="text/css" media="all">', "</head> <body", "> ", " <div", "> <div", ' id="zyth-page-wrapper"> <div', "> ", " ", ' </div> </div> </div> <script type="text/javascript" src="https://storage.googleapis.com/vq_static/assets/scripts/jquery.min.js?ver=3.6.0" id="jquery-core-js"><\/script> <script type="text/javascript" src="https://storage.googleapis.com/vq_static/assets/scripts/jquery-migrate.min.js?ver=3.3.2" id="jquery-migrate-js"><\/script> <script type="text/javascript" src="https://storage.googleapis.com/vq_static/assets/scripts/plugins/goodlayers-core/plugins/script.js" id="gdlr-core-plugin-js"><\/script> <script type="text/javascript" id="gdlr-core-page-builder-js-extra">\n      /* <![CDATA[ */\n      var gdlr_core_pbf = {\n        admin: "",\n        video: { width: "640", height: "360" },\n        ajax_url:\n          "https://demo.goodlayers.com/zyth/gym/wp-admin/admin-ajax.php",\n      };\n      /* ]]> */\n    <\/script> <script type="text/javascript" src="https://storage.googleapis.com/vq_static/assets/scripts/plugins/goodlayers-core/include/js/page-builder.js?ver=1.3.9" id="gdlr-core-page-builder-js"><\/script> <script type="text/javascript" src="https://storage.googleapis.com/vq_static/assets/scripts/plugins/ui/effect.min.js?ver=1.12.1" id="jquery-effects-core-js"><\/script> <script type="text/javascript" src="https://storage.googleapis.com/vq_static/assets/scripts/plugins/jquery.mmenu.js?ver=1.0.0" id="jquery-mmenu-js"><\/script> <script type="text/javascript" src="https://storage.googleapis.com/vq_static/assets/scripts/plugins/jquery.superfish.js?ver=1.0.0" id="jquery-superfish-js"><\/script> <script type="text/javascript" src="https://storage.googleapis.com/vq_static/assets/scripts/plugins/script-core.js?ver=1.0.0" id="zyth-script-core-js"><\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), title, renderHead(), addAttribute(cn([
    "home bg-background page-template-default page page-id-14976 theme-zyth gdlr-core-body woocommerce-no-js zyth-body zyth-body-front zyth-full zyth-with-sticky-navigation zyth-blockquote-style-3 gdlr-core-link-to-lightbox"
  ]), "class"), renderComponent($$result, "Nav", $$Nav, {}), addAttribute(cn([
    "zyth-body-wrapper clearfix zyth-with-transparent-header zyth-with-frame"
  ]), "class"), addAttribute(cn(["zyth-page-wrapper"]), "class"), addAttribute(cn(["gdlr-core-page-builder-body"]), "class"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/carlosvq/Development/work/coachesproject/juniorvillegas.com/src/layouts/layout.astro", void 0);

const $$Astro = createAstro();
const $$ButtonLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ButtonLink;
  const { ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(cn([
    "gdlr-core-button gdlr-core-left-align",
    "bg-primary border-0",
    "hover:bg-secondary"
  ]), "class")} style="
    transform: skewX(170deg);
    -webkit-transform: skewX(170deg);
    font-size: 17px;
    font-style: italic;
    font-weight: 700;
    color: #ffffff;
    padding: 17px 35px 17px 35px;
    text-transform: none;
    border-radius: 0px;
    -moz-border-radius: 0px;
    -webkit-border-radius: 0px;
  "${spreadAttributes(props)}> <span${addAttribute(cn(["gdlr-core-content"]), "class")} style="
      transform: skewX(-170deg);
      -webkit-transform: skewX(-170deg);
    "> ${renderSlot($$result, $$slots["default"])} </span> </a>`;
}, "/Users/carlosvq/Development/work/coachesproject/juniorvillegas.com/src/components/button-link.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(["gdlr-core-pbf-wrapper py-20 m-0"]), "class")} id="main"> <div${addAttribute(cn(["gdlr-core-pbf-background-wrap"]), "class")} style="background-color: #0c0c0c;"></div> <div${addAttribute(cn(["gdlr-core-pbf-background-wrap"]), "class")} style="top: 180px;"> <div${addAttribute(cn([
    "gdlr-core-pbf-background",
    "gdlr-core-parallax",
    "gdlr-core-js"
  ]), "class")} style="background-image: url(/junior-bg.png); background-repeat: no-repeat; background-position: center;" data-parallax-speed="0"></div> </div> <div${addAttribute(cn(["gdlr-core-pbf-wrapper-content", "gdlr-core-js"]), "class")}> <div${addAttribute(cn([
    "gdlr-core-pbf-wrapper-container",
    "clearfix",
    "gdlr-core-container"
  ]), "class")}> <div${addAttribute(cn([
    "gdlr-core-pbf-column",
    "gdlr-core-column-30",
    "gdlr-core-column-first"
  ]), "class")} id="gdlr-core-column-19776"> <div${addAttribute(cn(["gdlr-core-pbf-column-content-margin", "gdlr-core-js"]), "class")} style="margin: 0px -70px 0px 0px; padding: 0px 0px 0px 70px;"> <div${addAttribute(cn(["gdlr-core-pbf-background-wrap"]), "class")}></div> <div${addAttribute(cn([
    "gdlr-core-pbf-column-content",
    "clearfix",
    "gdlr-core-js"
  ]), "class")} data-gdlr-animation="fadeInLeft" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"> <div${addAttribute(cn(["gdlr-core-pbf-element"]), "class")}> <div${addAttribute(cn([
    "gdlr-core-image-item",
    "gdlr-core-item-pdb",
    "gdlr-core-center-align",
    "gdlr-core-item-pdlr"
  ]), "class")} style="padding-bottom: 0px;"> <div${addAttribute(cn([
    "gdlr-core-image-item-wrap",
    "gdlr-core-media-image",
    "gdlr-core-image-item-style-rectangle"
  ]), "class")} style="border-width: 0px;"> <img src="/junior.png" alt="11" width="1200" height="1186" title="Gym Trainer"> </div> </div> </div> </div> </div> </div> <div${addAttribute(cn(["gdlr-core-pbf-column", "gdlr-core-column-30"]), "class")} id="gdlr-core-column-44775"> <div${addAttribute(cn(["gdlr-core-pbf-column-content-margin", "gdlr-core-js"]), "class")}> <div${addAttribute(cn(["gdlr-core-pbf-background-wrap"]), "class")}></div> <div${addAttribute(cn([
    "gdlr-core-pbf-column-content",
    "clearfix",
    "gdlr-core-js"
  ]), "class")} data-gdlr-animation="fadeInRight" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"> <div${addAttribute(cn(["gdlr-core-pbf-element"]), "class")}> <div${addAttribute(cn([
    "gdlr-core-title-item",
    "gdlr-core-item-pdb",
    "clearfix",
    "gdlr-core-left-align",
    "gdlr-core-title-item-caption-top",
    "gdlr-core-item-pdlr"
  ]), "class")}> <span${addAttribute(cn([
    "gdlr-core-title-item-caption",
    "gdlr-core-info-font",
    "gdlr-core-skin-caption"
  ]), "class")} style="font-size: 32px; letter-spacing: 0px; color: #ffffff; margin-bottom: 0px;">
Tu entrenador
</span> <div${addAttribute(cn(["gdlr-core-title-item-title-wrap"]), "class")}> <h3${addAttribute(cn([
    "gdlr-core-title-item-title",
    "gdlr-core-skin-title"
  ]), "class")} style="font-size: 84px; font-style: italic; letter-spacing: 0px; line-height: 1; color: #ffffff;">
Junior <span style="color: #4c00ff;">Villegas</span><span${addAttribute(cn([
    "gdlr-core-title-item-title-divider",
    "gdlr-core-skin-divider"
  ]), "class")}></span> </h3> </div> </div> </div> <div${addAttribute(cn(["gdlr-core-pbf-element"]), "class")}> <div${addAttribute(cn([
    "gdlr-core-text-box-item",
    "gdlr-core-item-pdlr",
    "gdlr-core-item-pdb",
    "gdlr-core-left-align",
    "gdlr-core-no-p-space"
  ]), "class")} style="padding-bottom: 50px; margin-right: 32px;"> <div${addAttribute(cn([
    "gdlr-core-text-box-item-content",
    "text-white",
    "text-xl",
    "font-medium",
    "leading-8"
  ]), "class")}> <p>
Seré tu guía para sacar la mejor versión de ti, sin excusas.
                    La gente busca felicidad donde solo hay vicios. No hay
                    atajos, solo herramientas para conquistar las áreas de tu
                    vida que necesitas dominar.
</p> <br> ¡Prepárate para transformarte!
</div> </div> </div> <div${addAttribute(cn(["gdlr-core-pbf-element"]), "class")}> <div${addAttribute(cn([
    "gdlr-core-button-item",
    "gdlr-core-item-pdlr",
    "gdlr-core-item-pdb",
    "gdlr-core-left-align"
  ]), "class")} style="padding-bottom: 0px;"> ${renderComponent($$result, "ButtonLink", $$ButtonLink, { "href": "/start" }, { "default": ($$result2) => renderTemplate`
Iniciemos tu transformación hoy!
<i${addAttribute(cn(["gdlr-icon-muscle", "text-white"]), "class")}></i> ` })} </div> </div> </div> </div> </div> </div> </div> </div>`;
}, "/Users/carlosvq/Development/work/coachesproject/juniorvillegas.com/src/sections/index/hero.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      author: "Martin H.",
      content: "\xA1El mejor coach! He tenido varios coaches y hasta ahora has sido el mejor. En tan poco tiempo, mi cuerpo ha cambiado much\xEDsimo. La dieta y entrenamiento demuestran tu sabidur\xEDa y conocimiento en el fitness. Adem\xE1s, las transformaciones con clientes anteriores son las mejores que he visto, y yo ser\xE9 el pr\xF3ximo sin duda."
    },
    {
      author: "Franchy O.",
      content: "\xA1Gracias, Junior! Ojal\xE1 todos los coaches pensaran as\xED. He tenido coaches que solo te mandan una dieta y una rutina y de ah\xED te dan tu banda. Es muy gratificante tenerte a ti como mi coach."
    },
    {
      author: "Luz C.",
      content: "Mi experiencia contigo, Junior, ha sido muy buena; realmente he mejorado bastante. Nunca hab\xEDa estado en mi mejor condici\xF3n f\xEDsica como ahora. Lo que m\xE1s me gusta de ti es que trabajas mucho la parte mental. Aunque s\xE9 que a\xFAn me falta mucho para llegar a donde quiero, no me he desesperado, al contrario, he aprendido a disfrutar el proceso. Gracias por haber estado pendiente durante el tiempo que tuve el problema de la pierna."
    },
    {
      author: "Ricardo D.",
      content: "\xA1Hermano, s\xFAper bien! Me gusta bastante el programa, es preciso y sin complicaciones, y se adapta al d\xEDa a d\xEDa. Estoy muy conforme porque estoy viendo cambios en mi cuerpo que lo confirman, por eso te ped\xED que me guardes otro cupo despu\xE9s de estos tres meses. Aunque no te conozco personalmente, te sigo y me pareces una persona directa. Definitivamente, no hay desperdicio."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="gdlr-core-pbf-wrapper overflow-hidden" style="padding: 40px 0px 0px 0px;" id="testimonial"> <div class="gdlr-core-pbf-background-wrap" style="background-color: #0c0c0c;"></div> <div class="gdlr-core-pbf-background-wrap" style="top: 70px;"> <div class="gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js" style="background-image: url(/testimonios.png); background-repeat: no-repeat; background-position: top center;" data-parallax-speed="0"></div> </div> <div class="gdlr-core-pbf-wrapper-content gdlr-core-js"> <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container"> <div class="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first" id="gdlr-core-column-83324" style="z-index: 9;"> <div class="gdlr-core-pbf-column-content-margin gdlr-core-js" style="margin: 0px 0px -50px 0px;"> <div class="gdlr-core-pbf-background-wrap"></div> <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js" data-gdlr-animation="fadeInLeft" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"> <div class="gdlr-core-pbf-element"> <div class="gdlr-core-divider-item gdlr-core-divider-item-normal gdlr-core-item-pdlr gdlr-core-left-align" style="margin-bottom: 25px; margin-left: 5px;"> <div class="gdlr-core-divider-container" style="max-width: 38px;"> <div class="gdlr-core-divider-line gdlr-core-skin-divider" style="
                      transform: skewX(150deg);
                      -webkit-transform: skewX(150deg);
                      border-color: #4c00ff;
                      border-width: 7px;
                      border-radius: 0px;
                      -moz-border-radius: 0px;
                      -webkit-border-radius: 0px;
                  "></div> </div> </div> </div> <div class="gdlr-core-pbf-element"> <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style="padding-bottom: 0px;"> <div class="gdlr-core-title-item-title-wrap"> <h3 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 88px; font-weight: 700; font-style: italic; letter-spacing: 0px; line-height: 1; color: #ffffff;">
¿Qué dicen<br>
mis clientes?<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span> </h3> </div> </div> </div> </div> </div> </div> <div class="gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first" id="gdlr-core-column-60080"> <div class="gdlr-core-pbf-column-content-margin gdlr-core-js"> <div class="gdlr-core-pbf-background-wrap"></div> <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js" data-gdlr-animation="fadeInUp" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"> <div class="gdlr-core-pbf-element"> <div class="gdlr-core-testimonial-item gdlr-core-item-pdb clearfix gdlr-core-testimonial-style-image-left gdlr-core-item-pdlr" style="padding-bottom: 0px;" id="gdlr-core-testimonial-98197"> <div class="gdlr-core-flexslider flexslider gdlr-core-js-2" data-type="carousel" data-column="1" data-move="1" data-nav="navigation-outer" data-nav-parent="self" data-vcenter-nav="1"> <div class="gdlr-core-flexslider-custom-nav gdlr-core-style-navigation-outer gdlr-core-center-align" style="margin-top: -55px;"> <i class="icon-arrow-left flex-prev" style="color: #555555; font-size: 43px; left: -95px;"></i> <i class="icon-arrow-right flex-next" style="color: #555555; font-size: 43px; right: -95px;"></i> </div> <ul class="slides"> ${testimonials.map((t) => renderTemplate`<li class="gdlr-core-item-mglr"> <div class="gdlr-core-testimonial clearfix"> <div class="gdlr-core-testimonial-content-wrap" style="padding-top: 150px;"> <div class="gdlr-core-testimonial-quote gdlr-core-quote-font gdlr-core-skin-icon" style="font-size: 278px; font-weight: 700; margin-top: 80px; color: #4c00ff;">
&#8220;
</div> <div class="gdlr-core-testimonial-content gdlr-core-info-font gdlr-core-skin-content" style="font-size: 19px; font-style: normal; font-weight: 400; letter-spacing: 0px; color: #ffffff;"> <p class="p1">${t.content}</p> </div> <div class="gdlr-core-testimonial-title gdlr-core-title-font gdlr-core-skin-title" style="color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: 0px; text-transform: uppercase;"> ${t.author} </div> </div> </div> </li>`)} </ul> </div> </div> </div> </div> </div> </div> <div class="gdlr-core-pbf-column gdlr-core-column-20 gdlr-core-column-first" id="gdlr-core-column-8321"> <div class="gdlr-core-pbf-column-content-margin gdlr-core-js"> <div class="gdlr-core-pbf-background-wrap"></div> <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js"></div> </div> </div> </div> </div> </div>`;
}, "/Users/carlosvq/Development/work/coachesproject/juniorvillegas.com/src/sections/index/testimonials.astro", void 0);

const $$Transformations = createComponent(($$result, $$props, $$slots) => {
  const transformations = [
    "/t/transformation_1.jpg",
    "/t/transformation_2.jpg",
    "/t/transformation_3.jpg",
    "/t/transformation_4.jpg",
    "/t/transformation_5.jpg",
    "/t/transformation_6.jpg"
  ];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(["bg-background", "px-8", "lg:py-8"]), "class")} id="gallery"> <div${addAttribute(cn(["gdlr-core-pbf-background-wrap"]), "class")} style="background-color: #0c0c0c;"> <div${addAttribute(cn(["gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js"]), "class")} style="background-size: cover; background-position: center;" data-parallax-speed="0"></div> </div> </div> <div${addAttribute(cn(["gdlr-core-pbf-wrapper-content gdlr-core-js bg-background"]), "class")}> <div${addAttribute(cn([
    "gdlr-core-pbf-wrapper-container clearfix gdlr-core-pbf-wrapper-full-no-space"
  ]), "class")}> <div${addAttribute(cn([
    "gdlr-core-pbf-column gdlr-core-column-60 gdlr-core-column-first"
  ]), "class")} id="gdlr-core-column-29724"> <div${addAttribute(cn(["gdlr-core-pbf-column-content-margin gdlr-core-js"]), "class")} style="padding: 0px 0px 0px 0px;"> <div${addAttribute(cn(["gdlr-core-pbf-background-wrap"]), "class")}></div> <div${addAttribute(cn(["gdlr-core-pbf-column-content clearfix gdlr-core-js"]), "class")}> <div${addAttribute(cn(["gdlr-core-pbf-element"]), "class")}> <div${addAttribute(cn([
    "gdlr-core-gallery-item clearfix gdlr-core-gallery-item-style-grid-no-space gdlr-core-item-pdlr"
  ]), "class")}> <div${addAttribute(cn([
    "gdlr-core-gallery-item-holder gdlr-core-js-2 clearfix"
  ]), "class")} data-layout="fitrows"> ${transformations.map((t, index) => renderTemplate`<div${addAttribute(cn([
    "gdlr-core-item-list gdlr-core-gallery-column gdlr-core-column-10",
    index === 0 ? "gdlr-core-column-first" : ""
  ]), "class")}> <div${addAttribute(cn([
    "gdlr-core-gallery-list gdlr-core-media-image"
  ]), "class")}> <a${addAttribute(cn(["gdlr-core-lightgallery gdlr-core-js"]), "class")}${addAttribute(t, "href")} data-lightbox-group="gdlr-core-img-group-1"> <img${addAttribute(cn(["scale-110"]), "class")}${addAttribute(t, "src")} alt="11" width="600" height="600"> </a> </div> </div>`)} </div> </div> </div> <div${addAttribute(cn(["gdlr-core-pbf-element bg-background-secondary"]), "class")}> <div${addAttribute(cn([
    "gdlr-core-button-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-center-align",
    "pb-0"
  ]), "class")}> <a${addAttribute(cn([
    "gdlr-core-button gdlr-core-button-transparent gdlr-core-center-align gdlr-core-button-no-border"
  ]), "class")} href="https://www.instagram.com/juniorvillegas__" target="_blank" id="gdlr-core-button-id-29355"> <span${addAttribute(cn(["gdlr-core-content"]), "class")}> <i${addAttribute(cn([
    "gdlr-core-pos-left fa fa-instagram text-xl leading-none"
  ]), "class")}></i>
Sigueme en @juniorvillegas__
</span> </a> </div> </div> </div> </div> </div> </div> </div>`;
}, "/Users/carlosvq/Development/work/coachesproject/juniorvillegas.com/src/sections/index/transformations.astro", void 0);

const $$WhyChooseMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(["gdlr-core-pbf-wrapper"]), "class")} id="coaching"> <div${addAttribute(cn(["gdlr-core-pbf-background-wrap bg-background"]), "class")}> <div${addAttribute(cn(["gdlr-core-pbf-background gdlr-core-parallax gdlr-core-js"]), "class")} style="background-size: cover; background-position: center;" data-parallax-speed="0"></div> </div> <div${addAttribute(cn(["gdlr-core-pbf-wrapper-content gdlr-core-js"]), "class")}> <div${addAttribute(cn([
    "gdlr-core-pbf-wrapper-container clearfix gdlr-core-container"
  ]), "class")}> <div${addAttribute(cn([
    "gdlr-core-pbf-column gdlr-core-column-30 gdlr-core-column-first"
  ]), "class")} id="gdlr-core-column-8278"> <div${addAttribute(cn(["gdlr-core-pbf-column-content-margin gdlr-core-js"]), "class")} style="margin: 0px 0px 0px 80px; padding: 80px 0px 0px 0px;"> <div${addAttribute(cn(["gdlr-core-pbf-background-wrap"]), "class")}></div> <div${addAttribute(cn(["gdlr-core-pbf-column-content clearfix gdlr-core-js"]), "class")} data-gdlr-animation="fadeInLeft" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"> <div${addAttribute(cn(["gdlr-core-pbf-element"]), "class")}> <div${addAttribute(cn([
    "gdlr-core-image-item gdlr-core-item-pdb gdlr-core-center-align gdlr-core-item-pdlr"
  ]), "class")} style="padding-bottom: 0px;"> <div${addAttribute(cn([
    "gdlr-core-image-item-wrap gdlr-core-media-image gdlr-core-image-item-style-rectangle"
  ]), "class")} style="border-width: 0px;"> <img src="/why-choose-me.png" alt="11" width="1026" height="1298" title="Left IMG"> </div> </div> </div> </div> </div> </div> <div${addAttribute(cn(["gdlr-core-pbf-column gdlr-core-column-30"]), "class")} id="gdlr-core-column-33076" style="z-index: 9;"> <div${addAttribute(cn(["gdlr-core-pbf-column-content-margin gdlr-core-js"]), "class")} style="margin-top: 0px; margin-right: 0px; margin-left: -100px; padding-right: 50px;"> <div${addAttribute(cn(["gdlr-core-pbf-background-wrap"]), "class")}></div> <div${addAttribute(cn(["gdlr-core-pbf-column-content clearfix gdlr-core-js"]), "class")}> <div${addAttribute(cn(["gdlr-core-pbf-element"]), "class")}> <div${addAttribute(cn([
    "gdlr-core-divider-item gdlr-core-divider-item-normal gdlr-core-item-pdlr gdlr-core-left-align"
  ]), "class")} style="margin-bottom: 25px; margin-left: 5px;"> <div${addAttribute(cn(["gdlr-core-divider-container"]), "class")} style="max-width: 38px;"> <div${addAttribute(cn([
    "gdlr-core-divider-line gdlr-core-skin-divider"
  ]), "class")} style="
                      transform: skewX(150deg);
                      -webkit-transform: skewX(150deg);
                      border-color: #4c00ff;
                      border-width: 7px;
                      border-radius: 0px;
                      -moz-border-radius: 0px;
                      -webkit-border-radius: 0px;
                    "></div> </div> </div> </div> <div${addAttribute(cn(["gdlr-core-pbf-element"]), "class")}> <div${addAttribute(cn([
    "gdlr-core-title-item gdlr-core-item-pdb clearfix gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr"
  ]), "class")}> <div${addAttribute(cn(["gdlr-core-title-item-title-wrap"]), "class")}> <h3${addAttribute(cn([
    "gdlr-core-title-item-title gdlr-core-skin-title"
  ]), "class")} style="font-size: 84px; font-weight: 700; font-style: italic; letter-spacing: 0px; line-height: 1; color: #ffffff;">
¡Puedo ayudarte!
</h3> </div> </div> </div> <div${addAttribute(cn(["gdlr-core-pbf-element"]), "class")}> <div${addAttribute(cn([
    "gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align"
  ]), "class")} style="padding-bottom: 40px;"> <div${addAttribute(cn([
    "gdlr-core-text-box-item-content text-white font-medium bg-background/75",
    "lg:p-8"
  ]), "class")} style="font-size: 18px; font-weight: 400; text-transform: none;"> <p>
Mi objetivo en la vida es recordarle al mundo que todos
                    tenemos una sola vida para vivir, y juntos debemos vivirla
                    al máximo. Creo que lo que más nos une es el poder del
                    sudor, y el trabajar físicamente juntos como equipo.
</p> </div> </div> </div> <div${addAttribute(cn(["gdlr-core-pbf-element"]), "class")}> <div${addAttribute(cn([
    "gdlr-core-skill-bar-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-size-small gdlr-core-type-rectangle"
  ]), "class")} style="padding-bottom: 75px;"> <div${addAttribute(cn(["gdlr-core-skill-bar"]), "class")}> <div${addAttribute(cn([
    "gdlr-core-skill-bar-head gdlr-core-title-font"
  ]), "class")} style="font-size: 18px; font-style: normal; font-weight: 700; text-transform: none;"> <span${addAttribute(cn(["gdlr-core-skill-bar-title"]), "class")} style="color: #ffffff;">Nutrición</span> <span${addAttribute(cn(["gdlr-core-skill-bar-right"]), "class")} style="font-style: normal; text-transform: none; color: #ffffff;">100%</span> </div> <div${addAttribute(cn(["gdlr-core-skill-bar-progress"]), "class")} style="background-color: #2d1662;"> <div${addAttribute(cn(["gdlr-core-skill-bar-filled gdlr-core-js"]), "class")} data-width="100" style="background-color: #4c00ff;"></div> </div> </div> <div${addAttribute(cn(["gdlr-core-skill-bar"]), "class")} style="margin-top: 40px;"> <div${addAttribute(cn([
    "gdlr-core-skill-bar-head gdlr-core-title-font"
  ]), "class")} style="font-size: 18px; font-style: normal; font-weight: 700; text-transform: none;"> <span${addAttribute(cn(["gdlr-core-skill-bar-title"]), "class")} style="color: #ffffff;">Desarrollo muscular</span> <span${addAttribute(cn(["gdlr-core-skill-bar-right"]), "class")} style="font-style: normal; text-transform: none; color: #ffffff;">100%</span> </div> <div${addAttribute(cn(["gdlr-core-skill-bar-progress"]), "class")} style="background-color: #2d1662;"> <div${addAttribute(cn(["gdlr-core-skill-bar-filled gdlr-core-js"]), "class")} data-width="100" style="background-color: #4c00ff;"></div> </div> </div> <div${addAttribute(cn(["gdlr-core-skill-bar"]), "class")} style="margin-top: 40px;"> <div${addAttribute(cn([
    "gdlr-core-skill-bar-head gdlr-core-title-font"
  ]), "class")} style="font-size: 18px; font-style: normal; font-weight: 700; text-transform: none;"> <span${addAttribute(cn(["gdlr-core-skill-bar-title"]), "class")} style="color: #ffffff;">Mentalidad de campeón</span> <span${addAttribute(cn(["gdlr-core-skill-bar-right"]), "class")} style="font-style: normal; text-transform: none; color: #ffffff;">100%</span> </div> <div${addAttribute(cn(["gdlr-core-skill-bar-progress"]), "class")} style="background-color: #2d1662;"> <div${addAttribute(cn(["gdlr-core-skill-bar-filled gdlr-core-js"]), "class")} data-width="100" style="background-color: #4c00ff;"></div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div>`;
}, "/Users/carlosvq/Development/work/coachesproject/juniorvillegas.com/src/sections/index/why-choose-me.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Junior Villegas" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "WhyChooseMe", $$WhyChooseMe, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Transformations", $$Transformations, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "/Users/carlosvq/Development/work/coachesproject/juniorvillegas.com/src/pages/index.astro", void 0);

const $$file = "/Users/carlosvq/Development/work/coachesproject/juniorvillegas.com/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

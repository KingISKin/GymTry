/*!
 * Generated using the Bootstrap Customizer (<none>)
 * Config saved to config.json and <none>
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +function (t) { "use strict"; var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(jQuery), +function (t) { "use strict"; function e(e) { var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""); return t(i) } function n(e) { return this.each(function () { var n = t(this), s = n.data("bs.collapse"), a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e); !s && a.toggle && /show|hide/.test(e) && (a.toggle = !1), s || n.data("bs.collapse", s = new i(this, a)), "string" == typeof e && s[e]() }) } var i = function (e, n) { this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() }; i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = { toggle: !0 }, i.prototype.dimension = function () { var t = this.$element.hasClass("width"); return t ? "width" : "height" }, i.prototype.show = function () { if (!this.transitioning && !this.$element.hasClass("in")) { var e, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if (!(s && s.length && (e = s.data("bs.collapse"), e && e.transitioning))) { var a = t.Event("show.bs.collapse"); if (this.$element.trigger(a), !a.isDefaultPrevented()) { s && s.length && (n.call(s, "hide"), e || s.data("bs.collapse", null)); var r = this.dimension(); this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var o = function () { this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!t.support.transition) return o.call(this); var l = t.camelCase(["scroll", r].join("-")); this.$element.one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l]) } } } }, i.prototype.hide = function () { if (!this.transitioning && this.$element.hasClass("in")) { var e = t.Event("hide.bs.collapse"); if (this.$element.trigger(e), !e.isDefaultPrevented()) { var n = this.dimension(); this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var s = function () { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : s.call(this) } } }, i.prototype.toggle = function () { this[this.$element.hasClass("in") ? "hide" : "show"]() }, i.prototype.getParent = function () { return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) { var s = t(i); this.addAriaAndCollapsedClass(e(s), s) }, this)).end() }, i.prototype.addAriaAndCollapsedClass = function (t, e) { var n = t.hasClass("in"); t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n) }; var s = t.fn.collapse; t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () { return t.fn.collapse = s, this }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) { var s = t(this); s.attr("data-target") || i.preventDefault(); var a = e(s), r = a.data("bs.collapse"), o = r ? "toggle" : s.data(); n.call(a, o) }) }(jQuery), +function (t) { "use strict"; function e() { var t = document.createElement("bootstrap"), e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var n in e) if (void 0 !== t.style[n]) return { end: e[n] }; return !1 } t.fn.emulateTransitionEnd = function (e) { var n = !1, i = this; t(this).one("bsTransitionEnd", function () { n = !0 }); var s = function () { n || t(i).trigger(t.support.transition.end) }; return setTimeout(s, e), this }, t(function () { t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = { bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function (e) { return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0 } }) }) }(jQuery);

(function ($) {

  "use strict";

  // ------------------------------------------------------------------------------ //
  // get path relative to javascript
  // ------------------------------------------------------------------------------ //
  var getContextPath = function () {
    var ctx = window.location.pathname,
      path = '/' !== ctx ? ctx.substring(0, ctx.indexOf('/', 1) + 1) : ctx;
    return path + (/\/$/.test(path) ? '' : '/');
  }

  var $html = $("html"),
    windowWidth = $(window).width(),
    windowHeight = $(window).height();


  $(document).ready(function () {

    $('.slider').slick({
      autoplay: false,
      autoplaySpeed: 2000,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
    });


    $('.testimonial-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      dots: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '20px',
            autoplay: false,
          }
        }
      ]
    });

    $('.post-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      dots: false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '20px',
            autoplay: false,
          }
        }
      ]
    });

    /* accordion using bootstap collapse */
    /* used in displaying itinerary, faqs and additional info */
    $('.collapse').collapse();

    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('.panel-group')
      .on('show.bs.collapse', function (a) {
        //console.log($(a.target).prev('.panel-heading'));
        $(a.target).prev('.panel-heading').addClass('active');
      })
      .on('hide.bs.collapse', function (a) {
        $(a.target).prev('.panel-heading').removeClass('active');
      });

    // .widget_nav_menu
    var StickyHeader = new hcSticky('#header.fixed', {
      stickTo: '#body-wrapper',
      top: 0,
      bottomEnd: 42,
      responsive: {
        980: {
          disable: true
        },
        375: {
          disable: false
        }
      }
    });

    $('.navbar').on('click', '.search-toggle', function (e) {
      var selector = $(this).data('selector');

      $(selector).toggleClass('show').find('.search-input').focus();
      // $(selector).find('.autocomplete').focus();
      $(this).toggleClass('active');

      e.preventDefault();
    });

    // close when click off of container
    $(document).on('click touchstart', function (e) {
      if (!$(e.target).is('.search-toggle, .search-toggle *, .navbar, .navbar *')) {
        $('.search-toggle').removeClass('active');
        $('.navbar').removeClass('show');
      }
    });

  });

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-item");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const navItem = document.querySelector(`.nav-item a[href*="#${id}"]`)?.parentElement;

        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove("active"));
          navItem?.classList.add("active");
        }
      });
    },
    {
      threshold: 0.6 // Altera o ponto de visibilidade (60% visível)
    }
  );

  sections.forEach(section => observer.observe(section));
});


document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;
  const hash = window.location.hash;

  const isHomePage = path.endsWith("index.html") || path === "/" || path === "" || path.endsWith("/") || hash === "" || hash === "#home";

  if (isHomePage) {
    const homeLink = document.querySelector('#home-link');
    if (homeLink) {
      homeLink.classList.add("active");
    }
  }
});



const genderSelect = document.querySelector('select[name="gender"]');
const heightInput = document.querySelector('input[name="height"]');
const weightInput = document.querySelector('input[name="weight"]');
const resultInput = document.querySelector('input[name="result"]');

const calculateBtn = document.getElementById('btn-calculate');
const clearBtn = document.getElementById('btn-clear');

// Função para formatar número com duas casas decimais
function formatNumber(num) {
  return parseFloat(num).toFixed(2);
}

// Função para formatar e corrigir altura
function formatHeight(value) {
  value = value.replace(',', '.');
  let heightNum = parseFloat(value);

  if (isNaN(heightNum) || heightNum <= 0) {
    return null;
  }

  if (heightNum > 3) {
    heightNum = heightNum / 100;  // Converte cm para metros
  }

  return formatNumber(heightNum);
}

// Função para calcular IMC com base no gênero
function calculateBMI() {
  const heightFormatted = formatHeight(heightInput.value);
  const weight = parseFloat(weightInput.value.replace(',', '.'));

  if (!heightFormatted || !weight || weight <= 0) {
    alert('Por favor, insira valores válidos de altura e peso.');
    return;
  }

  const height = parseFloat(heightFormatted); // número com 2 casas decimais
  const bmi = weight / (height * height);
  const bmiRounded = formatNumber(bmi);

  const gender = genderSelect.value;
  let classification = '';

  if (gender === 'male') {
    if (bmi < 20.7) classification = 'Abaixo do peso';
    else if (bmi <= 26.4) classification = 'Peso normal';
    else if (bmi <= 27.8) classification = 'Sobrepeso';
    else if (bmi <= 31.1) classification = 'Obeso';
    else if (bmi <= 45.4) classification = 'Obesidade M.';
    else classification = 'Obesidade Mórbida';
  } else if (gender === 'female') {
    if (bmi < 19.1) classification = 'Abaixo do peso';
    else if (bmi <= 25.8) classification = 'Peso normal';
    else if (bmi <= 27.3) classification = 'Sobrepeso';
    else if (bmi <= 32.3) classification = 'Obesa';
    else if (bmi <= 44.8) classification = 'Obesidade M.';
    else classification = 'Obesidade Mórbida';
  } else {
    classification = 'Gênero não selecionado';
  }

  // Atualiza os inputs com valores formatados
  heightInput.value = heightFormatted;
  weightInput.value = formatNumber(weight);

  // Exibe resultado formatado
  resultInput.value = `${bmiRounded} - ${classification}`;
}

// Função para limpar os campos
function clearFields() {
  heightInput.value = '';
  weightInput.value = '';
  resultInput.value = '';
}

// Eventos dos botões
calculateBtn.addEventListener('click', function (e) {
  e.preventDefault();
  calculateBMI();
});

clearBtn.addEventListener('click', function (e) {
  e.preventDefault();
  clearFields();
});




const toggleBtn = document.getElementById('whatsapp-toggle');
const popup = document.getElementById('whatsapp-popup');
const closeBtn = document.getElementById('whatsapp-close');

if (toggleBtn && popup && closeBtn) {
  toggleBtn.addEventListener('click', function (e) {
    e.preventDefault();
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
  });

  closeBtn.addEventListener('click', function () {
    popup.style.display = 'none';
  });

  document.addEventListener('click', function (e) {
    if (!popup.contains(e.target) && !toggleBtn.contains(e.target)) {
      popup.style.display = 'none';
    }
  });
}




document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById('partners-carousel');
  if (!carousel) return;

  // Só ativa se for mobile
  const isMobile = window.innerWidth <= 768;
  if (!isMobile) return;

  // Evita duplicar mais de uma vez
  if (carousel.dataset.duplicated === "true") return;
  carousel.dataset.duplicated = "true";

  // Duplica os itens para scroll infinito
  const items = Array.from(carousel.children);
  items.forEach(item => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
  });

  let scrollSpeed = 0.3; // pixels por frame
  let currentScroll = 0;

  function continuousScroll() {
    currentScroll += scrollSpeed;
    if (currentScroll >= carousel.scrollWidth / 2) {
      currentScroll = 0;
    }
    carousel.scrollLeft = currentScroll;
    requestAnimationFrame(continuousScroll);
  }

  requestAnimationFrame(continuousScroll);
});

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 800);
});


function animateCounters() {
    const counters = document.querySelectorAll('.number');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000;
      let start = 0;
      const step = () => {
        const increment = target / (duration / 16);
        start += increment;
        if (start < target) {
          counter.innerText = Math.ceil(start);
          requestAnimationFrame(step);
        } else {
          counter.innerText = target >= 100 ? `${target}` : `${target}`;
        }
      };
      step();
    });
  }

  const achievementsSection = document.querySelector('.our-achievements');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animateCounters();
        animated = true;
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(achievementsSection);


  const modalGallery = document.getElementById('modalGallery');
const modalImage = document.getElementById('modalImage');
const modalCloseBtn = document.getElementById('modalCloseBtn');

document.querySelectorAll('.sgalleryImg').forEach(img => {
  img.addEventListener('click', e => {
    e.preventDefault();
    modalImage.src = img.src;
    modalGallery.classList.add('active');
  });
});

modalCloseBtn.addEventListener('click', () => {
  modalGallery.classList.remove('active');
});

// Fechar modal ao clicar fora da imagem
modalGallery.addEventListener('click', e => {
  if (e.target === modalGallery) {
    modalGallery.classList.remove('active');
  }
});

// Opcional: fechar modal com ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalGallery.classList.contains('active')) {
    modalGallery.classList.remove('active');
  }
});

$(document).ready(function() {
  $('.navbar-toggler').on('click', function() {
    $(this).toggleClass('active');
  });
});


(() => {
  const toggleBtn = document.getElementById('whatsapp-toggle');
  const popup = document.getElementById('whatsapp-popup');
  const closeBtn = document.getElementById('whatsapp-close');

  if (!toggleBtn || !popup || !closeBtn) {
    console.warn('Elementos do WhatsApp não encontrados');
    return;
  }

  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.toggle('open');
  });

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.remove('open');
  });
})();







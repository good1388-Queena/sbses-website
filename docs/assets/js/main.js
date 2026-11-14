/*
 * SBSES — renders copy into the static layout in index.html.
 * English copy: site-content.js. Chinese copy: site-content.zh.js (translations only,
 * merged over the English file so shared settings are written once).
 */
(function () {
  "use strict";

  var base = window.SITE_CONTENT;
  if (!base) return;

  var TODO = "TODO_OWNER";

  /* ---------- language ---------- */

  var LANGS = [
    { code: "en", label: "EN", htmlLang: "en" },
    { code: "zh", label: "中文", htmlLang: "zh-Hans" }
  ];
  var LANG_KEY = "sbses-lang";
  var ZH_FONT = "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500;600&display=swap";

  // Order: ?lang= in the address, then the visitor's last choice, then English.
  function pickLang() {
    var match = /[?&]lang=(en|zh)\b/.exec(window.location.search);
    var chosen = match ? match[1] : null;
    try {
      if (chosen) window.localStorage.setItem(LANG_KEY, chosen);
      else chosen = window.localStorage.getItem(LANG_KEY);
    } catch (error) { /* storage unavailable: fall through to the default */ }
    return chosen === "zh" && window.SITE_CONTENT_ZH ? "zh" : "en";
  }

  // Deep-merges a translation over the English content. Lists of entries (services, steps,
  // nav items) are matched by position; plain text lists (headline lines, categories)
  // are replaced whole, so a translation may use a different number of lines.
  function merge(source, override) {
    if (Array.isArray(source)) {
      if (!Array.isArray(override)) return source;
      if (override.every(function (item) { return typeof item === "string"; })) return override;
      return source.map(function (item, index) {
        return index < override.length ? merge(item, override[index]) : item;
      });
    }
    if (source && typeof source === "object") {
      if (!override || typeof override !== "object") return source;
      var out = {};
      Object.keys(source).forEach(function (key) {
        out[key] = key in override ? merge(source[key], override[key]) : source[key];
      });
      Object.keys(override).forEach(function (key) {
        if (!(key in out)) out[key] = override[key];
      });
      return out;
    }
    return override == null ? source : override;
  }

  var lang = pickLang();
  var content = lang === "zh" ? merge(base, window.SITE_CONTENT_ZH) : base;

  var ICONS = {
    calculator: '<rect x="5" y="3" width="14" height="18" rx="2"></rect><path d="M8.5 7.5h7M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01"></path>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"></path><path d="M3 12.5l9 5 9-5M3 17l9 5 9-5"></path>',
    people: '<circle cx="9" cy="8" r="3.2"></circle><path d="M3 20c.5-3.2 2.900-5.2 6-5.2s5.5 2 6 5.2"></path><path d="M16 5a3.2 3.2 0 0 1 0 6.4M17.5 14.8c1.9.7 3 2.5 3.5 5.2"></path>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.800-1-8-4.5-8-9V6z"></path><path d="M8.5 12l2.5 2.5 4.5-5"></path>'
  };

  /* ---------- helpers ---------- */

  // Which page this is (set on <body data-page>); the home page has in-page anchors.
  var page = document.body.getAttribute("data-page") || "home";
  var onHome = page === "home";

  // In-page anchors such as "#contact" only exist on the home page.
  function pageHref(href) {
    return !onHome && typeof href === "string" && href.charAt(0) === "#" ? "index.html" + href : href;
  }

  // True only for a real, Owner-supplied value (never for TODO_OWNER placeholders).
  function isSet(value) {
    return typeof value === "string" && value.trim() !== "" && value.indexOf(TODO) === -1;
  }

  function lookup(path) {
    return path.split(".").reduce(function (node, key) {
      return node == null ? node : node[key];
    }, content);
  }

  function el(tag, attrs, text) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (name) {
      node.setAttribute(name, attrs[name]);
    });
    if (text != null) node.textContent = text;
    return node;
  }

  // The one official WhatsApp number (site-content.js → contact.whatsapp.number), digits only.
  function whatsappNumber() {
    var raw = content.contact.whatsapp.number;
    return isSet(raw) ? raw.replace(/\D/g, "") : "";
  }

  // A wa.me link with the message pre-filled; "" while no number has been supplied.
  function whatsappUrl(message) {
    var number = whatsappNumber();
    return number ? "https://wa.me/" + number + "?text=" + encodeURIComponent(message) : "";
  }

  function icon(name) {
    var holder = document.createElement("span");
    holder.innerHTML = '<svg class="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || "") + "</svg>";
    return holder.firstChild;
  }

  function each(selector, fn) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), fn);
  }

  function fill(selector, items, build) {
    var host = document.querySelector(selector);
    if (!host) return;
    items.forEach(function (item, index) {
      host.appendChild(build(item, index));
    });
  }

  /* ---------- apply the language to the document ---------- */

  LANGS.forEach(function (option) {
    if (option.code === lang) document.documentElement.setAttribute("lang", option.htmlLang);
  });

  if (lang !== "en") {
    // Chinese headings need a serif with Chinese glyphs; loaded only for Chinese visitors.
    document.head.appendChild(el("link", { rel: "stylesheet", href: ZH_FONT }));
    if (content.meta && onHome) {
      var description = document.querySelector('meta[name="description"]');
      if (description && content.meta.description) description.setAttribute("content", content.meta.description);
      // The 404 page keeps its own title.
      if (content.meta.title && !document.querySelector(".notfound")) document.title = content.meta.title;
    }
  }

  function langUrl(code) {
    var query = window.location.search.replace(/^\?/, "").split("&").filter(function (part) {
      return part && part.indexOf("lang=") !== 0;
    });
    query.unshift("lang=" + code);
    return "?" + query.join("&") + window.location.hash;
  }

  var switcher = document.querySelector("[data-lang-switch]");
  if (switcher) {
    switcher.setAttribute("aria-label", content.nav.languageLabel);
    LANGS.forEach(function (option) {
      var link = el("a", {
        href: langUrl(option.code),
        lang: option.htmlLang,
        "class": "lang-switch__link"
      }, option.label);
      if (option.code === lang) link.setAttribute("aria-current", "true");
      link.setAttribute("data-lang", option.code);
      switcher.appendChild(link);
    });
    // Keep the visitor on the same service block when they switch language after a jump.
    window.addEventListener("hashchange", function () {
      each(".lang-switch__link", function (link) {
        link.setAttribute("href", langUrl(link.getAttribute("data-lang")));
      });
    });
  }

  /* ---------- simple bindings ---------- */

  each("[data-text]", function (node) {
    var value = lookup(node.getAttribute("data-text"));
    if (value != null) node.textContent = value;
  });
  each("[data-href]", function (node) {
    var value = lookup(node.getAttribute("data-href"));
    if (value != null) node.setAttribute("href", pageHref(value));
  });
  each("[data-alt]", function (node) {
    var value = lookup(node.getAttribute("data-alt"));
    if (value != null) node.setAttribute("alt", value);
  });
  each("[data-aria-label]", function (node) {
    var value = lookup(node.getAttribute("data-aria-label"));
    if (value != null) node.setAttribute("aria-label", value);
  });

  /* ---------- header ---------- */

  fill("[data-nav]", content.nav.items, function (item) {
    var li = el("li");
    var link = el("a", { href: pageHref(item.href), "class": "nav__link" }, item.label);
    if (!onHome && item.href.indexOf(page + ".html") === 0) link.setAttribute("aria-current", "page");
    li.appendChild(link);
    return li;
  });

  // Client Login stays disabled until the Client Portal exists.
  var login = document.querySelector("[data-client-login]");
  if (login) {
    var loginCfg = content.nav.clientLogin;
    login.querySelector("[data-client-login-label]").textContent = loginCfg.label;
    if (loginCfg.enabled && isSet(loginCfg.href)) {
      login.addEventListener("click", function () { window.location.href = loginCfg.href; });
    } else {
      login.setAttribute("aria-disabled", "true");
      login.setAttribute("data-hint", loginCfg.hint);
      login.setAttribute("aria-label", loginCfg.label + " (" + loginCfg.hint + ")");
      // Touch devices have no hover: show the hint briefly on tap.
      var hintTimer;
      login.addEventListener("click", function () {
        login.classList.add("is-hinting");
        clearTimeout(hintTimer);
        hintTimer = setTimeout(function () { login.classList.remove("is-hinting"); }, 2600);
      });
    }
  }

  // Small-screen menu.
  var toggle = document.querySelector("[data-nav-toggle]");
  var menu = document.getElementById("site-menu");
  if (toggle && menu) {
    var setOpen = function (open) {
      menu.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ---------- hero ---------- */

  var title = document.querySelector("[data-hero-title]");
  if (title) {
    content.hero.titleLines.forEach(function (line, index) {
      if (index) title.appendChild(document.createTextNode(" "));
      title.appendChild(el("span", { "class": "hero__title-line" }, line));
    });
  }

  // Service tags beside the 3D ledger: real links to the matching service block.
  fill("[data-hero-tags]", content.hero.tags, function (tag) {
    var li = el("li", { "class": "hero__tag-item" });
    var link = el("a", { "class": "tag", href: "#" + tag.target });
    link.appendChild(icon(tag.icon));
    link.appendChild(el("span", null, tag.label));
    li.appendChild(link);
    return li;
  });

  /* ---------- sections ---------- */

  fill("[data-services]", content.services.items, function (item) {
    var li = el("li", { "class": "service", id: item.id });
    li.appendChild(el("span", { "class": "service__number", "aria-hidden": "true" }, item.number));
    var body = el("div", { "class": "service__body" });
    body.appendChild(el("h3", { "class": "service__title" }, item.title));
    body.appendChild(el("p", { "class": "service__text" }, item.text));

    // WhatsApp enquiry for this service, pre-filled with its name (only once a number is set).
    var askUrl = whatsappUrl(content.services.enquiryTemplate.replace("{service}", item.title));
    if (askUrl) {
      var ask = el("a", {
        "class": "service__ask", href: askUrl, target: "_blank", rel: "noopener",
        "aria-label": content.services.enquiryLabel + ": " + item.title
      });
      ask.innerHTML = '<svg class="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-7l-5 4v-4H6a2 2 0 0 1-2-2z"></path><path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01"></path></svg>';
      ask.appendChild(el("span", null, content.services.enquiryLabel));
      body.appendChild(ask);
    }

    li.appendChild(body);
    return li;
  });

  // The sections above are drawn by script, so a link that arrives with #service-… (a shared
  // link, a reload, a language switch) has to be scrolled to once they exist.
  if (onHome && window.location.hash.length > 1) {
    var arrival = document.getElementById(window.location.hash.slice(1));
    if (arrival) {
      // Fonts and images that finish loading later move the page, so line up again when
      // they are in — unless the visitor has already started scrolling on their own.
      var untouched = true;
      var realign = function () {
        // "instant": arriving from a link should not animate (and must not be left half-way).
        if (untouched) arrival.scrollIntoView({ behavior: "instant", block: "start" });
      };
      ["wheel", "touchstart", "keydown", "mousedown"].forEach(function (type) {
        window.addEventListener(type, function () { untouched = false; }, { once: true, passive: true });
      });
      realign();
      window.addEventListener("load", realign);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(realign);
    }
  }

  fill("[data-why]", content.why.items, function (item) {
    var li = el("li", { "class": "why__item" });
    li.appendChild(el("h3", { "class": "why__item-title" }, item.title));
    li.appendChild(el("p", { "class": "why__item-text" }, item.text));
    return li;
  });

  fill("[data-steps]", content.process.steps, function (step) {
    var li = el("li", { "class": "step" });
    li.appendChild(el("span", { "class": "step__number", "aria-hidden": "true" }, step.number));
    li.appendChild(el("h3", { "class": "step__title" }, step.title));
    li.appendChild(el("p", { "class": "step__text" }, step.text));
    return li;
  });

  fill("[data-about-paragraphs]", content.about.paragraphs, function (text) {
    return el("p", null, text);
  });

  var aboutMedia = document.querySelector("[data-about-image]");
  if (aboutMedia) {
    var image = content.about.image;
    if (isSet(image.src)) {
      aboutMedia.appendChild(el("img", { src: image.src, alt: isSet(image.alt) ? image.alt : "", loading: "lazy" }));
    } else {
      // No photo supplied: the arch carries the brand mark instead of a placeholder note.
      aboutMedia.className += " about__media--mark";
      aboutMedia.innerHTML = '<svg aria-hidden="true" viewBox="0 0 52 52" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M6 46 C 14 26, 26 12, 46 6 C 42 22, 32 34, 14 38"></path><path d="M6 46 C 16 34, 26 24, 38 14"></path><path d="M20 30 C 26 30, 32 28, 36 24"></path></svg>';
      aboutMedia.appendChild(el("p", { "class": "about__mark-name" }, content.brand.short));
    }
  }

  /* ---------- contact (disabled until the Owner supplies real details) ---------- */

  var actions = document.querySelector("[data-contact-actions]");
  var contactNote = document.querySelector("[data-contact-note]");
  if (actions && contactNote) {
    var contact = content.contact;
    var known = [];
    var missing = [];

    var action = function (label, href, variant, external) {
      var node;
      if (href) {
        node = el("a", { href: href, "class": "btn btn--lg " + variant }, label);
        if (external) { node.setAttribute("target", "_blank"); node.setAttribute("rel", "noopener"); }
      } else {
        node = el("button", { type: "button", disabled: "", "class": "btn btn--lg " + variant }, label);
      }
      actions.appendChild(node);
    };

    var number = whatsappNumber();
    if (number) {
      action(contact.whatsapp.label, whatsappUrl(contact.whatsapp.prefill), "btn--rose", true);
      known.push("+" + number);
    } else {
      action(contact.whatsapp.label, null, "btn--rose");
      missing.push(contact.pendingLabels.whatsapp);
    }

    if (isSet(contact.email.address)) {
      action(contact.email.label, "mailto:" + contact.email.address, "btn--outline");
      known.push(contact.email.address);
    } else {
      action(contact.email.label, null, "btn--outline");
      missing.push(contact.pendingLabels.email);
    }

    // No extra space after a full-width colon (Chinese prefix).
    if (isSet(contact.serviceArea)) known.push(contact.serviceAreaPrefix + (/[：:]$/.test(contact.serviceAreaPrefix) ? "" : " ") + contact.serviceArea);
    else missing.push(contact.pendingLabels.serviceArea);

    if (known.length) contactNote.appendChild(el("span", null, known.join(" · ")));
    if (missing.length) contactNote.appendChild(el("span", null, contact.pendingPrefix + " " + missing.join(" · ")));
  }

  /* ---------- footer ---------- */

  var legal = document.querySelector("[data-footer-legal]");
  if (legal) {
    var footer = content.footer;
    // Copyright line always; privacy link and registration details only once supplied.
    legal.appendChild(el("span", null, "© " + new Date().getFullYear() + " " + content.brand.short));
    if (isSet(footer.registration)) {
      legal.appendChild(document.createTextNode(" · "));
      legal.appendChild(el("span", null, footer.registration));
    }
    if (isSet(footer.privacy.href)) {
      legal.appendChild(document.createTextNode(" · "));
      legal.appendChild(el("a", { href: footer.privacy.href }, footer.privacy.label));
    }
  }

  /* ---------- nav: mark the section in view ---------- */

  var links = document.querySelectorAll(".nav__link");
  var setCurrent = function (href) {
    Array.prototype.forEach.call(links, function (link) {
      if (link.getAttribute("href") === href) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };
  if (onHome) setCurrent(content.nav.items[0].href);

  if (onHome && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      // At the very top of the page the first item (Home) is always the current one.
      if (window.scrollY < 4) { setCurrent(content.nav.items[0].href); return; }
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setCurrent("#" + entry.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    content.nav.items.forEach(function (item) {
      var target = item.href.charAt(0) === "#" ? document.getElementById(item.href.slice(1)) : null;
      if (target) spy.observe(target);
    });
  }

  // Shared with knowledge.js.
  window.SBSES = { content: content, lang: lang, el: el, isSet: isSet, page: page };
})();

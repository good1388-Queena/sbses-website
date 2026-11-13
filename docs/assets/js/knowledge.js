/*
 * SBSES — Knowledge Centre. Draws the topic list on the home page and, on knowledge.html,
 * the article list, the official-source directory and single articles (?a=<slug>).
 * Wording comes from site-content(.zh).js, articles from knowledge-content.js.
 */
(function () {
  "use strict";

  var site = window.SBSES;
  var data = window.SBSES_KNOWLEDGE;
  if (!site || !data) return;

  var el = site.el;
  var lang = site.lang;
  var words = site.content.knowledge;
  var PAGE = "knowledge.html";

  function pick(value) {
    if (value == null || typeof value === "string") return value;
    return value[lang] != null ? value[lang] : value.en;
  }

  function param(name) {
    var match = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.search);
    return match ? decodeURIComponent(match[1]) : "";
  }

  function topicById(id) {
    return data.topics.filter(function (topic) { return topic.id === id; })[0];
  }

  function formatDate(iso) {
    var parts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || "");
    if (!parts) return iso || "";
    var date = new Date(Date.UTC(+parts[1], +parts[2] - 1, +parts[3]));
    try {
      return date.toLocaleDateString(lang === "zh" ? "zh-CN" : "en-GB",
        { day: "numeric", month: lang === "zh" ? "long" : "short", year: "numeric", timeZone: "UTC" });
    } catch (error) { return iso; }
  }

  var preview = param("preview") === "1";
  var visible = data.articles.filter(function (article) {
    return article.status === "published" || (preview && article.status === "draft");
  }).sort(function (a, b) {
    // newest first; articles of the same date keep the order they are written in
    return a.published === b.published ? 0 : (a.published < b.published ? 1 : -1);
  });

  /* ---------- home page: topic list ---------- */

  var teaser = document.querySelector("[data-knowledge-topics]");
  if (teaser) {
    data.topics.forEach(function (topic) {
      var li = el("li", { "class": "knowledge__item" });
      li.appendChild(el("a", { href: PAGE + "?c=" + topic.id }, pick(topic.label)));
      teaser.appendChild(li);
    });
  }

  /* ---------- knowledge.html ---------- */

  var root = document.querySelector("[data-knowledge-page]");
  if (!root) return;

  // Page title and description in the visitor's language (articles override the title below).
  document.title = words.title + " · SBSES";
  var description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", words.teaser);

  var heading = document.querySelector("[data-kc-title]");
  var intro = document.querySelector("[data-kc-intro]");
  var eyebrow = document.querySelector("[data-kc-eyebrow]");

  function sourceList(sources) {
    var list = el("ul", { "class": "kc-sources__links" });
    sources.forEach(function (source) {
      var li = el("li");
      li.appendChild(el("a", { href: source.url, target: "_blank", rel: "noopener" }, pick(source.label)));
      list.appendChild(li);
    });
    return list;
  }

  function disclaimer() {
    return el("p", { "class": "notice kc-disclaimer" }, words.disclaimer);
  }

  function directory(onlyTopic) {
    var section = el("section", { "class": "kc-sources", "aria-labelledby": "kc-sources-title" });
    section.appendChild(el("h2", { "class": "kc-sources__title", id: "kc-sources-title" }, words.sourcesTitle));
    section.appendChild(el("p", { "class": "kc-sources__intro" }, words.sourcesIntro));
    var grid = el("div", { "class": "kc-sources__grid" });
    data.topics.forEach(function (topic) {
      if (onlyTopic && topic.id !== onlyTopic) return;
      var card = el("div", { "class": "kc-sources__group" });
      card.appendChild(el("h3", { "class": "kc-sources__group-title" }, pick(topic.label)));
      card.appendChild(sourceList(topic.sources));
      grid.appendChild(card);
    });
    section.appendChild(grid);
    return section;
  }

  function meta(article) {
    var topic = topicById(article.topic);
    var line = el("p", { "class": "kc-meta" });
    if (topic) line.appendChild(el("span", { "class": "kc-meta__topic" }, pick(topic.label)));
    line.appendChild(el("span", null, words.publishedLabel + " " + formatDate(article.published)));
    if (article.reviewed) line.appendChild(el("span", null, words.reviewedLabel + " " + formatDate(article.reviewed)));
    return line;
  }

  function articleUrl(article) {
    return PAGE + "?a=" + article.slug + (preview ? "&preview=1" : "");
  }

  /* ----- single article ----- */

  var slug = param("a");
  if (slug) {
    var article = visible.filter(function (item) { return item.slug === slug; })[0];
    var back = el("a", { "class": "kc-back", href: PAGE }, "← " + words.backLabel);

    if (!article) {
      if (intro) intro.textContent = words.missing;
      root.appendChild(back);
      return;
    }

    var topic = topicById(article.topic);
    if (eyebrow && topic) eyebrow.textContent = pick(topic.label);
    if (heading) heading.textContent = pick(article.title);
    if (intro) intro.textContent = pick(article.summary);
    document.title = pick(article.title) + " · SBSES";
    if (description) description.setAttribute("content", pick(article.summary));

    var wrap = el("article", { "class": "kc-article" });
    wrap.appendChild(back);
    if (article.status === "draft") wrap.appendChild(el("p", { "class": "kc-draft" }, words.draftLabel));
    wrap.appendChild(meta(article));

    // Optional infographic: shown in full, linked to the original file for zooming.
    if (article.image) {
      var figure = el("a", { "class": "kc-figure", href: article.image.src, target: "_blank", rel: "noopener" });
      figure.appendChild(el("img", {
        src: article.image.src, alt: pick(article.image.alt) || "",
        width: article.image.width, height: article.image.height, loading: "lazy"
      }));
      wrap.appendChild(figure);
    }

    var body = el("div", { "class": "kc-article__body" });
    (pick(article.body) || []).forEach(function (block) {
      if (typeof block === "string") body.appendChild(el("p", null, block));
      else if (block.h) body.appendChild(el("h2", null, block.h));
      else if (block.list) {
        var list = el("ul");
        block.list.forEach(function (item) { list.appendChild(el("li", null, item)); });
        body.appendChild(list);
      }
    });
    wrap.appendChild(body);

    if (article.sources && article.sources.length) {
      var sources = el("section", { "class": "kc-article__sources" });
      sources.appendChild(el("h2", null, words.articleSourcesTitle));
      sources.appendChild(sourceList(article.sources));
      wrap.appendChild(sources);
    }
    wrap.appendChild(disclaimer());
    root.appendChild(wrap);
    return;
  }

  /* ----- list of articles ----- */

  var current = topicById(param("c")) ? param("c") : "";

  var filter = el("nav", { "class": "kc-filter", "aria-label": words.title });
  var chip = function (label, id) {
    var link = el("a", { "class": "kc-chip", href: id ? PAGE + "?c=" + id : PAGE }, label);
    if (id === current) link.setAttribute("aria-current", "true");
    filter.appendChild(link);
  };
  chip(words.allLabel, "");
  data.topics.forEach(function (topic) { chip(pick(topic.label), topic.id); });
  root.appendChild(filter);

  var shown = visible.filter(function (item) { return !current || item.topic === current; });
  if (shown.length) {
    var list = el("ol", { "class": "kc-list" });
    shown.forEach(function (item) {
      var li = el("li", { "class": "kc-card" });
      li.appendChild(meta(item));
      var title = el("h2", { "class": "kc-card__title" });
      title.appendChild(el("a", { href: articleUrl(item) }, pick(item.title)));
      li.appendChild(title);
      li.appendChild(el("p", { "class": "kc-card__summary" }, pick(item.summary)));
      if (item.status === "draft") li.appendChild(el("p", { "class": "kc-draft" }, words.draftLabel));
      li.appendChild(el("a", { "class": "kc-card__more", href: articleUrl(item), "aria-label": words.readLabel + ": " + pick(item.title) }, words.readLabel + " →"));
      if (item.image) {
        li.className += " kc-card--media";
        var thumb = el("a", { "class": "kc-card__thumb", href: articleUrl(item), tabindex: "-1", "aria-hidden": "true" });
        thumb.appendChild(el("img", { src: item.image.src, alt: "", width: item.image.width, height: item.image.height, loading: "lazy" }));
        li.appendChild(thumb);
      }
      list.appendChild(li);
    });
    root.appendChild(list);
  } else {
    root.appendChild(el("p", { "class": "kc-empty" }, current ? words.emptyTopic : words.emptyAll));
  }

  root.appendChild(directory(current));
  root.appendChild(disclaimer());
})();

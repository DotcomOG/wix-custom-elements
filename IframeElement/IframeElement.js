// IframeElement.js
// This custom element creates an iframe that fills its container, disables scrolling,
// and exposes a "src" property. It sets a default src of "about:blank" to avoid showing
// a gray placeholder with a sad file icon before any URL is set.

export function initIframe(element, context) {
  const iframe = document.createElement("iframe");
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.setAttribute("scrolling", "no");
  iframe.src = "about:blank";
  element.appendChild(iframe);

  return {
    set src(value) {
      iframe.src = value;
    },
    get src() {
      return iframe.src;
    }
  };
}
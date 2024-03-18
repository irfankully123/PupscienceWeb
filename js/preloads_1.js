
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.63a5de9aa43c5a455578.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/22.latest.en.216b24a18d9d89630118.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/925.latest.en.e53e6f75da0b8e9a4134.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/681.latest.en.62e690de0db9c891d1f2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.bf44fb2423ea5b66677c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/751.latest.en.c93e6a6b8624ef406214.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.latest.en.a7c9cd6dcabb14983994.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/78.latest.en.93037259d77deea16aa3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/100.latest.en.313e243f59663328b7ae.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.4245d9dac42cb0c04afa.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/22.latest.en.9a8b77eb99aacd96ca2b.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.5e52d9ec000e6dcd2cd6.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.latest.en.6c87ea912612934ca7eb.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.en.4cd8e356a870e605257f.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  
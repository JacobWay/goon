var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-692547-2']);
_gaq.push(['_trackPageview']);
(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
})();
//<![CDATA[
(function() {
    var d = encodeURIComponent,
        f = window,
        g = document,
        h = "documentElement",
        k = "length",
        l = "prototype",
        m = "body",
        p = "&",
        s = "&ci=",
        t = ",",
        u = "?",
        v = "Content-Type",
        w = "Microsoft.XMLHTTP",
        x = "Msxml2.XMLHTTP",
        y = "POST",
        z = "application/x-www-form-urlencoded",
        A = "img",
        B = "input",
        C = "load",
        D = "oh=",
        E = "on",
        F = "pagespeed_url_hash",
        G = "url=";
    f.pagespeed = f.pagespeed || {};
    var H = f.pagespeed,
        I = function(a, b, c) {
            this.c = a;
            this.e = b;
            this.d = c;
            this.b = this.f();
            this.a = {}
        };
    I[l].f = function() {
        return {
            height: f.innerHeight || g[h].clientHeight || g[m].clientHeight,
            width: f.innerWidth || g[h].clientWidth || g[m].clientWidth
        }
    };
    I[l].g = function(a) {
        a = a.getBoundingClientRect();
        return {
            top: a.top + (void 0 !== f.pageYOffset ? f.pageYOffset : (g[h] || g[m].parentNode || g[m]).scrollTop),
            left: a.left + (void 0 !== f.pageXOffset ? f.pageXOffset : (g[h] || g[m].parentNode || g[m]).scrollLeft)
        }
    };
    I[l].h = function(a) {
        if (0 >= a.offsetWidth && 0 >= a.offsetHeight) return !1;
        a = this.g(a);
        var b = a.top.toString() + t + a.left.toString();
        if (this.a.hasOwnProperty(b)) return !1;
        this.a[b] = !0;
        return a.top <= this.b.height && a.left <= this.b.width
    };
    I[l].i = function(a) {
        var b;
        if (f.XMLHttpRequest) b = new XMLHttpRequest;
        else if (f.ActiveXObject) try {
            b = new ActiveXObject(x)
        } catch (c) {
            try {
                b = new ActiveXObject(w)
            } catch (e) {}
        }
        if (!b) return !1;
        b.open(y, this.c + (-1 == this.c.indexOf(u) ? u : p) + G + d(this.e));
        b.setRequestHeader(v, z);
        b.send(a);
        return !0
    };
    I[l].k = function() {
        for (var a = [A, B], b = [], c = {}, e = 0; e < a[k]; ++e) for (var q = g.getElementsByTagName(a[e]), n = 0; n < q[k]; ++n) {
            var r = q[n].getAttribute(F);
            r && (q[n].getBoundingClientRect && this.h(q[n])) && !(r in c) && (b.push(r), c[r] = !0)
        }
        if (0 != b[k]) {
            a = D + this.d;
            a += s + d(b[0]);
            for (e = 1; e < b[k]; ++e) {
                c = t + d(b[e]);
                if (131072 < a[k] + c[k]) break;
                a += c
            }
            H.criticalImagesBeaconData = a;
            this.i(a)
        }
    };
    H.j = function(a, b, c) {
        if (a.addEventListener) a.addEventListener(b, c, !1);
        else if (a.attachEvent) a.attachEvent(E + b, c);
        else {
            var e = a[E + b];
            a[E + b] = function() {
                c.call(this);
                e && e.call(this)
            }
        }
    };
    H.l = function(a, b, c) {
        var e = new I(a, b, c);
        H.j(f, C, function() {
            f.setTimeout(function() {
                e.k()
            }, 0)
        })
    };
    H.criticalImagesBeaconInit = H.l;
})();
pagespeed.criticalImagesBeaconInit('/mod_pagespeed_beacon', 'http://www.paulirish.com/resume.html', 'jvggoavaqw');
//]]>

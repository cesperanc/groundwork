(function(){!function(a){return a(function(){return a("body").on("click",".checklist:not([readonly]) li:not([readonly])",function(){return"true"===a(this).attr("aria-checked")||"true"===a(this).attr("data-checked")||"checked"===a(this).attr("checked")||a(this).hasClass("checked")||a(this).hasClass("completed")?a(this).attr("aria-checked","false"):a(this).attr("aria-checked","true"),a(this).removeClass("checked completed").removeAttr("data-checked checked")})})}(jQuery.noConflict()),function(a){return a(function(){return a("body").on("click",".dismissible",function(){var b=this;return a(this).addClass("dismiss animated"),setTimeout(function(){return a(b).hide(250,function(){return a(this).remove()})},1e3)})})}(jQuery.noConflict()),function(a){var b;return a(window).on("load resize",function(){return b()}),b=function(){return a(".row.equalize").each(function(){var b,c,d;return b=a(this),d=0,c=!1,b.children().each(function(){var e;return e=a(this),e.css("minHeight","1px"),c=e.outerWidth()===b.outerWidth(),!c&&(e.hasClass("equal")||e.addClass("equal"),e.outerHeight()>d)?d=e.outerHeight():void 0}),c?void 0:b.children().css("min-height",d)})}}(jQuery.noConflict()),function(a){return a(function(){var b,c;return b=a("body"),c=[".error input",".error textarea",".invalid input",".invalid textarea","input.error","textarea.error","input.invalid","textarea.invalid",'input[aria-invalid="true"]','textarea[aria-invalid="true"]'].join(","),b.on("click",c,function(){return a(this).focus(),a(this).select()})})}(jQuery.noConflict()),function(a){return a(function(){var b;return b=a("body"),a(".dropdown").each(function(){return"true"!==a(this).attr("aria-pressed")?(a(this).attr("aria-pressed","false"),a(this).children("ul").attr({"aria-expanded":"false","aria-hidden":"true",role:"menu"})):void 0}),b.on("dropdown",function(b){var c,d;return c=a(b.target),a(".dropdown").not(c).attr("aria-pressed","false"),a(".dropdown").children("ul").attr({"aria-expanded":"false","aria-hidden":"true"}),d="true"===c.attr("aria-pressed")?"false":"true",c.attr("aria-pressed",d),c.children("ul").attr({"aria-expanded":!d,"aria-hidden":d})}),b.on("click",".dropdown",function(b){var c;return c=a(b.currentTarget),c.is("a")||c.is("button")||b.stopPropagation(),c.hasClass("focused")?c.removeClass("focused"):c.trigger("dropdown")}),b.on("click",function(){var b;return b=a('.dropdown[aria-pressed="true"]'),b.length?b.attr("aria-pressed","false"):void 0}),b.on("focusout",".dropdown li:last-child a,                            .dropdown li:last-child button",function(){return a('.dropdown[aria-pressed="true"]').attr("aria-pressed","false")})})}(jQuery.noConflict()),function(a){var b,c;return c=0,window.delayMenuClose="",window.delayNavigationClose="",b=function(){function b(b){this.index=c++,this.el=a(b),this.init()}return b.prototype.init=function(){return this.defaultLabel(),this.setupMarkers(),this.el.hasClass("nocollapse")?void 0:this.hamburgerHelper()},b.prototype.defaultLabel=function(){return this.el.hasClass("nocollapse")||void 0!==this.el.attr("title")?void 0:this.el.attr("title","Menu")},b.prototype.setupMarkers=function(){return this.el.find("ul").each(function(){return a(this).find("li").length?a(this).attr("role","menu"):void 0}),a(this.el).hasClass("vertical")||this.el.find("> ul").attr("role","menubar"),this.el.find("li").each(function(){return a(this).find("ul").length?a(this).attr("role","menu"):void 0})},b.prototype.hamburgerHelper=function(){return this.el.prepend('<button class="hamburger"></button>')},b}(),a(function(){var c,d,e;return c=function(){return a("body").on("mouseenter",'.nav:not(.vertical) li[role="menu"]',function(b){var c,d;return a(".nav:not(.vertical)").not(this).each(function(){return a(this).find("button.hamburger").is(":visible")?void 0:a(this).find('ul[aria-expanded="true"]').attr("aria-expanded","false")}),a(this).parents(".nav").find("button.hamburger").is(":visible")?void 0:(clearTimeout(window.delayMenuClose),c=a(this).siblings().find('ul[aria-expanded="true"]'),c.attr("aria-expanded","false"),d=a(b.target).parents('li[role="menu"]').children("ul"),d.attr("aria-expanded","true"))}),a("body").on("mouseleave",'.nav:not(.vertical) li[role="menu"]',function(){return a(this).parents(".nav").find("button.hamburger").is(":visible")?void 0:a(this).find('ul[aria-expanded="true"]').attr("aria-expanded","false")})},e=function(){return a("body").on("click",'.nav li[role="menu"] > a,                               .nav li[role="menu"] > button',function(b){var c,d;return c=a(this).siblings("ul"),d=a(this).parent('[role="menu"]'),"true"!==c.attr("aria-expanded")?c.attr("aria-expanded","true"):(c.attr("aria-expanded","false"),c.find('[aria-expanded="true"]').attr("aria-expanded","false")),"true"!==d.attr("aria-pressed")?d.attr("aria-pressed","true"):(d.attr("aria-pressed","false"),d.find('[aria-pressed="true"]').attr("aria-pressed","false"),d.find('[aria-expanded="true"]').attr("aria-expanded","false")),b.preventDefault()}),a("body").on("click",".nav button.hamburger",function(b){var c;return c=a(this).siblings("ul"),"true"!==c.attr("aria-expanded")?c.attr("aria-expanded","true"):(c.attr("aria-expanded","false"),c.find('[aria-pressed="true"]').attr("aria-pressed","false"),c.find('[aria-expanded="true"]').attr("aria-expanded","false")),b.preventDefault()})},d=[],a(".nav").each(function(){return d.push(new b(this))}),e(),Modernizr.touch?void 0:c()})}(jQuery.noConflict()),function(a){return a(function(){var b,c,d,e;return a(".tabs").each(function(){var b,c;return b=a(this).children("ul").children("li.active"),b.length?(c=b.parents(".tabs"),c.find(b.attr("aria-controls")).addClass("active")):(a(this).children("ul").children("li").first().addClass("active"),a(this).children("div").first().addClass("active"))}),a("body").on("click",".tabs > ul li",function(b){var c,d;return c=a(this).addClass("active"),d=c.parents(".tabs"),c.siblings("li").removeClass("active"),d.find("> div, > ul > div").hide(),d.find(c.attr("aria-controls")).show(),b.preventDefault()}),e=function(){var b,e,f,g,h,i,j,k,l;return l=a(window).width(),b=".tabs.accordion",f=".tabs.accordion.mobile",k=".tabs.accordion.small-tablet",e=".tabs.accordion.ipad",g=".tabs:not(.accordion)",i=":not(.mobile)",j=":not(.small-tablet)",h=":not(.ipad)",480>=l?(d(f),c(g+i)):768>l?(d(f+", "+k),c(g+i+j)):1024>=l?(d(f+", "+k+", "+e),c(g+i+j+h)):l>1024?d(b):void 0},c=function(b){return b=a(b),b.each(function(){var b;return b=a(this),b.addClass("accordion"),b.find("> div").each(function(){var c,d;return d=a(this).clone(),c='li[aria-controls="#'+d.attr("id")+'"]',b.find(c).after(d),a(this).remove()})})},d=function(c){return a(c).each(function(){var c;return c=a(this),c.removeClass("accordion"),c.hasClass("vertical")&&b(c),c.children("ul").children("div").each(function(){var b;return b=a(this).clone(),c.append(b),a(this).remove()})})},b=function(b){return b=a(b),b.length||(b=a(".tabs.vertical")),b.each(function(){return a(this).hasClass("vertical")&&(a(this).children("ul").css({"min-height":"0px"}),!a(this).hasClass("accordion"))?(a(this).children('[role="tabpanel"]').css({"padding-left":a(this).children("ul").width()+10+"px"}),a(this).children("ul").css({"min-height":a(this).height()+"px"})):void 0})},a(window).resize(function(){return clearTimeout(window.delayedAdjustTabs),window.delayedAdjustTabs=setTimeout(function(){return e(),b()},50)}),a(window).load(function(){return e(),b()})})}(jQuery.noConflict()),function(a){return a.fn.placeholderText=function(b){var c,d,e;return a.fn.placeholderText.defaults={type:"paragraphs",amount:"1",html:!0,punctuation:!0},d=a.extend({},a.fn.placeholderText.defaults,b),e=new Array(10),e[0]="Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam metus. Etiam egestas wisi a erat.",e[1]="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis condimentum augue id magna semper rutrum. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Fusce consectetuer risus a nunc. Aliquam ornare wisi eu metus. Integer pellentesque quam vel velit. Duis pulvinar.",e[2]="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida libero nec velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Proin mattis lacinia justo. Vestibulum facilisis auctor urna. Aliquam in lorem sit amet leo accumsan lacinia. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Phasellus et lorem id felis nonummy placerat. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Aenean vel massa quis mauris vehicula lacinia. Quisque tincidunt scelerisque libero. Maecenas libero. Etiam dictum tincidunt diam. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Suspendisse nisl. Sed convallis magna eu sem. Cras pede libero, dapibus nec, pretium sit amet, tempor quis, urna.",e[3]="Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer vulputate sem a nibh rutrum consequat. Maecenas lorem. Pellentesque pretium lectus id turpis. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Fusce wisi. Phasellus faucibus molestie nisl. Fusce eget urna. Curabitur vitae diam non enim vestibulum interdum. Nulla quis diam. Ut tempus purus at lorem.",e[4]="In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris dictum facilisis augue. Fusce tellus. Pellentesque arcu. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu, urna. Nullam at arcu a est sollicitudin euismod. Praesent dapibus. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Nam sed tellus id magna elementum tincidunt.",e[5]="Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue commodo. Etiam bibendum elit eget erat.",e[6]="Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Aenean fermentum risus id tortor. Integer imperdiet lectus quis justo. Integer tempor. Vivamus ac urna vel leo pretium faucibus. Mauris elementum mauris vitae tortor. In dapibus augue non sapien. Aliquam ante. Curabitur bibendum justo non orci.",e[7]="Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat. Fusce aliquam vestibulum ipsum. Aliquam erat volutpat. Pellentesque sapien. Cras elementum. Nulla pulvinar eleifend sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque porta. Vivamus porttitor turpis ac leo.",e[8]="Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis ultrices augue. Mauris metus. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam posuere lacus quis dolor. Praesent id justo in neque elementum ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus.",e[9]="Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere. Nullam lectus justo, vulputate eget, mollis sed, tempor sed, magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam neque. Curabitur ligula sapien, pulvinar a, vestibulum quis, facilisis vel, sapien. Nullam eget nisl. Donec vitae arcu.",c=function(c){var f,g,h,i,j,k,l,m,n,o,p,q;for(b={},"undefined"!==a(c).data("placeholderType")&&(b.type=a(c).data("placeholderType")),"undefined"!==a(c).data("placeholderAmount")&&(b.amount=a(c).data("placeholderAmount")),"undefined"!==a(c).data("placeholderHtml")&&(b.html=a(c).data("placeholderHtml")),"undefined"!==a(c).data("placeholderPunctuation")&&(b.punctuation=a(c).data("placeholderPunctuation")),d=a.extend({},a.fn.placeholderText.defaults,b),f=d.amount,n="",g=0;f>g;)o=Math.floor(10*Math.random()),d.html&&(n+="<p>"),n+=e[o],d.html&&(n+="</p>"),n+="\n\n",g++;switch(d.type){case"words":for(l=d.amount,l=parseInt(l),j=new Array,q=new Array,q=n.split(" "),h=0,i=0;j.length<l;)i>q.length&&(i=0,h++,h+1>e.length&&(h=0),q=e[h].split(" "),q[0]="\n\n"+q[0]),j.push(q[i]),i++;n=j.join(" ");break;case"characters":for(m="",k=d.amount,k=parseInt(k),p=e.join("\n\n");m.length<k;)m+=p;n=m.substring(0,k);break;case"paragraphs":}return d.punctuation||(n=n.replace(",","").replace(".","")),n},this.each(function(){var b,d;return b=a(this),d=c(this),b.html(d)})}}(jQuery),function(a){return a(function(){return a(".placeholderText").placeholderText()})}(jQuery.noConflict()),function(a){var b,c,d,e;return c=[],e=0,b=function(){function b(b){this.index=e++,this.el=b,this.compression=a(this.el).data("compression")||5,this.minFontSize=a(this.el).data("min")||10,this.maxFontSize=a(this.el).data("max")||Number.POSITIVE_INFINITY,this.width=a(this.el).data("width")||"100%",this.height=a(this.el).data("height")||"auto",this.adjustParents=a(this.el).data("adjust-parents")||!0,this.styled=a(this.el).data("styled")||!0,this.columns=a("tbody tr",a(this.el)).first().find("th, td").length,this.rows=a("tbody tr",a(this.el)).length,this.init()}return b.prototype.init=function(){return this.setupTable(),this.adjustOnLoad(),this.adjustOnResize()},b.prototype.fontSize=function(){var b;return b="auto"===this.height?a("tbody td",a(this.el)).first().width()/this.compression:a(this.el).height()/this.rows/this.compression,Math.min(this.maxFontSize,Math.max(b,this.minFontSize))},b.prototype.setupTable=function(){return a(this.el).css("width",this.width),"auto"!==this.height&&a(this.el).css("height",this.height),a("th, td",a(this.el)).css("width",100/this.columns+"%"),this.styled&&a(this.el).addClass("responsiveTable"),"auto"!==this.height&&(a("th, td",a(this.el)).css("height",100/this.rows+"%"),this.adjustParents&&a(this.el).parents().each(function(){return a(this).css("height","100%")})),a(this.el).css("font-size",this.fontSize())},b.prototype.resizeTable=function(){return a(this.el).css("font-size",this.minFontSize).css("font-size",this.fontSize())},b.prototype.adjustOnLoad=function(){var b=this;return a(window).on("load",function(){return b.resizeTable()})},b.prototype.adjustOnResize=function(){var b=this;return a(window).on("resize",function(){return clearTimeout(c[b.index]),c[b.index]=setTimeout(function(){return b.resizeTable()},20)})},b}(),d=[],a.fn.responsiveTables=function(){return this.each(function(){return d.push(new b(this))})}}(jQuery.noConflict()),function(a){return a(document).ready(function(){return a("table.responsive").responsiveTables()})}(jQuery.noConflict()),function(a){var b,c,d;return c=[],d=0,b=function(){function b(b){this.index=d++,this.el=b,this.compression=a(this.el).data("compression")||10,this.minFontSize=a(this.el).data("min")||Number.NEGATIVE_INFINITY,this.maxFontSize=a(this.el).data("max")||Number.POSITIVE_INFINITY,this.scrollable=a(this.el).data("scrollable")||!1,this.scrollSpeed=a(this.el).data("scrollspeed")||650,this.scrollReset=a(this.el).data("scrollreset")||200,this.init()}return b.prototype.init=function(){return a(this.el).wrapInner('<span class="responsiveText-wrapper" />'),this.adjustOnLoad(),this.adjustOnResize(),this.scrollable?this.scrollOnHover():void 0},b.prototype.resizeText=function(){var b,c;return b=a(this.el).width()/this.compression,c=Math.max(Math.min(b,this.maxFontSize),this.minFontSize),a(this.el).css({"font-size":Math.floor(c)})},b.prototype.adjustOnLoad=function(){var b=this;return a(window).on("load",function(){return b.resizeText()})},b.prototype.adjustOnResize=function(){var b=this;return a(window).on("resize",function(){return clearTimeout(c[b.index]),c[b.index]=setTimeout(function(){return b.resizeText()},20)})},b.prototype.scrollOnHover=function(){var b=this;return a(this.el).css({overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}),a(this.el).hover(function(){return b.difference=b.el.scrollWidth-a(b.el).width(),b.difference>b.scrollSpeed&&(b.scrollSpeed=b.difference),b.difference>0?(a(b.el).css("cursor","e-resize"),a(b.el).stop().animate({"text-indent":-b.difference},b.scrollSpeed,function(){return a(b.el).css("cursor","text")})):void 0},function(){return a(b.el).stop().animate({"text-indent":0},b.scrollReset)})},b}(),function(a){var c;return c=[],a.fn.responsiveText=function(){return this.each(function(){return c.push(new b(this))})}}(a),function(a){return a(document).ready(function(){return a(".responsive").not("table").responsiveText()})}(a)}(jQuery.noConflict()),function(a){var b,c,d;return c=[],d=0,b=function(){function b(b){this.el=b,this.index=d++,this.text=a(this.el).text(),a(this.el).attr("data-text",this.text),this.words=this.text.trim().split(" "),this.lines=parseInt(a(this.el).attr("data-truncate")),this.truncate(),this.adjustOnResize()}return b.prototype.truncate=function(){return this.measure(),this.setContent()},b.prototype.reset=function(){return a(this.el).text(this.text).css("max-height","none").attr("data-truncated","false")},b.prototype.measure=function(){var b;for(this.reset(),a(this.el).html("."),this.singleLineHeight=a(this.el).outerHeight(),b=1;b++<this.lines;)a(this.el).append("<br>.");return this.maxLinesHeight=a(this.el).outerHeight()},b.prototype.empty=function(){return a(this.el).html("")},b.prototype.setContent=function(){var b;return this.reset(),b=!1,this.addWords(this.words.length),this.tooBig()?(this.addNumberWordsThatFit(),a(this.el).css("max-height",this.maxLinesHeight+"px"),a(this.el).attr("data-truncated",!0)):void 0},b.prototype.addNumberWordsThatFit=function(){var b,c,d;for(c=this.words.length,b=0,d=Math.floor(this.words.length/2);b+1!==c;)this.addWords(b+d),this.tooBig()?c=b+d:b+=d,d=Math.floor(d/2)||1;return this.addWords(b),a(this.el).html(this.trimTrailingPunctuation(a(this.el).html()))},b.prototype.addWords=function(b){return a(this.el).html(this.words.slice(0,b).join(" "))},b.prototype.tooBig=function(){return a(this.el).outerHeight()>this.maxLinesHeight},b.prototype.adjustOnResize=function(){var b=this;return a(window).on("resize",function(){return clearTimeout(c[b.index]),c[b.index]=setTimeout(function(){return b.truncate()},20)})},b.prototype.trimTrailingPunctuation=function(a){return a.replace(/(,$)|(\.$)|(\:$)|(\;$)|(\?$)|(\!$)/g,"")},b}(),function(a){var c,d;return c=!1,d=[],a.fn.truncateLines=function(){return c||a("head").append('    <style type="text/css">      [data-truncated="true"] { overflow: hidden; }      [data-truncated="true"]:after { content: "..."; position: absolute; }    </style>'),this.each(function(){return d.push(new b(this))})}}(a),function(a){return a(window).load(function(){return a("[data-truncate]").truncateLines()})}(a)}(jQuery.noConflict())}).call(this);
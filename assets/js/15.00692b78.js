(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{566:function(s,a,e){"use strict";e.r(a);var t=e(13),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"css-grid网格布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-grid网格布局"}},[s._v("#")]),s._v(" CSS Grid网格布局")]),s._v(" "),e("h2",{attrs:{id:"基本概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[s._v("#")]),s._v(" 基本概念")]),s._v(" "),e("h3",{attrs:{id:"一、容器和项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、容器和项目"}},[s._v("#")]),s._v(" 一、容器和项目")]),s._v(" "),e("p",[s._v("采用网格布局的区域，称为“容器”(container)。容器内部采用网格定位的子元素，称为“项目”(item)")]),s._v(" "),e("p",[s._v("注意点："),e("strong",[s._v("Grid布局只对项目生效")])]),s._v(" "),e("h3",{attrs:{id:"二、容器属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、容器属性"}},[s._v("#")]),s._v(" 二、容器属性")]),s._v(" "),e("p",[s._v("1、"),e("strong",[s._v("display属性")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("display:grid：指定一个容器采用网格布局\n\n默认情况下：容器里面项目都是块级元素，但也可以设成行内元素\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("display:inline-grid：将容器里面项目设置行内元素，该元素内部采用网格布局\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2、"),e("strong",[s._v("grid-template-columns属性，grid-template-rows属性")])]),s._v(" "),e("p",[s._v("容器指定了网格布局以后，接着就要划分行和列。")]),s._v(" "),e("p",[s._v("grid-template-columns属性定义每一列的列宽")]),s._v(" "),e("p",[s._v("grid-template-rows属性定义每一行的行高")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".container {\n  display: grid;\n  grid-template-columns: 100px 100px 100px;\n  grid-template-rows: 100px 100px 100px;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("除了使用绝对单位，也可以使用百分比。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".container {\n  display: grid;\n  grid-template-columns: 33.33% 33.33% 33.33%;\n  grid-template-rows: 33.33% 33.33% 33.33%;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("3、"),e("strong",[s._v("repeat()")])]),s._v(" "),e("p",[s._v("有时候，重复写同样的值非常麻烦，尤其网格很多时候，这时，可以使用repeat()函数，简化重复的值。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".container {\n      display: grid;\n      grid-template-columns: repeat(3, 33.33%);\n      grid-template-rows: repeat(3, 33.33%);\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("repeat()  接收两个参数，第一个参数是重复的次数(上例是3)，第二个参数是所要重复的值")]),s._v(" "),e("p",[s._v("4、"),e("strong",[s._v("auto-fill  关键字")])]),s._v(" "),e("p",[s._v("有时，单元格的大小是固定的，但是容器的大小不确定，如果希望每一行（或每一列）容纳尽可能多的单元格")]),s._v(" "),e("p",[s._v("这时候可以使用 auto-fill 关键字表示自动填充")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 100px);\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("上面代码表示：每列宽度100px，然后自动填充，直到容器不能放置更多的列")]),s._v(" "),e("p",[s._v("5、"),e("strong",[s._v("fr关键字")])]),s._v(" "),e("p",[s._v("为了方便表示比例关系，网格布局提供了fr关键字，如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("display:grid;\ngrid-template-colums:1fr 1fr //表示两个相同宽度的列\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("6、"),e("strong",[s._v("auto关键字")])]),s._v(" "),e("p",[s._v("auto关键字表示浏览器自动决定长度")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("grid-template-columns:100px auto 100px;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("7、"),e("strong",[s._v("grid-row-gap，grid-column-gap，grid-gap属性")])]),s._v(" "),e("p",[s._v("grid-row-gap：属性设置行与行的间隔（行间距）")]),s._v(" "),e("p",[s._v("grid-column-gap：属性设置列与列的间隔（列间距）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("grid-row-gap:20px;\ngrid-column-gap:20px\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("grid-gap属性是grid-column-gap和grid-row-gap的合并简写的形式，")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("grid-gap:<grid-row-gap><grid-column-gap>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("grid-gap:20px 20px\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果grid-gap省略了第二个值，浏览器认为第二值等于第一个值")]),s._v(" "),e("p",[s._v("8、"),e("strong",[s._v("grid-template-areas属性")])]),s._v(" "),e("p",[s._v("网格布局允许指定“区域”(area)，一个区域由单个或多个单元格组成，grid-template-areas属性用于定义区域。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('grid-template-areas:\n\t"icon title"\n\t"icon content"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("9、"),e("strong",[s._v("grid-area属性")])]),s._v(" "),e("p",[s._v("grid-area属性指定项目放在哪一个区域")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("grid-area：icon\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("10、"),e("strong",[s._v("justify-items属性，align-items属性，place-items属性")])]),s._v(" "),e("p",[s._v("justify-items属性设置单元格内容的水平位置（左 中 右）")]),s._v(" "),e("p",[s._v("align-items属性设置单元格内容的垂直位置（上 中 下）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".container {\n  justify-items: start | end | center | stretch;\n  align-items: start | end | center | stretch;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("这两个属性的写法完全相同，都可以取下面这些值。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("start：对齐单元格的起始边缘。\nend：对齐单元格的结束边缘。\ncenter：单元格内部居中。\nstretch：拉伸，占满单元格的整个宽度（默认值）。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("place-items属性是align-items属性和justify-items属性的合并简写形式")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("place-items: <align-items> <justify-items>;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("place-items: start end;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("11、"),e("strong",[s._v("justify-content 属性， align-content 属性， place-content 属性")])]),s._v(" "),e("p",[e("code",[s._v("justify-content")]),s._v("属性是整个内容区域在容器里面的水平位置（左中右），"),e("code",[s._v("align-content")]),s._v("属性是整个内容区域的垂直位置（上中下）。")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" start | end | center | stretch | space-around | space-between | space-evenly"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" start | end | center | stretch | space-around | space-between | space-evenly"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("p",[s._v("这两个属性的写法完全相同，都可以取下面这些值。（下面的图都以"),e("code",[s._v("justify-content")]),s._v("属性为例，"),e("code",[s._v("align-content")]),s._v("属性的图完全一样，只是将水平方向改成垂直方向。）")]),s._v(" "),e("blockquote",[e("ul",[e("li",[s._v("start - 对齐容器的起始边框。")])])]),s._v(" "),e("blockquote",[e("ul",[e("li",[s._v("end - 对齐容器的结束边框。")])])]),s._v(" "),e("blockquote",[e("ul",[e("li",[s._v("center - 容器内部居中。")])])]),s._v(" "),e("blockquote",[e("ul",[e("li",[s._v("stretch - 项目大小没有指定时，拉伸占据整个网格容器。")])])]),s._v(" "),e("blockquote",[e("ul",[e("li",[s._v("space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。")])])]),s._v(" "),e("blockquote",[e("ul",[e("li",[s._v("space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔。")])])]),s._v(" "),e("blockquote",[e("ul",[e("li",[s._v("space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。")])])]),s._v(" "),e("p",[e("code",[s._v("place-content")]),s._v("属性是"),e("code",[s._v("align-content")]),s._v("属性和"),e("code",[s._v("justify-content")]),s._v("属性的合并简写形式。")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[s._v("place-content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <align-content> <justify-content>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("p",[s._v("下面是一个例子。")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language-css line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[s._v("place-content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" space-around space-evenly"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);
import{_ as p}from"./ValaxyMain.vue_vue_type_script_setup_true_lang-LgRY8vMm.js";import{b as h,e as g,w as s,f as d,a as u,p as i,r as t,g as a,h as n}from"./app-Ni5uChOx.js";const y=a("p",null,"论文通篇简述了PU-learning几个经典的问题，并且详细介绍了PUL到底是什么。",-1),x=a("h1",{id:"pu-learning与传统半监督学习",tabindex:"-1"},[n("PU-learning与传统半监督学习 "),a("a",{class:"header-anchor",href:"#pu-learning与传统半监督学习","aria-label":'Permalink to "PU-learning与传统半监督学习"'},"​")],-1),f=a("p",null,"PU-learning是传统半监督学习的变种，与传统半监督学习不同，传统半监督学习的数据集涵盖带标记的正样本与负样本，但是PU中只有部分稳定正样本。这与部分领域的核心情况是类似的，例如medical diagnose ， 广告推荐系统，。PU这边会把未标记样本考虑进入学习过程中。",-1),b=a("h1",{id:"pul领域的几个关键问题",tabindex:"-1"},[n("PUL领域的几个关键问题 "),a("a",{class:"header-anchor",href:"#pul领域的几个关键问题","aria-label":'Permalink to "PUL领域的几个关键问题"'},"​")],-1),v=a("p",null,"论文的核心。PUL领域的核心就是如何解决这些问题。",-1),P=a("h4",{id:"基本假设",tabindex:"-1"},[n("基本假设 "),a("a",{class:"header-anchor",href:"#基本假设","aria-label":'Permalink to "基本假设"'},"​")],-1),w=a("ul",null,[a("li",null,"SCAR（selec completely at random） 假设，假设构造PU数据集时正样本和负样本在一个数据集内，而且选取正样本构成P类是完全随机的。那么这时候我们可以得到样本标记概率和样本为正样本的概率之间有一个简单的线性关系：")],-1),_=a("p",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"P"),a("mi",null,"r"),a("mo",{stretchy:"false"},"("),a("mi",null,"s"),a("mo",null,"="),a("mn",null,"1"),a("mi",{mathvariant:"normal"},"∣"),a("mi",null,"x"),a("mo",{stretchy:"false"},")"),a("mo",null,"="),a("mfrac",null,[a("mrow",null,[a("mi",null,"P"),a("mi",null,"r"),a("mo",{stretchy:"false"},"("),a("mi",null,"y"),a("mo",null,"="),a("mn",null,"1"),a("mi",{mathvariant:"normal"},"∣"),a("mi",null,"x"),a("mo",{stretchy:"false"},")")]),a("mi",null,"c")])]),a("annotation",{encoding:"application/x-tex"},"Pr(s=1|x)=\\frac{Pr(y=1|x)}{c}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"s"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"1∣"),a("span",{class:"mord mathnormal"},"x"),a("span",{class:"mclose"},")"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1.355em","vertical-align":"-0.345em"}}),a("span",{class:"mord"},[a("span",{class:"mopen nulldelimiter"}),a("span",{class:"mfrac"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"1.01em"}},[a("span",{style:{top:"-2.655em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord mathnormal mtight"},"c")])])]),a("span",{style:{top:"-3.23em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),a("span",{style:{top:"-3.485em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.13889em"}},"P"),a("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),a("span",{class:"mopen mtight"},"("),a("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y"),a("span",{class:"mrel mtight"},"="),a("span",{class:"mord mtight"},"1∣"),a("span",{class:"mord mathnormal mtight"},"x"),a("span",{class:"mclose mtight"},")")])])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.345em"}},[a("span")])])])]),a("span",{class:"mclose nulldelimiter"})])])])]),n(" 其中"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"c"),a("mtext",null,"是正样本被打上正标签的概率，在"),a("mi",null,"S"),a("mi",null,"C"),a("mi",null,"A"),a("mi",null,"R"),a("mtext",null,"下我们假设是一个常数。")]),a("annotation",{encoding:"application/x-tex"},"c是正样本被打上正标签的概率，在SCAR下我们假设是一个常数。")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord mathnormal"},"c"),a("span",{class:"mord cjk_fallback"},"是正样本被打上正标签的概率，在"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"SC"),a("span",{class:"mord mathnormal"},"A"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),a("span",{class:"mord cjk_fallback"},"下我们假设是一个常数。")])])]),n(" SCAR使得要学习的分类器转化成了一个特殊分类器。现在"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"c"),a("mi",null,"l"),a("mi",null,"a"),a("mi",null,"s"),a("mi",null,"s"),a("mi",null,"i"),a("mi",null,"f"),a("mi",null,"i"),a("mi",null,"e"),a("msup",null,[a("mi",null,"r"),a("mo",{mathvariant:"normal",lspace:"0em",rspace:"0em"},"′")])]),a("annotation",{encoding:"application/x-tex"},"classifier'")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.9463em","vertical-align":"-0.1944em"}}),a("span",{class:"mord mathnormal"},"c"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),a("span",{class:"mord mathnormal"},"a"),a("span",{class:"mord mathnormal"},"ss"),a("span",{class:"mord mathnormal"},"i"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),a("span",{class:"mord mathnormal"},"i"),a("span",{class:"mord mathnormal"},"e"),a("span",{class:"mord"},[a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),a("span",{class:"msupsub"},[a("span",{class:"vlist-t"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.7519em"}},[a("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord mtight"},"′")])])])])])])])])])])]),n("的任务是识别出样本被标记的概率有多大，其他的样本统一当做负样本处理即可。")],-1),k=a("ul",null,[a("li",null,[n("SAR（select at random）假设，假设选取样本构造数据集的过程是随机但不至于完全随机。在选取正样本构造数据集的过程中会有部分labeled bias，例如与负样本差距过大的样本会比其他正样本更容易被标记。这时被标记的概率分数就不是一个常数，我们这样定义： "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"e"),a("mo",{stretchy:"false"},"("),a("mi",null,"x"),a("mo",{stretchy:"false"},")"),a("mo",null,"="),a("mi",null,"P"),a("mi",null,"r"),a("mo",{stretchy:"false"},"("),a("mi",null,"s"),a("mo",null,"="),a("mn",null,"1"),a("mi",{mathvariant:"normal"},"∣"),a("mi",null,"x"),a("mo",{separator:"true"},","),a("mi",null,"y"),a("mo",null,"="),a("mn",null,"1"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"e(x)=Pr(s=1|x,y=1)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal"},"e"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"x"),a("span",{class:"mclose"},")"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"s"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"1∣"),a("span",{class:"mord mathnormal"},"x"),a("span",{class:"mpunct"},","),a("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"1"),a("span",{class:"mclose"},")")])])])])],-1),M=a("p",null,[n("我们不妨再引入一个概念：probabilistic gap用于量化样本被标记为正类与负类之间的概率差距。"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"normal"},"Δ"),a("mi",null,"P"),a("mi",null,"r"),a("mo",null,"="),a("mi",null,"P"),a("mi",null,"r"),a("mo",{stretchy:"false"},"("),a("mi",null,"y"),a("mo",null,"="),a("mn",null,"1"),a("mi",{mathvariant:"normal"},"∣"),a("mi",null,"x"),a("mo",{stretchy:"false"},")"),a("mo",null,"−"),a("mi",null,"P"),a("mi",null,"r"),a("mo",{stretchy:"false"},"("),a("mi",null,"y"),a("mo",null,"="),a("mn",null,"0"),a("mi",{mathvariant:"normal"},"∣"),a("mi",null,"x"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"\\Delta Pr=Pr(y=1|x)-Pr(y=0|x)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6833em"}}),a("span",{class:"mord"},"Δ"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"1∣"),a("span",{class:"mord mathnormal"},"x"),a("span",{class:"mclose"},")"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"−"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"0∣"),a("span",{class:"mord mathnormal"},"x"),a("span",{class:"mclose"},")")])])]),n(" 因此正样本最终被打上标签的概率"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"e"),a("mo",{stretchy:"false"},"("),a("mi",null,"x"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"e(x)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal"},"e"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"x"),a("span",{class:"mclose"},")")])])]),n("其实是一个和probabilistic gap相关的函数：")],-1),U=a("p",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"e"),a("mo",{stretchy:"false"},"("),a("mi",null,"x"),a("mo",{stretchy:"false"},")"),a("mo",null,"="),a("mi",null,"f"),a("mo",{stretchy:"false"},"("),a("mi",{mathvariant:"normal"},"Δ"),a("mi",null,"P"),a("mi",null,"r"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"e(x)=f(\\Delta Pr)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal"},"e"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"x"),a("span",{class:"mclose"},")"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),a("span",{class:"mopen"},"("),a("span",{class:"mord"},"Δ"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"P"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),a("span",{class:"mclose"},")")])])])],-1),L=a("h4",{id:"先验概率",tabindex:"-1"},[n("先验概率 "),a("a",{class:"header-anchor",href:"#先验概率","aria-label":'Permalink to "先验概率"'},"​")],-1),$=a("p",null,"先验概率即在数据集中正样本大概占总样本的比例。尽管很多方法都用到了这个指标，但很多时候由于label frequency较小或者本身数据集中prior probability就很小所以其实是不可知的。为了具体区分几种情况，我们通过这几个假设将情况具体区分：",-1),S=a("h4",{id:"pu-learning具体方法",tabindex:"-1"},[n("PU-learning具体方法 "),a("a",{class:"header-anchor",href:"#pu-learning具体方法","aria-label":'Permalink to "PU-learning具体方法"'},"​")],-1),A=a("ul",null,[a("li",null,"二阶段法：分为两个阶段。第一阶段识别出稳定的负样本和标记正样本一起构成完整数据集，第二阶段利用已经打上标签的数据集进行训练。之后可以加第三阶段选取出最好的分类器。二阶段方法在于讲究数据的可分性（正负样本确实可以完全分开）和平滑性")],-1),F={__name:"Learning From Positive and Unlabeled Data-A Survey",setup(z,{expose:o}){const e=JSON.parse('{"title":"Paper reading--《Learning From Positive and Unlabeled Data-A Survey》","description":"","frontmatter":{"title":"Paper reading--《Learning From Positive and Unlabeled Data-A Survey》","date":"2024-09-03","updated":"2022-09-03","categories":"Paper-reading","image":"https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics_for_post/saber.webp","tags":["科研","PUL"],"top":1},"headers":[],"relativePath":"pages/posts/Learning From Positive and Unlabeled Data-A Survey.md","path":"/home/runner/work/void2004/void2004/pages/posts/Learning From Positive and Unlabeled Data-A Survey.md","lastUpdated":1735915190000}'),r=u(),m=e.frontmatter||{};return r.meta.frontmatter=Object.assign(r.meta.frontmatter||{},e.frontmatter||{}),i("pageData",e),i("valaxy:frontmatter",m),globalThis.$frontmatter=m,o({frontmatter:{title:"Paper reading--《Learning From Positive and Unlabeled Data-A Survey》",date:"2024-09-03",updated:"2022-09-03",categories:"Paper-reading",image:"https://raw.githubusercontent.com/xjtu-wjz/void2004/main/pics_for_post/saber.webp",tags:["科研","PUL"],top:1}}),(l,j)=>{const c=p;return h(),g(c,{frontmatter:d(m)},{"main-content-md":s(()=>[y,x,f,b,v,P,w,_,k,M,U,L,$,S,A]),"main-header":s(()=>[t(l.$slots,"main-header")]),"main-header-after":s(()=>[t(l.$slots,"main-header-after")]),"main-nav":s(()=>[t(l.$slots,"main-nav")]),"main-content":s(()=>[t(l.$slots,"main-content")]),"main-content-after":s(()=>[t(l.$slots,"main-content-after")]),"main-nav-before":s(()=>[t(l.$slots,"main-nav-before")]),"main-nav-after":s(()=>[t(l.$slots,"main-nav-after")]),comment:s(()=>[t(l.$slots,"comment")]),footer:s(()=>[t(l.$slots,"footer")]),aside:s(()=>[t(l.$slots,"aside")]),"aside-custom":s(()=>[t(l.$slots,"aside-custom")]),default:s(()=>[t(l.$slots,"default")]),_:3},8,["frontmatter"])}}};export{F as default};
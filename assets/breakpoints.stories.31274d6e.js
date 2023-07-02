var u=Object.defineProperty;var i=(r,o)=>u(r,"name",{value:o,configurable:!0});import"./index.0dbe6625.js";import{c as e,A as c,M as x}from"./Props.9e1ec34b.js";import"./jsx-runtime.a757349a.js";import"./iframe.72c79fb1.js";import{T as s}from"./tokens-grid.6e2fc146.js";import{b as T}from"./index.c9f1980c.js";import{G as t,T as n}from"./index.0dd01115.js";import"./string.06c2ddfa.js";import"./index.00d07e28.js";import"./es.map.constructor.eef067e3.js";import"./es.number.to-fixed.f33d78ae.js";import"./index.079ad046.js";function m(){return m=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(r[p]=l[p])}return r},m.apply(this,arguments)}i(m,"_extends");const y={},G="wrapper";function d({components:r,...o}){return e(G,m({},y,o,{components:r,mdxType:"MDXLayout"}),e(x,{title:"Tokens/Breakpoints",mdxType:"Meta"}),e("h1",null,"Breakpoints"),e("p",null,"Breakpoints que voc\xEA pode utilizar dentro da aplica\xE7\xE3o"),e(s,{tokens:T,mdxType:"TokensGrid"}),e("h1",null,"Colunas por breakpoint"),e("p",null,"Abaixo voc\xEA pode visualizar o grid de colunas para cada breakpoint"),e(s,{tokens:{"@base":"1 coluna","@sm":"2 colunas","@md":"4 colunas","@lg":"6 colunas","@xl":"12 colunas","@2xl":"12 colunas"},mdxType:"TokensGrid"}),e("br",null),e("hr",null),e("h1",null,"Exemplos"),e("br",null),e("hr",null),e("h3",null,"Grid container"),e("p",null,"Este grid ter\xE1 colunas como definido em ",e("a",{parentName:"p",href:"#-colunas-por-breakpoint"},"Colunas por breakpoint")),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`<Grid container>
    // ...
</Grid>
`)),e(t,{container:!0,mdxType:"Grid"},e(n,{mdxType:"Text"},"Text in column 1"),e(n,{mdxType:"Text"},"Text in column 2")),e("br",null),e("hr",null),e("h3",null,"Grid item"),e("p",null,"Este grid ter\xE1 somente 1 coluna por padr\xE3o"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`<Grid item>
    // ...
</Grid>
`)),e(t,{item:!0,mdxType:"Grid"},e(n,{mdxType:"Text"},"Text in column 1"),e(n,{mdxType:"Text"},"Text in column 2")),e("br",null),e("hr",null),e("h3",null,"Grids container and item"),e("p",null,"Nessa composi\xE7\xE3o de Grids h\xE1 um container e um Grid item que possui 2 colunas internas"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`<Grid container>
    <Grid item noGutter cols={2}>
        // ...
    </Grid>
</Grid>
`)),e(t,{container:!0,mdxType:"Grid"},e(t,{item:!0,noGutter:!0,cols:2,mdxType:"Grid"},e(n,{mdxType:"Text"},"Text in column 1"),e(n,{mdxType:"Text"},"Text in column 2"))),e("br",null),e("hr",null),e("h3",null,"Grids item responsivo"),e("p",null,"Nesse Grid foi definido o n\xFAmero de colunas por breakpoint, no exemplo o minimo \xE9 1 coluna (",e("inlineCode",{parentName:"p"},"@initial"),`)
e seguimos com 1 coluna para o menor breakpoint (`,e("inlineCode",{parentName:"p"},"@sm"),"), por\xE9m para o breakpoint m\xE9dio (",e("inlineCode",{parentName:"p"},"@md"),`) temos 2 colunas,
e 3, 4, 6 respectivamente para os breakpoints (`,e("inlineCode",{parentName:"p"},"@lg"),", ",e("inlineCode",{parentName:"p"},"@xl"),", ",e("inlineCode",{parentName:"p"},"@2xl"),")"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`<Grid item cols={{
    '@initial': 1, // (min-width: 0)
    '@sm': 1,   // (min-width: 640px)
    '@md': 2,   // (min-width: 768px)
    '@lg': 3,   // (min-width: 1024px)
    '@xl': 4,   // (min-width: 1280px)
    '@2xl': 6,  // (min-width: 1536px)
}}>
    // ...
</Grid>
`)),e(t,{item:!0,cols:{"@initial":1,"@sm":1,"@md":2,"@lg":3,"@xl":4,"@2xl":6},mdxType:"Grid"},e(n,{mdxType:"Text"},"Text in column 1"),e(n,{mdxType:"Text"},"Text in column 2"),e(n,{mdxType:"Text"},"Text in column 3"),e(n,{mdxType:"Text"},"Text in column 4")),e("br",null),e("hr",null))}i(d,"MDXContent");d.isMDXComponent=!0;const g=i(()=>{throw new Error("Docs-only story")},"__page");g.parameters={docsOnly:!0};const a={title:"Tokens/Breakpoints",includeStories:["__page"]},h={};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:()=>e(c,{mdxStoryNameToKey:h,mdxComponentAnnotations:a},e(d,null))};const A=["__page"];export{A as __namedExportsOrder,g as __page,a as default};
//# sourceMappingURL=breakpoints.stories.31274d6e.js.map

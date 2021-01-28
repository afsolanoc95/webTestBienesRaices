const hbs = require('hbs');


hbs.registerHelper(`getAnio`,()=>{
    return new Date().getFullYear();
    });
hbs.registerHelper(`getDerechos`,(text)=>{
    let words=text.split(` `);
    words.forEach((word,i) => {
        words[i]=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
    });
    return words.join(` `);
});

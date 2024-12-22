// Video: 10 jQuery Get Methods:     ~~~Notes~~~


// jQuery Get Methods:
// text()
// html()
// attr()
// val()


// get methods se hum html k elements ki alg alg value ko uthana chahty hent to us k lye use hoty hen.


// html()
// is se hum html k elements ko as it is target kr skty hen. jesy html me open and closing tags me hoty hen. or ye javascript me jo innerHTML hai same wese kam krta hai but jQuery me short form me isy khali html() se use krty hen.


// text()
// text me hamen siraf text hi milta hai or ye HTML k elements ko print nahi krta ye siraf text pe kam krt hai like Javascript me inneText jo tha ye wse hi kam krta hai.


// attr()
// like jab hum html k element ko id or class dety hen to id and class basically attribute name hoty hen or inki value ko access krny k lye hum attr() method ko use krty hen. mslan ye dekhny k lye k is attr me kon kon c value hen. like agr aik element pe agr aik se zyada classes add hen ya koi or attributes added hen to unko dekhny k lye attr() use hota hai.
let getAttr = $('#getbox').attr('class');
    console.log(getAttr);
// NOTE: ab mene is me chek krny k lye extra classes add ki hen or wo display ho rahi hen.


// val()

import { injectGlobal } from 'styled-components';
require('./fonts.scss');
import Theme from './theme';
import StyleClasses from './classes';

injectGlobal`
html,body{
    width: 100%;
    height: 100%;
    margin: 0;
}
button:focus {outline:0;}
#app {
    width: 100%;
    height: 100%;
}
::-webkit-scrollbar {display: none;}
/* Font Families */
h1, h2, h3, a, p, body, label { font-family: 'Oswald'; }
h4, h5, h6, button { font-family: 'OpenSans'; }
h1, h2, h3, h4, h5, h6 { margin: 0 }
/* Font Sizes */
h1 { font-size: 64px; }
h2 { font-size: 40px; }
h3 { font-size: 32px; }
h4 { font-size: 52px; }
h5 { font-size: 40px; }
h6 { font-size: 32px; }
p { font-size: 18px; }
button { font-size: 20px; font-weight: bold; border-style: none; cursor: pointer; }
hr { border-style: none; }
input { box-shadow: inset 0 2px 4px rgba(203,203,210,0.5); }
${StyleClasses}
`

export default Theme;

import { css } from 'styled-components';

export default css`
hr.spacer{
    border: none;
    margin: 20px 0 0 0;
}

.clearfix:after {
    content: "";
    display: table;
    clear: both;
}

.img100{
    width: 100%;
    max-width: 1500px;
    margin:0 auto;
    display:block;
}

/* Toggle Elements Desktop / Mobile */
.desktop{ display: none; }
.mobile{ display: block; }
@media only screen and (min-width: 480px) {
    .desktop{ display: block; }
    .mobile{ display: none; }
}

.content {
    max-width: 90%;
    margin:0 auto;
}
@media (min-width: 768px) {
    .content {
        position: relative;
        max-width: 900px;
        margin:0 auto;
    }
}

.pd-0 { padding: 0; }
.mg-0 { margin: 0; }
.fill { width: 100%; height: 100%; }

.text-center { text-align: center; }
.text-left { text-align: left; }

.flex-row { display: flex; }
.flex-col {
    display: flex;
    flex-direction: column;
}
.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.inline { display: inline-block; }
`;

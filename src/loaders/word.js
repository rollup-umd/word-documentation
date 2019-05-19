module.exports = `
<div class="bg-wrapper">
  <div class="centered">
    <div class="lds-css ng-scope">
      <div style="width:100%;height:100%" class="lds-wedges">
        <div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
      <style type="text/css">
      .bg-wrapper {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #a1c4fd; /* Old browsers */
        background: -moz-linear-gradient(top,  #a1c4fd 0%, #c2e9fb 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top,  #a1c4fd 0%,#c2e9fb 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom,  #a1c4fd 0%,#c2e9fb 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a1c4fd', endColorstr='#c2e9fb',GradientType=0 ); /* IE6-9 */
      }
      .centered {
        position: fixed;
        top: 50%;
        left: 50%;
        /* bring your own prefixes */
        -webkit-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
      @keyframes lds-wedges {
        0% {
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @-webkit-keyframes lds-wedges {
        0% {
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      .lds-wedges {
        position: relative;
      }
      .lds-wedges > div > div {
        -webkit-transform-origin: 100px 100px;
        transform-origin: 100px 100px;
        -webkit-animation: lds-wedges 3s linear infinite;
        animation: lds-wedges 3s linear infinite;
        opacity: 0.8;
      }
      .lds-wedges > div > div > div {
        position: absolute;
        left: 30px;
        top: 30px;
        width: 70px;
        height: 70px;
        border-radius: 70px 0 0 0;
        -webkit-transform-origin: 100px 100px;
        -o-transform-origin: 100px 100px;
        -moz-transform-origin: 100px 100px;
        transform-origin: 100px 100px;
      }
      .lds-wedges > div div:nth-child(1) > div {
        background: #b65955;
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      .lds-wedges > div div:nth-child(1) {
        -webkit-animation-duration: 0.75s;
        -o-animation-duration: 0.75s;
        -moz-animation-duration: 0.75s;
        animation-duration: 0.75s;
      }
      .lds-wedges > div div:nth-child(2) > div {
        background: #a5b75c;
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      .lds-wedges > div div:nth-child(2) {
        -webkit-animation-duration: 1s;
        -o-animation-duration: 1s;
        -moz-animation-duration: 1s;
        animation-duration: 1s;
      }
      .lds-wedges > div div:nth-child(3) > div {
        background: #59aac2;
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      .lds-wedges > div div:nth-child(3) {
        -webkit-animation-duration: 1.5s;
        -o-animation-duration: 1.5s;
        -moz-animation-duration: 1.5s;
        animation-duration: 1.5s;
      }
      .lds-wedges > div div:nth-child(4) > div {
        background: #4f83ba;
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      .lds-wedges > div div:nth-child(4) {
        -webkit-animation-duration: 3s;
        -o-animation-duration: 3s;
        -moz-animation-duration: 3s;
        animation-duration: 3s;
      }
      .lds-wedges {
        width: 200px !important;
        height: 200px !important;
        -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
        -o-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
        -moz-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
        transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
      }
      </style>
    </div>
  </div>
</div>`;

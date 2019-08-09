import { css } from 'lit-element';
const styles = css`
:host{z-index:1;display:block;min-width:var(--spectrum-slider-min-width,var(--spectrum-global-dimension-size-1600));-webkit-user-select:none;-moz-user-select:none;user-select:none}#controls,:host{position:relative;min-height:var(--spectrum-slider-height,var(--spectrum-global-dimension-size-400))}#controls{display:inline-block;box-sizing:border-box;z-index:auto;width:calc(100% - var(--spectrum-slider-handle-width,
var(--spectrum-global-dimension-size-200))/2*2);margin-left:calc(var(--spectrum-slider-handle-width,
var(--spectrum-global-dimension-size-200))/2);vertical-align:top}#buffer,#fill,#ramp,.track{height:var(--spectrum-slider-track-height,2px);box-sizing:border-box;position:absolute;z-index:1;top:calc(var(--spectrum-slider-height, var(--spectrum-global-dimension-size-400))/2);left:0;right:auto;margin-top:calc(var(--spectrum-slider-fill-track-height, 2px)/-2);pointer-events:none}#buffer,#fill,.track{padding:0 var(--spectrum-slider-handle-gap,4px) 0 0;margin-left:calc(var(--spectrum-slider-handle-width,
var(--spectrum-global-dimension-size-200))/2*-1)}#buffer:before,#fill:before,.track:before{content:"";display:block;height:100%;border-radius:var(--spectrum-slider-track-border-radius,1px)}#fill{margin-left:0;padding:0 0 0 calc(var(--spectrum-slider-handle-width,
var(--spectrum-global-dimension-size-200))/2 + var(--spectrum-slider-handle-gap, 4px))}.spectrum-Slider-fill--right{padding:0 calc(var(--spectrum-slider-handle-width,
var(--spectrum-global-dimension-size-200))/2 + var(--spectrum-slider-handle-gap, 4px)) 0 0}#buffer{padding:0 var(--spectrum-slider-handle-gap,4px) 0 0;z-index:2}#buffer~#buffer,.track~.track{left:auto;right:0;padding:0 0 0 var(--spectrum-slider-handle-gap,4px);margin-left:0;margin-right:calc(var(--spectrum-slider-handle-width,
var(--spectrum-global-dimension-size-200))/2*-1)}#buffer~#buffer{margin-right:0;padding:0 0 0 calc(var(--spectrum-slider-handle-gap, 4px) + var(--spectrum-slider-handle-width,
var(--spectrum-global-dimension-size-200))/2)}#buffer~#buffer:after{display:none}:host([variant=range]) #value{-webkit-user-select:text;-moz-user-select:text;user-select:text}:host([variant=range]) .track:first-of-type{padding:0 var(--spectrum-slider-handle-gap,4px) 0 0;left:0;right:auto;margin-left:calc(var(--spectrum-slider-handle-width,
var(--spectrum-global-dimension-size-200))/2*-1)}:host([variant=range]) .track{padding:0 calc(var(--spectrum-slider-handle-gap, 4px) + var(--spectrum-slider-handle-width,
var(--spectrum-global-dimension-size-200))/2) 0 calc(var(--spectrum-slider-handle-gap, 4px) + var(--spectrum-slider-handle-width,
var(--spectrum-global-dimension-size-200))/2);left:auto;right:auto;margin:0}:host([variant=range]) .track:last-of-type{padding:0 0 0 var(--spectrum-slider-handle-gap,4px);left:auto;right:0;margin-right:calc(var(--spectrum-slider-handle-width,
var(--spectrum-global-dimension-size-200))/2*-1)}#ramp{margin-top:0;height:var(--spectrum-slider-ramp-track-height,16px);position:absolute;left:calc(var(--spectrum-slider-handle-width,
var(--spectrum-global-dimension-size-200))/2*-1);right:calc(var(--spectrum-slider-handle-width,
var(--spectrum-global-dimension-size-200))/2*-1);top:calc(var(--spectrum-slider-ramp-track-height, 16px)/2)}#ramp svg{width:100%;height:100%}#handle{position:absolute;left:0;top:calc(var(--spectrum-slider-height, var(--spectrum-global-dimension-size-400))/2);z-index:2;display:inline-block;box-sizing:border-box;width:var(--spectrum-slider-handle-width,var(--spectrum-global-dimension-size-200));height:var(--spectrum-slider-handle-height,var(--spectrum-global-dimension-size-200));margin:calc(var(--spectrum-slider-handle-width,
var(--spectrum-global-dimension-size-200))/-2) 0 0 calc(var(--spectrum-slider-handle-width,
var(--spectrum-global-dimension-size-200))/-2);border-radius:var(--spectrum-slider-handle-border-radius,var(--spectrum-global-dimension-size-100));transition:border-width var(--spectrum-slider-animation-duration,.13s) ease-in-out;outline:none;cursor:pointer;cursor:-webkit-grab;cursor:grab;border:var(--spectrum-slider-handle-border-size,2px) solid var(--spectrum-slider-handle-border-color,var(--spectrum-global-color-gray-700));background:var(--spectrum-alias-background-color-default,var(--spectrum-global-color-gray-100))}#handle:active,:host([dragging]) #handle,:host([handle-highlight]) #handle{border-width:var(--spectrum-slider-handle-border-size-down,var(--spectrum-global-dimension-size-75));cursor:ns-resize;cursor:-webkit-grabbing;cursor:grabbing}#handle.is-tophandle,#handle:active,:host([dragging]) #handle,:host([handle-highlight]) #handle{z-index:3}#input{margin:0;width:var(--spectrum-slider-handle-width,var(--spectrum-global-dimension-size-200));height:var(--spectrum-slider-handle-height,var(--spectrum-global-dimension-size-200));padding:0;position:absolute;top:calc(var(--spectrum-slider-handle-width,
var(--spectrum-global-dimension-size-200))/-2/4);left:calc(var(--spectrum-slider-handle-width,
var(--spectrum-global-dimension-size-200))/-2/4);overflow:hidden;opacity:.000001;cursor:default;-webkit-appearance:none;border:0;pointer-events:none;background:transparent}#input:focus{outline:none}#labelContainer{display:flex;position:relative;width:auto;padding-top:var(--spectrum-fieldlabel-padding-top,var(--spectrum-global-dimension-size-50));font-size:var(--spectrum-label-text-size,var(--spectrum-global-dimension-size-150));line-height:var(--spectrum-label-text-line-height,1.3);color:var(--spectrum-label-text-color,var(--spectrum-global-color-gray-700))}#label{padding-left:0;flex-grow:1}#value{flex-grow:0;padding-right:0;cursor:default;margin-left:var(--spectrum-slider-label-gap-x,var(--spectrum-global-dimension-size-200))}.spectrum-Slider-ticks{display:flex;justify-content:space-between;z-index:0;margin:0 calc(var(--spectrum-slider-handle-width,
var(--spectrum-global-dimension-size-200))/2*-1);margin-top:calc(var(--spectrum-slider-tick-mark-height, 10px) + var(--spectrum-slider-track-height, 2px)/2)}#tick{position:relative}#tick,#tick:after{width:var(--spectrum-slider-tick-mark-width,2px)}#tick:after{display:block;position:absolute;top:0;left:calc(50% - var(--spectrum-slider-tick-mark-width, 2px)/2);content:"";height:var(--spectrum-slider-tick-mark-height,10px);border-radius:var(--spectrum-slider-tick-mark-border-radius,1px);background-color:var(--spectrum-slider-tick-mark-color,var(--spectrum-global-color-gray-300))}#tick #tickLabel{display:flex;align-items:center;justify-content:center;margin:var(--spectrum-slider-label-gap-x,var(--spectrum-global-dimension-size-200)) calc(var(--spectrum-slider-label-gap-x,
var(--spectrum-global-dimension-size-200))*-1) 0 calc(var(--spectrum-slider-label-gap-x,
var(--spectrum-global-dimension-size-200))*-1);font-size:var(--spectrum-label-text-size,var(--spectrum-global-dimension-size-150));line-height:var(--spectrum-label-text-line-height,1.3)}#tick:first-of-type #tickLabel,#tick:last-of-type #tickLabel{display:block;position:absolute;margin:var(--spectrum-slider-label-gap-x,var(--spectrum-global-dimension-size-200)) 0 0 0}#tick:first-of-type #tickLabel{left:0}#tick:last-of-type #tickLabel{right:0}:host([variant=color]) #labelContainer,:host([variant=color]) .spectrum-Dial-labelContainer{padding-bottom:var(--spectrum-fieldlabel-padding-bottom,var(--spectrum-global-dimension-size-65))}:host([variant=color]) #controls,:host([variant=color]) #controls:before,:host([variant=color]) .spectrum-Dial-controls,:host([variant=color]) .spectrum-Dial-controls:before,:host([variant=color]) .track{min-height:auto;height:var(--spectrum-slider-color-track-height,24px);margin-left:0;width:100%}:host([variant=color]) #controls:before,:host([variant=color]) .spectrum-Dial-controls:before{display:block;content:""}:host([variant=color]) #controls:before,:host([variant=color]) .spectrum-Dial-controls:before,:host([variant=color]) .track{top:0;padding:0;margin-top:0;margin-right:0;border-radius:var(--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50))}:host([variant=color]) #handle,:host([variant=color]) .spectrum-Dial-handle{top:50%}:host([disabled]){cursor:default}:host([disabled]) #handle,:host([disabled]) .spectrum-Dial-handle{cursor:default;pointer-events:none}:host([disabled][variant=color]) #handle:active,:host([disabled][variant=color]) #handle:hover,:host([disabled][variant=color]) .spectrum-Dial-handle:active,:host([disabled][variant=color]) .spectrum-Dial-handle:hover{border-width:var(--spectrum-slider-color-handle-outset-border-size,1px)}.track:before{background:var(--spectrum-slider-track-color,var(--spectrum-global-color-gray-300))}#fill:before,:host([variant=filled]) .track:first-child:before{background:var(--spectrum-slider-fill-track-color,var(--spectrum-global-color-gray-700))}#buffer:after,#buffer:before{background:var(--spectrum-slider-player-track-buffer-color,var(--spectrum-global-color-gray-500))}#ramp path{fill:var(--spectrum-slider-track-color,var(--spectrum-global-color-gray-300))}#handle:hover{border-color:var(--spectrum-slider-handle-border-color-hover,var(--spectrum-global-color-gray-800))}:host([handle-highlight]) #handle{border-color:var(--spectrum-slider-handle-border-color-key-focus,var(--spectrum-global-color-blue-400));background:var(--spectrum-slider-handle-background-color-key-focus,var(--spectrum-global-color-blue-400))}#handle:active,:host([dragging]) #handle{border-color:var(--spectrum-slider-handle-border-color-down,var(--spectrum-global-color-gray-800))}.spectrum-Slider--ramp #handle,.spectrum-Slider--ramp .spectrum-Dial-handle{box-shadow:0 0 0 4px var(--spectrum-alias-background-color-default,var(--spectrum-global-color-gray-100))}:host([dragging]) #handle{border-color:var(--spectrum-slider-handle-border-color-down,var(--spectrum-global-color-gray-800));background:var(--spectrum-slider-handle-background-color-down,transparent)}:host([variant=range]) .track:not(:first-of-type):not(:last-of-type):before{background:var(--spectrum-slider-fill-track-color,var(--spectrum-global-color-gray-700))}:host([variant=color]) #controls:before,:host([variant=color]) .spectrum-Dial-controls:before{background-color:var(--spectrum-global-color-static-white,#fff);background-image:linear-gradient(-45deg,transparent 75.5%,var(--spectrum-global-color-static-gray-500,#bcbcbc) 0),linear-gradient(45deg,transparent 75.5%,var(--spectrum-global-color-static-gray-500,#bcbcbc) 0),linear-gradient(-45deg,var(--spectrum-global-color-static-gray-500,#bcbcbc) 25.5%,transparent 0),linear-gradient(45deg,var(--spectrum-global-color-static-gray-500,#bcbcbc) 25.5%,transparent 0);background-size:var(--spectrum-global-dimension-static-size-200,16px) var(--spectrum-global-dimension-static-size-200,16px);background-position:0 0,0 var(--spectrum-global-dimension-static-size-100,8px),var(--spectrum-global-dimension-static-size-100,8px) calc(-1*var(--spectrum-global-dimension-static-size-100, 8px)),calc(-1*var(--spectrum-global-dimension-static-size-100, 8px)) 0;z-index:0}:host([variant=color]) .track{background-color:initial;background-image:linear-gradient(90deg,var(--spectrum-slider-color-track-background-color-gradient-start,var(--spectrum-global-color-blue-400)),var(--spectrum-slider-color-track-background-color-gradient-end,var(--spectrum-global-color-blue-700)));box-shadow:inset 0 0 0 1px var(--spectrum-slider-color-track-border-color,rgba(0,0,0,.05))}:host([variant=color]) .track:before{display:none}:host([variant=color]) #handle,:host([variant=color]) .spectrum-Dial-handle{box-shadow:inset 0 0 0 1px var(--spectrum-slider-color-handle-inset-border-color,rgba(0,0,0,.05)),0 0 0 1px var(--spectrum-slider-color-handle-outset-border-color,rgba(0,0,0,.05));border-color:var(--spectrum-slider-color-handle-border-color,var(--spectrum-global-color-gray-50));background:var(--spectrum-slider-color-handle-color,transparent)}:host([variant=color][handle-highlight]) #handle{box-shadow:0 0 0 1px var(--spectrum-slider-color-handle-outset-border-color-key-focus,rgba(0,0,0,.05))}:host([disabled]) #labelContainer,:host([disabled]) .spectrum-Dial-labelContainer{color:var(--spectrum-label-text-color-disabled,var(--spectrum-global-color-gray-500))}:host([disabled]) #handle,:host([disabled]) .spectrum-Dial-handle{border-color:var(--spectrum-slider-handle-border-color-disabled,var(--spectrum-global-color-gray-400));background:var(--spectrum-alias-background-color-default,var(--spectrum-global-color-gray-100))}:host([disabled]) #handle:active,:host([disabled]) #handle:hover,:host([disabled]) .spectrum-Dial-handle:active,:host([disabled]) .spectrum-Dial-handle:hover{border-color:var(--spectrum-slider-handle-border-color-disabled,var(--spectrum-global-color-gray-400));background:var(--spectrum-slider-handle-background-color,transparent)}:host([disabled]) .track:before{background:var(--spectrum-slider-track-color-disabled,var(--spectrum-global-color-gray-300))}:host([disabled]) #fill:before,:host([disabled][variant=filled]) .track:first-child:before{background:var(--spectrum-slider-fill-track-color-disabled,var(--spectrum-global-color-gray-300))}:host([disabled]) #buffer:before{background:var(--spectrum-slider-player-track-buffer-color-disabled,var(--spectrum-global-color-gray-300))}:host([disabled]) #ramp path{fill:var(--spectrum-slider-ramp-track-color-disabled,var(--spectrum-global-color-gray-200))}:host([disabled][variant=color]) .track{background:var(--spectrum-slider-color-track-color-disabled,var(--spectrum-global-color-gray-200))!important;box-shadow:none}:host([disabled][variant=color]) #handle,:host([disabled][variant=color]) #handle:active,:host([disabled][variant=color]) #handle:hover,:host([disabled][variant=color]) .spectrum-Dial-handle,:host([disabled][variant=color]) .spectrum-Dial-handle:active,:host([disabled][variant=color]) .spectrum-Dial-handle:hover{background:var(--spectrum-slider-color-handle-color-disabled,transparent);box-shadow:none;border-color:var(--spectrum-slider-color-handle-border-color-disabled,var(--spectrum-global-color-gray-400))}:host([disabled][variant=range]) .track:not(:first-of-type):not(:last-of-type):before{background:var(--spectrum-slider-fill-track-color-disabled,var(--spectrum-global-color-gray-300))}
`;
export default styles;
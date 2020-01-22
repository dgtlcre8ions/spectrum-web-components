import"./lit-element-45614e86.js";import{j as c,w as e}from"./storybook-preview-54ad6afb.js";import"./tslib.es6-d9c764b6.js";import"./focusable-b12aa67a.js";import"./checkbox-base-6ecca498.js";import"./index-a18ca6b2.js";var i=()=>c`
        <sp-switch @click="${e("Click")}" @change="${e("Change")}">
            Switch
        </sp-switch>
    `,s=()=>c`
        <sp-switch
            checked
            @click="${e("Click")}"
            @change="${e("Change")}"
        >
            Switch
        </sp-switch>
    `,t=()=>c`
        <sp-switch
            quiet
            @click="${e("Click")}"
            @change="${e("Change")}"
        >
            Switch
        </sp-switch>
    `,h=()=>c`
        <sp-switch
            quiet
            checked
            @click="${e("Click")}"
            @change="${e("Change")}"
        >
            Switch
        </sp-switch>
    `;h.story={name:"Quiet checked"};var a=()=>c`
        <sp-switch
            autofocus
            @click="${e("Click")}"
            @change="${e("Change")}"
        >
            Switch
        </sp-switch>
    `,p=()=>c`
        <sp-switch disabled>Switch</sp-switch>
    `,w=()=>c`
        <sp-switch disabled checked>Switch</sp-switch>
    `;w.story={name:"Disabled checked"};var l=["Default","Checked","Quiet","quietChecked","Autofocus","Disabled","disabledChecked"];export default{component:"sp-switch",title:"Switch"};export{a as Autofocus,s as Checked,i as Default,p as Disabled,t as Quiet,l as __namedExportsOrder,w as disabledChecked,h as quietChecked};
//# sourceMappingURL=switch.stories-72f9ec87.js.map
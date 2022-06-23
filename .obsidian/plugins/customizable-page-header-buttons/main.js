/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
If you want to view the source, visit the plugin's github repository:
https://github.com/kometenstaub/customizable-page-header-buttons

This plugin is MIT-licensed:

	MIT License

	Copyright (c) 2021-2022 kometenstaub

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.


The commandSuggester, iconPicker, Obsidian icon names and the biggest part of the settings tab have been adapted from the Obsidian Customizable Sidebar Plugin (https://github.com/phibr0/obsidian-customizable-sidebar).
It is MIT-licensed:
	MIT License

	Copyright (c) 2021 Phillip

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.


*/

var K=Object.create;var x=Object.defineProperty;var J=Object.getOwnPropertyDescriptor;var Q=Object.getOwnPropertyNames;var W=Object.getPrototypeOf,X=Object.prototype.hasOwnProperty;var D=n=>x(n,"__esModule",{value:!0});var Y=(n,t)=>{D(n);for(var i in t)x(n,i,{get:t[i],enumerable:!0})},Z=(n,t,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of Q(t))!X.call(n,e)&&e!=="default"&&x(n,e,{get:()=>t[e],enumerable:!(i=J(t,e))||i.enumerable});return n},v=n=>Z(D(x(n!=null?K(W(n)):{},"default",n&&n.__esModule&&"default"in n?{get:()=>n.default,enumerable:!0}:{value:n,enumerable:!0})),n);Y(exports,{default:()=>N});var h=v(require("obsidian"));var d=v(require("obsidian"));var G=v(require("obsidian"));var y=v(require("obsidian"));var k=v(require("obsidian"));var M=["add-note-glyph","any-key","audio-file","blocks","bold-glyph","box-glyph","bracket-glyph","broken-link","bullet-list-glyph","bullet-list","calendar-glyph","calendar-with-checkmark","check-in-circle","check-small","checkbox-glyph","checkmark","clock-glyph","clock","cloud","code-glyph","command-glyph","compress-glyph","create-new","cross-in-box","cross","crossed-star","dice-glyph","dice","document","documents","dot-network","double-down-arrow-glyph","double-up-arrow-glyph","down-arrow-with-tail","down-chevron-glyph","down-curly-arrow-glyph","duplicate-glyph","enlarge-glyph","enter","exit-fullscreen","expand-vertically","file-explorer-glyph","filled-pin","folder","forward-arrow","fullscreen","gear","github-glyph","go-to-file","graph-glyph","hashtag","heading-glyph","help","highlight-glyph","horizontal-split","image-file","image-glyph","import-glyph","indent-glyph","info","install","italic-glyph","keyboard-glyph","languages","left-arrow-with-tail","left-arrow","left-chevron-glyph","lines-of-text","link-glyph","link","links-coming-in","links-going-out","logo-crystal","magnifying-glass","merge-files-glyph","merge-files","microphone-filled","microphone","minus-with-circle","navigate-glyph","note-glyph","number-list-glyph","open-elsewhere-glyph","open-vault","pane-layout","paper-plane-glyph","paper-plane","paste-text","paste","paused","pdf-file","pencil","percent-sign-glyph","pin","play-audio-glyph","plus-minus-glyph","plus-with-circle","popup-open","presentation-glyph","presentation","price-tag-glyph","question-mark-glyph","quote-glyph","reading-glasses","redo-glyph","reset","restore-file-glyph","right-arrow-with-tail","right-arrow","right-chevron-glyph","right-triangle","run-command","scissors-glyph","scissors","search-glyph","search","select-all-text","sheets-in-box","split","stacked-levels","star-glyph","star-list","star","stop-audio-glyph","strikethrough-glyph","switch","sync-small","sync","tag-glyph","three-horizontal-bars","tomorrow-glyph","trash","two-blank-pages","undo-glyph","unindent-glyph","up-and-down-arrows","up-arrow-with-tail","up-chevron-glyph","up-curly-arrow-glyph","uppercase-lowercase-a","vault","vertical-split","vertical-three-dots","wand-glyph","wand","workspace-glyph","wrench-screwdriver-glyph","yesterday-glyph"],u="page-header-button",w="titlebar-button",T="titlebar-center",E=[w,u];function ee(n){return n.includes(":")?n.split(":")[1].trim():n}function q(){let n=24;return k.Platform.isMobile?n=24:k.Platform.isDesktop&&(n=18),n}function C(n,t,i,e,l,s="a"){let c=ee(n),o=l.concat([t]),a=createEl(s,{cls:o,attr:{"aria-label-position":"bottom","aria-label":c}});return(0,k.setIcon)(a,i,e),a}function S(n){for(let t=n.length;t>=0;t--)n[t]&&n[t].remove()}function L(n,t,i){let e=n.getElementsByClassName(`${i} ${u} ${t}`);e[0]&&e[0].remove()}function H(){return document.getElementsByClassName("titlebar-text")[0].getText()}function m(n){let t=document.getElementsByClassName(`${u} ${T}`)[0];t!==void 0&&(t.classList.remove(u,T),t.addClass("titlebar-text"),t.innerHTML=n)}function b(){let t=P().getElementsByClassName(`${u} ${w}`);S(t)}function O(){let n=document.getElementsByClassName("titlebar-text")[0];return n.classList.remove("titlebar-text"),n.addClasses([u,T]),n.innerHTML="",n}function _(){let n=[];app.workspace.iterateAllLeaves(t=>{n.push(t.view.containerEl)});for(let t=0;t<n.length;t++){let e=n[t].getElementsByClassName(u);e.length>0&&S(e)}}function I(n){let t=[];app.workspace.iterateAllLeaves(i=>{t.push(i.view.containerEl)});for(let i=0;i<t.length;i++){let e=t[i];L(e,n,"view-action")}}function j(){r(),g()}function r(){let t=R().getElementsByClassName(u);t.length>0&&S(t)}function g(){let t=z().getElementsByClassName(u);t.length>0&&S(t)}function $(n){let t=R();L(t,n,w)}function F(n){let t=z();L(t,n,w)}function U(n){let t=P();L(t,n,w)}function R(){return document.getElementsByClassName("titlebar-button-container mod-left")[0]}function z(){return document.getElementsByClassName("titlebar-button-container mod-right")[0]}function P(){return document.getElementsByClassName(`${u} ${T}`)[0]}var p=class extends y.FuzzySuggestModal{constructor(t,i,e,l=-1){super(t.app);this.plugin=t,this.command=i,this.type=e,this.index=l,this.setPlaceholder("Please pick an icon")}cap(t){return t.split(" ").map(e=>e[0].toUpperCase()+e.substring(1)).join(" ")}getItems(){return this.plugin.iconList}getItemText(t){return this.cap(t.replace("lucide-","").replace(/-/gi," "))}renderSuggestion(t,i){i.addClass("CS-icon-container");let e=i.createDiv({cls:"CS-icon"});(0,y.setIcon)(e,t.item),super.renderSuggestion(t,i)}async onChooseItem(t){let{id:i,name:e}=this.command,{settings:l}=this.plugin,s=0;if(this.type==="page"){let c="both";this.index===-1?c="both":c=l.enabledButtons[this.index].showButtons;let o={id:i,icon:t,name:e,showButtons:c};this.index===-1?l.enabledButtons.push(o):(l.enabledButtons[this.index]=o,new y.Notice("This change will take effect for new panes only."))}else{let c={id:i,icon:t,name:e};if(this.index===-1)if(this.type==="title-left")l.titleLeft.push(c);else if(this.type==="title-right")l.titleRight.push(c);else{let o=l.titleCenter.length;o!==0&&(s=o),l.titleCenter.push(c)}else if(this.type==="title-left")l.titleLeft[this.index]=c;else if(this.type==="title-right")l.titleRight[this.index]=c;else{let o=l.titleCenter.length;o!==0&&(s=o),l.titleCenter[this.index]=c}}await this.plugin.saveSettings(),this.type==="title-left"?(r(),this.plugin.addLeftTitleBarButtons()):this.type==="title-right"?(g(),this.plugin.addRightTitleBarButtons()):s===0?this.plugin.addInitialCenterTitleBarButtons():l.titleCenter.length===0?m(this.plugin.titlebarText):(b(),this.plugin.addCenterTitleBarButtons()),setTimeout(()=>{dispatchEvent(new Event("TopBar-addedCommand"))},100)}};var B=class extends G.FuzzySuggestModal{constructor(t,i){super(t.app);this.plugin=t,this.type=i}pushToSettings(t,i,e){e==="titleRight"||e==="titleLeft"||e==="titleCenter"?t[e].push({id:i.id,icon:i.icon,name:i.name}):t.enabledButtons.push({id:i.id,icon:i.icon,name:i.name,showButtons:"both"})}getItems(){return this.app.commands.listCommands()}getItemText(t){return t.name}async onChooseItem(t,i){let{settings:e}=this.plugin,l=0;if(t.icon!==void 0){if(this.type==="page")this.pushToSettings(e,t,"enabledSettings");else if(this.type==="title-left")this.pushToSettings(e,t,"titleLeft");else if(this.type==="title-right")this.pushToSettings(e,t,"titleRight");else{let s=this.plugin.settings.titleCenter.length;s!==0&&(l=s),this.pushToSettings(e,t,"titleCenter")}await this.plugin.saveSettings(),this.type==="title-left"?(r(),this.plugin.addLeftTitleBarButtons()):this.type==="title-right"?(g(),this.plugin.addRightTitleBarButtons()):this.type==="title-center"&&(l===0?this.plugin.addInitialCenterTitleBarButtons():this.plugin.settings.titleCenter.length===0?m(this.plugin.titlebarText):(b(),this.plugin.addCenterTitleBarButtons())),setTimeout(()=>{dispatchEvent(new Event("TopBar-addedCommand"))},100)}else new p(this.plugin,t,this.type).open()}};var A=class extends d.PluginSettingTab{constructor(t,i){super(t,i);this.plugin=i,this.plugin.listener=()=>{this.display()},this.containerEl.addClass("page-header-button"),addEventListener("TopBar-addedCommand",this.plugin.listener)}display(){let{containerEl:t}=this,{settings:i}=this.plugin;t.empty(),t.createEl("h3",{text:"Page Header Buttons"}),t.createEl("p",{text:"The buttons are added in the order in which they are shown here. This only takes effect after a reload."}),new d.Setting(t).setName("Show buttons on desktop").setDesc("By default, the buttons will only be shown in Obsidian Mobile.                 It requires a reload after being toggled to take effect.").addToggle(e=>{e.setValue(i.desktop).onChange(async l=>{if(i.desktop=l,await this.plugin.saveSettings(),this.display(),!l){for(let s of i.enabledButtons)s.showButtons="mobile";await this.plugin.saveSettings()}})}),new d.Setting(t).setName("Add Button").setDesc("Add a new button left to the switch edit/preview mode toggle.").addButton(e=>{e.setButtonText("Add Command").onClick(()=>{new B(this.plugin,"page").open()})}),this.app.plugins.plugins["pane-relief"]&&new d.Setting(t).setName("Pane Relief count").setDesc("Enable to show the pane relief count next to back/forward buttons. Needs a reload to take effect.").addToggle(e=>{e.setValue(i.paneRelief).onChange(async l=>{i.paneRelief=l,await this.plugin.saveSettings()})}),new d.Setting(t).setName("Button spacing").setDesc("Set the spacing for Page Header buttons.").addButton(e=>{e.setButtonText("Click to go to the Style settings. Requires the Style settings plugin."),e.onClick(l=>this.app.setting.openTabById("obsidian-style-settings"))});for(let e=0;e<i.enabledButtons.length;e++){let l=i.enabledButtons[e],s=createDiv({cls:"CS-settings-icon"});(0,d.setIcon)(s,l.icon,24);let c=new d.Setting(t).setName(l.name);i.desktop&&c.addDropdown(o=>{o.addOption("both","Add button for both mobile and desktop.").addOption("mobile","Add button only for mobile.").addOption("desktop","Add button only for desktop.").setValue(l.showButtons).onChange(async a=>{l.showButtons=a,i.enabledButtons[e]=l,await this.plugin.saveSettings(),a==="desktop"&&d.Platform.isMobile?I(l.id):a==="mobile"&&d.Platform.isDesktop&&I(l.id)})}),e>0&&c.addExtraButton(o=>{o.setIcon("up-arrow-with-tail").setTooltip("Move button to the left").onClick(async()=>{i.enabledButtons[e]=i.enabledButtons[e-1],i.enabledButtons[e-1]=l,await this.plugin.saveSettings(),this.display()})}),e<i.enabledButtons.length-1&&c.addExtraButton(o=>{o.setIcon("down-arrow-with-tail").setTooltip("Move button to the right").onClick(async()=>{i.enabledButtons[e]=i.enabledButtons[e+1],i.enabledButtons[e+1]=l,await this.plugin.saveSettings(),this.display()})}),c.addExtraButton(o=>{o.setIcon("trash").setTooltip("Remove Command").onClick(async()=>{i.enabledButtons.remove(l),I(l.id),await this.plugin.saveSettings(),this.display()})}).addExtraButton(o=>{o.setIcon("gear").setTooltip("Edit Icon").onClick(()=>{let a=i.enabledButtons.findIndex(f=>f===l);new p(this.plugin,l,"page",a).open()})}),c.nameEl.prepend(s),c.nameEl.addClass("CS-flex")}if(d.Platform.isDesktopApp){t.createEl("br"),t.createEl("h3",{text:"Titlebar buttons"}),t.createEl("h4",{text:"Left titlebar"}),new d.Setting(t).setName("Add Button").setDesc("Add a new button right to the back/forward buttons.").addButton(e=>{e.setButtonText("Add Command").onClick(()=>{new B(this.plugin,"title-left").open()})});for(let e=0;e<i.titleLeft.length;e++){let l=i.titleLeft[e],s=createDiv({cls:"CS-settings-icon"});(0,d.setIcon)(s,l.icon,24);let c=new d.Setting(t).setName(l.name);e>0&&c.addExtraButton(o=>{o.setIcon("up-arrow-with-tail").setTooltip("Move button to the left").onClick(async()=>{i.titleLeft[e]=i.titleLeft[e-1],i.titleLeft[e-1]=l,await this.plugin.saveSettings(),r(),this.plugin.addLeftTitleBarButtons(),this.display()})}),e<i.titleLeft.length-1&&c.addExtraButton(o=>{o.setIcon("down-arrow-with-tail").setTooltip("Move button to the right").onClick(async()=>{i.titleLeft[e]=i.titleLeft[e+1],i.titleLeft[e+1]=l,await this.plugin.saveSettings(),r(),this.plugin.addLeftTitleBarButtons(),this.display()})}),c.addExtraButton(o=>{o.setIcon("trash").setTooltip("Remove Command").onClick(async()=>{i.titleLeft.remove(l),await this.plugin.saveSettings(),$(l.id),this.display()})}).addExtraButton(o=>{o.setIcon("gear").setTooltip("Edit Icon").onClick(()=>{let a=i.titleLeft.findIndex(f=>f===l);new p(this.plugin,l,"title-left",a).open(),r(),this.plugin.addLeftTitleBarButtons()})}),c.nameEl.prepend(s),c.nameEl.addClass("CS-flex")}t.createEl("h4",{text:"Right titlebar"}),new d.Setting(t).setName("Add Button").setDesc("Add a new button left to the minimize/maximize/close buttons.").addButton(e=>{e.setButtonText("Add Command").onClick(()=>{new B(this.plugin,"title-right").open()})});for(let e=0;e<i.titleRight.length;e++){let l=i.titleRight[e],s=createDiv({cls:"CS-settings-icon"});(0,d.setIcon)(s,l.icon,24);let c=new d.Setting(t).setName(l.name);e>0&&c.addExtraButton(o=>{o.setIcon("up-arrow-with-tail").setTooltip("Move button to the left").onClick(async()=>{i.titleRight[e]=i.titleRight[e-1],i.titleRight[e-1]=l,await this.plugin.saveSettings(),g(),this.plugin.addRightTitleBarButtons(),this.display()})}),e<i.titleRight.length-1&&c.addExtraButton(o=>{o.setIcon("down-arrow-with-tail").setTooltip("Move button to the right").onClick(async()=>{i.titleRight[e]=i.titleRight[e+1],i.titleRight[e+1]=l,await this.plugin.saveSettings(),g(),this.plugin.addRightTitleBarButtons(),this.display()})}),c.addExtraButton(o=>{o.setIcon("trash").setTooltip("Remove Command").onClick(async()=>{i.titleRight.remove(l),await this.plugin.saveSettings(),F(l.id),this.display()})}).addExtraButton(o=>{o.setIcon("gear").setTooltip("Edit Icon").onClick(()=>{let a=i.titleRight.findIndex(f=>f===l);new p(this.plugin,l,"title-right",a).open(),g(),this.plugin.addRightTitleBarButtons()})}),c.nameEl.prepend(s),c.nameEl.addClass("CS-flex")}t.createEl("h4",{text:"Center titlebar"}),new d.Setting(t).setName("Add Button").setDesc("Add a new button to the center titlebar.").addButton(e=>{e.setButtonText("Add Command").onClick(()=>{new B(this.plugin,"title-center").open()})});for(let e=0;e<i.titleCenter.length;e++){let l=i.titleCenter[e],s=createDiv({cls:"CS-settings-icon"});(0,d.setIcon)(s,l.icon,24);let c=new d.Setting(t).setName(l.name);e>0&&c.addExtraButton(o=>{o.setIcon("up-arrow-with-tail").setTooltip("Move button to the left").onClick(async()=>{i.titleCenter[e]=i.titleCenter[e-1],i.titleCenter[e-1]=l,await this.plugin.saveSettings(),b(),this.plugin.addCenterTitleBarButtons(),this.display()})}),e<i.titleCenter.length-1&&c.addExtraButton(o=>{o.setIcon("down-arrow-with-tail").setTooltip("Move button to the right").onClick(async()=>{i.titleCenter[e]=i.titleCenter[e+1],i.titleCenter[e+1]=l,await this.plugin.saveSettings(),b(),this.plugin.addCenterTitleBarButtons(),this.display()})}),c.addExtraButton(o=>{o.setIcon("trash").setTooltip("Remove Command").onClick(async()=>{i.titleCenter.remove(l),await this.plugin.saveSettings(),this.plugin.settings.titleCenter.length===0?m(this.plugin.titlebarText):U(l.id),this.display()})}).addExtraButton(o=>{o.setIcon("gear").setTooltip("Edit Icon").onClick(()=>{let a=i.titleCenter.findIndex(f=>f===l);new p(this.plugin,l,"title-center",a).open()})}),c.nameEl.prepend(s),c.nameEl.addClass("CS-flex")}}}};var V=["lucide-activity","lucide-airplay","lucide-alarm-check","lucide-alarm-clock-off","lucide-alarm-clock","lucide-alarm-minus","lucide-alarm-plus","lucide-album","lucide-alert-circle","lucide-alert-octagon","lucide-alert-triangle","lucide-align-center-horizontal","lucide-align-center","lucide-align-center-vertical","lucide-align-end-horizontal","lucide-align-end-vertical","lucide-align-horizontal-distribute-center","lucide-align-horizontal-distribute-end","lucide-align-horizontal-distribute-start","lucide-align-horizontal-justify-center","lucide-align-horizontal-justify-end","lucide-align-horizontal-justify-start","lucide-align-horizontal-space-around","lucide-align-horizontal-space-between","lucide-align-justify","lucide-align-left","lucide-align-right","lucide-align-start-horizontal","lucide-align-start-vertical","lucide-align-vertical-distribute-center","lucide-align-vertical-distribute-end","lucide-align-vertical-distribute-start","lucide-align-vertical-justify-center","lucide-align-vertical-justify-end","lucide-align-vertical-justify-start","lucide-align-vertical-space-around","lucide-align-vertical-space-between","lucide-anchor","lucide-aperture","lucide-archive","lucide-arrow-big-down","lucide-arrow-big-left","lucide-arrow-big-right","lucide-arrow-big-up","lucide-arrow-down-circle","lucide-arrow-down-left","lucide-arrow-down-right","lucide-arrow-down","lucide-arrow-left-circle","lucide-arrow-left-right","lucide-arrow-left","lucide-arrow-right-circle","lucide-arrow-right","lucide-arrow-up-circle","lucide-arrow-up-left","lucide-arrow-up-right","lucide-arrow-up","lucide-asterisk","lucide-at-sign","lucide-award","lucide-axe","lucide-banknote","lucide-bar-chart-2","lucide-bar-chart","lucide-baseline","lucide-battery-charging","lucide-battery-full","lucide-battery-low","lucide-battery-medium","lucide-battery","lucide-beaker","lucide-bell-minus","lucide-bell-off","lucide-bell-plus","lucide-bell-ring","lucide-bell","lucide-bike","lucide-binary","lucide-bitcoin","lucide-bluetooth-connected","lucide-bluetooth-off","lucide-bluetooth-searching","lucide-bluetooth","lucide-bold","lucide-bookmark-minus","lucide-bookmark-plus","lucide-bookmark","lucide-book-open","lucide-book","lucide-bot","lucide-box-select","lucide-box","lucide-briefcase","lucide-brush","lucide-bug","lucide-building","lucide-bus","lucide-calculator","lucide-calendar","lucide-camera-off","lucide-camera","lucide-carrot","lucide-car","lucide-cast","lucide-check-circle-2","lucide-check-circle","lucide-check-square","lucide-check","lucide-chevron-down","lucide-chevron-first","lucide-chevron-last","lucide-chevron-left","lucide-chevron-right","lucide-chevrons-down","lucide-chevrons-down-up","lucide-chevrons-left","lucide-chevrons-right","lucide-chevrons-up-down","lucide-chevrons-up","lucide-chevron-up","lucide-chrome","lucide-circle-slashed","lucide-circle","lucide-clipboard-check","lucide-clipboard-copy","lucide-clipboard-list","lucide-clipboard","lucide-clipboard-x","lucide-clock-1","lucide-clock-2","lucide-clock-3","lucide-clock-4","lucide-clock-5","lucide-clock-6","lucide-clock-7","lucide-clock-8","lucide-clock-9","lucide-clock-10","lucide-clock-11","lucide-clock-12","lucide-clock","lucide-cloud-drizzle","lucide-cloud-fog","lucide-cloud-hail","lucide-cloud-lightning","lucide-cloud-moon","lucide-cloud-off","lucide-cloud-rain","lucide-cloud-rain-wind","lucide-cloud-snow","lucide-cloud-sun","lucide-cloud","lucide-cloudy","lucide-clover","lucide-code-2","lucide-codepen","lucide-codesandbox","lucide-code","lucide-coffee","lucide-coins","lucide-columns","lucide-command","lucide-compass","lucide-contact","lucide-contrast","lucide-cookie","lucide-copyleft","lucide-copyright","lucide-copy","lucide-corner-down-left","lucide-corner-down-right","lucide-corner-left-down","lucide-corner-left-up","lucide-corner-right-down","lucide-corner-right-up","lucide-corner-up-left","lucide-corner-up-right","lucide-cpu","lucide-credit-card","lucide-crop","lucide-crosshair","lucide-cross","lucide-crown","lucide-currency","lucide-database","lucide-delete","lucide-disc","lucide-divide-circle","lucide-divide-square","lucide-divide","lucide-dollar-sign","lucide-download-cloud","lucide-download","lucide-dribbble","lucide-droplets","lucide-droplet","lucide-drumstick","lucide-edit-2","lucide-edit-3","lucide-edit","lucide-egg","lucide-equal-not","lucide-equal","lucide-euro","lucide-expand","lucide-external-link","lucide-eye-off","lucide-eye","lucide-facebook","lucide-fast-forward","lucide-feather","lucide-figma","lucide-file-check-2","lucide-file-check","lucide-file-code","lucide-file-digit","lucide-file-input","lucide-file-minus-2","lucide-file-minus","lucide-file-output","lucide-file-plus-2","lucide-file-plus","lucide-file-search","lucide-files","lucide-file","lucide-file-text","lucide-file-x-2","lucide-file-x","lucide-film","lucide-filter","lucide-flag","lucide-flag-triangle-left","lucide-flag-triangle-right","lucide-flame","lucide-flashlight-off","lucide-flashlight","lucide-flask-conical","lucide-flask-round","lucide-folder-minus","lucide-folder-open","lucide-folder-plus","lucide-folder","lucide-form-input","lucide-forward","lucide-framer","lucide-frown","lucide-function-square","lucide-gamepad-2","lucide-gamepad","lucide-gauge","lucide-gavel","lucide-gem","lucide-ghost","lucide-gift","lucide-git-branch-plus","lucide-git-branch","lucide-git-commit","lucide-github","lucide-gitlab","lucide-git-merge","lucide-git-pull-request","lucide-glasses","lucide-globe-2","lucide-globe","lucide-grab","lucide-graduation-cap","lucide-grid","lucide-grip-horizontal","lucide-grip-vertical","lucide-hammer","lucide-hand-metal","lucide-hand","lucide-hard-drive","lucide-hard-hat","lucide-hash","lucide-haze","lucide-headphones","lucide-heart","lucide-help-circle","lucide-hexagon","lucide-highlighter","lucide-history","lucide-home","lucide-image-minus","lucide-image-off","lucide-image-plus","lucide-image","lucide-import","lucide-inbox","lucide-indent","lucide-indian-rupee","lucide-infinity","lucide-info","lucide-inspect","lucide-instagram","lucide-italic","lucide-japanese-yen","lucide-keyboard","lucide-key","lucide-landmark","lucide-languages","lucide-laptop-2","lucide-laptop","lucide-lasso-select","lucide-lasso","lucide-layers","lucide-layout-dashboard","lucide-layout-grid","lucide-layout-list","lucide-layout","lucide-layout-template","lucide-library","lucide-life-buoy","lucide-lightbulb-off","lucide-lightbulb","lucide-link-2-off","lucide-link-2","lucide-linkedin","lucide-link","lucide-list-checks","lucide-list-minus","lucide-list-ordered","lucide-list-plus","lucide-list","lucide-list-x","lucide-loader-2","lucide-loader","lucide-locate-fixed","lucide-locate-off","lucide-locate","lucide-lock","lucide-log-in","lucide-log-out","lucide-mail","lucide-map-pin","lucide-map","lucide-maximize-2","lucide-maximize","lucide-megaphone","lucide-meh","lucide-menu","lucide-message-circle","lucide-message-square","lucide-mic-off","lucide-mic","lucide-minimize-2","lucide-minimize","lucide-minus-circle","lucide-minus-square","lucide-minus","lucide-monitor-off","lucide-monitor-speaker","lucide-monitor","lucide-moon","lucide-more-horizontal","lucide-more-vertical","lucide-mountain-snow","lucide-mountain","lucide-mouse-pointer-2","lucide-mouse-pointer-click","lucide-mouse-pointer","lucide-move-diagonal-2","lucide-move-diagonal","lucide-move-horizontal","lucide-move","lucide-move-vertical","lucide-music","lucide-navigation-2","lucide-navigation","lucide-network","lucide-octagon","lucide-option","lucide-outdent","lucide-package-check","lucide-package-minus","lucide-package-plus","lucide-package-search","lucide-package","lucide-package-x","lucide-palette","lucide-palmtree","lucide-paperclip","lucide-pause-circle","lucide-pause-octagon","lucide-pause","lucide-pencil","lucide-pen-tool","lucide-percent","lucide-person-standing","lucide-phone-call","lucide-phone-forwarded","lucide-phone-incoming","lucide-phone-missed","lucide-phone-off","lucide-phone-outgoing","lucide-phone","lucide-pie-chart","lucide-piggy-bank","lucide-pin","lucide-pipette","lucide-plane","lucide-play-circle","lucide-play","lucide-plug-zap","lucide-plus-circle","lucide-plus-square","lucide-plus","lucide-pocket","lucide-podcast","lucide-pointer","lucide-pound-sterling","lucide-power-off","lucide-power","lucide-printer","lucide-qr-code","lucide-quote","lucide-radio-receiver","lucide-radio","lucide-redo","lucide-refresh-ccw","lucide-refresh-cw","lucide-regex","lucide-repeat-1","lucide-repeat","lucide-reply-all","lucide-reply","lucide-rewind","lucide-rocking-chair","lucide-rotate-ccw","lucide-rotate-cw","lucide-rss","lucide-ruler","lucide-russian-ruble","lucide-save","lucide-scale","lucide-scan-line","lucide-scan","lucide-scissors","lucide-screen-share-off","lucide-screen-share","lucide-search","lucide-send","lucide-separator-horizontal","lucide-separator-vertical","lucide-server-crash","lucide-server-off","lucide-server","lucide-settings-2","lucide-settings","lucide-share-2","lucide-share","lucide-sheet","lucide-shield-alert","lucide-shield-check","lucide-shield-close","lucide-shield-off","lucide-shield","lucide-shirt","lucide-shopping-bag","lucide-shopping-cart","lucide-shovel","lucide-shrink","lucide-shuffle","lucide-sidebar-close","lucide-sidebar-open","lucide-sidebar","lucide-sigma","lucide-signal-high","lucide-signal-low","lucide-signal-medium","lucide-signal","lucide-signal-zero","lucide-skip-back","lucide-skip-forward","lucide-skull","lucide-slack","lucide-slash","lucide-sliders","lucide-smartphone-charging","lucide-smartphone","lucide-smile","lucide-snowflake","lucide-sort-asc","lucide-sort-desc","lucide-speaker","lucide-sprout","lucide-square","lucide-star-half","lucide-star","lucide-stop-circle","lucide-stretch-horizontal","lucide-stretch-vertical","lucide-strikethrough","lucide-subscript","lucide-sunrise","lucide-sunset","lucide-sun","lucide-superscript","lucide-swiss-franc","lucide-switch-camera","lucide-table","lucide-tablet","lucide-tag","lucide-target","lucide-tent","lucide-terminal-square","lucide-terminal","lucide-text-cursor-input","lucide-text-cursor","lucide-thermometer-snowflake","lucide-thermometer-sun","lucide-thermometer","lucide-thumbs-down","lucide-thumbs-up","lucide-ticket","lucide-timer-off","lucide-timer-reset","lucide-timer","lucide-toggle-left","lucide-toggle-right","lucide-tornado","lucide-trash-2","lucide-trash","lucide-trello","lucide-trending-down","lucide-trending-up","lucide-triangle","lucide-truck","lucide-tv-2","lucide-tv","lucide-twitch","lucide-twitter","lucide-type","lucide-umbrella","lucide-underline","lucide-undo","lucide-unlink-2","lucide-unlink","lucide-unlock","lucide-upload-cloud","lucide-upload","lucide-user-check","lucide-user-minus","lucide-user-plus","lucide-users","lucide-user","lucide-user-x","lucide-verified","lucide-vibrate","lucide-video-off","lucide-video","lucide-view","lucide-voicemail","lucide-volume-1","lucide-volume-2","lucide-volume","lucide-volume-x","lucide-wallet","lucide-wand","lucide-watch","lucide-waves","lucide-webcam","lucide-wifi-off","lucide-wifi","lucide-wind","lucide-wrap-text","lucide-wrench","lucide-x-circle","lucide-x-octagon","lucide-x-square","lucide-x","lucide-youtube","lucide-zap-off","lucide-zap","lucide-zoom-in","lucide-zoom-out"];var te={enabledButtons:[],desktop:!1,titleLeft:[],titleRight:[],titleCenter:[],paneRelief:!1},N=class extends h.Plugin{constructor(){super(...arguments);this.iconList=M.concat(V)}addPageHeaderButton(t,i){let{id:e,icon:l,name:s}=i,c=q(),a=C(s,e,l,c,["view-action",u]);this.settings.paneRelief&&(e==="app:go-forward"||e==="app:go-back")&&a.addClass("pane-relief"),t.prepend(a),this.registerDomEvent(a,"click",()=>{setTimeout(()=>this.app.commands.executeCommandById(e),5)})}addLeftTitleBarButton(t,i){let{id:e,icon:l,name:s}=i,o=C(s,e,l,15,E,"div");t.append(o),this.registerDomEvent(o,"click",()=>{this.app.commands.executeCommandById(e)})}addRightTitleBarButton(t,i){let{id:e,icon:l,name:s}=i,o=C(s,e,l,15,E,"div");t.prepend(o),this.registerDomEvent(o,"click",()=>{this.app.commands.executeCommandById(e)})}addCenterTitleBarButton(t,i){let{id:e,icon:l,name:s}=i,o=C(s,e,l,15,E,"div");t.append(o),this.registerDomEvent(o,"click",()=>{this.app.commands.executeCommandById(e)})}addLeftTitleBarButtons(){if(this.settings.titleLeft.length>0){let t=R();for(let i of this.settings.titleLeft)this.addLeftTitleBarButton(t,i)}}addRightTitleBarButtons(){if(this.settings.titleRight.length>0){let t=z();for(let i=this.settings.titleRight.length-1;i>=0;i--)this.addRightTitleBarButton(t,this.settings.titleRight[i])}}addInitialCenterTitleBarButtons(){if(this.settings.titleCenter.length>0){let t=O();for(let i of this.settings.titleCenter)this.addCenterTitleBarButton(t,i)}}addCenterTitleBarButtons(){if(this.settings.titleCenter.length>0){let t=P();for(let i of this.settings.titleCenter)this.addCenterTitleBarButton(t,i)}}async onload(){console.log("loading Customizable Page Header Plugin"),await this.loadSettings(),this.addSettingTab(new A(this.app,this)),this.app.workspace.onLayoutReady(()=>{h.Platform.isDesktopApp&&(this.addLeftTitleBarButtons(),this.addRightTitleBarButtons(),this.titlebarText=H(),this.settings.titleCenter.length>0&&this.addInitialCenterTitleBarButtons())}),(h.Platform.isMobile||this.settings.desktop)&&this.registerEvent(this.app.workspace.on("file-open",()=>{let t=app.workspace.getActiveViewOfType(h.MarkdownView);if(!t)return;let e=t.containerEl.getElementsByClassName("view-actions")[0];if(!!e)for(let l=this.settings.enabledButtons.length-1;l>=0;l--)(this.settings.enabledButtons[l].showButtons==="both"||this.settings.enabledButtons[l].showButtons==="mobile"&&h.Platform.isMobile||this.settings.enabledButtons[l].showButtons==="desktop"&&h.Platform.isDesktop)&&(e.getElementsByClassName(`view-action page-header-button ${this.settings.enabledButtons[l].id}`)[0]||this.addPageHeaderButton(e,this.settings.enabledButtons[l]))}))}onunload(){console.log("unloading Customizable Page Header Plugin"),_(),j(),m(this.titlebarText),globalThis.removeEventListener("TopBar-addedCommand",this.listener)}async loadSettings(){this.settings=Object.assign({},te,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}};

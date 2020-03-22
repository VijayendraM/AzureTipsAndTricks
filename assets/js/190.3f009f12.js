(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{472:function(e,t,n){"use strict";n.r(t);var s=n(43),a=Object(s.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("💡 Learn more : "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions Documentation"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("📺 Watch the video : "),n("a",{attrs:{href:"https://www.youtube.com/watch?v=v67yVTLEu3U&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=30?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to renew or revoke Azure Functions keys"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("h4",{attrs:{id:"quickly-renew-or-revoke-azure-functions-keys"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#quickly-renew-or-revoke-azure-functions-keys","aria-hidden":"true"}},[e._v("#")]),e._v(" Quickly Renew or Revoke Azure Functions Keys")]),e._v(" "),n("p",[e._v("There are times when you've created a new Azure Function HTTP Trigger where your Function Key needs to be changed. For example, here is my Function URL:")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/funckey1.png")}}),e._v(" "),n("p",[n("code",[e._v("https://mynewtestapp100.azurewebsites.net/api/HttpTriggerCSharp1?code=FJmHHtDmvqwp4wn0zXCS9J70NbakcmNDYCwM6trPOCTK3TdiCVg8pA==")])]),e._v(" "),n("p",[e._v("If you go to that page, you'll see the Trigger was activated as you passed the key:")]),e._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('This XML file does not appear to have any style information associated with it. The document tree is shown below.\n<string xmlns="http://schemas.microsoft.com/2003/10/Serialization/\')">\nPlease pass a name on the query string or in the request body\n</string>\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])]),n("p",[e._v("If something happens and someone gets the key, then you should go back to your Function and click "),n("strong",[e._v("Manage")]),e._v(", then press "),n("strong",[e._v("Revoke")]),e._v(". Now you can quickly gneerate a new key with the "),n("strong",[e._v("Add new function key")]),e._v(". You'll need to provide the name "),n("strong",[e._v("default")]),e._v(" and can leave the value empty. Now simply click "),n("strong",[e._v("Save")]),e._v(" and if you go back to  your Function and click on "),n("strong",[e._v("Get Function URL")]),e._v(", then you'll notice the new key is in place.")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/funckey2.png")}})])},[],!1,null,null,null);t.default=a.exports}}]);
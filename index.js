"use strict";
var is_passiveevent_supported  = (function(){"use strict";var is_passiveevent_supported=false,options={},handler=function(){self.document.removeEventListener("touchstart",handler,options);return true};Object.defineProperty(options,"passive",{enumerable:true,configurable:true,set:function(){},get:function(){is_passiveevent_supported=true;return true}});self.document.addEventListener("touchstart",handler,options);self.document.removeEventListener("touchstart",handler,options);return is_passiveevent_supported}())
   ,passive_or_false           = (true === is_passiveevent_supported) ? {passive:true} : false
   ,configuration_of_fetch     = {"credentials"    : "omit"
                                 ,"cache"          : "force-cache"
                                 ,"referrerPolicy" : "no-referrer"
                                 }
   ;

NodeList.prototype.forEach = NodeList.prototype.forEach || Array.prototype.forEach;

async function async_copy_helper(value){
  self.prompt("select and copy the text below.", value);
/*
  var is_copy_supported = false;
  try{document.queryCommandSupported("copy");}catch(err){}

  if(false === is_copy_supported){
    self.prompt("Copy the text below. \n(No auto-Clipboard support).", value);
    return;
  }

  self.getSelection().removeAllRanges(); //for the 'copy' to work:  1. make nothing-else is selected.
  textarea.value = value;
  textarea.style.display = "inline";     //for the 'copy' to work:  2. must be visible.
  textarea.select();                     //for the 'copy' to work:  3. must have text-selected.
  document.execCommand("copy");          //note: don't bother to wrap with try/catch it will throw an error if it fails anyway (Firefox).
  textarea.style.display = "none";       //hide again.
*/
}

function copy_helper(value){
  async_copy_helper(value);
}
  
async function async_click_handler(ev){
  var element = ev.target || ev.path[0]
     ,value   = element.getAttribute("c") // + "\uFE0E"
     ;
  copy_helper(value);
}

function click_handler(ev){
  async_click_handler(ev);
  return true;
}

async function async_per_element_action(element){
  element.addEventListener("click", click_handler, passive_or_false);
}

function per_element_action(element){
  async_per_element_action(element);
}

async function async_json_read_done(json){
  var body           = document.querySelector("body")
     ,QUERY          = "[c]"
     ,buttons
     ;
  
  body.style.cssText = "display:none;";
  
  body.innerHTML     = '<span c=\"' + json.join("\uFE0E" + '\"></span><span c=\"')
                      +"\uFE0E" + '\"></span>'
                      ;
  
  body.style.cssText = "";

  body.querySelectorAll(QUERY)
      .forEach(per_element_action)
      ;
}

function json_read_done(json){
  async_json_read_done(json);
}

async function async_request_done(response){
  response.json()
  .then(json_read_done)
  ;
}

function request_done(response){
  async_request_done(response);
}

async function async_action(){
  fetch("characters.json", configuration_of_fetch)
  .then(request_done)
  ;
}

function action(){
  async_action();
  return true;
}

self.addEventListener("load", action, passive_or_false);

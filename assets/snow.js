!function(){var t;t=function(){!function(t){var n=t.getContext("2d"),e=0,i=0,o=[],d=function(){this.x=this.y=this.dx=this.dy=0,this.reset()};function a(){e=window.innerWidth,i=window.innerHeight,t.width=e,t.height=i,function(t){if(t!=o.length){o=[];for(var n=0;n<t;n++)o.push(new d)}}(e*i/1e4)}d.prototype.reset=function(){this.y=Math.random()*i,this.x=Math.random()*e,this.dx=1*Math.random()-.5,this.dy=.5*Math.random()+.5},a(),function t(){n.clearRect(0,0,e,i),n.fillStyle="#f1f1f1",o.forEach((function(t){t.y+=t.dy,t.x+=t.dx,t.y>i&&(t.y=0),t.x>e&&(t.reset(),t.y=0),n.beginPath(),n.arc(t.x,t.y,5,0,2*Math.PI,!1),n.fill()})),window.requestAnimationFrame(t)}(),window.addEventListener("resize",a)}(document.getElementById("snow"))},"loading"!=document.readyState?t():document.addEventListener("DOMContentLoaded",t)}();
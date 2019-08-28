function getChildTextNodes(el){
  let n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

function ReplaceTrump() {
  const textNodes = getChildTextNodes(document);
  textNodes.forEach(node => {
    const replacementContent = node.nodeValue.replace(/(donald trump|donald john trump|trump|president trump|donald j trump|donaldj trump|donald j. trump)/gi, "Orange Man");
    node.nodeValue = replacementContent;
  })
}

document.body.addEventListener('change', ReplaceTrump);
window.addEventListener('load', ReplaceTrump);
window.addEventListener('DOMContentLoaded', ReplaceTrump);
ReplaceTrump();

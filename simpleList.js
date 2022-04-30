function doAdd() {
    console.log("Do add!");
    const newSpellName = document.getElementById("spellName").value;
    const newSpellDesc = document.getElementById("spellDesc").value;
    console.log("Do add!" + newSpellName);
    const elements = document.getElementsByTagName("details");
    last = elements[elements.length - 1];
    newSpell = document.createElement("details");
    newSpell.innerHTML = "<summary><span class=\"spell\">"
       + newSpellName + "</span></summary><div><p>" + newSpellDesc + "</p>"
       + "<input id=\"used1\" type=\"checkbox\" checked/>"
       + "</summary>"
       +  "<p>Felis donec et odio pellentesque diam volutpat commodo. Malesuada proin libero nunc consequat. Pulvinar elementum integer enim neque volutpat ac tincidunt. Sit amet massa vitae tortor condimentum lacinia quis. Vitae turpis massa sed elementum tempus egestas sed. Eget nunc lobortis mattis aliquam faucibus purus in. Dui nunc mattis enim ut. Sit amet purus gravida quis blandit turpis cursus. Varius quam quisque id diam vel quam elementum. Massa tempor nec feugiat nisl pretium fusce. Euismod quis viverra nibh cras pulvinar mattis nunc. Nec feugiat nisl pretium fusce. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Pellentesque habitant morbi tristique senectus et. Risus ultricies tristique nulla aliquet enim tortor at auctor. Nisi vitae suscipit tellus mauris. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Metus vulputate eu scelerisque felis."
        + "</p></div>";
    insertAfter(newSpell, last);
}
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
console.log("simpleList loaded");

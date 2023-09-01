function setMail() {
    a1 = "sssssnssssosssssassssmssssss.sssassssisssssssgsssssesssrssmssssssassnsssssss@ssssussmssssossnssstssssrsssesssssasls.scssssassss";
    address = a1.replace(/s/g,"");
    e = "<a href=\"mailto:" + address + "\" target=\"_blank\" >" + address + "</a> ";
    $(".emailplace").html(e);
}

function setMail() {
    a1 = "nssossasmss.sasisgssesrssmsasnss@sssissnssfsss.estshsszss.ssschsss";
    address = a1.replace(/s/g,"");
    e = "<a href=\"mailto:" + address + "\" target=\"_blank\" >" + address + "</a> ";
    $(".emailplace").html(e);
}
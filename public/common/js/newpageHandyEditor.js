/**
 * Created by A.J on 2018/7/12.
 */
$(document).ready(function(){
    var he = HE.getEditor('zhengwen',{
        autoHeight : true,
        autoFloat : true,
        topOffset : 51,
        uploadPhoto : true,
        uploadPhotoHandler : 'uploadWrite',
        uploadPhotoSize : 2000,
        uploadPhotoType : 'gif,png,jpg,jpeg',
        uploadPhotoSizeError : $("#sizeError").text(),
        uploadPhotoTypeError : $("#typeError").text(),
        skin : 'catfish'
    });
    //保存
    $("#baocun").click(function(){
        if($.catfish()){
            $("#zhengwen").text(he.getHtml());
        }
    });
});

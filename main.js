var img = ["grandfather.jpg" , "grandmother.png" , "father.jpg" , "mother.png" , "me.png"];
var names = ["Grand Father" , "Grand Mother" , "Father" , "Mother" , "Me"];
var i = 0;
function update(){
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
    {
        i = 0;

    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").innerHTML = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
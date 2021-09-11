images= ["family.jpeg","Full Photo.jpeg", "Father daughter event.jpeg" , "CAFE.jpeg"];
            var names = ["Family Book","Kaavya Majumder", "Shubham Majumder", "Taniya Majumder"];
            var i = 0;

function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array )
{
    i = 0;
}
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

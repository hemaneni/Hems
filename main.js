//function getfile(file,callback){
// var xhr=new XMLHttpRequest();
// xhr.overrideMimeType("application/json");
// xhr.open("GET",file,true);
// xhr.onreadystatechange=function();
// {
//   if(xhr.readyState===4&&xhr.status=="200"){
//     callback(xhr.responseText);
//   }
// };
// xhr.send(null);
// }

// getfile("data.json",function(text){
//   var data =JSON.parse(text);
//   console.log(data);
//   details(data.basics);
//   career(data.careerobjective);
//     education(data.education);
//     skills(data.skills);
//})
function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else {
        reject(new Error("error"));
      }
    })
  })
}

var newfile=loadjson("data.json");
newfile.then(data=>{
     details(data.basics);
    career(data.careerobjective);
     education(data.education);
     skills(data.skills);
     achievements(data.achievements);
})


var child=document.querySelector(".childone")
function details(det)
{
var img=document.createElement("img");
img.src=det.image;
child.appendChild(img);
var name= document.createElement("h3");
name.textContent =det.name;
child.appendChild(name);
var phoneno=document.createElement("h3");
phoneno.textContent=det.phoneno;
child.appendChild(phoneno);
var mail=document.createElement("a");
mail.href= "mailto:hemaparvathaneni@gmail.com";
mail.textContent=det.email;
child.appendChild(mail);
var text =document.createElement("h3");
text.textContent="address";
child.appendChild(text);
var hr=document.createElement("hr");
child.appendChild(hr);
var address=document.createElement("h3");
address.textContent=det.address;
child.appendChild(address);


}
var child1=document.querySelector(".childtwo")
function career(careerinfo){
  var text1 =document.createElement("h2");
  text1.textContent="Career Objectives";
  child1.appendChild(text1);
  var hr=document.createElement("hr");
  child1.appendChild(hr);
  var info=document.createElement("p");
  info.textContent=careerinfo.info;
  child1.appendChild(info);
}
function education(edu){
  var text2=document.createElement("h2");
  text2.textContent="Educational qualifications";
  child1.appendChild(text2);
  var hr=document.createElement("hr");
  child1.appendChild(hr);
  for(i=0;i<edu.length;i++){
    var deg=document.createElement("h3");
    deg.textContent=edu[i].degree;
    child1.appendChild(deg);

    var eduul=document.createElement("ul");
     var eduli=document.createElement("li");
     eduli.textContent=edu[i].institute;
     eduul.appendChild(eduli);
     child1.appendChild(eduul);

     var eduli=document.createElement("li");
     eduli.textContent=edu[i].data;
     eduul.appendChild(eduli);
     child1.appendChild(eduul);
   }
 }


  function skills(skillinfo){
    var text3=document.createElement("h2");
    text3.textContent="Skills";
    child1.appendChild(text3);
    var hr=document.createElement("hr");
    child1.appendChild(hr);
    var skilldata=document.createElement("Table");
    skilldata.border="3";
    child1.appendChild(skilldata);
    tabledata="";
    for(i=0;i<skillinfo.length;i++){
      tabledata+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].data+"</td></tr>";

    }
    skilldata.innerHTML=tabledata;
}
function achievements(achieve){
  var text4 =document.createElement("h2");
  text4.textContent="Achievements from 2016-18";
  child1.appendChild(text4);
  var hr=document.createElement("hr");
  child1.appendChild(hr);
  var acul=document.createElement("ul");
  var info1=document.createElement("li");
  info1.textContent=achieve.ppt;
  acul.appendChild(info1);
  var info2=document.createElement("li");
  info2.textContent=achieve.debate;
  acul.appendChild(info2);
  var info3=document.createElement("li");
  info3.textContent=achieve.quiz;
  acul.appendChild(info3);
  child1.appendChild(acul);
}

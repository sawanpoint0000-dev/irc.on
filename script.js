const people = [
 {name:"Suraj Kumar",dob:"01/07/1996",id:"UIM2445195"},
 {name:"Hamid Ansari",dob:"01/07/1996",id:"UIM2445211"},
 {name:"Vikas Kumar",dob:"01/07/2002",id:"UIM3227071"},
 {name:"Abhishek Kumar",dob:"01/07/2001",id:"UIM3351467"},
 {name:"Gopal Sah",dob:"01/07/1981",id:"UIM1902246"},
 {name:"Bittu Kumar Mishra",dob:"01/07/1995",id:"UIM2034791"},
 {name:"Mukesh Mahato",dob:"01/07/1983",id:"UIM1882547"},
 {name:"Umesh Mahato",dob:"01/07/1989",id:"UIM1877273"}
];

let currentIndex = 0;

const address = "Vill. Rampur, P.O. Rampur, P.S. Sadar, Dist. Patna";
const pincode = "800001";

function copyText(btn, text){
  navigator.clipboard.writeText(text);
  btn.classList.add("copied");
  setTimeout(()=>btn.classList.remove("copied"),800);
}

document.getElementById("generateBtn").addEventListener("click",()=>{

  if(currentIndex >= people.length) return;

  const p = people[currentIndex];
  const year = p.dob.split("/")[2];
  const mail = p.name.toLowerCase().replace(/\s+/g,"") + year;
  const password = document.getElementById("passwordSelect").value;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td><button class="copy-btn" onclick="copyText(this,'${p.name}')">Copy</button>${p.name}</td>
    <td><button class="copy-btn" onclick="copyText(this,'${mail}')">Copy</button>${mail}</td>
    <td><button class="copy-btn" onclick="copyText(this,'${password}')">Copy</button>${password}</td>
    <td><button class="copy-btn" onclick="copyText(this,'${p.dob}')">Copy</button>${p.dob}</td>
    <td><button class="copy-btn" onclick="copyText(this,'${p.id}')">Copy</button>${p.id}</td>
    <td><button class="copy-btn" onclick="copyText(this,'${address}')">Copy</button>${address}</td>
    <td><button class="copy-btn" onclick="copyText(this,'${pincode}')">Copy</button>${pincode}</td>
  `;

  document.getElementById("output").appendChild(row);
  currentIndex++;
});

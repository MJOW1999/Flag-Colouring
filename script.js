const p1 = document.getElementById("part1");
const p2 = document.getElementById("part2");
const p3 = document.getElementById("part3");
const p4 = document.getElementById("part4");
const p5 = document.getElementById("part5");
const p6 = document.getElementById("part6");
const p7 = document.getElementById("part7");
const p8 = document.getElementById("part8");
const p9 = document.getElementById("part9");


const p1Colour = () => {
  p1.style.background = "white";
}
const p2Colour = () => {
  p2.style.background = "red";
}
const p3Colour = () => {
  p3.style.background = "white";
}
const p4Colour = () => {
  p4.style.background = "red";
}
const p5Colour = () => {
  p5.style.background = "red";
}
const p6Colour = () => {
  p6.style.background = "red";
}
const p7Colour = () => {
  p7.style.background = "white";
}
const p8Colour = () => {
  p8.style.background = "red";
}
const p9Colour = () => {
  p9.style.background = "white";
}


p1.addEventListener("click", p1Colour);
p2.addEventListener("click", p2Colour);
p3.addEventListener("click", p3Colour);
p4.addEventListener("click", p4Colour);
p5.addEventListener("click", p5Colour);
p6.addEventListener("click", p6Colour);
p7.addEventListener("click", p7Colour);
p8.addEventListener("click", p8Colour);
p9.addEventListener("click", p9Colour);

const c1 = document.getElementById("col1");
const c2 = document.getElementById("col2");
const c3 = document.getElementById("col3");

const c1Colour = () => {
  c1.style.background = "#1EB53A";
}
const c2Colour = () => {
  c2.style.background = "white";
}
const c3Colour = () => {
  c3.style.background = "#0072C6";
}

c1.addEventListener("click", c1Colour);
c2.addEventListener("click", c2Colour);
c3.addEventListener("click", c3Colour);

//France flag
const f1 = document.getElementById("F1");
const f2 = document.getElementById("F2");
const f3 = document.getElementById("F3");

const France1 = () => {
  f1.style.background = "#0050A4"; 
}
const France2 = () => {
  f2.style.background = "#FFFFFF"; 
}
const France3 = () => {
  f3.style.background = "#EF4135"; 
}

f1.addEventListener("click", France1);
f2.addEventListener("click", France2);
f3.addEventListener("click", France3);

//LGBT Flag
const l1 = document.getElementById("LGBT-1");
const l2 = document.getElementById("LGBT-2");
const l3 = document.getElementById("LGBT-3");
const l4 = document.getElementById("LGBT-4");
const l5 = document.getElementById("LGBT-5");
const l6 = document.getElementById("LGBT-6");

const L1 = () => {
  l1.style.background = "#E40303";
}
const L2 = () => {
  l2.style.background = "#FF8C00";
}
const L3 = () => {
  l3.style.background = "#FFED00";
}
const L4 = () => {
  l4.style.background = "#008026";
}
const L5 = () => {
  l5.style.background = "#004DFF";
}
const L6 = () => {
  l6.style.background = "#750787";
}

l1.addEventListener("click", L1);
l2.addEventListener("click", L2);
l3.addEventListener("click", L3);
l4.addEventListener("click", L4);
l5.addEventListener("click", L5);
l6.addEventListener("click", L6);

//Trans flag
const t1 = document.getElementById("T1");
const t2 = document.getElementById("T2");
const t3 = document.getElementById("T3");
const t4 = document.getElementById("T4");
const t5 = document.getElementById("T5");

const T1 = () => {
  t1.style.background = "#55CDFC";
}
const T2 = () => {
  t2.style.background = "#F7A8B8";
}
const T3 = () => {
  t3.style.background = "#FFFFFF";
}
const T4 = () => {
  t4.style.background = "#F7A8B8";
}
const T5 = () => {
  t5.style.background = "#55CDFC";
}

t1.addEventListener("click", T1);
t2.addEventListener("click", T2);
t3.addEventListener("click", T3);
t4.addEventListener("click", T4);
t5.addEventListener("click", T5);

//Japan flag
const j1 = document.getElementById("J1");
const j2 = document.getElementById("J2");

const J1 = () => {
  j1.style.background = "#FFFFFF";
}
const J2 = () => {
  j2.style.background = "#BE0029";
}

j1.addEventListener("click", J1);
j1.addEventListener("click", J2);

//Mauritius Flag
const m1 = document.getElementById("M1");
const m2 = document.getElementById("M2");
const m3 = document.getElementById("M3");
const m4 = document.getElementById("M4");

const M1 = () => {
  m1.style.background = "#EA2839";
}
const M2 = () => {
  m2.style.background = "#1A206D";
}
const M3 = () => {
  m3.style.background = "#FFD500";
}
const M4 = () => {
  m4.style.background = "#00A551";
}

m1.addEventListener("click", M1);
m2.addEventListener("click", M2);
m3.addEventListener("click", M3);
m4.addEventListener("click", M4);
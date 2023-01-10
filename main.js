// 0 dan a gacha sonlar yig`indisi
function first(a) {
   num = 0 
   for (i = 0; i <= a; i++) {
      num = num + i
   }
   return num
}


// 0 dan a gacha orasidagi bo`lgan juft sonlar yig`indisi
function first(a) {
   num = 0 
   for (i = 0; i <= a; i++) {
      if( i % 2 == 0)
      num = num + i
   }
   return num
}

// 0 dan a gacha orasidagi bo`lgan toq sonlar yig`indisi
function first(a) {
   num = 0 
   for (i = 0; i <= a; i++) {
      if(i % 2 == 1)
      num = num + i
   }
   return num
}

// 0 dan a gacha 5 ga bo`linadigan sonlar yig`indisi
function first(a) {
   num = 0 
   for (i = 0; i <= a; i++) {
      if(i % 5 == 0)
      num = num + i
   }
   return num
}

// 0 dan a gacha orasidagi bo`lgan juft sonlar yig`indisi a dan tashqari
function first(a) {
   num = 0 
   for (i = 0; i < a; i++) {
      if(i % 2 == 0)
      num ++
   }
   return num
}

// a dan b gacha bo`lgan  sonlar  yig`indisi 
function first(a,b) {
   num = 0 
   for (i = a; i < b; i++) {
      num = num + i
   }
   return num
}

// a dan b gacha bo`lgan juft sonlar  soni 
function first(a,b) {
   num = 0 
   for (i = a; i < b; i++) {
      if(i % 2 == 0)
      num ++
   }
   return num
}

// a dan b gacha orasidagi bo`lgan 3 ga bo`linadigan sonlar  yig`indisi 
function first(a,b) {
   num = 0 
   for (i = a; i < b; i++) {
      if(i % 3 == 0)
      num = num + i
   }
   return num
}

// a dan b gacha orasidagi bo`lgan 2 va 3 ga bo`linadigan sonlar  soni
function first(a,b) {
   num = 0 
   for (i = a; i < b; i++) {
      if(i % 3 == 0 && i % 2 == 0)
      num ++
   }
   return num
}

// a dan b gacha orasidagi musbat sonlar  soni
function first(a,b) {
   num = 0 
   for (i = a; i <= b; i++) {
      if(i > 0)
      num ++
   }
   return num
}

// a ning n chi darajasi
function first(a,n) {
   num = 1 
   for (i = 0; i < n; i++) {
      num = num * a
   }
   return num
}

// a ning ketma ketligini hisoblan a+aa+aaa+....nta
function first(a,n) {
   num = 0
   temp = 0 
   for (i = 0; i < n; i++) {
      temp = temp * 10 + a
      num = num + temp
   }
   return num
}

// // murakkab son
// function first(a) {
//    num = 0
//    temp = 0 
//    for (i = 0; i < n; i++) {
//       temp = temp * 10 + a
//       num = num + temp
//    }
//    return num
// }

// a gacha bo`gan sonlar kvatrati yi`gindsi
function first(a) {
   num = 0
   for (i = 1; i <=a; i++) {
      num = num + i * i
   }
   return num
}

// // armstorng raqam
// function first(a) {
//    num = 0
//    for (i = 1; i <=a; i++) {
//       num = num + i * i
//    }
//    return num
// }

// tub son
function first(a) {
   num = 0
   for (i = 1; i <=a; i++) {
      if(a % i == 0)
      num ++
      
   }

   if(num == 2) {
      console.log(true);
   } else {
      console.log(false);
   }
   return
}

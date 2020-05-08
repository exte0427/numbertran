const numbers=["","일","이","삼","사","오","육","칠","팔","구"]
const 영 = 0;
const 일 = 1;
const 이 = 2;
const 삼 = 3;
const 사 = 4;
const 오 = 5;
const 육 = 6;
const 칠 = 7;
const 팔 = 8;
const 구 = 9;
let z=0;
let 진척도=0;
let str="";
let strNUM="";
for(let h=0;h<10;h++){
  for(let k=0;k<10;k++){
    for(let i=0;i<10;i++){
      let num=numbers[i];
      if(i==1){num="";}
      for(let j=0;j<10;j++){
        if(h==0){
          if(k!=0){
            if(i!=0){
              eval(`var ${numbers[k]}백${num}십${numbers[j]} = ${k+""+i+""+j}`);
              str=`${numbers[k]}백${num}십${numbers[j]}`;
              strNUM=`${k+""+i+""+j}`;
            }
            else{
              eval(`var ${numbers[k]}백${numbers[j]} = ${k+""+i+""+j}`);
              str=`${numbers[k]}백${numbers[j]}`;
              strNUM=`${k+""+i+""+j}`;
            }
          }
          else{
            eval(`var ${num}십${numbers[j]} = ${i+""+j}`);
            str=`${num}십${numbers[j]}`;
            strNUM=`${i+""+j}`;
          }
        }
        else{
          if(k!=0){
            if(i!=0){
              eval(`var ${numbers[h]}천${numbers[k]}백${num}십${numbers[j]} = ${h+""+k+""+i+""+j}`);
              str=`${numbers[h]}천${numbers[k]}백${num}십${numbers[j]}`;
              strNUM=`${h+""+k+""+i+""+j}`;
            }
            else{
              eval(`var ${numbers[h]}천${numbers[k]}백${numbers[j]} = ${h+""+k+""+i+""+j}`);
              str=`${numbers[h]}천${numbers[k]}백${numbers[j]}`;
              strNUM=`${h+""+k+""+i+""+j}`;
            }
          }
          else{
            if(num!=0){
              eval(`var ${numbers[h]}천${num}십${numbers[j]} = ${h+"0"+i+""+j}`);
              str=`${numbers[h]}천${num}십${numbers[j]}`;
              strNUM=`${h+"0"+i+""+j}`;
            }
            else{
              eval(`var ${numbers[h]}천${numbers[j]} = ${h+"00"+j}`);
              str=`${numbers[h]}천${numbers[j]}`;
              strNUM=`${h+"00"+j}`;
            }
          }
        }
      }
    }
  }
  console.clear();
  진척도++;
  let ssstr="";
  for(let i=0;i<진척도;i++){ssstr=ssstr+"■"}
  for(let i=ssstr.length;i<10;i++){ssstr=ssstr+"□"}
  console.log("|"+ssstr);
  console.log("└"+진척도+"/10 : "+str);
}

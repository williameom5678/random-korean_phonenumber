/*MIT License

Copyright (c) 2020 williameom

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
const 지번 = ["02","031","032","033","041","042","043","044","051","052","053","054","055","061","062","063","064"];
const 식별 = ["010","016","017","018","019"];

const 국번1 = ["2","3","4","5","6","7","8","9"];
const 국번2 = ["0","1","2","3","4","5","6","7","8","9"];
const 국번3 = ["0","1","2","3","4","5","6","7","8","9"];
const 국번4 = ["0","1","2","3","4","5","6","7","8","9"];

const 전번1 = ["2","3","4","5","6","7","8","9"];
const 전번2 = ["0","1","2","3","4","5","6","7","8","9"];
const 전번3 = ["0","1","2","3","4","5","6","7","8","9"];
const 전번4 = ["0","1","2","3","4","5","6","7","8","9"];

phone_number =_=>{
  var n = ["1","2"];
  var s = n[Math.floor(Math.random()*n.length)];
if(s == 1){
  지 = 지번[Math.floor(Math.random()*지번.length)];

  국1 = 국번1[Math.floor(Math.random()*국번1.length)];
  국2 = 국번2[Math.floor(Math.random()*국번2.length)];
  국3 = 국번3[Math.floor(Math.random()*국번3.length)];
  국4 = 국번4[Math.floor(Math.random()*국번4.length)];

  전1 = 전번1[Math.floor(Math.random()*전번1.length)];
  전2 = 전번2[Math.floor(Math.random()*전번2.length)];
  전3 = 전번3[Math.floor(Math.random()*전번3.length)];
  전4 = 전번4[Math.floor(Math.random()*전번4.length)];
  return 지+"-"+국1+국2+국3+국4+"-"+전1+전2+전3+전4;
}
if(s == 2){
  식 = 식별[Math.floor(Math.random()*식별.length)];

  국1 = 국번1[Math.floor(Math.random()*국번1.length)];
  국2 = 국번1[Math.floor(Math.random()*국번2.length)];
  국3 = 국번1[Math.floor(Math.random()*국번3.length)];
  국4 = 국번1[Math.floor(Math.random()*국번4.length)];

  전1 = 전번1[Math.floor(Math.random()*전번1.length)];
  전2 = 전번2[Math.floor(Math.random()*전번2.length)];
  전3 = 전번3[Math.floor(Math.random()*전번3.length)];
  전4 = 전번4[Math.floor(Math.random()*전번4.length)];
  return 식+"-"+국1+국2+국3+국4+"-"+전1+전2+전3+전4;
  }
};
//합수입니다.

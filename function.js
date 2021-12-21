/*関数
  function()」と書き、その後ろの中括弧「{ }」の中にまとめたい処理を書くことで関数を用意することができます。
  また、このように関数を用意することを「関数を定義する」と呼びますので覚えておきましょう。 
  関数を定義した際に使用した定数名を用いて、「定数名()」と書くことで関数の中の処理を実行できます。このことを「関数を呼び出す」と言います。*/
  const greet = function(){
    console.log("こんにちは!");
    console.log("what`s up?");
  }
  greet();

//アロー関数 (functionを省略できる)
const gret = ()=>{
  console.log("こんにちは");
  console.log("ワザップ？");
}
gret();

/* 引数
   引数（ひきすう）とは関数に与える追加情報のようなものです。
   関数を呼び出すときに一緒に値を渡すことで、関数の中でその値を利用することができます。 
   (引数名) =>と括弧の中に引数名を書くことで
   引数を受け取ることができます。*/
   const sennin = (senninname)=>{
     console.log(`こんにちは、${senninname}さん`);
   }

   sennin("たこやき仙人");

//引数の複数指定
  const add = (number1,number2)=>{
    console.log(number1 + number2);
  }

  add(2,4);

/* 戻り値
   呼び出し元で受け取る処理結果を戻り値（もどりち）と呼び、このことを「関数が戻り値を返す」と言います。
   上の式では、関数addが「2」と「4」を受け取り、処理結果の「6」を呼び出し元に返しています。戻り値にあたるのがこの「6」です。
   関数の中でreturnを使うと、呼び出し元で値を受け取れるようになります。
  「return 値」と書くことで、関数はその値を戻り値として返します。
   呼び出した関数に戻り値がある場合、関数の呼び出し部分がそのまま戻り値に置きかわります。
   関数の呼び出し部分を定数に代入することもできます。
 */
   const half = (sum)=>{
    return sum/2;
   };

   const result = half(20);
   console.log(result);

//returnは、戻り値を返すだけでなく、関数の処理を終了させる性質も持っていま
//す。よって、returnの後にある関数内の処理は実行されませんので注意しましょう。
const check = (number)=>{
  return number%3 === 0;
};

if(check(123)){
  console.log("3の倍数です");
}
else{
  console.log("3の倍数ではありません");
}